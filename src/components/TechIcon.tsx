import {
  siReact,
  siNextdotjs,
  siVite,
  siNodedotjs,
  siExpress,
  siNestjs,
  siSocketdotio,
  siPhp,
  siPython,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siPostgresql,
  siMysql,
  siRedis,
  siDocker,
  siGitlab,
  siGit,
  siLinux,
  siFigma,
  siSymfony,
  siDrupal,
  siPrisma,
  siTailwindcss,
  siFastify,
  siChartdotjs,
  siPwa,
  siPuppeteer,
  siSage,
  siShadcnui,
  siRadixui,
  siReactrouter,
  siTanstack,
  siZod,
  siJsonwebtokens,
  siLeaflet,
  siJest,
  siMinio,
  siDotnet,
  siVuedotjs,
  siFastapi,
  siAngular,
  siSpringboot,
  siHtmx,
  siGithubactions,
  siOpenstreetmap,
  siNginx,
  siOpenjdk,
  siRust,
  siOllama,
  siPytest,
  siHuggingface,
  siGo,
  siGodotengine,
  siMeilisearch,
  siStripe,
  siGrafana,
  siPrometheus,
  siSqlalchemy,
  siVitest,
  siJunit5,
  siMaplibre,
  siDrizzle,
  siHibernate,
  siFlyway,
  siK6,
  siPnpm,
} from '../data/brand-icons'
import { Database, KeyRound, Table2, Cloud, Boxes, Webhook, Workflow, Users, Layers, FileCode2, FolderSync, FileText, Cpu, Compass, Shuffle, Ear, MessageCircle, BookOpenCheck, Drama, Mail, Route } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Brand = { path: string; hex: string }
type Fallback = { Icon: LucideIcon; hex: string }
type Entry = Brand | Fallback

// Logo Windows dessiné à la main (absent de simple-icons)
const WINDOWS: Brand = { path: 'M0 3.4 9.8 2v9.4H0V3.4Zm11 -1.6L24 0v11.4H11V1.8ZM0 12.6h9.8V22L0 20.6v-8Zm11 0h13V24l-13-1.8V12.6Z', hex: '0078D4' }

const b = (s: { path: string; hex: string }): Brand => ({ path: s.path, hex: s.hex })

