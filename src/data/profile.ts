import type { L } from '../i18n/I18n'

export const PROFILE = {
  firstName: 'Jérémy',
  lastName: 'Nouhaillaguet',
  email: 'jeremynght@icloud.com',
  linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9my-nouhaillaguet',
  github: 'https://github.com/JeremyNght',
  cv: { fr: '/cv/CV-Jeremy-Nouhaillaguet-FR.pdf', en: '/cv/CV-Jeremy-Nouhaillaguet-EN.pdf' } as L,
}

export const MARQUEE = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'SQL Server',
  'Sage X3',
  'Docker',
  'Python',
  'Socket.IO',
  'Figma',
  'GitLab',
]

export const STATS: { value: number; suffix?: string; label: 'about.stat1' | 'about.stat2' | 'about.stat3' | 'about.stat4' }[] = [
  { value: 10, suffix: '+', label: 'about.stat1' },
  { value: 18, label: 'about.stat2' },
  { value: 20, label: 'about.stat3' },
  { value: 3, label: 'about.stat4' },
]

export const PROCESS: { title: L; text: L }[] = [
  { title: { fr: 'Cadrage', en: 'Scoping' }, text: { fr: 'Recueil du besoin, cahier des charges', en: 'Gathering needs, specifications' } },
  { title: { fr: 'Maquettes', en: 'Mock-ups' }, text: { fr: 'Prototypes UI/UX sur Figma', en: 'UI/UX prototypes in Figma' } },
  { title: { fr: 'Données', en: 'Data' }, text: { fr: 'Modélisation de la base', en: 'Database modelling' } },
  { title: { fr: 'Développement', en: 'Development' }, text: { fr: 'Front, back et intégration ERP', en: 'Front, back and ERP integration' } },
  { title: { fr: 'Tests', en: 'Testing' }, text: { fr: 'Tests et recette avec les utilisateurs', en: 'Tests and user acceptance' } },
  { title: { fr: 'Déploiement', en: 'Deployment' }, text: { fr: 'Docker, GitLab CI, documentation', en: 'Docker, GitLab CI, documentation' } },
]

export type Experience = {
  period: string
  role: L
  company: string
  bullets: L[]
  tags: string[]
  current?: boolean
}

export const EXPERIENCES: Experience[] = [
  {
    period: '10/2023 – 10/2026',
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    company: 'HRC Environnement',
    current: true,
    bullets: [
      {
        fr: 'Sept applications métier mises en production et utilisées au quotidien : CRM mobile, inventaires au scanner, ticketing SAV, recherche de numéros de série, planning transport, portails factures et clients.',
        en: 'Seven business applications shipped and used daily: mobile CRM, scanner-based inventories, after-sales ticketing, serial number search, transport planning, invoice and customer portals.',
      },
      {
        fr: "Intégration à l'ERP Sage X3 : lecture SQL Server, imports SOAP, échanges SFTP, synchronisations planifiées.",
        en: 'Sage X3 ERP integration: SQL Server reads, SOAP imports, SFTP exchanges, scheduled syncs.',
      },
      {
        fr: 'Cycle complet en autonomie : modélisation, maquettes Figma, tests, documentation et déploiement automatisé (Docker, GitLab CI).',
        en: 'Full cycle on my own: modelling, Figma mock-ups, testing, documentation and automated deployment (Docker, GitLab CI).',
      },
    ],
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'SQL Server', 'Sage X3', 'Docker'],
  },
  {
    period: '09/2022 – 08/2023',
    role: { fr: 'Software Engineer (alternance)', en: 'Software Engineer (work-study)' },
    company: 'Emakina (EPAM)',
    bullets: [
      { fr: 'Travail en équipe Agile sur le projet Nike x FFF.', en: 'Agile team work on the Nike x FFF project.' },
      {
        fr: 'Développement web : back-end PHP / Drupal, front-end JavaScript / HTML / CSS.',
        en: 'Web development: PHP / Drupal back end, JavaScript / HTML / CSS front end.',
      },
    ],
    tags: ['PHP', 'Drupal', 'JavaScript', 'Agile'],
  },
  {
    period: '05/2021 – 02/2022',
    role: { fr: 'Développeur Web (stage BTS)', en: 'Web Developer (internship)' },
    company: 'Enedis',
    bullets: [
      {
        fr: 'Modernisation du processus ACR : application Symfony remplaçant un suivi Excel.',
        en: 'Modernised the ACR process: a Symfony application replacing an Excel tracker.',
      },
      { fr: 'Sécurité : authentification GuardianS50.', en: 'Security: GuardianS50 authentication.' },
    ],
    tags: ['Symfony', 'PHP', 'MySQL'],
  },
]

export const EDUCATION: { period: string; title: L; school: string }[] = [
  {
    period: '2022 – 2023',
    title: { fr: 'Licence Pro DWBD (Bac+3)', en: "Professional bachelor's degree, Web Dev & Big Data" },
    school: 'IUT du Limousin',
  },
  {
    period: '2020 – 2022',
    title: { fr: 'BTS SIO option SLAM (Bac+2)', en: 'BTS SIO, software development track (2-year degree)' },
    school: 'Lycée Suzanne Valadon',
  },
  {
    period: '2019 – 2020',
    title: { fr: 'Baccalauréat STI2D option SIN', en: 'Baccalauréat STI2D, digital systems' },
    school: 'Lycée Turgot',
  },
]

export const SKILLS: { title: L; items: string[]; wide?: boolean }[] = [
  {
    title: { fr: 'Frameworks & API', en: 'Frameworks & APIs' },
    items: ['React', 'Next.js', 'Vite', 'Node.js / Express', 'NestJS', 'Socket.IO', 'FastAPI', 'Spring Boot', '.NET', 'Vue.js', 'Angular', 'HTMX', 'API REST', 'SOAP', 'PWA', 'Symfony', 'Drupal'],
    wide: true,
  },
  { title: { fr: 'Langages', en: 'Languages' }, items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C#', 'SQL', 'HTML5 / CSS3'] },
  { title: { fr: 'Bases de données', en: 'Databases' }, items: ['SQL Server (SSMS)', 'PostgreSQL', 'PostGIS', 'pgvector', 'MySQL', 'Redis'] },
  { title: { fr: 'DevOps & systèmes', en: 'DevOps & systems' }, items: ['Docker', 'CI/CD', 'GitHub Actions', 'Git / GitLab', 'nginx', 'Linux', 'Windows'] },
  {
    title: { fr: 'IA, cartographie & tests', en: 'AI, mapping & testing' },
    items: ['RAG', 'sentence-transformers', 'Ollama', 'Leaflet', 'Chart.js', 'QuestPDF', 'pytest', 'Vitest', 'Playwright', 'Testcontainers'],
  },
  {
    title: { fr: 'ERP & outils', en: 'ERP & tools' },
    items: ['Sage X3', 'SSO Azure AD', 'Stockage S3', 'Figma', 'Handsontable'],
  },
  {
    title: { fr: 'Savoir-être', en: 'Soft skills' },
    items: ['Autonomie', 'Adaptabilité', 'Écoute', 'Communication'],
  },
]

export const SOFT_EN: Record<string, string> = {
  Autonomie: 'Autonomy',
  Adaptabilité: 'Adaptability',
  Écoute: 'Listening',
  Communication: 'Communication',
  'Stockage S3': 'S3 storage',
}
