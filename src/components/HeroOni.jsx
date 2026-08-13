import React from 'react';
import { motion } from 'framer-motion';
import logoOni from '../assets/Oni2.png';

export default function HeroOni() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0E] text-white overflow-hidden flex items-center justify-center px-6 pt-28 pb-16">
      
      {/* KANJI GIGANTE 'ONI' (鬼) EN EL FONDO COMO MARCA DE AGUA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] sm:text-[450px] font-bold text-purple-900/10 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        鬼
      </div>

      {/* GLOWS NEÓN DE FONDO */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* PATRÓN CYBER GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* COLUMNA IZQUIERDA: TEXTOS Y BOTONES */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-400 text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>ソフトウェア & サイバーセキュリティ</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-black tracking-wider leading-none [font-family:'Orbitron',sans-serif]">
              ONI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600">SOLUTIONS</span>
            </h1>
            <div className="text-xs sm:text-sm font-mono text-purple-400/80 tracking-[0.3em] uppercase">
              鬼ソリューションズ // Software Architecture
            </div>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed mx-auto lg:mx-0">
            Desarrollo web de alto rendimiento, arquitectura de sistemas y soluciones de software a medida con estética futurista y ciberseguridad de nivel profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#contacto"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 font-bold text-xs uppercase tracking-widest text-white shadow-[0_0_25px_rgba(157,78,221,0.4)] hover:shadow-[0_0_35px_rgba(157,78,221,0.7)] hover:scale-[1.02] transition-all duration-300 text-center [font-family:'Orbitron',sans-serif]"
            >
              Iniciar Proyecto // プロジェクト
            </a>
            
            <a
              href="#servicios"
              className="px-8 py-3.5 rounded-xl border border-purple-500/30 bg-[#120F1D]/80 font-bold text-xs uppercase tracking-widest text-purple-300 hover:border-purple-400 hover:bg-purple-950/40 transition-all duration-300 text-center backdrop-blur-sm [font-family:'Orbitron',sans-serif]"
            >
              Servicios // サービス
            </a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: LOGO MÁSCARA ONI CON EFECTOS CYBER HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          {/* Anillo exterior rotatorio HUD */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-purple-500/20 pointer-events-none"
          />

          {/* Glow de fondo para la máscara */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-fuchsia-600/20 to-purple-800/30 blur-3xl animate-pulse pointer-events-none" />
          
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center p-6 bg-[#120F1D]/60 border border-purple-500/30 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(123,44,191,0.3)] group overflow-hidden"
          >
            {/* Esquinas tácticas (Target Corners) */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-500/60" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple-500/60" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-500/60" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/60" />

            {/* Tags e información de pantalla HUD */}
            <span className="absolute top-3 left-4 text-[10px] font-mono text-purple-400/80 tracking-widest">鬼_SYS.01</span>
            <span className="absolute bottom-3 right-4 text-[10px] font-mono text-fuchsia-400/80 tracking-widest">ソリューションズ</span>

            {/* MÁSCARA ONI CON INTENSO GLOW NEÓN */}
            <img 
              src={logoOni} 
              alt="Oni Solutions Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(157,78,221,0.85)] group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}