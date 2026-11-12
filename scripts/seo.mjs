/**
 * Étape d'après-build : génère une page HTML par projet avec ses propres balises
 * de partage (LinkedIn, Slack, X… ne lisent pas le JavaScript), les données
 * structurées, le sitemap et le robots.txt.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { createServer } from 'vite'

const DIST = 'dist'

process.env.NODE_ENV = 'production'
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { PROJECTS } = await vite.ssrLoadModule('/src/data/projects.ts')
const { PROFILE, EXPERIENCES, EDUCATION } = await vite.ssrLoadModule('/src/data/profile.ts')
const site = await vite.ssrLoadModule('/src/data/site.ts')
const { SITE_NAME, SITE_DESCRIPTION } = site
// Adresse publique : variable d'environnement SITE_URL (posée par le workflow GitHub Pages), sinon src/data/site.ts
const SITE_URL = (process.env.SITE_URL || site.SITE_URL).replace(/\/$/, '')
const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')

const template = await readFile(join(DIST, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

async function page({ path, title, description, image, imageAlt, jsonLd }) {
  // Contenu de la page pré-rendu (affichage immédiat, lisible par les moteurs)
  const body = await render(path)
  const url = SITE_URL + path
  const img = SITE_URL + image
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:locale:alternate" content="en_GB" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : '',
  ].join('\n    ')

  return template
    .replace(/<title>.*?<\/title>/s, '')
    .replace(/<meta name="description"[^>]*>/s, '')
    .replace(/<meta property="og:[^>]*>\s*/gs, '')
    .replace('</head>', () => `    ${head}\n  </head>`)
    // Le script est téléchargé tout de suite mais lancé après le premier affichage :
    // le contenu pré-rendu apparaît sans attendre le JavaScript.
    .replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_, src) =>
      `<script>requestAnimationFrame(function(){setTimeout(function(){var s=document.createElement('script');s.type='module';s.crossOrigin='';s.src='${src}';document.head.appendChild(s)})})</script>`,
    )
    // Fonction de remplacement : le HTML peut contenir des « $ »
    .replace('<div id="root"></div>', () => `<div id="root" data-ssr="fr" data-path="${path}">${body}</div>`)
}

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jérémy Nouhaillaguet',
  jobTitle: 'Développeur full stack',
  url: SITE_URL,
  image: SITE_URL + '/brand/photo-square.webp',
  email: `mailto:${PROFILE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Toulouse', addressCountry: 'FR' },
  sameAs: [PROFILE.linkedin, PROFILE.github],
  knowsLanguage: ['fr', 'en'],
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQL Server', 'Sage X3', 'Docker', 'PWA'],
  alumniOf: EDUCATION.map((e) => ({ '@type': 'EducationalOrganization', name: e.school })),
  worksFor: { '@type': 'Organization', name: EXPERIENCES[0].company },
}

// Accueil
await writeFile(
  join(DIST, 'index.html'),
  await page({
    path: '/',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    image: '/og/home.jpg',
    imageAlt: 'Jérémy Nouhaillaguet, développeur full stack à Toulouse',
    jsonLd: person,
  }),
)

// Une page par projet
for (const [i, p] of PROJECTS.entries()) {
  const dir = join(DIST, 'projets', p.slug)
  await mkdir(dir, { recursive: true })
  const image = existsSync(join('public', 'og', `${p.slug}.jpg`)) ? `/og/${p.slug}.jpg` : '/og/home.jpg'
  await writeFile(
    join(dir, 'index.html'),
    await page({
      path: `/projets/${p.slug}`,
      title: `${p.title.fr} · Jérémy Nouhaillaguet`,
      description: p.summary.fr,
      image,
      imageAlt: `Projet ${String(i + 1).padStart(2, '0')} : ${p.title.fr}`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: p.title.fr,
        description: p.summary.fr,
        url: `${SITE_URL}/projets/${p.slug}`,
        author: { '@type': 'Person', name: 'Jérémy Nouhaillaguet', url: SITE_URL },
        keywords: p.tags.join(', '),
      },
    }),
  )
}

// Sitemap et robots.txt
const today = new Date().toISOString().slice(0, 10)
const urls = ['/', ...PROJECTS.map((p) => `/projets/${p.slug}`)]
await writeFile(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod><priority>${u === '/' ? '1.0' : '0.7'}</priority></url>`)
    .join('\n')}\n</urlset>\n`,
)
await writeFile(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

// Page 404 (GitHub Pages) : l'application s'y charge et affiche sa propre page « introuvable »
await writeFile(join(DIST, '404.html'), template)

await vite.close()
console.log(`SEO : ${urls.length} pages pré-rendues, sitemap.xml et robots.txt générés`)
