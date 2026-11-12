import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 5173 est déjà utilisé sur ce poste ; si 5280 l'est aussi, Vite prend le suivant libre
  server: { port: 5280, strictPort: false },
  preview: { port: 5281, strictPort: false },
})
