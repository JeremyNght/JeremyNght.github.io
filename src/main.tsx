import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter'
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/fraunces/opsz-italic.css'
import '@fontsource/caveat/500.css'
import './styles.css'
import App from './App'
import { I18nProvider } from './i18n/I18n'
import { ThemeProvider } from './hooks/useTheme'

// Petit mot pour les curieux qui ouvrent la console
console.log(
  '%cSalut toi 👋%c\nTu inspectes mon code ? On devrait se parler : jeremynght@icloud.com\n(Psst : essaie ↑ ↑ ↓ ↓ ← → ← → B A)',
  'font: 600 20px Georgia, serif; color: #303a9c',
  'font: 13px system-ui, sans-serif; color: #555',
)

const app = (
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)

// Le HTML pré-rendu est en français : on le reprend tel quel pour un visiteur
// francophone, sinon on affiche directement la version anglaise.
const root = document.getElementById('root')!
const samePage = (root.dataset.path ?? '').replace(/\/$/, '') === location.pathname.replace(/\/$/, '')
if (root.dataset.ssr === 'fr' && samePage && document.documentElement.lang === 'fr') {
  hydrateRoot(root, app)
} else {
  root.textContent = ''
  createRoot(root).render(app)
}
