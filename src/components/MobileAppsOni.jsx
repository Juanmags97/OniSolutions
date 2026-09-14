import { motion } from 'framer-motion';

const ETAPAS = [
  {
    numero: '01',
    kanji: '構想',
    titulo: 'Conceptualización',
    descripcion: 'Alineamos objetivos, usuarios, funcionalidades y alcance para transformar la idea inicial en una hoja de ruta concreta.',
  },
  {
    numero: '02',
    kanji: '設計',
    titulo: 'Prototipado & UI/UX',
    descripcion: 'Diseñamos flujos claros y una interfaz consistente con tu marca, validando la experiencia antes de avanzar al desarrollo.',
  },
  {
    numero: '03',
    kanji: '開発',
    titulo: 'Desarrollo & Validación',
    descripcion: 'Construimos una aplicación estable, veloz y escalable, con pruebas continuas en distintos tamaños de pantalla y escenarios de uso.',
  },
  {
    numero: '04',
    kanji: '公開',
    titulo: 'Publicación en tiendas',
    descripcion: 'Preparamos los materiales y acompañamos el lanzamiento en App Store y Google Play hasta la salida oficial.',
  },
];

const BENEFICIOS = [
  ['fa-users', 'Mejor experiencia de usuario', 'Interacciones simples, navegación intuitiva y una experiencia diseñada para generar adopción y permanencia.'],
  ['fa-gears', 'Procesos más ágiles', 'Digitalización de tareas operativas, acceso inmediato a la información y conexión entre equipos y clientes.'],
  ['fa-gauge-high', 'Rendimiento para crecer', 'Una base sólida para responder con fluidez a nuevas funcionalidades, más usuarios y evolución comercial.'],
  ['fa-arrows-rotate', 'Evolución continua', 'Mantenimiento, actualizaciones y mejoras planificadas para que la aplicación siga vigente después del lanzamiento.'],
];