const MAP: Record<string, Entry> = {
  react: b(siReact),
  'next.js': b(siNextdotjs),
  vite: b(siVite),
  'node.js': b(siNodedotjs),
  'node.js / express': b(siNodedotjs),
  express: b(siExpress),
  nestjs: b(siNestjs),
  'socket.io': b(siSocketdotio),
  php: b(siPhp),
  python: b(siPython),
  typescript: b(siTypescript),
  javascript: b(siJavascript),
  'html5 / css3': b(siHtml5),
  html5: b(siHtml5),
  css: b(siCss),
  postgresql: b(siPostgresql),
  mysql: b(siMysql),
  redis: b(siRedis),
  docker: b(siDocker),
  'git / gitlab': b(siGitlab),
  gitlab: b(siGitlab),
  'gitlab ci': b(siGitlab),
  git: b(siGit),
  linux: b(siLinux),
  windows: WINDOWS,
  figma: b(siFigma),
  symfony: b(siSymfony),
  drupal: b(siDrupal),
  prisma: b(siPrisma),
  tailwind: b(siTailwindcss),
  'tailwind css': b(siTailwindcss),
  fastify: b(siFastify),
  'chart.js': b(siChartdotjs),
  pwa: b(siPwa),
  puppeteer: b(siPuppeteer),
  'sage x3': b(siSage),
  'shadcn/ui': b(siShadcnui),
  'radix ui': b(siRadixui),
  'react router': b(siReactrouter),
  'tanstack query': { path: siTanstack.path, hex: 'EF4444' },
  zod: b(siZod),
  jwt: b(siJsonwebtokens),
  leaflet: b(siLeaflet),
  jest: b(siJest),
  s3: b(siMinio),
  '.net': b(siDotnet),
  vue: b(siVuedotjs),
  'vue.js': b(siVuedotjs),
  fastapi: b(siFastapi),
  angular: { path: siAngular.path, hex: 'DD0031' },
  'spring boot': b(siSpringboot),
  htmx: b(siHtmx),
  'github actions': b(siGithubactions),
  openstreetmap: b(siOpenstreetmap),
  nginx: b(siNginx),
  postgis: b(siPostgresql),
  pgvector: b(siPostgresql),
  java: b(siOpenjdk),
  rust: b(siRust),
  ollama: b(siOllama),
  pytest: b(siPytest),
  'sentence-transformers': b(siHuggingface),
  go: b(siGo),
  godot: b(siGodotengine),
  'godot 4': b(siGodotengine),
  meilisearch: b(siMeilisearch),
  stripe: b(siStripe),
  grafana: b(siGrafana),
  prometheus: b(siPrometheus),
  sqlalchemy: b(siSqlalchemy),
  vitest: b(siVitest),
  'junit 5': b(siJunit5),
  junit: b(siJunit5),
  'maplibre gl': b(siMaplibre),
  maplibre: b(siMaplibre),
  'drizzle orm': b(siDrizzle),
  drizzle: b(siDrizzle),
  hibernate: b(siHibernate),
  flyway: b(siFlyway),
  k6: b(siK6),
  pnpm: b(siPnpm),
  'c#': { Icon: FileCode2, hex: '512BD4' },
  rag: { Icon: BookOpenCheck, hex: '0F766E' },
  playwright: { Icon: Drama, hex: '2EAD33' },
  questpdf: { Icon: FileText, hex: '1D4ED8' },
  testcontainers: { Icon: Boxes, hex: '291A3F' },
  mailpit: { Icon: Mail, hex: '0E7490' },
  'or-tools': { Icon: Route, hex: '4285F4' },
  osrm: { Icon: Route, hex: '7EBC6F' },
  pyodbc: b(siPython),
  paramiko: b(siPython),
  // Marques absentes de simple-icons : icône générique aux couleurs de la marque
  sql: { Icon: Database, hex: 'CC2927' },
  'sql server': { Icon: Database, hex: 'CC2927' },
  'sql server (ssms)': { Icon: Database, hex: 'CC2927' },
  'sso azure ad': { Icon: KeyRound, hex: '0078D4' },
  'azure ad': { Icon: KeyRound, hex: '0078D4' },
  'stockage s3': { Icon: Cloud, hex: '569A31' },
  handsontable: { Icon: Table2, hex: '1A42E8' },
  zustand: { Icon: Boxes, hex: '7A5C3E' },
  kysely: { Icon: Database, hex: '2D8BD0' },
  'api rest': { Icon: Webhook, hex: '0EA5E9' },
  soap: { Icon: FileCode2, hex: 'F08C00' },
  'ci/cd': { Icon: Workflow, hex: 'FC6D26' },
  agile: { Icon: Users, hex: '0052CC' },
  cron: { Icon: Layers, hex: '64748B' },
  sftp: { Icon: FolderSync, hex: '0F766E' },
  jspdf: { Icon: FileText, hex: 'DC2626' },
  pm2: { Icon: Cpu, hex: '2B037A' },
  // Savoir-être
  autonomie: { Icon: Compass, hex: '4F5BD5' },
  adaptabilité: { Icon: Shuffle, hex: '4F5BD5' },
  écoute: { Icon: Ear, hex: '4F5BD5' },
  communication: { Icon: MessageCircle, hex: '4F5BD5' },
}

/** "Next.js 15" -> "next.js", "Express 5" -> "express" */
export const normalizeTech = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+\d+(\.\d+)*$/, '')
    .trim()

export const hasTechIcon = (name: string) => normalizeTech(name) in MAP

// Les logos très sombres (Next.js, Express…) suivent la couleur du texte pour rester visibles en thème sombre
const luminance = (hex: string) => {
  const n = parseInt(hex, 16)
  return 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)
}
const isDark = (hex: string) => luminance(hex) < 60
// Logos un peu sombres : éclaircis en thème sombre (voir .tech-dim dans styles.css)
const isDim = (hex: string) => luminance(hex) < 115

// Chaque tracé de logo est défini une seule fois dans une planche SVG, puis réutilisé
const SPRITE_IDS = new Map<string, string>()
for (const entry of Object.values(MAP)) {
  if ('path' in entry && !SPRITE_IDS.has(entry.path)) SPRITE_IDS.set(entry.path, `ti${SPRITE_IDS.size}`)
}

/** Planche SVG invisible contenant tous les logos (rendue une fois dans l'application) */
export function TechSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
      <defs>
        {[...SPRITE_IDS].map(([path, id]) => (
          <symbol key={id} id={id} viewBox="0 0 24 24">
            <path d={path} />
          </symbol>
        ))}
      </defs>
    </svg>
  )
}

export default function TechIcon({ name, size = 16 }: { name: string; size?: number }) {
  const entry = MAP[normalizeTech(name)]
  if (!entry) return null
  const color = isDark(entry.hex) ? 'currentColor' : `#${entry.hex}`
  const cls = !isDark(entry.hex) && isDim(entry.hex) ? 'tech-dim' : undefined
  if ('Icon' in entry) return <entry.Icon size={size} color={color} className={cls} aria-hidden strokeWidth={2.2} />
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={cls} aria-hidden>
      <use href={`#${SPRITE_IDS.get(entry.path)}`} />
    </svg>
  )
}

/** Puce technologie avec son logo */
export function TechTag({ name, className = 'tag' }: { name: string; className?: string }) {
  return (
    <span className={className}>
      <TechIcon name={name} size={className === 'tag' ? 13 : 16} />
      {name}
    </span>
  )
}
