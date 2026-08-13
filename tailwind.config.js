/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oni: {
          bg: '#0A0A0E',       // Negro profundo tech
          card: '#120F1D',     // Violeta oscuro acrílico
          border: '#2A1F45',   // Borde acentuado
          purple: '#9D4EDD',   // Violeta Neón principal
          fuchsia: '#F72585',  // Magenta Neón secundario
          glow: '#7B2CBF',     // Glow suave de fondo
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}