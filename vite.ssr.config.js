import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build solo para el prerender (scripts/prerender.js): sin el plugin de Cloudflare,
// que es para el Worker y no hace falta para generar el HTML.
export default defineConfig({
  plugins: [react()],
  build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', emptyOutDir: true },
})
