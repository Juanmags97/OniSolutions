import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/OniSolutions/', // <-- Reemplazá 'nombre-de-tu-repositorio' por el nombre tal cual está en GitHub (ej: /OniSolutions/)
})