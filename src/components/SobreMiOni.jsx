import { motion } from 'framer-motion';

const CAPACIDADES = [
  { nombre: 'Web & Commerce', categoria: 'Experiencias Digitales', kanji: 'WEB' },
  { nombre: 'iOS / Android', categoria: 'Producto Móvil', kanji: 'APP' },
  { nombre: 'Sistemas de Gestión', categoria: 'Plataformas & Datos', kanji: 'DATA' },
  { nombre: 'Bots / Agents', categoria: 'Inteligencia Artificial', kanji: 'AI' },
  { nombre: 'Prototipos & UI', categoria: 'Diseño de Producto', kanji: 'UX' },
  { nombre: 'Servicios Conectados', categoria: 'Integraciones', kanji: 'API' },
];

export default function SobreMiOni() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#0A0A0E] overflow-hidden border-t border-purple-500/10 scroll-mt-20">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[220px] sm:text-[380px] font-bold text-purple-900/5 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        概要
      </div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-purple-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20">
            // 概要 Acerca de Oni Solutions
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight [font-family:'Orbitron',sans-serif]">
            Pasión por crear, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Visión sin Límites</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            <strong className="text-white">Oni Solutions</strong> nace como un emprendimiento independiente impulsado por la dedicación al diseño, la tecnología y la construcción de productos digitales de calidad.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Nos involucramos en cada etapa para entender el objetivo, definir la solución adecuada y convertirla en un producto sólido. Trabajamos con atención personalizada, código limpio y decisiones orientadas a resultados reales.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Desde una nueva presencia digital hasta una app móvil, una plataforma de gestión o un flujo automatizado, diseñamos cada proyecto para ser claro, ágil y escalable.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <span className="block text-2xl font-extrabold text-white [font-family:'Orbitron',sans-serif]">100%</span>
              <span className="text-xs font-mono text-neutral-400">Compromiso y Dedicación</span>
            </div>
            <div className="border-l-2 border-fuchsia-500 pl-4">
              <span className="block text-2xl font-extrabold text-white [font-family:'Orbitron',sans-serif]">1:1</span>
              <span className="text-xs font-mono text-neutral-400">Atención Personalizada</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#120F1D] border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl space-y-6 shadow-[0_0_40px_rgba(157,78,221,0.1)] relative"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2 [font-family:'Orbitron',sans-serif]">
            <i className="fa-solid fa-layer-group text-purple-400 text-base" aria-hidden="true"></i>
            Capacidades Principales
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPACIDADES.map((capacidad) => (
              <div key={capacidad.kanji} className="relative bg-[#0A0A0E] border border-purple-500/20 p-4 rounded-xl hover:border-purple-500/50 transition-colors group">
                <span className="absolute top-2 right-3 text-[9px] font-mono text-purple-500/30 font-bold">[{capacidad.kanji}]</span>
                <span className="text-[10px] font-mono text-fuchsia-400 uppercase block mb-1">{capacidad.categoria}</span>
                <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">{capacidad.nombre}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-purple-300 font-mono flex items-center gap-3">
            <i className="fa-solid fa-terminal text-purple-400 text-lg" aria-hidden="true"></i>
            <span>Construyendo productos digitales preparados para crecer.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
