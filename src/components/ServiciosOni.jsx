import { motion } from 'framer-motion';

const SERVICIOS = [
  {
    id: 'SYS_01',
    kanji: 'ウェブ',
    icono: 'fa-code',
    titulo: 'Desarrollo Web & Experiencias Digitales',
    descripcion: 'Sitios institucionales, landing pages e interfaces de alto rendimiento que combinan estrategia, identidad visual y una experiencia fluida en cualquier dispositivo.',
    tags: ['Web Corporativa', 'E-commerce', 'UI/UX', 'Responsive'],
  },
  {
    id: 'SYS_02',
    kanji: '基盤',
    icono: 'fa-database',
    titulo: 'Plataformas, Datos & Sistemas de Gestión',
    descripcion: 'Productos digitales con información centralizada, catálogos dinámicos y paneles de administración diseñados para simplificar la operación cotidiana.',
    tags: ['Plataformas', 'Integraciones', 'Datos', 'Paneles'],
  },
  {
    id: 'SYS_03',
    kanji: '知能',
    icono: 'fa-robot',
    titulo: 'IA & Automatizaciones Inteligentes',
    descripcion: 'Agentes conversacionales y flujos automatizados para acelerar la atención, captar oportunidades y conectar procesos comerciales con tus herramientas actuales.',
    tags: ['AI Agents', 'WhatsApp', 'CRM', 'Automatización'],
  },
  {
    id: 'SYS_04',
    kanji: '携帯',
    icono: 'fa-mobile-screen-button',
    titulo: 'Desarrollo de Aplicaciones Móviles',
    descripcion: 'Soluciones a medida para iOS y Android, desde la idea y el prototipo hasta la publicación, el mantenimiento y la evolución continua.',
    tags: ['iOS & Android', 'Producto Digital', 'UI/UX', 'Soporte Evolutivo'],
    destacado: true,
  },
];

export default function ServiciosOni() {
  return (
    <section id="servicios" className="relative py-28 px-6 bg-[#0A0A0E] overflow-hidden border-t border-purple-500/10 scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] sm:text-[380px] font-bold text-purple-900/5 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        サービス
      </div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-purple-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20">
            // サービス Soluciones Digitales
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white [font-family:'Orbitron',sans-serif]">
            Especialidades & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Servicios</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Combinamos estrategia, diseño y desarrollo para crear soluciones digitales que simplifican procesos, conectan con las personas y acompañan el crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICIOS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative bg-[#120F1D]/80 border p-8 rounded-2xl backdrop-blur-xl hover:shadow-[0_0_30px_rgba(157,78,221,0.2)] transition-all duration-300 flex flex-col justify-between min-h-[360px] ${
                item.destacado ? 'border-purple-500/50 hover:border-fuchsia-400/80' : 'border-purple-500/20 hover:border-purple-500/60'
              }`}
            >
              {item.destacado && (
                <span className="absolute top-0 right-0 px-3 py-2 rounded-bl-xl rounded-tr-2xl bg-purple-600/20 border-l border-b border-purple-500/40 text-[9px] font-mono uppercase tracking-widest text-purple-300">
                  Nuevo servicio
                </span>
              )}

              <span className="absolute top-5 right-7 text-3xl font-bold text-purple-500/10 [font-family:'Noto_Sans_JP',sans-serif]">
                {item.kanji}
              </span>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <i className={`fa-solid ${item.icono}`} aria-hidden="true"></i>
                  </div>
                  <span className="text-xs font-mono text-purple-400/60 font-bold tracking-widest">{item.id}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors [font-family:'Orbitron',sans-serif]">
                  {item.titulo}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">{item.descripcion}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/10">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-purple-300/80 bg-[#0A0A0E] px-2.5 py-1 rounded border border-purple-500/20">
                      #{tag}
                    </span>
                  ))}
                </div>
                {item.destacado && (
                  <a href="#apps-moviles" className="inline-flex items-center gap-2 mt-6 text-xs font-mono font-bold uppercase tracking-wider text-purple-300 hover:text-fuchsia-300 transition-colors">
                    Explorar servicio <i className="fa-solid fa-arrow-down text-[10px]" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
