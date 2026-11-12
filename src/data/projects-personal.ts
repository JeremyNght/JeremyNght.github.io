// Projets personnels open source ; le dossier de présentation PDF de chacun est dans public/dossiers/<slug>.pdf.
import type { L } from '../i18n/I18n'
import type { ProjectBase } from './projects'

const PERSONAL: L = { fr: 'Projet personnel · open source', en: 'Personal project · open source' }
const OPEN: L = { fr: 'Open source (MIT)', en: 'Open source (MIT)' }

export const PERSONAL_BASE: ProjectBase[] = [
  {
    slug: 'fiche-terrain',
    personal: true,
    host: 'fiche-terrain.local',
    title: { fr: 'Fiche terrain', en: 'Plot sheet' },
    tagline: { fr: 'Une adresse, et tout ce qu’on a le droit de faire sur le terrain', en: 'One address, and everything you are allowed to do on the plot' },
    company: PERSONAL,
    kind: { fr: 'Application web + API', en: 'Web app + API' },
    status: OPEN,
    impact: [
      { value: { fr: '≈ 4 s', en: '≈ 4 s' }, label: { fr: 'pour une première fiche, 0,2 s ensuite grâce au cache de 7 jours', en: 'for a first sheet, 0.2 s afterwards thanks to the 7-day cache' } },
      { value: { fr: '21', en: '21' }, label: { fr: 'contraintes trouvées sur l’exemple : 6 prescriptions et 15 servitudes', en: 'constraints found on the example: 6 prescriptions and 15 easements' } },
      { value: { fr: '≈ 95 %', en: '≈ 95 %' }, label: { fr: 'du code serveur couvert par des tests sur réponses réelles', en: 'of server code covered by tests replaying real responses' } },
    ],
    tags: ['.NET 8', 'Vue 3', 'PostgreSQL', 'Leaflet', 'Docker'],
    summary: {
      fr: 'On tape une adresse : l’application retrouve la parcelle cadastrale, la zone du PLU, les prescriptions et servitudes, affiche le contour sur une carte et produit un PDF d’une page, sources citées.',
      en: 'Type an address: the app finds the cadastral plot, the zoning, the prescriptions and easements, draws the outline on a map and produces a one-page PDF with its sources.',
    },
    purpose: {
      fr: 'Avant d’acheter, de vendre ou de construire, il faut savoir ce qu’on a le droit de faire sur un terrain. Ces informations sont publiques mais éparpillées sur plusieurs sites officiels. Fiche terrain les rassemble sur une seule page, partageable par simple lien, à destination des agents immobiliers, artisans, géomètres et particuliers.',
      en: 'Before buying, selling or building, you need to know what you may do on a plot. That information is public but scattered across several official sites. Plot sheet gathers it on a single page, shareable by link, for estate agents, craftspeople, surveyors and private buyers.',
    },
    features: [
      {
        title: { fr: 'Recherche d’adresse', en: 'Address search' },
        text: {
          fr: 'Suggestions de la Base Adresse Nationale après un tiers de seconde sans frappe, choix à la souris ou au clavier : aucune faute de frappe possible.',
          en: 'Suggestions from the national address database after a third of a second without typing, picked by mouse or keyboard: no typos possible.',
        },
      },
      {
        title: { fr: 'Parcelle et urbanisme', en: 'Plot and zoning' },
        text: {
          fr: 'Identifiant, surface et contour via l’API Carto de l’IGN, puis zone du PLU, règlement écrit, prescriptions et servitudes via le Géoportail de l’Urbanisme, interrogé avec la forme de la parcelle.',
          en: 'ID, area and outline through the IGN Carto API, then zoning, written regulation, prescriptions and easements through the Urban Planning Geoportal, queried with the plot’s shape.',
        },
      },
      {
        title: { fr: 'Carte interactive', en: 'Interactive map' },
        text: {
          fr: 'Carte Leaflet calée sur la parcelle : contour exact, plan IGN et cadastre avec les numéros des parcelles voisines.',
          en: 'Leaflet map centred on the plot: exact outline, IGN base map and cadastre with neighbouring plot numbers.',
        },
      },
      {
        title: { fr: 'PDF d’une page', en: 'One-page PDF' },
        text: {
          fr: 'Fiche mise en page côté serveur avec QuestPDF : tableau de la parcelle, dessin du contour, contraintes, sources et date de récupération.',
          en: 'Sheet laid out server-side with QuestPDF: plot table, outline drawing, constraints, sources and retrieval date.',
        },
      },
      {
        title: { fr: 'Mémoire de 7 jours', en: '7-day memory' },
        text: {
          fr: 'Chaque réponse brute est gardée en base : réouverture quasi instantanée, et dernière version connue servie si un service public est en panne.',
          en: 'Each raw response is kept in the database: near-instant reopening, and the last known version served when a public service is down.',
        },
      },
      {
        title: { fr: 'Partage et historique', en: 'Sharing and history' },
        text: {
          fr: 'Chaque fiche a sa propre adresse web, sans compte pour le destinataire ; les 20 dernières fiches consultées sont rappelées sur l’accueil.',
          en: 'Every sheet has its own URL, no account needed for the recipient; the 20 most recent sheets are listed on the home page.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Serveur', en: 'Server' }, value: '.NET 8 (C#) · API minimale · Entity Framework Core (migrations au démarrage)' },
      { label: { fr: 'Résilience', en: 'Resilience' }, value: 'Polly : réessais progressifs, 3 appels simultanés maximum vers l’IGN' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL 16 · cache de 7 jours des réponses brutes' },
      { label: { fr: 'PDF', en: 'PDF' }, value: 'QuestPDF' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'Vue 3 · Vite · Pinia · Vue Router · Leaflet' },
      { label: { fr: 'Qualité & déploiement', en: 'Quality & deployment' }, value: 'Tests sur réponses enregistrées · GitHub Actions · Docker Compose (base, API, nginx)' },
    ],
    security: [
      { fr: 'Le navigateur ne contacte jamais les API publiques (hors tuiles de fond de carte de l’IGN) : tout passe par le serveur.', en: 'The browser never calls the public APIs (apart from IGN map tiles): everything goes through the server.' },
      { fr: 'Sources et licence Etalab 2.0 citées à l’écran et sur chaque PDF, avec le rappel « sans valeur juridique ».', en: 'Sources and Etalab 2.0 licence cited on screen and on every PDF, with a “no legal value” reminder.' },
    ],
  },
  {
    slug: 'passoire-ou-pepite',
    personal: true,
    host: 'passoire-ou-pepite.local',
    title: { fr: 'Passoire ou pépite ?', en: 'Sieve or gem?' },
    tagline: { fr: 'La vraie performance énergétique des logements d’un quartier', en: 'The real energy performance of a neighbourhood’s homes' },
    company: PERSONAL,
    kind: { fr: 'Application web + API', en: 'Web app + API' },
    status: OPEN,
    impact: [
      { value: { fr: '191 606', en: '191,606' }, label: { fr: 'diagnostics DPE agrégés pour la seule ville de Toulouse', en: 'EPC diagnostics aggregated for the city of Toulouse alone' } },
      { value: { fr: '< 50 ms', en: '< 50 ms' }, label: { fr: 'pour une réponse déjà en mémoire Redis (vérifié par un test)', en: 'for an answer already in Redis memory (checked by a test)' } },
      { value: { fr: '≥ 10', en: '≥ 10' }, label: { fr: 'diagnostics minimum avant d’afficher une statistique : aucun logement identifiable', en: 'diagnostics required before showing a statistic: no home can be identified' } },
    ],
    tags: ['FastAPI', 'Python', 'Redis', 'PostgreSQL', 'HTMX'],
    summary: {
      fr: 'Adresse ou commune en entrée, performance énergétique réelle des logements alentour en sortie, d’après les millions de diagnostics publiés en open data par l’ADEME.',
      en: 'Address or town in, real energy performance of the surrounding homes out, based on the millions of diagnostics published as open data by ADEME.',
    },
    purpose: {
      fr: 'Avant d’acheter ou de louer, on veut savoir si le quartier compte beaucoup de passoires thermiques (logements classés F ou G). L’application regroupe les diagnostics de performance énergétique autour d’une adresse ou pour toute une commune, et n’affiche que des chiffres agrégés pour ne jamais exposer un logement précis.',
      en: 'Before buying or renting, you want to know whether the area has many thermal sieves (homes rated F or G). The app groups energy performance diagnostics around an address or for a whole town, and only shows aggregated figures so that no single home is ever exposed.',
    },
    features: [
      {
        title: { fr: 'Recherche par rayon', en: 'Radius search' },
        text: {
          fr: 'Adresse géocodée par la Base Adresse Nationale, rayon de 250 m, 500 m ou 1 km, résultat affiché sans recharger la page (HTMX) et partageable par lien.',
          en: 'Address geocoded by the national address database, radius of 250 m, 500 m or 1 km, result shown without a page reload (HTMX) and shareable by link.',
        },
      },
      {
        title: { fr: 'Indicateurs clés', en: 'Key figures' },
        text: {
          fr: 'Nombre de diagnostics, part de passoires thermiques, note moyenne de A à G, surface moyenne, et répartition des classes énergie et climat.',
          en: 'Number of diagnostics, share of thermal sieves, average grade from A to G, average floor area, and breakdown of energy and climate classes.',
        },
      },
      {
        title: { fr: 'Risque par époque', en: 'Risk by period' },
        text: {
          fr: 'Part de passoires selon l’époque de construction, comparée à la moyenne de la zone, avec un indice et un niveau faible, moyen ou élevé.',
          en: 'Share of thermal sieves by construction period, compared with the area average, with an index and a low, medium or high level.',
        },
      },
      {
        title: { fr: 'Classement des rues', en: 'Street ranking' },
        text: {
          fr: 'Les 10 rues les mieux et les moins bien notées d’une commune (1 000 rues analysées pour Toulouse), exportables en CSV.',
          en: 'The 10 best and worst rated streets of a town (1,000 streets analysed for Toulouse), exportable as CSV.',
        },
      },
      {
        title: { fr: 'API documentée', en: 'Documented API' },
        text: {
          fr: 'Les mêmes chiffres en JSON : autour d’une adresse, par commune, par rue, en CSV et en comparaison de deux communes, avec documentation OpenAPI interactive.',
          en: 'The same figures as JSON: around an address, by town, by street, as CSV and comparing two towns, with interactive OpenAPI documentation.',
        },
      },
      {
        title: { fr: 'Poli avec les API publiques', en: 'Polite to public APIs' },
        text: {
          fr: 'Cache Redis d’une heure, 8 appels par seconde maximum vers l’ADEME (quota : 10), requêtes identiques fusionnées, réessais espacés.',
          en: 'One-hour Redis cache, at most 8 calls per second to ADEME (quota: 10), identical requests merged, spaced retries.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Serveur', en: 'Server' }, value: 'Python · FastAPI · Pydantic · httpx asynchrone' },
      { label: { fr: 'Cache & débit', en: 'Cache & rate limit' }, value: 'Redis : cache d’une heure, 60 requêtes par minute et par visiteur' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL · Alembic (archive des calculs, sans adresse IP)' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'HTMX · gabarits Jinja · nginx, sans application JavaScript lourde' },
      { label: { fr: 'Qualité & déploiement', en: 'Quality & deployment' }, value: 'pytest (80 % de couverture minimum, API publiques simulées) · GitHub Actions · Docker Compose' },
    ],
    security: [
      { fr: 'Aucune donnée individuelle : seuls des comptages déjà agrégés sont demandés à l’ADEME, un test automatique le vérifie.', en: 'No individual data: only already-aggregated counts are requested from ADEME, which an automated test checks.' },
      { fr: 'Seuil de 10 diagnostics, agrégation à la rue, aucun traceur tiers, adresse IP non archivée.', en: 'Threshold of 10 diagnostics, street-level aggregation, no third-party trackers, IP address not stored.' },
    ],
  },
  {
    slug: 'riviere-vivante',
    personal: true,
    host: 'riviere-vivante.local',
    title: { fr: 'Rivière vivante', en: 'Living river' },
    tagline: { fr: 'La santé des rivières autour de Toulouse, en un coup d’œil', en: 'The health of the rivers around Toulouse at a glance' },
    company: PERSONAL,
    kind: { fr: 'Tableau de bord + collecteur', en: 'Dashboard + collector' },
    status: OPEN,
    impact: [
      { value: { fr: '5', en: '5' }, label: { fr: 'stations suivies sur la Garonne, l’Ariège, le Touch et la Save', en: 'stations tracked on the Garonne, Ariège, Touch and Save rivers' } },
      { value: { fr: '10 min', en: '10 min' }, label: { fr: 'entre deux relevés, 5 requêtes seulement vers Hub’Eau', en: 'between readings, just 5 requests to Hub’Eau' } },
      { value: { fr: '0', en: '0' }, label: { fr: 'appel à Hub’Eau déclenché par un visiteur : le site lit sa propre base', en: 'Hub’Eau calls triggered by a visitor: the site reads its own database' } },
    ],
    tags: ['Python', 'FastAPI', 'Vue 3', 'Chart.js', 'PostgreSQL'],
    summary: {
      fr: 'Carte, courbes de débit, hauteur et température, poissons observés et alertes de crue : un tableau de bord alimenté par un collecteur autonome qui construit son propre historique.',
      en: 'Map, flow, level and temperature curves, observed fish and flood alerts: a dashboard fed by an autonomous collector that builds its own history.',
    },
    purpose: {
      fr: 'Les données sur l’eau existent sur le portail public Hub’Eau, mais elles sont dispersées, techniques et gardées en temps réel un mois seulement. L’application les rassemble pour les pêcheurs, kayakistes, promeneurs et riverains, signale quand une rivière monte et conserve l’historique que Hub’Eau ne fournit pas.',
      en: 'Water data exists on the public Hub’Eau portal, but it is scattered, technical and kept in real time for only a month. The app gathers it for anglers, kayakers, walkers and residents, flags when a river rises and keeps the history Hub’Eau does not provide.',
    },
    features: [
      {
        title: { fr: 'Carte des stations', en: 'Station map' },
        text: {
          fr: 'Pastille d’état (normal, vigilance, crue, inconnu) selon les seuils de chaque station, résumé au clic, rafraîchissement automatique toutes les 60 secondes.',
          en: 'Status dot (normal, watch, flood, unknown) based on each station’s thresholds, summary on click, automatic refresh every 60 seconds.',
        },
      },
      {
        title: { fr: 'Fiche et graphiques', en: 'Station sheet and charts' },
        text: {
          fr: 'Débit ou hauteur sur 24 h, 7 ou 30 jours (Chart.js), seuils signalés « hors échelle » quand ils écraseraient la courbe, export CSV des 30 derniers jours.',
          en: 'Flow or level over 24 h, 7 or 30 days (Chart.js), thresholds flagged “off scale” when they would flatten the curve, CSV export of the last 30 days.',
        },
      },
      {
        title: { fr: 'Alertes', en: 'Alerts' },
        text: {
          fr: 'Bandeau orange ou rouge sur toutes les pages dès qu’un seuil est franchi, historique des franchissements et notification webhook compatible Slack, Mattermost ou Discord.',
          en: 'Orange or red banner on every page as soon as a threshold is crossed, crossing history and a webhook notification compatible with Slack, Mattermost or Discord.',
        },
      },
      {
        title: { fr: 'Température et poissons', en: 'Temperature and fish' },
        text: {
          fr: 'Chaque station est reliée à la sonde de température et au point de pêche scientifique les plus proches ; 33 espèces listées pour la Garonne.',
          en: 'Each station is linked to the nearest temperature probe and scientific fishing point; 33 species listed for the Garonne.',
        },
      },
      {
        title: { fr: 'Collecteur autonome', en: 'Autonomous collector' },
        text: {
          fr: 'Planificateur APScheduler : hauteur et débit toutes les 10 min, température toutes les 6 h, poissons chaque semaine. Valeurs aberrantes rejetées, doublons ignorés, redémarrage seul.',
          en: 'APScheduler job runner: level and flow every 10 min, temperature every 6 h, fish weekly. Outliers rejected, duplicates ignored, restarts on its own.',
        },
      },
      {
        title: { fr: 'Page « Collecteur »', en: '“Collector” page' },
        text: {
          fr: 'État de chaque tâche, volumétrie de la base et journal des exécutions : 62 826 mesures rapatriées au premier passage, puis 0 doublon enregistré.',
          en: 'Status of each job, database size and run log: 62,826 readings pulled on the first run, then 0 duplicates stored.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Collecteur & API', en: 'Collector & API' }, value: 'Python 3.12 · APScheduler · httpx · FastAPI (lecture seule)' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL 16 · Alembic · option TimescaleDB' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'Vue 3 · Vite · Chart.js · Leaflet + OpenStreetMap' },
      { label: { fr: 'Qualité', en: 'Quality' }, value: 'pytest · Vitest · Hub’Eau simulé · GitHub Actions' },
      { label: { fr: 'Déploiement', en: 'Deployment' }, value: 'Docker Compose : base, API, collecteur, nginx' },
    ],
    security: [
      { fr: 'L’API ne fait que lire la base ; la modification des seuils est réservée à un jeton administrateur, désactivée par défaut.', en: 'The API only reads the database; threshold changes are reserved for an admin token and disabled by default.' },
      { fr: 'Collecteur identifié auprès de Hub’Eau, réessais espacés, une station en panne n’arrête pas les autres.', en: 'Collector identifies itself to Hub’Eau, spaced retries, a failing station does not stop the others.' },
    ],
  },
  {
    slug: 'toulouse-a-l-ombre',
    personal: true,
    host: 'toulouse-a-l-ombre.local',
    title: { fr: 'Toulouse à l’ombre', en: 'Toulouse in the shade' },
    tagline: { fr: 'L’itinéraire à pied le plus ombragé, et où boire en route', en: 'The shadiest walking route, and where to drink on the way' },
    company: PERSONAL,
    kind: { fr: 'Application web cartographique', en: 'Web mapping app' },
    status: OPEN,
    impact: [
      { value: { fr: '120 224', en: '120,224' }, label: { fr: 'arbres de la ville pris en compte dans le score d’ombre', en: 'city trees factored into the shade score' } },
      { value: { fr: '131 376', en: '131,376' }, label: { fr: 'tronçons de rues et chemins piétons, chacun avec son score', en: 'street and footpath segments, each with its own score' } },
      { value: { fr: '2', en: '2' }, label: { fr: 'itinéraires (court et ombragé) calculés en quelques dizaines de millisecondes', en: 'routes (shortest and shaded) computed in a few tens of milliseconds' } },
    ],
    tags: ['Spring Boot', 'Angular', 'PostGIS', 'Leaflet', 'Docker'],
    summary: {
      fr: 'Deux itinéraires à pied entre deux points de Toulouse, le plus court et le plus ombragé, colorés rue par rue, avec les fontaines à boire et les espaces verts à proximité.',
      en: 'Two walking routes between two points in Toulouse, the shortest and the shadiest, coloured street by street, with nearby drinking fountains and green spaces.',
    },
    purpose: {
      fr: 'En été, traverser Toulouse à pied en plein après-midi peut être pénible, voire dangereux pour les plus fragiles. Les applications de navigation proposent le chemin le plus court sans dire s’il est en plein soleil. Toulouse à l’ombre répond à une autre question : quel chemin me garde à l’ombre, et où me rafraîchir ?',
      en: 'In summer, walking across Toulouse in mid-afternoon can be unpleasant, even dangerous for the most vulnerable. Navigation apps offer the shortest path without saying whether it is in full sun. Toulouse in the shade answers another question: which path keeps me in the shade, and where can I cool down?',
    },
    features: [
      {
        title: { fr: 'Deux itinéraires comparés', en: 'Two routes compared' },
        text: {
          fr: 'Distance, durée à 4,5 km/h et score d’ombre de 0 à 100 pour chacun ; démo Capitole → Jardin des Plantes : 61/100 d’ombre pour 90 m de plus.',
          en: 'Distance, duration at 4.5 km/h and a 0-100 shade score for each; Capitole → Jardin des Plantes demo: 61/100 shade for 90 m more.',
        },
      },
      {
        title: { fr: 'Score d’ombre par tronçon', en: 'Shade score per segment' },
        text: {
          fr: 'Arbres à moins de 8 m de la voie pondérés par leur hauteur, rapportés à la longueur de la rue ; hauteur estimée d’après l’âge quand la donnée manque.',
          en: 'Trees within 8 m of the street weighted by height, relative to the street length; height estimated from age when the data is missing.',
        },
      },
      {
        title: { fr: 'Calcul d’itinéraire maison', en: 'Custom routing engine' },
        text: {
          fr: 'Dijkstra écrit pour l’occasion : coût = longueur × (1 + 3 × (1 − score d’ombre)), 97 539 carrefours gardés en mémoire pour répondre vite.',
          en: 'Dijkstra written for the purpose: cost = length × (1 + 3 × (1 − shade score)), 97,539 junctions kept in memory to answer fast.',
        },
      },
      {
        title: { fr: 'Points de fraîcheur', en: 'Cooling points' },
        text: {
          fr: 'Requêtes PostGIS pour lister les fontaines à boire et les espaces verts à moins de 300 m du trajet, avec une fiche au clic (arbre, fontaine, parc).',
          en: 'PostGIS queries listing drinking fountains and green spaces within 300 m of the route, with a sheet on click (tree, fountain, park).',
        },
      },
      {
        title: { fr: 'Favoris et export GPX', en: 'Favourites and GPX export' },
        text: {
          fr: 'Jusqu’à 10 trajets gardés dans le navigateur, sans compte ; export GPX pour montre de sport et applications GPS.',
          en: 'Up to 10 routes kept in the browser, no account; GPX export for sports watches and GPS apps.',
        },
      },
      {
        title: { fr: 'Saisie souple, mode sombre', en: 'Flexible input, dark mode' },
        text: {
          fr: 'Adresses suggérées par la Base Adresse Nationale ou clic sur la carte pour poser départ et arrivée, calcul automatique, thème clair ou sombre mémorisé.',
          en: 'Addresses suggested by the national address database or map clicks to set start and end, automatic computation, remembered light or dark theme.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Serveur', en: 'Server' }, value: 'Java 21 · Spring Boot 3 · calcul d’itinéraire Dijkstra maison' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL + PostGIS · import des données ouvertes au premier démarrage' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'Angular 18 · Leaflet · mode sombre' },
      { label: { fr: 'Données', en: 'Data' }, value: 'Toulouse Métropole (arbres, fontaines, espaces verts) · OpenStreetMap · Base Adresse Nationale' },
      { label: { fr: 'Qualité & déploiement', en: 'Quality & deployment' }, value: 'JUnit · Jest · Testcontainers · GitHub Actions · Docker Compose (PostGIS, backend, nginx)' },
    ],
    security: [
      { fr: 'Aucun compte : les favoris restent dans le navigateur, seul le serveur contacte les services publics.', en: 'No account: favourites stay in the browser, only the server contacts the public services.' },
      { fr: 'Le score d’ombre est une estimation fondée sur les arbres seulement, et l’interface le précise.', en: 'The shade score is an estimate based on trees only, and the interface says so.' },
    ],
  },
  {
    slug: 'source-sure',
    personal: true,
    host: 'source-sure.local',
    title: { fr: 'Source sûre', en: 'Source sûre' },
    tagline: { fr: 'L’IA qui répond avec les documents de l’entreprise, et cite ses sources', en: 'The AI that answers from company documents, and cites its sources' },
    company: PERSONAL,
    kind: { fr: 'Recherche IA (RAG) + API', en: 'AI search (RAG) + API' },
    status: OPEN,
    impact: [
      { value: { fr: '82,5 %', en: '82.5%' }, label: { fr: 'de réponses correctes sur 40 questions de référence (hybride, contre 80 % vecteurs seuls)', en: 'correct answers on 40 reference questions (hybrid, vs 80% vectors only)' } },
      { value: { fr: '0', en: '0' }, label: { fr: 'passage d’une autre équipe lu par la recherche : droits filtrés dans la requête SQL, test dédié', en: 'passages from another team read by the search: rights filtered in the SQL query, dedicated test' } },
      { value: { fr: '0 €', en: '€0' }, label: { fr: 'd’IA payante : embeddings e5 sur CPU, réponses extractives, tout reste sur le serveur', en: 'of paid AI: e5 embeddings on CPU, extractive answers, everything stays on the server' } },
    ],
    tags: ['Python', 'FastAPI', 'pgvector', 'React', 'Redis'],
    summary: {
      fr: 'Un assistant qui répond aux questions des salariés à partir des documents internes (PDF, Word, Markdown), cite le passage et la page de chaque phrase, respecte les droits de chaque équipe et dit « je ne sais pas » plutôt que d’inventer.',
      en: 'An assistant that answers employees’ questions from internal documents (PDF, Word, Markdown), cites the passage and page of every sentence, respects each team’s access rights and says “I don’t know” rather than make things up.',
    },
    purpose: {
      fr: 'Dans une entreprise de quelques centaines de personnes, les règles sont dispersées dans des centaines de documents, et une IA généraliste n’est pas utilisable : elle invente, ne cite rien et ignore qui a le droit de lire quoi. Source sûre est un moteur de recherche-réponse (RAG) entièrement local et gratuit, démontré sur 55 documents dont 51 fiches officielles de Service-Public.fr réparties entre les espaces RH, Finance et Juridique.',
      en: 'In a company of a few hundred people, rules are scattered across hundreds of documents, and a general-purpose AI is unusable: it makes things up, cites nothing and ignores who may read what. Source sûre is a fully local, free retrieval-augmented answering engine (RAG), demonstrated on 55 documents including 51 official Service-Public.fr sheets split between HR, Finance and Legal spaces.',
    },
    features: [
      {
        title: { fr: 'Réponses citées, en flux', en: 'Cited, streamed answers' },
        text: {
          fr: 'Chaque phrase porte un renvoi [n] ; un clic ouvre le passage surligné avec son contexte, et le PDF à la bonne page. Réponse affichée au fil de l’eau (Server-Sent Events).',
          en: 'Every sentence carries a [n] reference; one click opens the highlighted passage in context, and the PDF at the right page. Answer streamed as it is produced (Server-Sent Events).',
        },
      },
      {
        title: { fr: 'Recherche hybride', en: 'Hybrid search' },
        text: {
          fr: 'Similarité vectorielle pgvector (index HNSW) et plein texte PostgreSQL en français, fusionnés par Reciprocal Rank Fusion, pondération réglée sur le jeu d’évaluation.',
          en: 'pgvector similarity (HNSW index) and French PostgreSQL full-text search, merged by Reciprocal Rank Fusion, with weights tuned on the evaluation set.',
        },
      },
      {
        title: { fr: 'Droits étanches par équipe', en: 'Watertight team permissions' },
        text: {
          fr: 'Le filtre d’espaces est appliqué dans la requête SQL, avant tout classement. Un test vérifie qu’une question RH recopiant un passage Finance ne le remonte jamais.',
          en: 'The space filter is applied inside the SQL query, before any ranking. A test checks that an HR question copying a Finance passage word for word never retrieves it.',
        },
      },
      {
        title: { fr: 'Indexation asynchrone et incrémentale', en: 'Asynchronous, incremental indexing' },
        text: {
          fr: 'Worker arq : extraction PDF/Word/Markdown avec page ou section, passages avec chevauchement, embeddings e5. Une nouvelle version ne revectorise que les passages modifiés (hash).',
          en: 'arq worker: PDF/Word/Markdown extraction with page or section, overlapping passages, e5 embeddings. A new version only re-embeds the changed passages (hash).',
        },
      },
      {
        title: { fr: '« Je ne sais pas »', en: '“I don’t know”' },
        text: {
          fr: 'Sous un seuil de similarité mesuré sur le jeu de référence (0,84), l’assistant refuse de répondre plutôt que d’improviser ; 3 questions sur 3 sans réponse disponible le déclenchent.',
          en: 'Below a similarity threshold measured on the reference set (0.84), the assistant declines to answer rather than improvise; 3 of 3 questions with no available answer trigger it.',
        },
      },
      {
        title: { fr: 'Évaluation et administration', en: 'Evaluation and administration' },
        text: {
          fr: '40 questions de référence rejouées en vecteurs, plein texte et hybride, détail par question ; statistiques d’usage, retours utile / pas utile, matrice des droits.',
          en: '40 reference questions replayed in vector, full-text and hybrid modes, with per-question detail; usage statistics, useful / not useful feedback, permission matrix.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Serveur', en: 'Server' }, value: 'Python 3.12 · FastAPI · SQLAlchemy · Alembic · flux SSE · JWT' },
      { label: { fr: 'Recherche', en: 'Search' }, value: 'PostgreSQL 16 + pgvector (HNSW) · plein texte français · fusion RRF' },
      { label: { fr: 'IA locale', en: 'Local AI' }, value: 'multilingual-e5-small (sentence-transformers, CPU) · réponses extractives · Ollama en option' },
      { label: { fr: 'Traitement', en: 'Processing' }, value: 'Worker arq + Redis · pypdf · python-docx' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'React 19 · TypeScript · Vite' },
      { label: { fr: 'Qualité & déploiement', en: 'Quality & deployment' }, value: 'pytest sur vraie base pgvector · Vitest · Playwright · GitHub Actions · Docker Compose (5 services)' },
    ],
    security: [
      { fr: 'Aucun document ni question n’est envoyé à un service d’IA extérieur : tout tourne sur le serveur, sans clé ni abonnement.', en: 'No document or question is sent to an external AI service: everything runs on the server, with no key or subscription.' },
      { fr: 'Un passage ou un fichier d’un espace non autorisé renvoie la même erreur 404 qu’un élément inexistant : son existence n’est pas révélée.', en: 'A passage or file from an unauthorised space returns the same 404 as a missing item: its existence is not revealed.' },
    ],
  },
  {
    slug: 'creneau',
    personal: true,
    host: 'creneau.local',
    title: { fr: 'Créneau', en: 'Créneau' },
    tagline: { fr: 'Les rendez-vous en ligne de plusieurs établissements, chacun dans son espace isolé', en: 'Online booking for many businesses, each in its own isolated space' },
    company: PERSONAL,
    kind: { fr: 'Application web multi-établissements + API', en: 'Multi-tenant web app + API' },
    status: OPEN,
    impact: [
      { value: { fr: '1 sur 8', en: '1 in 8' }, label: { fr: 'réservation acceptée quand 8 clients prennent le même créneau au même instant (test dédié)', en: 'booking accepted when 8 customers take the same slot at the same instant (dedicated test)' } },
      { value: { fr: '404', en: '404' }, label: { fr: 'pour toute lecture ou écriture vers un autre établissement : filtre Hibernate + garde JPA, testés', en: 'for any read or write to another business: Hibernate filter + JPA guard, tested' } },
      { value: { fr: '24 h + 2 h', en: '24 h + 2 h' }, label: { fr: 'rappels e-mail automatiques par rendez-vous, jamais envoyés deux fois', en: 'automatic email reminders per appointment, never sent twice' } },
    ],
    tags: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'Stripe'],
    summary: {
      fr: 'Une plateforme où cliniques, garages et salons ont chacun leur page de réservation publique, leurs prestations, horaires et congés, un agenda d’équipe en glisser-déposer et des rappels automatiques, avec un abonnement gratuit ou Pro.',
      en: 'A platform where clinics, garages and salons each get a public booking page, services, opening hours and time off, a drag-and-drop team calendar and automatic reminders, with a free or Pro subscription.',
    },
    purpose: {
      fr: 'Un réseau de petits établissements perd du chiffre d’affaires à cause des rendez-vous oubliés et des agendas papier. Créneau leur donne une seule application, partagée mais cloisonnée : chaque établissement ne voit jamais les données des autres, ce que vérifie un test automatique et une page de démonstration en direct.',
      en: 'A network of small businesses loses revenue to forgotten appointments and paper diaries. Créneau gives them a single shared yet partitioned application: no business ever sees another’s data, as checked by an automated test and a live demo page.',
    },
    features: [
      {
        title: { fr: 'Isolation multi-tenant', en: 'Multi-tenant isolation' },
        text: {
          fr: 'Chaque ligne porte etablissement_id ; un filtre Hibernate est activé à chaque transaction, et un écouteur JPA bloque aussi les chargements par identifiant. Tout accès à un autre établissement répond 404.',
          en: 'Every row carries etablissement_id; a Hibernate filter is enabled in every transaction, and a JPA listener also blocks loads by id. Any access to another business returns 404.',
        },
      },
      {
        title: { fr: 'Créneaux sans conflit', en: 'Conflict-free slots' },
        text: {
          fr: 'Calcul pur et testé : plages et pause de midi, congés, délai de prévenance, changements d’heure. Réservations concurrentes : verrou optimiste sur l’agenda et contrainte d’exclusion PostgreSQL.',
          en: 'Pure, tested computation: opening ranges and lunch break, time off, notice period, DST changes. Concurrent bookings: optimistic lock on the diary plus a PostgreSQL exclusion constraint.',
        },
      },
      {
        title: { fr: 'Réservation publique', en: 'Public booking page' },
        text: {
          fr: 'Une page /e/<établissement> : prestation, employé ou « sans préférence », créneaux réellement libres de la semaine, inscription du client en quatre champs.',
          en: 'A /e/<business> page: service, staff member or “no preference”, truly free slots of the week, customer sign-up in four fields.',
        },
      },
      {
        title: { fr: 'Agenda en glisser-déposer', en: 'Drag-and-drop calendar' },
        text: {
          fr: 'Vues jour (une colonne par employé) et semaine avec Angular CDK : déplacer un rendez-vous, le confier à un collègue, statuts absent ou annulé, export iCal.',
          en: 'Day (one column per staff member) and week views with Angular CDK: move an appointment, hand it to a colleague, no-show or cancelled status, iCal export.',
        },
      },
      {
        title: { fr: 'Rappels et e-mails', en: 'Reminders and emails' },
        text: {
          fr: 'Tâche planifiée Spring : confirmation, rappel la veille et deux heures avant, horodatés pour ne jamais partir deux fois ; visibles dans Mailpit en local.',
          en: 'Spring scheduled task: confirmation, reminder the day before and two hours before, timestamped so they never go twice; visible in Mailpit locally.',
        },
      },
      {
        title: { fr: 'Abonnement et statistiques', en: 'Subscription and statistics' },
        text: {
          fr: 'Plan gratuit limité à un employé, plan Pro via Stripe Checkout en mode test (ou paiement simulé sans clé) ; taux de no-show, de remplissage et chiffre d’affaires.',
          en: 'Free plan limited to one staff member, Pro plan via Stripe Checkout in test mode (or simulated payment without a key); no-show rate, occupancy rate and revenue.',
        },
      },
    ],
    stack: [
      { label: { fr: 'Serveur', en: 'Server' }, value: 'Java 21 · Spring Boot 3 · Spring Security (JWT) · Spring Data JPA · tâches planifiées' },
      { label: { fr: 'Base de données', en: 'Database' }, value: 'PostgreSQL 16 · Flyway · filtre Hibernate multi-tenant · contrainte d’exclusion gist' },
      { label: { fr: 'Interface', en: 'UI' }, value: 'Angular 19 (composants autonomes, signals) · Angular Material · CDK drag-drop' },
      { label: { fr: 'Services', en: 'Services' }, value: 'Mailpit (e-mails de test) · Stripe Checkout en mode test (option)' },
      { label: { fr: 'Qualité & déploiement', en: 'Quality & deployment' }, value: 'JUnit 5 · Testcontainers · Jest · Playwright · GitHub Actions · Docker Compose' },
    ],
    security: [
      { fr: 'Isolation entre établissements en trois couches (jeton signé, filtre Hibernate, garde JPA), démontrée sur une page dédiée et par un test qui tente toutes les attaques.', en: 'Isolation between businesses in three layers (signed token, Hibernate filter, JPA guard), shown on a dedicated page and by a test trying every attack.' },
      { fr: 'Instants stockés en UTC, affichés dans le fuseau de l’établissement ; aucune heure inexistante proposée lors du passage à l’heure d’été.', en: 'Instants stored in UTC, shown in the business’s time zone; no non-existent time is offered on the DST change.' },
    ],
  },
]
