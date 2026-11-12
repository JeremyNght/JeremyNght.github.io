# Portfolio · Jérémy Nouhaillaguet

React 19 + Vite + TypeScript, animations avec Motion. Langue (FR/EN) et thème (clair/sombre) détectés depuis le navigateur, puis mémorisés si le visiteur les change.

```bash
npm install
npm run dev      # développement : http://localhost:5280
npm run build    # version de production dans dist/ (avec pré-rendu et référencement)
npm run preview  # tester la version de production
```

## Mise en ligne sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` compile et publie le site à chaque push sur `main`.

1. Créer sur GitHub un dépôt nommé **`<pseudo>.github.io`** (le site utilise des chemins absolus et doit être servi à la racine).
2. Pousser ce dossier sur la branche `main`.
3. Dans le dépôt : **Settings → Pages → Source : GitHub Actions**.
4. Le site est en ligne sur `https://<pseudo>.github.io` après le premier déploiement (onglet Actions).

L'adresse utilisée pour les aperçus de lien et le sitemap est fournie automatiquement par GitHub ; `SITE_URL` dans `src/data/site.ts` ne sert qu'en dehors de GitHub Pages. Le dossier `DOCS/` (documents personnels) est exclu par `.gitignore`.

## Où modifier quoi

| Contenu | Fichier |
| --- | --- |
| Textes de l'interface (FR/EN) | `src/i18n/ui.ts` |
| Expériences, formation, compétences, email, LinkedIn | `src/data/profile.ts` |
| Projets (descriptions, chiffres d'impact, stack) | `src/data/projects.ts` |
| Légendes des captures | `src/data/shots.ts` |
| Conseils de Mini‑Jérémy | `src/components/Mascot.tsx` |
| Dessin de Mini‑Jérémy | `src/components/MiniMe.tsx` |
| Captures d'écran (anonymisées) | `public/projects/<projet>/NN.webp`, `NN-720.webp`, `NN-thumb.webp` |
| Images d'aperçu de lien (1200×630) | `public/og/` |
| CV téléchargeables (FR / EN) | `public/cv/` |
| Photo, signature/logo | `public/brand/` |
| Couleurs, typographies | variables en haut de `src/styles.css` |
| Logos de technologies | `scripts/icons.mjs` puis `node scripts/icons.mjs` |

## Ce que fait le build

1. `vite build` compile l'application.
2. `scripts/seo.mjs` pré-rend chaque page en HTML (affichage immédiat, contenu lisible par Google), ajoute les balises de partage, les données structurées, `sitemap.xml` et `robots.txt`.

## Déploiement

Site statique (`dist/`), publié sur GitHub Pages (voir plus haut), et aussi configuré pour Netlify (`public/_redirects`, `public/_headers`) et Vercel (`vercel.json`), avec mise en cache longue des fichiers versionnés.

## Petits secrets

- Ouvrir la console du navigateur.
- Taper ↑ ↑ ↓ ↓ ← → ← → B A.
- Visiter une page qui n'existe pas.
