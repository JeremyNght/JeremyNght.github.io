import type { L } from '../i18n/I18n'
import { SHOTS, type Shot } from './shots'
import { PERSONAL_SHOTS } from './shots-personal'
import { PERSONAL_BASE } from './projects-personal'

export type Project = {
  slug: string
  title: L
  tagline: L
  /** Contexte anonymisé (pas de nom d'entreprise) */
  company: L
  kind: L
  status: L
  /** Chiffres clés, issus du CV et de la documentation */
  impact: { value: L; label: L }[]
  tags: string[]
  summary: L
  purpose: L
  features: { title: L; text: L }[]
  stack: { label: L; value: string }[]
  security: L[]
  /** Étapes du fonctionnement, pour les projets sans captures */
  flow?: L[]
  shots: Shot[]
  cover: number[]
  /** Projet personnel open source (et non une application d'entreprise) */
  personal?: boolean
  /** Adresse du code source (projets personnels publiés sur GitHub) : affiche un bouton « Voir le code » */
  repo?: string
  /** Nom d'hôte affiché dans la barre d'adresse des captures (par défaut <slug>.intranet) */
  host?: string
}

export type ProjectBase = Omit<Project, 'shots' | 'cover'>
type Base = ProjectBase

const GROUP: L = { fr: 'Groupe de distribution', en: 'Distribution group' }
const SUBSIDIARY: L = { fr: 'Filiale du groupe', en: 'Group subsidiary' }

const inProd: L = { fr: 'En production', en: 'In production' }

