import React from 'react';
import { motion } from 'framer-motion';

const STACK = [
  { nombre: 'React / Vite', categoria: 'Frontend', kanji: 'UI' },
  { nombre: 'Tailwind CSS', categoria: 'UI / Styling', kanji: 'Style' },
  { nombre: 'Supabase / SQL', categoria: 'Backend & DB', kanji: 'DB' },
  { nombre: 'AI Bots / Agents', categoria: 'Inteligencia Artificial', kanji: 'AI' },
  { nombre: 'Linux / Debian', categoria: 'Infraestructura', kanji: 'OS' },
  { nombre: 'Cloudflare', categoria: 'Seguridad & CDN', kanji: 'SEC' },
  { nombre: 'Git / GitHub', categoria: 'Version Control', kanji: 'GIT' },
];

export default function SobreMiOni() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#0A0A0E] overflow-hidden border-t border-purple-500/10">
      
      {/* KANJI DE FONDO 'GAIYŌ' (概要 - NOSOTROS / RESUMEN) */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[220px] sm:text-[380px] font-bold text-purple-900/5 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        概要
      </div>

      {/* Glow neón de fondo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* BLOQUE IZQUIERDO: TEXTO DE PRESENTACIÓN Y VISIÓN */}
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
            Pasión por la Informática, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Visión sin Límites</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            <strong className="text-white">Oni Solutions</strong> nace como un emprendimiento independiente impulsado por la dedicación a la tecnología, la arquitectura de sistemas y la ciberseguridad.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Nuestro objetivo es claro: abrirnos paso y construir un nombre de referencia en el sector de la informática, demostrando que con código limpio, atención personalizada y soluciones modernas de alto impacto podemos ayudar a que empresas y proyectos alcancen su máximo potencial digital.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Desde el desarrollo web responsivo y agentes inteligentes de IA hasta la optimización de infraestructura y seguridad de datos, nos involucramos en cada detalle para garantizar calidad, velocidad y soporte real.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <span className="block text-2xl font-extrabold text-white [font-family:'Orbitron',sans-serif]">100%</span>
              <span className="text-xs font-mono text-neutral-400">Compromiso y Dedicación</span>
            </div>
            <div className="border-l-2 border-fuchsia-500 pl-4">
              <span className="block text-2xl font-extrabold text-white [font-family:'Orbitron',sans-serif]">24/7</span>
              <span className="text-xs font-mono text-neutral-400">Atención Directa</span>
            </div>
          </div>
        </motion.div>

        {/* BLOQUE DERECHO: TARJETAS DE STACK TÉCNICO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#120F1D] border border-purple-500/20 rounded-2xl p-8 backdrop-blur-xl space-y-6 shadow-[0_0_40px_rgba(157,78,221,0.1)] relative"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2 [font-family:'Orbitron',sans-serif]">
            <i className="fa-solid fa-layer-group text-purple-400 text-base"></i>
            Stack Tecnológico Principal
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {STACK.map((tech, i) => (
              <div 
                key={i} 
                className={`relative bg-[#0A0A0E] border border-purple-500/20 p-4 rounded-xl hover:border-purple-500/50 transition-colors group ${
                  i === STACK.length - 1 && STACK.length % 2 !== 0 ? 'col-span-2' : ''
                }`}
              >
                <span className="absolute top-2 right-3 text-[9px] font-mono text-purple-500/30 font-bold">
                  [{tech.kanji}]
                </span>
                <span className="text-[10px] font-mono text-fuchsia-400 uppercase block mb-1">
                  {tech.categoria}
                </span>
                <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {tech.nombre}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-purple-300 font-mono flex items-center gap-3">
            <i className="fa-solid fa-terminal text-purple-400 text-lg"></i>
            <span>Construyendo soluciones escalables desde la base.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}