export default function MobileAppsOni() {
  return (
    <section id="apps-moviles" className="relative py-28 px-6 bg-[#0D0B12] overflow-hidden border-t border-purple-500/10 scroll-mt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-24 right-0 w-[480px] h-[480px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-purple-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20">
              // 携帯 Desarrollo de Apps Móviles
            </span>
            <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-white [font-family:'Orbitron',sans-serif]">
              TU NEGOCIO,{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600">
                EN MOVIMIENTO.
              </span>
            </h2>
            <p className="mt-6 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Diseñamos y desarrollamos aplicaciones a medida para iOS y Android, enfocadas en optimizar la experiencia de tus usuarios o digitalizar procesos clave de tu empresa.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['iOS', 'Android', 'Producto a medida', 'De idea a publicación'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-purple-300/90 bg-[#0A0A0E] px-3 py-2 rounded border border-purple-500/20">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://www.instagram.com/0ni.solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-9 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 font-bold text-xs uppercase tracking-widest text-white shadow-[0_0_25px_rgba(157,78,221,0.35)] hover:shadow-[0_0_35px_rgba(157,78,221,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 [font-family:'Orbitron',sans-serif]"
            >
              Contanos tu idea <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[520px] flex items-center justify-center"
            aria-label="Representación visual de una aplicación móvil"
          >
            <div className="absolute w-80 h-80 rounded-full border border-purple-500/20" />
            <div className="absolute w-[390px] h-[390px] rounded-full border border-dashed border-purple-500/10" />

            <div className="relative w-[270px] h-[500px] rounded-[2.8rem] border border-purple-400/30 bg-[#08080C] p-2 shadow-[0_0_80px_rgba(157,78,221,0.25)] rotate-[4deg]">
              <div className="relative h-full rounded-[2.35rem] overflow-hidden border border-purple-500/20 bg-[#0A0A0E]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-20" />
                <div className="absolute -top-16 -right-20 w-64 h-64 rounded-full bg-purple-600/20 blur-[70px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                <div className="relative z-10 h-full p-7 pt-12 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs tracking-wider [font-family:'Orbitron',sans-serif]">ONI<span className="text-purple-400">//APP</span></span>
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#e879f9]" />
                  </div>

                  <div className="mt-16">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-purple-400">Mobile Product // 04</span>
                    <h3 className="mt-4 text-3xl font-black leading-[1.05] [font-family:'Orbitron',sans-serif]">TODO LO QUE IMPORTA, MÁS CERCA.</h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-500">Experiencias simples para decisiones rápidas.</p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl border border-purple-500/20 bg-purple-950/20">
                      <i className="fa-solid fa-mobile-screen text-purple-400" aria-hidden="true"></i>
                      <span className="block mt-2 text-[7px] font-mono uppercase tracking-wider text-neutral-400">Experiencia móvil</span>
                    </div>
                    <div className="p-3 rounded-xl border border-purple-500/20 bg-purple-950/20">
                      <i className="fa-solid fa-rocket text-purple-400" aria-hidden="true"></i>
                      <span className="block mt-2 text-[7px] font-mono uppercase tracking-wider text-neutral-400">Lista para crecer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="absolute left-0 sm:left-8 top-28 px-3 py-2 bg-[#0A0A0E]/90 border border-purple-500/30 rounded text-[9px] font-mono text-purple-300">iOS // 01</span>
            <span className="absolute right-0 sm:right-6 top-52 px-3 py-2 bg-[#0A0A0E]/90 border border-purple-500/30 rounded text-[9px] font-mono text-purple-300">Android // 02</span>
            <span className="absolute left-3 sm:left-12 bottom-14 px-3 py-2 bg-[#0A0A0E]/90 border border-purple-500/30 rounded text-[9px] font-mono text-purple-300">Escalable // ∞</span>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl mb-12">
            <span className="text-purple-400 text-xs font-mono uppercase tracking-widest">工程 // Un proceso de punta a punta</span>
            <h3 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight [font-family:'Orbitron',sans-serif]">
              DE LA IDEA A LAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">TIENDAS OFICIALES.</span>
            </h3>
            <p className="mt-5 text-neutral-400 text-sm leading-relaxed">
              Abordamos el producto de forma integral para que cada decisión estratégica, visual y funcional responda al mismo objetivo comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ETAPAS.map((etapa, index) => (
              <motion.article
                key={etapa.numero}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative min-h-[300px] p-6 rounded-2xl border border-purple-500/20 bg-[#120F1D]/80 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-2xl font-bold text-purple-400 [font-family:'Noto_Sans_JP',sans-serif]">{etapa.kanji}</span>
                  <span className="text-4xl font-black text-white/5 [font-family:'Orbitron',sans-serif]">{etapa.numero}</span>
                </div>
                <h4 className="mt-14 text-base font-bold uppercase tracking-wide [font-family:'Orbitron',sans-serif]">{etapa.titulo}</h4>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400">{etapa.descripcion}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-4 p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-arrows-rotate mt-1 text-purple-400" aria-hidden="true"></i>
              <div>
                <strong className="block text-sm uppercase tracking-wide [font-family:'Orbitron',sans-serif]">Mantenimiento & soporte evolutivo</strong>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400">Monitoreo, actualizaciones y nuevas funcionalidades para acompañar la evolución del producto.</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 whitespace-nowrap">Ciclo continuo // ∞</span>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
          <div>
            <span className="text-purple-400 text-xs font-mono uppercase tracking-widest">価値 // Impacto de negocio</span>
            <h3 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight [font-family:'Orbitron',sans-serif]">
              UNA APP ÚTIL HOY. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">PREPARADA PARA MAÑANA.</span>
            </h3>
            <p className="mt-5 text-neutral-400 text-sm leading-relaxed">
              Creamos productos móviles que resuelven una necesidad concreta y pueden evolucionar junto con la operación, la audiencia y las oportunidades del negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFICIOS.map(([icono, titulo, descripcion]) => (
              <article key={titulo} className="p-6 rounded-2xl border border-purple-500/20 bg-[#120F1D]/70 hover:border-purple-500/50 transition-colors">
                <i className={`fa-solid ${icono} text-purple-400 text-xl`} aria-hidden="true"></i>
                <h4 className="mt-5 text-sm font-bold uppercase tracking-wide [font-family:'Orbitron',sans-serif]">{titulo}</h4>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-400">{descripcion}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 sm:p-10 rounded-2xl border border-purple-500/30 bg-[#120F1D]/80 shadow-[0_0_50px_rgba(157,78,221,0.12)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">App Store & Google Play</span>
            <h3 className="mt-3 max-w-3xl text-2xl sm:text-3xl font-bold [font-family:'Orbitron',sans-serif]">Hagamos que tu idea llegue a las manos de tus usuarios.</h3>
          </div>
          <a
            href="https://www.instagram.com/0ni.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 font-bold text-xs uppercase tracking-widest text-white hover:shadow-[0_0_30px_rgba(157,78,221,0.5)] active:scale-[0.98] transition-all [font-family:'Orbitron',sans-serif]"
          >
            Iniciar proyecto <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
