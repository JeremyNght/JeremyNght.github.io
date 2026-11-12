/**
 * Rendu au moment du build : produit le HTML de chaque page (en français) pour
 * un affichage immédiat et un contenu lisible par les moteurs de recherche.
 */
import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { I18nProvider } from './i18n/I18n'
import { ThemeProvider } from './hooks/useTheme'

export async function render(url: string) {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <ThemeProvider>
          <I18nProvider initial="fr">
            <App />
          </I18nProvider>
        </ThemeProvider>
      </StaticRouter>
    </StrictMode>,
  )
  return new Response(prelude).text()
}
