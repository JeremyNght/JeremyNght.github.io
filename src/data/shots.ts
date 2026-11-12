// Fichier généré à partir de DOCS/dossier-applications.html (captures des applications)
export type Shot = { path: string; fr: string; en: string; h: number }
export const SHOTS: Record<string, { shots: Shot[]; cover: number[] }> = {
  "crm-terrain": {
    "shots": [
      {
        "path": "/dashboard",
        "fr": "Tableau de bord admin : état du système et activité",
        "en": "Admin dashboard: system health and live activity",
        "h": 800
      },
      {
        "path": "/carte",
        "fr": "Carte interactive (Leaflet/OpenStreetMap) : 3 clients géocodés en direct (Nantes, Lyon, Toulouse) via l'API Adresse du gouvernement",
        "en": "Interactive map (Leaflet / OpenStreetMap): customers geocoded live",
        "h": 800
      },
      {
        "path": "/calendar",
        "fr": "Vue calendrier des visites et actions",
        "en": "Calendar of visits and follow-up actions",
        "h": 800
      },
      {
        "path": "/visites",
        "fr": "Liste des visites : visite planifiée chez un client",
        "en": "Visit list: planned visit at a customer site",
        "h": 800
      },
      {
        "path": "/clients",
        "fr": "Clients & prospects",
        "en": "Customers & prospects",
        "h": 800
      },
      {
        "path": "/actions",
        "fr": "Suivi des actions : relance devis PAC",
        "en": "Follow-up actions pipeline: quote reminder",
        "h": 800
      },
      {
        "path": "/dashboard (rôle Chef d'agence)",
        "fr": "Vue « responsable » : performance d'équipe, classement des commerciaux de l'agence",
        "en": "Branch manager view: team performance and sales rep ranking",
        "h": 800
      },
      {
        "path": "/dashboard (rôle Directeur de région)",
        "fr": "Vue élargie à la région : ajoute « Statistiques par site » et « Top sites »",
        "en": "Regional director view: adds per-site statistics and top sites",
        "h": 800
      },
      {
        "path": "/dashboard (rôle Directeur commercial)",
        "fr": "Vue la plus large : « Toutes les visites », tous commerciaux confondus",
        "en": "Sales director view: every visit, all sales reps",
        "h": 800
      },
      {
        "path": "/dashboard (rôle Commercial)",
        "fr": "Même tableau de bord vu par un compte Commercial : menu réduit (pas d'Utilisateurs ni d'Outils dev)",
        "en": "Same dashboard seen by a sales rep: reduced menu",
        "h": 800
      },
      {
        "path": "/users",
        "fr": "Annuaire des utilisateurs (rôle Admin uniquement)",
        "en": "User directory (admin only)",
        "h": 800
      },
      {
        "path": "/settings",
        "fr": "Paramètres",
        "en": "Settings: PWA install guide for iOS, Android and desktop",
        "h": 800
      },
      {
        "path": "/dev-tools",
        "fr": "Outils développeur (explorateur de base, tests)",
        "en": "Developer tools (database explorer, tests)",
        "h": 800
      },
      {
        "path": "/login",
        "fr": "Connexion",
        "en": "Sign in",
        "h": 800
      },
      {
        "path": "/register",
        "fr": "Inscription (email vérifié contre X3)",
        "en": "Sign up: email checked against Sage X3",
        "h": 800
      }
    ],
    "cover": [
      0,
      1,
      2
    ]
  },
  "inventaires": {
    "shots": [
      {
        "path": "/accueil",
        "fr": "Tableau de bord : inventaires, statuts et progression",
        "en": "Dashboard: sample inventories, statuses and progress",
        "h": 800
      },
      {
        "path": "/emplacements",
        "fr": "Gestion des emplacements : arborescence Allée → Rack → Niveau → Emplacement d’un site, avec type (Palette, Bac, Casier) et actions par nœud",
        "en": "Location management: Aisle > Rack > Level > Location tree",
        "h": 800
      },
      {
        "path": "/compte",
        "fr": "Écran de comptage (rôle Compteur) : liste des articles à compter à gauche, articles déjà comptés à droite avec référence, désignation et quantité",
        "en": "Counting screen (Counter role): items to count and items already counted",
        "h": 800
      },
      {
        "path": "/recompte",
        "fr": "Écran de recomptage : emplacements à recompter (A R01 N1 EA…), articles concernés à droite et formulaire de saisie (référence, n° de série, quantité)",
        "en": "Recount screen: locations to recount and entry form",
        "h": 800
      },
      {
        "path": "/createInventaire",
        "fr": "Création d'un inventaire (choix du type)",
        "en": "Create an inventory (choose the type)",
        "h": 800
      },
      {
        "path": "/historique",
        "fr": "Historique des inventaires",
        "en": "Inventory history",
        "h": 800
      },
      {
        "path": "/admin",
        "fr": "Administration des utilisateurs",
        "en": "User administration: sample accounts",
        "h": 800
      },
      {
        "path": "/statTournant",
        "fr": "Statistiques des inventaires tournants : taux de complétion et filtres par famille",
        "en": "Cycle count statistics: completion rate and family filters",
        "h": 800
      },
      {
        "path": "/config",
        "fr": "Assistant de configuration de la douchette (scanner) : autonome, sans base",
        "en": "Barcode scanner configuration wizard",
        "h": 800
      },
      {
        "path": "/",
        "fr": "Écran de connexion",
        "en": "Sign in",
        "h": 800
      },
      {
        "path": "/reset-password",
        "fr": "Réinitialisation / création de compte",
        "en": "Password reset / account creation",
        "h": 800
      }
    ],
    "cover": [
      0,
      1,
      2
    ]
  },
  "ticketing-sav": {
    "shots": [
      {
        "path": "/",
        "fr": "Liste des tickets SAV",
        "en": "After-sales ticket list",
        "h": 800
      },
      {
        "path": "/ (vue cartes)",
        "fr": "Liste des tickets : vue cartes (alternative à la vue tableau)",
        "en": "Ticket list: card view (alternative to the table view)",
        "h": 800
      },
      {
        "path": "/tickets/:id",
        "fr": "Détail complet d’un ticket (équipements, appel, dossier fournisseur)",
        "en": "Full ticket detail (equipment, call, supplier file)",
        "h": 800
      },
      {
        "path": "/numeros-serie/:noSerie",
        "fr": "« Vie » d'un numéro de série à travers les tickets liés",
        "en": "Life of a serial number across linked tickets",
        "h": 800
      },
      {
        "path": "/tickets/nouveau",
        "fr": "Création d'un ticket",
        "en": "Create a ticket",
        "h": 800
      },
      {
        "path": "/utilisateurs",
        "fr": "Gestion des utilisateurs",
        "en": "User management",
        "h": 800
      },
      {
        "path": "/back-office",
        "fr": "Back-office (filiales, modèles)",
        "en": "Back office (subsidiaries, templates)",
        "h": 800
      },
      {
        "path": "/rapports",
        "fr": "Générateur de rapports",
        "en": "Report builder",
        "h": 800
      },
      {
        "path": "/garanties-fabricant",
        "fr": "Robot garanties fabricant (mode test)",
        "en": "Manufacturer warranty robot (test mode)",
        "h": 800
      },
      {
        "path": "/ (rôle technicien)",
        "fr": "Même liste vue par un compte technicien",
        "en": "Same list seen by a technician account",
        "h": 800
      },
      {
        "path": "/utilisateurs (rôle technicien)",
        "fr": "Accès refusé : « Cette page est réservée aux administrateurs »",
        "en": "Access denied: page reserved for administrators",
        "h": 800
      },
      {
        "path": "/login",
        "fr": "Connexion",
        "en": "Sign in",
        "h": 800
      },
      {
        "path": "/creer-un-compte",
        "fr": "Création de compte : rattachement à une filiale",
        "en": "Account creation: linked to a subsidiary",
        "h": 800
      }
    ],
    "cover": [
      0,
      2,
      1
    ]
  },
  "recherche-series": {
    "shots": [
      {
        "path": "/",
        "fr": "Recherche multi-critères : résultat retrouvé par nom de client",
        "en": "Multi-criteria search: result found by customer name",
        "h": 800
      },
      {
        "path": "/ (détail)",
        "fr": "Fiche complète d'un article sérialisé (commande, client, fournisseur, livraison)",
        "en": "Full record of a serialised item (order, customer, supplier, delivery)",
        "h": 800
      },
      {
        "path": "/admin",
        "fr": "Administration SFTP : 1 fichier importé (3 lignes), 1 en erreur",
        "en": "SFTP administration: imported and rejected files",
        "h": 800
      },
      {
        "path": "/admin (Fichiers en erreur)",
        "fr": "Fichier rejeté : nomenclature de nom invalide, corrigeable depuis l'interface",
        "en": "Rejected file: invalid file name, fixable from the interface",
        "h": 800
      },
      {
        "path": "/admin (Connexion SFTP)",
        "fr": "Informations de connexion FileZilla pour le dépôt de fichiers",
        "en": "SFTP connection details for file drops",
        "h": 800
      }
    ],
    "cover": [
      0,
      1,
      4
    ]
  },
  "rendez-vous-sav": {
    "shots": [
      {
        "path": "/admin",
        "fr": "Tableau de bord avec KPI (5 RDV, taux d'annulation, évolution 12 semaines)",
        "en": "Dashboard with KPIs (appointments, cancellation rate, 12-week trend)",
        "h": 800
      },
      {
        "path": "/admin/rendez-vous",
        "fr": "Rendez-vous : statuts Confirmé, Annulé, Terminé",
        "en": "Appointments: Confirmed, Cancelled, Completed statuses",
        "h": 800
      },
      {
        "path": "/admin/rendez-vous (vue Semaine)",
        "fr": "Vue calendrier hebdomadaire",
        "en": "Weekly calendar view",
        "h": 800
      },
      {
        "path": "/admin/rendez-vous (vue Mois)",
        "fr": "Vue calendrier mensuelle : RDV confirmés, annulés (barrés) et terminés",
        "en": "Monthly calendar view: confirmed, cancelled (struck) and completed",
        "h": 800
      },
      {
        "path": "/admin/services",
        "fr": "Catalogue des services : 5 services répartis en 3 catégories",
        "en": "Service catalogue: 5 services in 3 categories",
        "h": 800
      },
      {
        "path": "/espace-technicien",
        "fr": "Agenda technicien : 3 rendez-vous à venir avec coordonnées client",
        "en": "Technician agenda: upcoming appointments with customer details",
        "h": 800
      },
      {
        "path": "/espace-technicien/horaires",
        "fr": "Horaires du technicien : plage 8h-18h configurée",
        "en": "Technician working hours",
        "h": 860
      },
      {
        "path": "/espace-technicien/conges",
        "fr": "Congés du technicien : 3 jours posés (congés payés, formation)",
        "en": "Technician time off",
        "h": 800
      },
      {
        "path": "/admin/jours-feries",
        "fr": "Jours fériés : les 8 fériés français bloquant la réservation",
        "en": "Public holidays blocking bookings",
        "h": 800
      },
      {
        "path": "/admin/equipe",
        "fr": "Vue équipe",
        "en": "Team overview",
        "h": 800
      },
      {
        "path": "/admin/clients",
        "fr": "Fiche client",
        "en": "Customer record",
        "h": 800
      },
      {
        "path": "/calendrier — étape 2/5",
        "fr": "Parcours public : choix du service dans la catégorie",
        "en": "Public booking: choose the service",
        "h": 800
      },
      {
        "path": "/calendrier — étape 3/5",
        "fr": "Parcours public : créneaux réellement disponibles (15:30, 16:15, 17:00)",
        "en": "Public booking: genuinely available time slots",
        "h": 800
      },
      {
        "path": "/rendez-vous/:token",
        "fr": "Vue client libre-service (sans compte) : consultation du rendez-vous via lien sécurisé",
        "en": "Self-service customer view (no account) via a secure link",
        "h": 800
      },
      {
        "path": "/login",
        "fr": "Connexion administrateur / technicien",
        "en": "Admin / technician sign in",
        "h": 800
      },
      {
        "path": "* (route inconnue)",
        "fr": "Page 404 « Page introuvable »",
        "en": "404 page not found",
        "h": 800
      }
    ],
    "cover": [
      0,
      3,
      12
    ]
  },
  "factures-fournisseurs": {
    "shots": [
      {
        "path": "/ (authentifié)",
        "fr": "Tableau des factures : export et tag « Budget SI »",
        "en": "Invoice table: export and IT budget tagging",
        "h": 800
      },
      {
        "path": "/statistics.html",
        "fr": "Statistiques : évolution mensuelle, top fournisseurs, répartition par société",
        "en": "Statistics: monthly trend, top suppliers, split by company",
        "h": 1865
      },
      {
        "path": "/",
        "fr": "Écran de connexion",
        "en": "Sign in",
        "h": 800
      },
      {
        "path": "/ (Inscription)",
        "fr": "Inscription : étape 1 (vérification email vs Sage X3)",
        "en": "Sign up, step 1 (email checked against Sage X3)",
        "h": 800
      },
      {
        "path": "/ (Mot de passe oublié)",
        "fr": "Réinitialisation du mot de passe : étape 1",
        "en": "Password reset, step 1",
        "h": 800
      }
    ],
    "cover": [
      0,
      1,
      2
    ]
  },
  "stocks-securite": {
    "shots": [
      {
        "path": "/cbn-editor",
        "fr": "Éditeur en grille (Handsontable) des modifications avant import Sage X3 : 5 articles chargés",
        "en": "Grid editor (Handsontable) of changes before the Sage X3 import",
        "h": 800
      },
      {
        "path": "/request-cbn",
        "fr": "Finalisation d'une demande : saisie des nouveaux seuils par article",
        "en": "Finalising a request: new thresholds per item",
        "h": 800
      },
      {
        "path": "/tableau-de-bord",
        "fr": "Tableau de bord (rôle admin) : sélection des paramètres de demande de stock",
        "en": "Dashboard (admin): request parameter selection",
        "h": 800
      },
      {
        "path": "/historique",
        "fr": "Historique des demandes : arborescence par site",
        "en": "Request history: tree by site",
        "h": 800
      },
      {
        "path": "/administration",
        "fr": "Gestion des utilisateurs et demandes en attente",
        "en": "User management: pending requests",
        "h": 801
      },
      {
        "path": "/print",
        "fr": "Aperçu et impression des étiquettes articles (code-barres) : 3 étiquettes générées",
        "en": "Label preview and printing (barcodes)",
        "h": 800
      },
      {
        "path": "/tableau-de-bord (rôle user)",
        "fr": "Même connexion vue par un compte non-admin : l'onglet « Administration » disparaît de la barre de navigation",
        "en": "Same screen for a non-admin user: no Administration tab",
        "h": 800
      },
      {
        "path": "/pages/auth.html",
        "fr": "Écran de connexion",
        "en": "Sign in",
        "h": 800
      }
    ],
    "cover": [
      0,
      1,
      5
    ]
  },
  "adressage-entrepot": {
    "shots": [
      {
        "path": "/ (onglet X3 à traiter)",
        "fr": "File d'attente des emplacements remontés de Sage X3 : détection automatique mono/multi-articles, statut bloqué, bouton « Traiter » par ligne",
        "en": "Queue of locations coming from Sage X3: automatic single/multi-item detection",
        "h": 800
      },
      {
        "path": "/ (traitement multi-articles)",
        "fr": "Traitement d'un emplacement multi-articles : l'application détecte 3 articles sur A15-02-02-A et propose de l'éclater automatiquement en 3 emplacements mono",
        "en": "Processing a multi-item location: split into 3 single-item locations",
        "h": 800
      },
      {
        "path": "/",
        "fr": "Emplacements traités",
        "en": "Processed locations",
        "h": 800
      },
      {
        "path": "/ (onglet Articles)",
        "fr": "Onglet Articles",
        "en": "Items tab",
        "h": 800
      },
      {
        "path": "/emplacements/1",
        "fr": "Détail d'un emplacement (palette, hauteur, historique)",
        "en": "Location detail (pallet, height, history)",
        "h": 800
      },
      {
        "path": "/articles/1",
        "fr": "Détail d'un article (picking fixe, type de palette)",
        "en": "Item detail (fixed picking, pallet type)",
        "h": 800
      },
      {
        "path": "/utilisateurs",
        "fr": "Gestion des utilisateurs : les 4 rôles créés via le vrai formulaire admin",
        "en": "User management: the 4 roles",
        "h": 800
      },
      {
        "path": "/administration/donnees",
        "fr": "Navigateur de base de données",
        "en": "Database browser",
        "h": 800
      },
      {
        "path": "/ (rôle Consultation)",
        "fr": "Même écran vu par un compte « Consultation » : menu réduit, pas d'onglets Utilisateurs/Base de données",
        "en": "Same screen seen by a read-only account: reduced menu",
        "h": 800
      },
      {
        "path": "/ (rôle Modification)",
        "fr": "Rôle « Modification » : export + onglet « Emplacements X3 à traiter » visibles",
        "en": "Edit role: export and X3 queue visible",
        "h": 800
      },
      {
        "path": "/ (rôle Consultation + export)",
        "fr": "Rôle « Consultation + export » : export visible, mais pas l'onglet X3",
        "en": "Read-only + export role: export visible, no X3 tab",
        "h": 800
      }
    ],
    "cover": [
      1,
      0,
      4
    ]
  },
  "signatures-email": {
    "shots": [
      {
        "path": "/",
        "fr": "Générateur : signature complète générée en direct (8/8 champs)",
        "en": "Generator: full signature generated live",
        "h": 800
      },
      {
        "path": "/admin/dashboard",
        "fr": "Tableau de bord admin : agences",
        "en": "Admin dashboard: agencies",
        "h": 800
      },
      {
        "path": "/admin/dashboard (Bureaux)",
        "fr": "Bureaux, rattachés chacun à une agence",
        "en": "Offices, each linked to an agency",
        "h": 800
      },
      {
        "path": "/admin/dashboard (Utilisateurs)",
        "fr": "Gestion des comptes administrateurs",
        "en": "Admin account management",
        "h": 800
      },
      {
        "path": "/admin",
        "fr": "Connexion administrateur",
        "en": "Admin sign in",
        "h": 800
      }
    ],
    "cover": [
      0,
      1,
      2
    ]
  }
}
