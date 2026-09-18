import { motion } from 'framer-motion';

const PROYECTOS = [
  {
    codigo: 'PROJECT_01',
    kanji: '開発',
    titulo: 'GW Desarrollos / GW Del Sol',
    categoria: 'Desarrollo Web & Branding',
    descripcion: 'Plataforma institucional responsiva con experiencia multilenguaje, contenido audiovisual, dossier digital y conexión directa de solicitudes comerciales.',
    tags: ['Web Institucional', 'Multilenguaje', 'Contenido Digital', 'Integraciones'],
    linkText: 'Ver Proyecto // 公式サイト',
    link: 'https://gwdesarrollos.com.py/'
  },
  {
    codigo: 'PROJECT_02',
    kanji: '不動産',
    titulo: 'Plataforma Inmobiliaria & Catalogación',
    categoria: 'Plataforma & Datos',
    descripcion: 'Sistema de catálogo inmobiliario con filtros avanzados y gestión centralizada de propiedades, contenidos multimedia e inventario.',
    tags: ['Catálogo', 'Filtros', 'Base de Datos', 'Panel de Gestión'],
    linkText: 'Ver Proyecto // 詳細',
    link: 'https://juanmags97.github.io/web-inmobiliaria/',
  },
];

export default function PortfolioOni() {
  return (
    <section id="portfolio" className="relative py-28 px-6 bg-[#0A0A0E] overflow-hidden border-t border-purple-500/10 scroll-mt-20">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[200px] sm:text-[320px] font-bold text-fuchsia-900/5 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        実績
      </div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-purple-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20">
              // 実績 Portfolio & Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 [font-family:'Orbitron',sans-serif]">
              Trabajos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Recientes</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed">
            Una muestra de soluciones desarrolladas para clientes e iniciativas propias, combinando claridad, precisión y una ejecución digital de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROYECTOS.map((proyecto, index) => (
            <motion.article
              key={proyecto.codigo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-[#120F1D] border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(157,78,221,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <span className="absolute top-4 right-6 text-2xl font-bold text-purple-500/10 [font-family:'Noto_Sans_JP',sans-serif]">
                {proyecto.kanji}
              </span>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pr-8">
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">{proyecto.codigo}</span>
                  <span className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider">{proyecto.categoria}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors [font-family:'Orbitron',sans-serif]">
                  {proyecto.titulo}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{proyecto.descripcion}</p>
              </div>

              <div className="pt-8 mt-6 border-t border-purple-500/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {proyecto.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/30">
                      #{tag}
                    </span>
                  ))}
                </div>

                {proyecto.link ? (
                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-purple-300 bg-purple-950/40 border border-purple-500/30 hover:bg-purple-900/40 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-200"
                  >
                    <span>{proyecto.linkText || 'Ver Proyecto'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-neutral-500">Caso de estudio</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}