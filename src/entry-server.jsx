// Render del lado del servidor, usado solo en el build (scripts/prerender.js)
// para que el HTML publicado ya traiga el texto de la página y Google y las IAs lo lean sin ejecutar JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
