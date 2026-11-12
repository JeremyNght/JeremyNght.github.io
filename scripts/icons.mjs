/**
 * Génère src/data/brand-icons.ts : uniquement le tracé et la couleur des logos
 * utilisés, au lieu des objets complets de simple-icons (deux fois plus lourds).
 * À relancer après avoir ajouté un logo : node scripts/icons.mjs
 */
import { writeFile } from 'node:fs/promises'
import * as si from 'simple-icons'

const USED = [
  'siReact', 'siNextdotjs', 'siVite', 'siNodedotjs', 'siExpress', 'siNestjs', 'siSocketdotio', 'siPhp', 'siPython',
  'siTypescript', 'siJavascript', 'siHtml5', 'siCss', 'siPostgresql', 'siMysql', 'siRedis', 'siDocker', 'siGitlab',
  'siGit', 'siLinux', 'siFigma', 'siSymfony', 'siDrupal', 'siPrisma', 'siTailwindcss', 'siFastify', 'siChartdotjs',
  'siPwa', 'siPuppeteer', 'siSage', 'siShadcnui', 'siRadixui', 'siReactrouter', 'siTanstack', 'siZod',
  'siJsonwebtokens', 'siLeaflet', 'siJest', 'siMinio',
  'siDotnet', 'siVuedotjs', 'siFastapi', 'siAngular', 'siSpringboot', 'siHtmx', 'siGithubactions', 'siOpenstreetmap', 'siNginx',
  'siOpenjdk', 'siOllama', 'siPytest', 'siHuggingface', 'siGo', 'siGodotengine', 'siMeilisearch', 'siStripe', 'siGrafana', 'siPrometheus', 'siSqlalchemy', 'siVitest', 'siJunit5', 'siMaplibre', 'siDrizzle', 'siHibernate', 'siFlyway', 'siK6', 'siPnpm',
]

const lines = USED.map((name) => {
  const icon = si[name]
  if (!icon) throw new Error(`Logo introuvable : ${name}`)
  return `export const ${name} = { path: ${JSON.stringify(icon.path)}, hex: '${icon.hex}' }`
})

await writeFile(
  'src/data/brand-icons.ts',
  `// Fichier généré par scripts/icons.mjs (logos simple-icons, licence CC0)\n${lines.join('\n')}\n`,
)
console.log(`${USED.length} logos générés`)
