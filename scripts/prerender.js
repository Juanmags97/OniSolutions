// Después de `vite build`, mete el HTML ya renderizado en dist/index.html y genera dist/sitemap.xml.
// Así Google y las IAs (ChatGPT, Perplexity) leen el contenido sin tener que ejecutar JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const URL_SITIO = 'https://www.onisolutions.com.ar/'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const ROOT_TAG = '<div id="root"></div>'
if (!template.includes(ROOT_TAG)) throw new Error('No se encontró <div id="root"></div> en dist/index.html')

const html = render()
fs.writeFileSync(path.join(dist, 'index.html'), template.replace(ROOT_TAG, `<div id="root">${html}</div>`))

const hoy = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${URL_SITIO}</loc><lastmod>${hoy}</lastmod></url>\n</urlset>\n`,
)

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerender OK: index.html (${html.length} chars), sitemap.xml`)