const BASE: Base[] = [
  {
    slug: 'crm-terrain',
    title: { fr: 'CRM terrain', en: 'Field CRM' },
    tagline: { fr: 'L’application mobile des 20 commerciaux', en: 'The mobile app of 20 sales reps' },
    company: GROUP,
    kind: { fr: 'Progressive Web App', en: 'Progressive Web App' },
    status: inProd,
    impact: [
      { value: { fr: "20", en: "20" }, label: { fr: "commerciaux équipés au quotidien", en: "sales reps using it daily" } },
      { value: { fr: "5", en: "5" }, label: { fr: "niveaux de droits hiérarchiques", en: "hierarchical permission levels" } },
      { value: { fr: "Hors ligne", en: "Offline" }, label: { fr: "saisie des rendez-vous même sans réseau", en: "appointments logged even without signal" } },
    ],
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'PWA'],
    summary: {
      fr: 'Tournées, carte clients, chiffres du jour en direct et saisie de rendez-vous hors ligne, avec une vue adaptée à chaque niveau hiérarchique.',
      en: 'Rounds, customer map, live daily figures and offline appointment entry, with a view tailored to every level of the hierarchy.',
    },
    purpose: {
      fr: "Les commerciaux terrain et leur hiérarchie avaient besoin d'un outil unique pour planifier et consigner leurs visites clients et prospects, suivre les actions de relance et piloter la performance. L'application fonctionne sur mobile, y compris sans réseau, et s'appuie sur les données de référence de l'ERP Sage X3 (clients, factures, hiérarchie) synchronisées par SFTP.",
      en: 'Field sales reps and their managers needed a single tool to plan and log customer and prospect visits, track follow-up actions and monitor performance. The app runs on mobile, even offline, and relies on Sage X3 ERP reference data (customers, invoices, hierarchy) synced over SFTP.',
    },
    features: [
      {
        title: { fr: 'Planification', en: 'Planning' },
        text: {
          fr: "Visites et tâches avec niveau d'urgence calculé automatiquement, en vue tableau, carte, kanban ou calendrier.",
          en: 'Visits and tasks with automatically computed urgency, in table, map, kanban or calendar views.',
        },
      },
      {
        title: { fr: 'Carte interactive', en: 'Interactive map' },
        text: {
          fr: 'Carte Leaflet avec pins colorés par secteur, regroupement dynamique des points et panneau d’historique de visites.',
          en: 'Leaflet map with pins coloured by sector, dynamic clustering and a visit history side panel.',
        },
      },
      {
        title: { fr: 'Tableau de bord temps réel', en: 'Real-time dashboard' },
        text: {
          fr: 'Widgets déplaçables (disposition sauvegardée en base), graphiques de performance et remontées d’alertes terrain.',
          en: 'Draggable widgets (layout saved in the database), performance charts and field alerts.',
        },
      },
      {
        title: { fr: 'Hors ligne & notifications', en: 'Offline & notifications' },
        text: {
          fr: 'Service Worker Workbox avec synchronisation différée des saisies faites sans réseau, notifications push web (VAPID).',
          en: 'Workbox service worker with deferred sync of entries made offline, web push notifications (VAPID).',
        },
      },
      {
        title: { fr: '5 niveaux de droits', en: '5 permission levels' },
        text: {
          fr: 'Commercial, chef d’agence, directeur régional, directeur commercial, admin : contrôle appliqué ressource par ressource.',
          en: 'Sales rep, branch manager, regional director, sales director, admin: checks applied resource by resource.',
        },
      },
      {
        title: { fr: 'Rapports & suggestions', en: 'Reports & suggestions' },
        text: {
          fr: 'Rapports PDF/Excel, tri des clients croisant CA N-1 et visites récentes, suggestions de visites assistées par IA.',
          en: 'PDF/Excel reports, customer ranking crossing last-year revenue and recent visits, AI-assisted visit suggestions.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Framework', en: 'Framework' }, value: 'Next.js 15 (App Router) · React 19 · TypeScript strict' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'Tailwind CSS 4 · Headless UI · Recharts · Leaflet' },
      { label: { fr: 'Formulaires', en: 'Forms' }, value: 'React Hook Form · Zod' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL 16 · import SFTP depuis Sage X3' },
      { label: { fr: 'PWA', en: 'PWA' }, value: 'next-pwa · Workbox · Push VAPID' },
      { label: { fr: 'Qualité & déploiement', en: 'Quality & deployment' }, value: 'Docker · CI/CD · Jest' },
    ],
    security: [
      {
        fr: 'Création de compte impossible si l’email n’existe pas déjà dans l’ERP ; le rôle découle directement de la hiérarchie X3.',
        en: 'Sign-up is impossible unless the email already exists in the ERP; the role comes straight from the X3 hierarchy.',
      },
      { fr: 'JWT, double authentification TOTP par QR code, déconnexion automatique sur inactivité.', en: 'JWT, TOTP two-factor authentication via QR code, automatic sign-out when idle.' },
    ],
  },
  {
    slug: 'inventaires',
    title: { fr: 'Inventaires au scanner', en: 'Scanner-based inventory' },
    tagline: { fr: 'Comptage en équipe sur 18 sites, relié à l’ERP', en: 'Team counting across 18 sites, wired to the ERP' },
    company: GROUP,
    kind: { fr: 'Application web & douchettes', en: 'Web app & barcode scanners' },
    status: inProd,
    impact: [
      { value: { fr: "18", en: "18" }, label: { fr: "sites équipés de douchettes", en: "sites equipped with scanners" } },
      { value: { fr: "0", en: "0" }, label: { fr: "ressaisie : les écarts repartent seuls dans l’ERP", en: "re-keying: discrepancies flow back into the ERP" } },
      { value: { fr: "3", en: "3" }, label: { fr: "niveaux de repli pour valoriser les écarts", en: "fallback levels to value discrepancies" } },
    ],
    tags: ['Node.js', 'Express', 'SQL Server', 'SOAP', 'Sage X3'],
    summary: {
      fr: 'Comptage en équipe au scanner, inventaires tournants et annuels, écarts valorisés et renvoyés automatiquement dans l’ERP.',
      en: 'Team counting with scanners, cycle and annual inventories, valued discrepancies pushed back to the ERP automatically.',
    },
    purpose: {
      fr: "Les inventaires physiques se faisaient sur papier et tableurs. L’application permet aux équipes logistiques de planifier des campagnes multi-sites, de compter par emplacement avec des douchettes, de gérer les recomptages en cas d'écart, puis d'injecter les résultats validés dans Sage X3 via SOAP.",
      en: 'Physical inventories used to be done on paper and spreadsheets. The app lets logistics teams plan multi-site campaigns, count by location with barcode scanners, handle recounts when discrepancies appear, then push validated results into Sage X3 via SOAP.',
    },
    features: [
      {
        title: { fr: 'Recherche en cascade', en: 'Cascading lookup' },
        text: {
          fr: 'Article exact, puis analyse des chaînes complexes pour extraire les numéros de série encodés, puis repli sur les codes EAN. Gestion des lots et séries en direct.',
          en: 'Exact item, then parsing complex strings to extract encoded serial numbers, then EAN barcode fallback. Live lot and serial handling.',
        },
      },
      {
        title: { fr: 'Contrôle qualité', en: 'Quality control' },
        text: {
          fr: 'Détection automatique des écarts, listes de recomptage et réassignation à des équipes croisées.',
          en: 'Automatic discrepancy detection, recount lists and reassignment to cross teams.',
        },
      },
      {
        title: { fr: 'Valorisation financière', en: 'Financial valuation' },
        text: {
          fr: 'Prix moyen pondéré sur 3 niveaux de repli ; requêtes SQL fractionnées et parallélisées pour contourner la limite de 65 000 caractères du moteur.',
          en: 'Weighted average cost with 3 fallback levels; SQL queries split and run in parallel to work around the engine’s 65,000-character limit.',
        },
      },
      {
        title: { fr: 'Import SOAP certifié', en: 'Verified SOAP import' },
        text: {
          fr: 'Templates XML d’entrées et sorties, analyse fine de la réponse ERP, puis requête de vérification directe dans la table des stocks et historisation.',
          en: 'XML templates for receipts and issues, detailed parsing of the ERP response, then a direct check against the stock table and full history.',
        },
      },
      {
        title: { fr: 'Configuration des douchettes', en: 'Scanner setup' },
        text: {
          fr: 'Assistant intégré qui génère les codes-barres à scanner pour paramétrer automatiquement les douchettes.',
          en: 'Built-in wizard generating the barcodes to scan to configure the hardware scanners automatically.',
        },
      },
      {
        title: { fr: 'Rôles & automatisation', en: 'Roles & automation' },
        text: {
          fr: 'Superviseur, contrôleur, compteur (interface verrouillée). Tâche planifiée quotidienne qui met à jour le cycle de vie des inventaires.',
          en: 'Supervisor, controller, counter (locked-down UI). Daily scheduled job updating the inventory lifecycle.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'HTML / JavaScript vanilla · composants maison · PWA' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js · Express · UUID · cron' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'SQL Server (Sage X3) · tables dédiées' },
      { label: { fr: 'Intégration', en: 'Integration' }, value: 'SOAP · axios · xml2js · Nodemailer' },
      { label: { fr: 'Tests & déploiement', en: 'Tests & deployment' }, value: 'Jest · jsdom · supertest · Docker' },
    ],
    security: [
      { fr: 'JWT auto-renouvelé, mot de passe fort, réinitialisation par code, invitations administrateur.', en: 'Auto-renewed JWT, strong passwords, code-based reset, admin invitations.' },
      { fr: 'Filigrane visuel sur l’interface hors environnement de production.', en: 'Visual watermark on the UI outside production.' },
    ],
  },
  {
    slug: 'ticketing-sav',
    title: { fr: 'Ticketing SAV', en: 'After-sales ticketing' },
    tagline: { fr: 'Le suivi complet des interventions après-vente', en: 'End-to-end tracking of after-sales interventions' },
    company: GROUP,
    kind: { fr: 'Application web · PWA', en: 'Web app · PWA' },
    status: inProd,
    impact: [
      { value: { fr: "44 600", en: "44,600" }, label: { fr: "tickets repris de l’ancien ERP", en: "tickets migrated from the former ERP" } },
      { value: { fr: "30+", en: "30+" }, label: { fr: "tables modélisées", en: "tables modelled" } },
      { value: { fr: "100 %", en: "100%" }, label: { fr: "des actions tracées dans le journal d’audit", en: "of actions recorded in the audit trail" } },
    ],
    tags: ['React 19', 'Express 5', 'Prisma', 'PostgreSQL', 'S3'],
    summary: {
      fr: 'Le cycle complet d’un ticket SAV de pompes à chaleur et climatiseurs, en remplacement du module CRM de l’ERP.',
      en: 'The full lifecycle of heat pump and air conditioner service tickets, replacing the ERP’s CRM module.',
    },
    purpose: {
      fr: "Le module CRM de l'ancien ERP Sage X3 étant décommissionné, le SAV avait besoin d'un outil dédié : diagnostic, suivi des numéros de série, pièces détachées, garanties constructeur et interventions, avec des droits limités par filiale.",
      en: 'With the old Sage X3 CRM module being retired, the after-sales team needed a dedicated tool: diagnosis, serial number tracking, spare parts, manufacturer warranties and interventions, with permissions scoped by subsidiary.',
    },
    features: [
      {
        title: { fr: 'Vie d’un numéro de série', en: 'Life of a serial number' },
        text: {
          fr: 'Chaque appareil est suivi à travers tous ses tickets, du premier diagnostic à la dernière intervention.',
          en: 'Each unit is tracked across all its tickets, from the first diagnosis to the latest intervention.',
        },
      },
      {
        title: { fr: 'Reprise de l’historique', en: 'Legacy data migration' },
        text: {
          fr: 'Environ 44 600 tickets repris de l’ancien Sage X3 et consultables dans l’application.',
          en: 'About 44,600 tickets migrated from the former Sage X3 and browsable in the app.',
        },
      },
      {
        title: { fr: 'Robot garanties', en: 'Warranty robot' },
        text: {
          fr: 'Automatisation Puppeteer qui pré-remplit le formulaire de garantie constructeur en ligne, sans jamais le soumettre.',
          en: 'Puppeteer automation pre-filling the manufacturer’s online warranty form, without ever submitting it.',
        },
      },
      {
        title: { fr: 'Back-office & rapports', en: 'Back office & reports' },
        text: {
          fr: 'Personnalisation des modèles de tickets par filiale et générateur de rapports enregistrables.',
          en: 'Ticket templates customisable per subsidiary and a report builder with saved reports.',
        },
      },
      {
        title: { fr: 'Travail concurrent', en: 'Concurrent editing' },
        text: {
          fr: 'Verrou d’édition pour éviter les écrasements, piste d’audit complète par ticket et côté admin.',
          en: 'Edit lock to prevent overwrites, full audit trail per ticket and on the admin side.',
        },
      },
      {
        title: { fr: 'Médias', en: 'Media' },
        text: {
          fr: 'Photos et vidéos d’intervention stockées sur MinIO (compatible S3), sauvegardes PostgreSQL automatiques.',
          en: 'Intervention photos and videos stored on MinIO (S3-compatible), automatic PostgreSQL backups.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'React 19 · Vite · TypeScript · React Router 7 · PWA' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js · Express 5 · Prisma 7' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL 16 · plus de 30 tables' },
      { label: { fr: 'Fichiers', en: 'Files' }, value: 'MinIO (compatible S3)' },
      { label: { fr: 'Outils', en: 'Tooling' }, value: 'Puppeteer · CloudBeaver · Docker' },
    ],
    security: [
      { fr: 'JWT access + refresh en cookies httpOnly, double authentification TOTP optionnelle avec codes de secours.', en: 'JWT access + refresh tokens in httpOnly cookies, optional TOTP two-factor auth with backup codes.' },
      { fr: 'Droits limités par filiale, pages réservées aux administrateurs vérifiées côté serveur.', en: 'Permissions scoped by subsidiary, admin-only pages enforced server-side.' },
    ],
  },
  {
    slug: 'recherche-series',
    title: { fr: 'Recherche de numéros de série', en: 'Serial number search' },
    tagline: { fr: 'De la commande au SAV, en quelques secondes', en: 'From order to after-sales, in seconds' },
    company: GROUP,
    kind: { fr: 'Moteur de recherche interne', en: 'Internal search engine' },
    status: inProd,
    impact: [
      { value: { fr: "Millions", en: "Millions" }, label: { fr: "de lignes interrogées en quelques secondes", en: "of rows searched in seconds" } },
      { value: { fr: "4", en: "4" }, label: { fr: "moteurs de recherche spécialisés", en: "specialised search engines" } },
      { value: { fr: "13", en: "13" }, label: { fr: "types de mouvements de stock tracés", en: "stock movement types traced" } },
    ],
    tags: ['React 19', 'TypeScript', 'Zustand', 'SQL', 'Azure AD'],
    summary: {
      fr: 'Toutes les informations d’un produit vendu retrouvées en quelques secondes dans des millions de lignes.',
      en: 'Everything about a sold product, found in seconds across millions of rows.',
    },
    purpose: {
      fr: "Retrouver l'historique d'un appareil imposait de fouiller l'ERP et plusieurs tableurs. L’outil retrouve instantanément, à partir d'un numéro de série, d'un article, d'un client, d'un bon de livraison ou d'un chantier, toute la chaîne : commande, livraison, facture, garantie et tickets SAV liés.",
      en: 'Finding a unit’s history meant digging through the ERP and several spreadsheets. The tool instantly retrieves, from a serial number, item, customer, delivery note or job site, the whole chain: order, delivery, invoice, warranty and linked service tickets.',
    },
    features: [
      {
        title: { fr: '4 moteurs de recherche', en: '4 search engines' },
        text: {
          fr: 'Ventes et livraisons, tickets SAV, module tiers et traçabilité logistique (13 types de mouvements de stock).',
          en: 'Sales and deliveries, service tickets, a third-party module and logistics traceability (13 stock movement types).',
        },
      },
      {
        title: { fr: 'Fiches 360°', en: '360° records' },
        text: {
          fr: 'Données techniques, chaîne de commande, destinataire final, garantie calculée en temps réel, stock physique et alloué.',
          en: 'Technical data, order chain, end recipient, warranty computed in real time, physical vs allocated stock.',
        },
      },
      {
        title: { fr: 'Onglets type navigateur', en: 'Browser-like tabs' },
        text: {
          fr: 'Un onglet de recherche fixe et jusqu’à 14 fiches ouvertes, raccourcis clavier, fermeture automatique des plus anciennes.',
          en: 'One pinned search tab and up to 14 open records, keyboard shortcuts, oldest tabs closed automatically.',
        },
      },
      {
        title: { fr: 'Performance', en: 'Performance' },
        text: {
          fr: 'Pagination jusqu’à 1 000 résultats, annulation des requêtes obsolètes (AbortController), index trigram, lazy loading et découpage des bundles.',
          en: 'Pagination up to 1,000 results, stale request cancellation (AbortController), trigram indexes, lazy loading and bundle splitting.',
        },
      },
      {
        title: { fr: 'Ingestion automatique', en: 'Automatic ingestion' },
        text: {
          fr: 'Service Python qui surveille un serveur SFTP, importe les CSV et isole les fichiers en erreur, corrigeables depuis l’interface.',
          en: 'Python service watching an SFTP server, importing CSV files and isolating faulty ones, fixable from the UI.',
        },
      },
      {
        title: { fr: 'Accessibilité', en: 'Accessibility' },
        text: {
          fr: 'Pièges de focus dans les modales, navigation clavier complète, attributs ARIA… et 65 messages de chargement pour patienter.',
          en: 'Focus traps in modals, full keyboard navigation, ARIA attributes… and 65 loading messages to make waiting fun.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'React 19 · TypeScript · Vite · Tailwind · Zustand' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js · Express' },
      { label: { fr: 'Données', en: 'Data' }, value: 'SQL Server (Sage X3) · PostgreSQL 16' },
      { label: { fr: 'Ingestion', en: 'Ingestion' }, value: 'Python · SFTP · CSV' },
      { label: { fr: 'Authentification', en: 'Authentication' }, value: 'SSO Azure AD (MSAL)' },
    ],
    security: [
      {
        fr: 'Accès conditionnel : les prestataires externes ne voient que les données qui les concernent, selon leur rattachement dans l’annuaire.',
        en: 'Conditional access: external contractors only see their own data, based on their directory membership.',
      },
    ],
  },
  {
    slug: 'rendez-vous-sav',
    title: { fr: 'Rendez-vous SAV en ligne', en: 'Online service booking' },
    tagline: { fr: 'Les clients réservent leur créneau, sans compte', en: 'Customers book their slot, no account needed' },
    company: SUBSIDIARY,
    kind: { fr: 'Application web', en: 'Web app' },
    status: { fr: 'Dockerisée', en: 'Dockerised' },
    impact: [
      { value: { fr: "5", en: "5" }, label: { fr: "étapes pour réserver, sans créer de compte", en: "steps to book, no account needed" } },
      { value: { fr: "0", en: "0" }, label: { fr: "double réservation possible (contrainte en base)", en: "double bookings possible (database constraint)" } },
      { value: { fr: "J‑1", en: "D‑1" }, label: { fr: "rappel automatique la veille du rendez-vous", en: "automatic reminder the day before" } },
    ],
    tags: ['React 19', 'NestJS', 'PostgreSQL', 'Redis', 'shadcn/ui'],
    summary: {
      fr: 'Les clients réservent un créneau sans créer de compte ; les techniciens gèrent leur agenda, leurs horaires et leurs congés.',
      en: 'Customers book a slot without an account; technicians manage their agenda, hours and time off.',
    },
    purpose: {
      fr: "Le service après-vente avait besoin d'un calendrier de rendez-vous téléphoniques ouvert aux clients finaux, avec confirmation automatique et gestion interne des techniciens, des services proposés et des jours fériés.",
      en: 'The after-sales team needed a phone appointment calendar open to end customers, with automatic confirmation and internal management of technicians, services and public holidays.',
    },
    features: [
      {
        title: { fr: 'Parcours public en 5 étapes', en: '5-step public booking' },
        text: {
          fr: 'Catégorie, service, créneau réellement disponible, coordonnées, confirmation : sans compte.',
          en: 'Category, service, genuinely available slot, contact details, confirmation: no account needed.',
        },
      },
      {
        title: { fr: 'Confirmation & libre-service', en: 'Confirmation & self-service' },
        text: {
          fr: 'Email avec invitation calendrier (.ics) et lien sécurisé à jeton pour reporter ou annuler.',
          en: 'Email with a calendar invite (.ics) and a secure token link to reschedule or cancel.',
        },
      },
      {
        title: { fr: 'Répartition équilibrée', en: 'Balanced dispatch' },
        text: {
          fr: 'Rendez-vous répartis équitablement entre techniciens, rappels automatiques la veille.',
          en: 'Appointments spread evenly across technicians, automatic reminders the day before.',
        },
      },
      {
        title: { fr: 'Espace technicien', en: 'Technician space' },
        text: { fr: 'Agenda personnel, horaires hebdomadaires et congés gérés en autonomie.', en: 'Personal agenda, weekly hours and time off managed independently.' },
      },
      {
        title: { fr: 'Pilotage', en: 'Monitoring' },
        text: {
          fr: 'KPI du jour, de la semaine et du mois, tendance sur 12 semaines, vues calendrier jour / semaine / mois.',
          en: 'Daily, weekly and monthly KPIs, 12-week trend, day / week / month calendar views.',
        },
      },
      {
        title: { fr: 'Zéro double réservation', en: 'No double booking' },
        text: {
          fr: 'Contrainte d’unicité au niveau de la base de données, pas seulement dans le code applicatif.',
          en: 'Uniqueness enforced at database level, not only in application code.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'React 19 · Vite · TypeScript · Tailwind · shadcn/ui' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'NestJS · TypeORM · Passport JWT · Socket.io' },
      { label: { fr: 'Données', en: 'Data' }, value: 'PostgreSQL 16 · Redis 7' },
      { label: { fr: 'Emails', en: 'Emails' }, value: 'Nodemailer · ical-generator' },
      { label: { fr: 'Intégration', en: 'Integration' }, value: 'Sage X3 SData (validation code client)' },
    ],
    security: [
      {
        fr: 'Limitation de débit via Redis sur les routes publiques, validation stricte des données entrantes (DTO).',
        en: 'Redis-backed rate limiting on public routes, strict validation of incoming data (DTOs).',
      },
    ],
  },
  {
    slug: 'factures-fournisseurs',
    title: { fr: 'Portail factures fournisseurs', en: 'Supplier invoice portal' },
    tagline: { fr: 'Consultation et affectation budgétaire des factures', en: 'Browsing and budget allocation of invoices' },
    company: GROUP,
    kind: { fr: 'Application web', en: 'Web app' },
    status: inProd,
    impact: [
      { value: { fr: "DSI", en: "CIO" }, label: { fr: "du groupe comme utilisateur clé", en: "of the group as key user" } },
      { value: { fr: "En masse", en: "Bulk" }, label: { fr: "affectation budgétaire par copier-coller", en: "budget tagging by copy-paste" } },
      { value: { fr: "0", en: "0" }, label: { fr: "accès direct au client ERP nécessaire", en: "direct ERP client access needed" } },
    ],
    tags: ['Node.js', 'Handsontable', 'Chart.js', 'SQL Server', 'Docker'],
    summary: {
      fr: 'Consultation en direct des factures fournisseurs de l’ERP et affectation budgétaire en masse dans une grille type Excel. Utilisateur clé : le DSI du groupe.',
      en: 'Live view of supplier invoices from the ERP and bulk budget tagging in a spreadsheet-like grid. Key user: the group CIO.',
    },
    purpose: {
      fr: "La direction informatique devait ventiler les lignes de factures fournisseurs sur ses budgets sans accès direct au client Sage X3. L’application lit l'ERP en direct, permet de filtrer, d'affecter et d'exporter, et propose un module de statistiques.",
      en: 'The IT department had to allocate supplier invoice lines to budgets without direct access to the Sage X3 client. The app reads the ERP live, lets users filter, tag and export, and adds a statistics module.',
    },
    features: [
      {
        title: { fr: 'Grille type Excel', en: 'Spreadsheet-like grid' },
        text: {
          fr: 'Tri, filtres à la Excel combinables, recherche globale, colonnes déplaçables avec ordre et largeur sauvegardés par utilisateur.',
          en: 'Sorting, combinable Excel-style filters, global search, movable columns with order and width saved per user.',
        },
      },
      {
        title: { fr: 'Affectation en masse', en: 'Bulk tagging' },
        text: {
          fr: 'Copier-coller massif avec confirmations intelligentes (lignes masquées par un filtre), mise à jour ligne par ligne.',
          en: 'Mass copy-paste with smart confirmations (rows hidden by a filter), row-by-row updates.',
        },
      },
      {
        title: { fr: 'Statistiques', en: 'Statistics' },
        text: {
          fr: 'Évolution mensuelle, top fournisseurs, répartition par société, filtres par période, fournisseur, type et statut.',
          en: 'Monthly trend, top suppliers, split by company, filters by period, supplier, type and status.',
        },
      },
      {
        title: { fr: 'Export propre', en: 'Clean export' },
        text: { fr: 'Export .xlsx des seules données visibles après filtrage.', en: '.xlsx export of only the rows visible after filtering.' },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'JavaScript · Handsontable · Chart.js · thème clair / sombre' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js (ES modules) · Express · HTTPS' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'SQL Server (Sage X3) · pool de connexions' },
      { label: { fr: 'Déploiement', en: 'Deployment' }, value: 'Docker' },
    ],
    security: [
      {
        fr: 'Inscription réservée aux utilisateurs présents dans l’ERP, code email à 6 chiffres, mots de passe hachés (bcrypt), routes protégées par JWT.',
        en: 'Sign-up restricted to users present in the ERP, 6-digit email code, hashed passwords (bcrypt), JWT-protected routes.',
      },
    ],
  },
  {
    slug: 'stocks-securite',
    title: { fr: 'Demandes de stocks de sécurité', en: 'Safety stock requests' },
    tagline: { fr: 'Le circuit de validation des paramètres d’approvisionnement', en: 'The approval flow for replenishment settings' },
    company: GROUP,
    kind: { fr: 'Application web', en: 'Web app' },
    status: inProd,
    impact: [
      { value: { fr: "1", en: "1" }, label: { fr: "circuit unique : demande, validation, ERP", en: "single flow: request, approval, ERP" } },
      { value: { fr: "4", en: "4" }, label: { fr: "niveaux de familles d’articles filtrables", en: "levels of item families to filter" } },
      { value: { fr: "SOAP", en: "SOAP" }, label: { fr: "injection directe dans Sage X3", en: "direct injection into Sage X3" } },
    ],
    tags: ['Node.js', 'Handsontable', 'SOAP', 'SQL Server', 'Cron'],
    summary: {
      fr: 'Les responsables de site demandent la modification des stocks de sécurité ; les admins valident dans un éditeur type Excel puis injectent dans l’ERP.',
      en: 'Site managers request safety stock changes; admins validate them in a spreadsheet-like editor, then push them to the ERP.',
    },
    purpose: {
      fr: "Les modifications de stocks de sécurité et de lots techniques passaient par des échanges de fichiers Excel. L'application structure le circuit : demande justifiée, validation, import dans Sage X3 par webservice SOAP, avec historique et notifications.",
      en: 'Safety stock and technical lot changes went through exchanged Excel files. The app structures the workflow: justified request, approval, import into Sage X3 via SOAP web service, with history and notifications.',
    },
    features: [
      {
        title: { fr: 'Filtres hiérarchiques', en: 'Hierarchical filters' },
        text: {
          fr: 'Sites et familles d’articles sur 4 niveaux, grille des articles de l’ERP, sélection multiple.',
          en: 'Sites and 4 levels of item families, ERP item grid, multi-selection.',
        },
      },
      {
        title: { fr: 'Éditeur avancé', en: 'Advanced editor' },
        text: {
          fr: 'Grille type Excel, colonnes réorganisables mémorisées par utilisateur, panneau d’erreurs navigable (F8 / Ctrl+E).',
          en: 'Spreadsheet-like grid, reorderable columns remembered per user, navigable error panel (F8 / Ctrl+E).',
        },
      },
      {
        title: { fr: 'Import Excel validé', en: 'Validated Excel import' },
        text: {
          fr: 'Upload .xlsx, validation stricte avant injection dans l’ERP, résultat détaillé ligne par ligne.',
          en: '.xlsx upload, strict validation before injection into the ERP, detailed row-by-row result.',
        },
      },
      {
        title: { fr: 'Notifications fines', en: 'Fine-grained notifications' },
        text: {
          fr: 'Emails planifiés configurables (destinataires, créneaux, jours), SMTP mutualisé avec limitation de débit.',
          en: 'Configurable scheduled emails (recipients, time slots, days), pooled SMTP with rate limiting.',
        },
      },
      {
        title: { fr: 'Historique & étiquettes', en: 'History & labels' },
        text: {
          fr: 'Arbre site → date → demande, et impression d’étiquettes articles avec code-barres.',
          en: 'Site → date → request tree, and printing of item labels with barcodes.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'HTML / CSS / JavaScript · Handsontable' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js · Express · node-cron · Nodemailer' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'SQL Server (Sage X3) · pool partagé' },
      { label: { fr: 'Intégration', en: 'Integration' }, value: 'Webservice SOAP · xlsx' },
    ],
    security: [
      {
        fr: 'Inscription vérifiée dans la table des utilisateurs de l’ERP, code à 6 chiffres valable 10 minutes.',
        en: 'Sign-up checked against the ERP user table, 6-digit code valid for 10 minutes.',
      },
      {
        fr: 'JWT renouvelé selon l’activité et vérifié côté serveur, rôles utilisateur (sites assignés) et admin.',
        en: 'JWT renewed on activity and checked server-side, user (assigned sites) and admin roles.',
      },
    ],
  },
  {
    slug: 'adressage-entrepot',
    title: { fr: 'Adressage d’entrepôt', en: 'Warehouse addressing' },
    tagline: { fr: 'Un emplacement, un article, zéro ambiguïté', en: 'One location, one item, no ambiguity' },
    company: SUBSIDIARY,
    kind: { fr: 'Application web', en: 'Web app' },
    status: { fr: 'Dockerisée', en: 'Dockerised' },
    impact: [
      { value: { fr: "1", en: "1" }, label: { fr: "article par emplacement, sans exception", en: "item per location, no exceptions" } },
      { value: { fr: "100 %", en: "100%" }, label: { fr: "des modifications historisées", en: "of changes logged" } },
      { value: { fr: "4", en: "4" }, label: { fr: "rôles aux droits distincts", en: "roles with distinct permissions" } },
    ],
    tags: ['React 19', 'Fastify', 'Kysely', 'PostgreSQL', 'TanStack Query'],
    summary: {
      fr: 'Transforme les emplacements multi-articles de l’ERP en emplacements mono-article documentés, avec traçabilité complète.',
      en: 'Turns the ERP’s multi-item locations into documented single-item locations, with full traceability.',
    },
    purpose: {
      fr: "Pour fiabiliser l'adressage physique de l'entrepôt, chaque emplacement Sage X3 contenant plusieurs articles est éclaté en sous-emplacements mono-article, enrichis des informations de palette (type, hauteur).",
      en: 'To make physical warehouse addressing reliable, each Sage X3 location holding several items is split into single-item sub-locations, enriched with pallet data (type, height).',
    },
    features: [
      {
        title: { fr: 'File d’attente X3', en: 'X3 queue' },
        text: {
          fr: 'Emplacements remontés de l’ERP avec détection automatique mono / multi-articles et statut bloqué.',
          en: 'Locations pulled from the ERP with automatic single / multi-item detection and blocked status.',
        },
      },
      {
        title: { fr: 'Éclatement assisté', en: 'Assisted split' },
        text: {
          fr: 'Un emplacement à 3 articles devient 3 emplacements mono, en un clic ou en saisie manuelle.',
          en: 'A 3-item location becomes 3 single-item locations, in one click or by manual entry.',
        },
      },
      {
        title: { fr: 'Audit complet', en: 'Full audit' },
        text: { fr: 'Chaque modification est historisée : qui, quand, ancienne et nouvelle valeur.', en: 'Every change is logged: who, when, old and new value.' },
      },
      {
        title: { fr: '4 rôles', en: '4 roles' },
        text: {
          fr: 'Consultation, consultation + export, modification, admin : appliqués côté serveur et côté client.',
          en: 'Read-only, read-only + export, edit, admin: enforced server-side and client-side.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'React 19 · TypeScript · React Router · TanStack Query · Radix UI' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js · Fastify · Kysely · Zod' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL 16' },
      { label: { fr: 'Intégration', en: 'Integration' }, value: 'Sage X3 SData' },
    ],
    security: [
      { fr: 'JWT en cookie httpOnly, mots de passe bcrypt, export CSV / Excel selon les droits.', en: 'JWT in httpOnly cookie, bcrypt passwords, CSV / Excel export according to permissions.' },
    ],
  },
  {
    slug: 'signatures-email',
    title: { fr: 'Générateur de signatures email', en: 'Email signature generator' },
    tagline: { fr: 'Des signatures conformes pour toutes les agences', en: 'On-brand signatures for every branch' },
    company: GROUP,
    kind: { fr: 'Application web', en: 'Web app' },
    status: { fr: 'Dockerisée', en: 'Dockerised' },
    impact: [
      { value: { fr: "Auto", en: "Auto" }, label: { fr: "logo, bannière et coordonnées selon l’agence", en: "logo, banner and details per branch" } },
      { value: { fr: "Outlook", en: "Outlook" }, label: { fr: "signature prête à copier-coller", en: "signature ready to paste" } },
      { value: { fr: "0", en: "0" }, label: { fr: "base de données à maintenir", en: "database to maintain" } },
    ],
    tags: ['React 19', 'Vite', 'Tailwind', 'Radix UI', 'Express'],
    summary: {
      fr: 'Des signatures HTML compatibles Outlook, complétées automatiquement selon l’agence, prêtes à copier-coller.',
      en: 'Outlook-compatible HTML signatures, auto-completed by branch, ready to copy and paste.',
    },
    purpose: {
      fr: 'Chaque collaborateur, quelle que soit son agence, doit pouvoir créer une signature email conforme à la charte en quelques secondes.',
      en: 'Every employee, whatever their branch, should be able to create an on-brand email signature in seconds.',
    },
    features: [
      {
        title: { fr: 'Aperçu en direct', en: 'Live preview' },
        text: {
          fr: 'Logo, bannière, téléphone et site se complètent selon le bureau ou le domaine email détecté.',
          en: 'Logo, banner, phone and website fill in based on the detected office or email domain.',
        },
      },
      {
        title: { fr: 'Compatible Outlook', en: 'Outlook-ready' },
        text: { fr: 'HTML pensé pour Outlook, avec un guide de collage intégré.', en: 'HTML built for Outlook, with a built-in paste guide.' },
      },
      {
        title: { fr: 'Administration', en: 'Administration' },
        text: {
          fr: 'Agences, bureaux, sites, logos, bannières et comptes, avec export / import de la configuration.',
          en: 'Branches, offices, websites, logos, banners and accounts, with configuration export / import.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'React 19 · Vite · TypeScript · Tailwind · Radix UI' },
      { label: { fr: 'Backend', en: 'Back end' }, value: 'Node.js · Express' },
      { label: { fr: 'Stockage', en: 'Storage' }, value: 'Fichiers JSON sur volume Docker' },
    ],
    security: [
      {
        fr: 'Session en cookie httpOnly, mots de passe bcrypt, auto-inscription verrouillée dès le premier administrateur créé.',
        en: 'httpOnly session cookie, bcrypt passwords, self-registration locked as soon as the first admin exists.',
      },
    ],
  },
  {
    slug: 'planning-transport',
    title: { fr: 'Planning transport', en: 'Transport planning' },
    tagline: { fr: 'Chauffeurs et camions planifiés en temps réel', en: 'Drivers and trucks scheduled in real time' },
    company: GROUP,
    kind: { fr: 'Application web temps réel', en: 'Real-time web app' },
    status: inProd,
    impact: [
      { value: { fr: "Temps réel", en: "Real time" }, label: { fr: "mise à jour instantanée pour tous les postes", en: "instant updates on every screen" } },
      { value: { fr: "10", en: "10" }, label: { fr: "tentatives de connexion avant blocage", en: "sign-in attempts before lockout" } },
      { value: { fr: "500", en: "500" }, label: { fr: "mots de passe courants interdits", en: "common passwords blocked" } },
    ],
    tags: ['Node.js', 'Socket.IO', 'MySQL', 'jsPDF', 'Docker'],
    summary: {
      fr: 'Affectation des chauffeurs et camions au glisser-déposer, mise à jour instantanée pour tous, feuille de route envoyée par mail.',
      en: 'Drag-and-drop assignment of drivers and trucks, instant updates for everyone, route sheet sent by email.',
    },
    purpose: {
      fr: "L'exploitation transport planifiait sur des fichiers partagés. L'application centralise un calendrier hebdomadaire temps réel par ressource, relié aux bons de livraison de l'ERP.",
      en: 'Transport operations were planned in shared files. The app centralises a real-time weekly calendar per resource, linked to ERP delivery notes.',
    },
    features: [
      {
        title: { fr: 'Calendrier temps réel', en: 'Real-time calendar' },
        text: {
          fr: 'Glisser-déposer, verrouillage d’une tâche en cours d’édition par un autre utilisateur, synchronisation WebSocket.',
          en: 'Drag and drop, task locking while another user edits it, WebSocket sync.',
        },
      },
      {
        title: { fr: 'Planification avancée', en: 'Advanced planning' },
        text: {
          fr: 'Duplication de semaines entières, détection SQL des chevauchements, zone tampon pour les tâches non planifiées.',
          en: 'Whole-week duplication, SQL overlap detection, buffer zone for unscheduled tasks.',
        },
      },
      {
        title: { fr: 'Feuilles de route', en: 'Route sheets' },
        text: {
          fr: 'PDF personnalisé par chauffeur avec les détails clients de l’ERP, envoyé directement par email.',
          en: 'Personalised PDF per driver with customer details from the ERP, emailed directly.',
        },
      },
      {
        title: { fr: 'Référentiels', en: 'Reference data' },
        text: {
          fr: 'Statuts, types de clients, véhicules, avec synchronisation bidirectionnelle du parc vers l’ERP.',
          en: 'Statuses, customer types, vehicles, with two-way fleet sync to the ERP.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Serveur', en: 'Server' }, value: 'Node.js · Express · Socket.IO' },
      { label: { fr: 'Frontend', en: 'Front end' }, value: 'JavaScript vanilla · HTML · Less' },
      { label: { fr: 'Données', en: 'Data' }, value: 'MySQL · SQL Server (Sage X3) en lecture' },
      { label: { fr: 'Exports', en: 'Exports' }, value: 'jsPDF · transferts SFTP · Docker' },
    ],
    security: [
      {
        fr: 'Protection contre le bruteforce (10 essais / 15 min), règles de mot de passe strictes avec liste noire des 500 mots de passe les plus courants.',
        en: 'Brute-force protection (10 attempts / 15 min), strict password rules with a blacklist of the 500 most common passwords.',
      },
    ],
    flow: [
      { fr: 'L’exploitant glisse une tâche sur un chauffeur et un camion', en: 'The planner drags a task onto a driver and a truck' },
      { fr: 'Socket.IO diffuse le changement à tous les postes', en: 'Socket.IO broadcasts the change to every screen' },
      { fr: 'Les bons de livraison sont lus dans l’ERP', en: 'Delivery notes are read from the ERP' },
      { fr: 'La feuille de route PDF part par email au chauffeur', en: 'The PDF route sheet is emailed to the driver' },
    ],
  },
  {
    slug: 'portail-comptes',
    title: { fr: 'Portail d’ouverture de comptes', en: 'Account opening portal' },
    tagline: { fr: 'Onboarding B2B et dépôt sécurisé de documents', en: 'B2B onboarding and secure document upload' },
    company: GROUP,
    kind: { fr: 'Plateforme web', en: 'Web platform' },
    status: inProd,
    impact: [
      { value: { fr: "9", en: "9" }, label: { fr: "étapes guidées d’ouverture de compte", en: "guided account-opening steps" } },
      { value: { fr: "5", en: "5" }, label: { fr: "étapes d’onboarding partenaire", en: "partner onboarding steps" } },
      { value: { fr: "1", en: "1" }, label: { fr: "seul usage par lien sécurisé", en: "use per secure link" } },
    ],
    tags: ['Next.js 15', 'PostgreSQL', 'S3', 'PM2', 'GitLab CI'],
    summary: {
      fr: 'Dépôt des documents légaux via un lien sécurisé à usage unique, puis validation interne.',
      en: 'Legal documents uploaded through a secure single-use link, then validated internally.',
    },
    purpose: {
      fr: "L'ouverture de comptes clients et la création de dossiers partenaires demandaient de collecter des documents sensibles (K-Bis, bilans, pièces d'identité). La plateforme encadre ces parcours et stocke les fichiers de façon chiffrée.",
      en: 'Opening customer accounts and creating partner files required collecting sensitive documents (company registration, financial statements, IDs). The platform guides these journeys and stores files encrypted.',
    },
    features: [
      {
        title: { fr: 'Onboarding partenaires', en: 'Partner onboarding' },
        text: { fr: 'Formulaire de qualification progressif en 5 étapes.', en: 'Progressive 5-step qualification form.' },
      },
      {
        title: { fr: 'Ouverture de comptes', en: 'Account opening' },
        text: {
          fr: 'Parcours en 9 étapes : filiales, consentements, coordonnées bancaires avec contrôle de cohérence IBAN / RIB.',
          en: '9-step journey: subsidiaries, consents, bank details with IBAN / RIB consistency checks.',
        },
      },
      {
        title: { fr: 'Modifications sécurisées', en: 'Secure updates' },
        text: {
          fr: 'Le client complète son dossier sans créer de compte, via un lien à usage unique qui expire.',
          en: 'Customers complete their file without an account, through an expiring single-use link.',
        },
      },
      {
        title: { fr: 'Stockage chiffré', en: 'Encrypted storage' },
        text: { fr: 'Garage (compatible S3) pour l’hébergement et le streaming des documents confidentiels.', en: 'Garage (S3-compatible) to host and stream confidential documents.' },
      },
    ],
    stack: [
      { label: { fr: 'Application', en: 'Application' }, value: 'Next.js 15 (App Router) · Node.js · PM2' },
      { label: { fr: 'Données', en: 'Data' }, value: 'PostgreSQL · Garage (S3)' },
      { label: { fr: 'CI/CD', en: 'CI/CD' }, value: 'GitLab CI · linting · déploiement automatisé' },
    ],
    security: [
      {
        fr: 'Sessions JWT httpOnly, bcrypt, blocage temporaire d’IP contre le bruteforce, tokens chiffrés à usage unique.',
        en: 'httpOnly JWT sessions, bcrypt, temporary IP blocking against brute force, encrypted single-use tokens.',
      },
      { fr: 'Journal d’audit de chaque connexion et modification en base.', en: 'Audit log of every sign-in and database change.' },
    ],
    flow: [
      { fr: 'Un administrateur demande un complément sur un dossier', en: 'An admin requests more information on a file' },
      { fr: 'Le serveur génère un token chiffré à usage unique et daté', en: 'The server generates an encrypted, expiring single-use token' },
      { fr: 'Le client reçoit un lien unique par email', en: 'The customer receives a unique link by email' },
      { fr: 'Ses fichiers partent directement vers le stockage S3 chiffré', en: 'Their files go straight to encrypted S3 storage' },
      { fr: 'Une fois l’action terminée, le token est détruit', en: 'Once done, the token is destroyed' },
    ],
  },
  {
    slug: 'connecteur-erp',
    title: { fr: 'Connecteur ERP ↔ application mobile', en: 'ERP ↔ mobile app connector' },
    tagline: { fr: 'L’ERP et l’appli mobile parlent enfin la même langue', en: 'The ERP and the mobile app finally speak the same language' },
    company: GROUP,
    kind: { fr: 'Service sans interface', en: 'Headless service' },
    status: inProd,
    impact: [
      { value: { fr: "19", en: "19" }, label: { fr: "tables synchronisées", en: "tables synchronised" } },
      { value: { fr: "60 min", en: "60 min" }, label: { fr: "entre deux synchronisations", en: "between two syncs" } },
      { value: { fr: "0", en: "0" }, label: { fr: "port exposé : connexions sortantes uniquement", en: "exposed ports: outbound only" } },
    ],
    tags: ['Python', 'pyodbc', 'paramiko', 'SFTP', 'Docker'],
    summary: {
      fr: 'Un service Python qui synchronise en continu 19 tables entre Sage X3 et une application mobile de visites.',
      en: 'A Python service continuously syncing 19 tables between Sage X3 and a mobile visit app.',
    },
    purpose: {
      fr: "Sage X3 et une application mobile de suivi des visites ne communiquent pas directement. Le connecteur échange des fichiers CSV via un serveur SFTP partagé, dans les deux sens, toutes les 60 minutes.",
      en: 'Sage X3 and a mobile visit-tracking app cannot talk to each other directly. The connector exchanges CSV files over a shared SFTP server, both ways, every 60 minutes.',
    },
    features: [
      {
        title: { fr: 'Export', en: 'Export' },
        text: {
          fr: 'Clients, adresses, commerciaux, factures, hiérarchie et visites exportés depuis X3.',
          en: 'Customers, addresses, sales reps, invoices, hierarchy and visits exported from X3.',
        },
      },
      {
        title: { fr: 'Import', en: 'Import' },
        text: { fr: 'Les visites saisies sur mobile reviennent dans les tables dédiées de X3.', en: 'Visits entered on mobile come back into dedicated X3 tables.' },
      },
      {
        title: { fr: 'Robustesse', en: 'Robustness' },
        text: {
          fr: 'Boucle continue, archivage automatique des fichiers traités, conteneur sans port exposé.',
          en: 'Continuous loop, automatic archiving of processed files, container with no exposed port.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Langage', en: 'Language' }, value: 'Python 3.11' },
      { label: { fr: 'Bibliothèques', en: 'Libraries' }, value: 'pyodbc · paramiko · python-dotenv' },
      { label: { fr: 'Transport', en: 'Transport' }, value: 'SFTP · fichiers CSV' },
      { label: { fr: 'Déploiement', en: 'Deployment' }, value: 'Docker (connexions sortantes uniquement)' },
    ],
    security: [],
    flow: [
      { fr: 'Lecture des tables de référence dans Sage X3 (SQL Server)', en: 'Reading reference tables from Sage X3 (SQL Server)' },
      { fr: 'Génération des fichiers CSV et dépôt sur le SFTP', en: 'Generating CSV files and dropping them on SFTP' },
      { fr: 'L’application mobile récupère les données, les commerciaux saisissent leurs visites', en: 'The mobile app picks up the data, sales reps log their visits' },
      { fr: 'Les visites reviennent par SFTP et sont importées dans X3', en: 'Visits come back over SFTP and are imported into X3' },
    ],
  },
  {
    slug: 'compresseur-ocr',
    title: { fr: 'Compresseur d’images vérifié par OCR', en: 'OCR-verified image compressor' },
    tagline: { fr: 'Des fichiers 100× plus légers, sans perdre un seul chiffre', en: 'Files 100× smaller without losing a single digit' },
    company: GROUP,
    kind: { fr: 'API + interface web', en: 'API + web interface' },
    status: { fr: 'Dockerisée', en: 'Dockerised' },
    impact: [
      { value: { fr: '100×', en: '100×' }, label: { fr: 'fichiers jusqu’à 100 fois plus légers', en: 'files up to 100 times smaller' } },
      { value: { fr: '0', en: '0' }, label: { fr: 'chiffre perdu : chaque montant relu par OCR', en: 'digits lost: every amount re-read by OCR' } },
      { value: { fr: '2', en: '2' }, label: { fr: 'accès : API et interface web', en: 'ways in: API and web interface' } },
    ],
    tags: ['Rust', 'Angular', 'PaddleOCR', 'Docker'],
    summary: {
      fr: 'Un service qui compresse fortement les images de documents, puis relit chaque montant par OCR avant de livrer le fichier, pour garantir qu’aucun chiffre n’a été altéré.',
      en: 'A service that heavily compresses document images, then re-reads every amount with OCR before delivering the file, guaranteeing no figure was altered.',
    },
    purpose: {
      fr: 'Les documents scannés pèsent lourd, mais une compression trop forte peut rendre un montant illisible, ce qui est inacceptable sur des pièces comptables. Le compresseur réduit la taille des fichiers tout en vérifiant automatiquement que chaque montant reste lisible et identique.',
      en: 'Scanned documents are heavy, but compressing too hard can make an amount unreadable, which is unacceptable for accounting records. The compressor shrinks files while automatically checking that every amount stays readable and identical.',
    },
    features: [
      {
        title: { fr: 'Compression forte', en: 'Heavy compression' },
        text: { fr: 'Fichiers jusqu’à 100 fois plus légers, avec un moteur écrit en Rust.', en: 'Files up to 100 times smaller, with an engine written in Rust.' },
      },
      {
        title: { fr: 'Vérification par OCR', en: 'OCR verification' },
        text: { fr: 'Chaque montant est relu par OCR (PaddleOCR) avant la livraison du fichier compressé.', en: 'Every amount is re-read with OCR (PaddleOCR) before the compressed file is delivered.' },
      },
      {
        title: { fr: 'API et interface web', en: 'API and web interface' },
        text: { fr: 'Utilisable par d’autres applications via l’API, ou à la main depuis une interface Angular.', en: 'Usable by other applications through the API, or by hand from an Angular interface.' },
      },
    ],
    stack: [
      { label: { fr: 'Moteur', en: 'Engine' }, value: 'Rust' },
      { label: { fr: 'Interface', en: 'Interface' }, value: 'Angular' },
      { label: { fr: 'OCR', en: 'OCR' }, value: 'PaddleOCR' },
      { label: { fr: 'Déploiement', en: 'Deployment' }, value: 'Docker' },
    ],
    security: [],
    flow: [
      { fr: 'Le document arrive par l’API ou par l’interface web', en: 'The document comes in through the API or the web interface' },
      { fr: 'Le moteur Rust compresse l’image', en: 'The Rust engine compresses the image' },
      { fr: 'L’OCR relit chaque montant sur le fichier compressé', en: 'OCR re-reads every amount on the compressed file' },
      { fr: 'Le fichier n’est livré que si tous les montants sont intacts', en: 'The file is only delivered if every amount is intact' },
    ],
  },
]

const ALL_SHOTS = { ...SHOTS, ...PERSONAL_SHOTS }

export const PROJECTS: Project[] = [...BASE, ...PERSONAL_BASE].map((p) => ({
  ...p,
  shots: ALL_SHOTS[p.slug]?.shots ?? [],
  cover: ALL_SHOTS[p.slug]?.cover ?? [],
}))

export const PERSONAL_PROJECTS = PROJECTS.filter((p) => p.personal)

/** Projets mis en avant en grandes cartes sur l'accueil, dans cet ordre */
const SPOTLIGHT_SLUGS = ['crm-terrain', 'ticketing-sav', 'inventaires', 'toulouse-a-l-ombre']
export const SPOTLIGHT = SPOTLIGHT_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!)

/** Tous les autres, en grille compacte : pro avec captures, puis perso, puis pro sans captures */
const rest = PROJECTS.filter((p) => !SPOTLIGHT_SLUGS.includes(p.slug))
export const MORE_PROJECTS = [
  ...rest.filter((p) => !p.personal && p.shots.length > 0),
  ...rest.filter((p) => p.personal),
  ...rest.filter((p) => !p.personal && p.shots.length === 0),
]

/** Numéro affiché : les projets personnels ont leur propre numérotation */
export const projectNumber = (p: Project) => {
  const list = p.personal ? PERSONAL_PROJECTS : PROJECTS.filter((q) => !q.personal)
  return String(list.findIndex((q) => q.slug === p.slug) + 1).padStart(2, '0')
}

/** Versions 720 px et 1280 px : le navigateur choisit selon la largeur d'écran */
export const shotSrcSet = (slug: string, i: number) => {
  const base = `/projects/${slug}/${String(i).padStart(2, '0')}`
  return `${base}-720.webp 720w, ${base}.webp 1280w`
}
export const DEMO_SIZES = '(max-width: 960px) calc(100vw - 32px), 880px'

export const shotSrc = (slug: string, i: number, thumb = false) =>
  `/projects/${slug}/${String(i).padStart(2, '0')}${thumb ? '-thumb' : ''}.webp`
