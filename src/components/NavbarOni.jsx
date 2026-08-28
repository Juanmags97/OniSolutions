import React, { useState } from 'react';
import logoOni from '../assets/OniNav.png';

export default function NavbarOni() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0E]/85 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO & NOMBRE CON KANJIS */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#120F1D] border border-purple-500/30 p-1.5 flex items-center justify-center group-hover:border-purple-500/80 group-hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all">
            <img 
              src={logoOni} 
              alt="Oni Solutions Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-wider text-white [font-family:'Orbitron',sans-serif]">
                ONI <span className="text-purple-500">SOLUTIONS</span>
              </span>
              <span className="text-xs text-purple-400/60 font-mono tracking-widest [font-family:'Noto_Sans_JP',sans-serif]">
                鬼ソリューションズ
              </span>
            </div>
          </div>
        </a>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-neutral-400">
          <a href="#servicios" className="hover:text-purple-400 transition-colors">// 01. サービス (Servicios)</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">// 02. 概要 (Nosotros)</a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors">// 03. 実績 (Portfolio)</a>
          <a 
            href="#contacto" 
            className="px-5 py-2.5 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-[0_0_15px_rgba(157,78,221,0.2)]"
          >
            連絡先 Contacto
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL ANIMADO */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {/* Línea superior */}
          <span 
            className={`h-0.5 w-6 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          {/* Línea central */}
          <span 
            className={`h-0.5 w-6 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${
              open ? 'opacity-0 scale-x-0' : 'opacity-100'
            }`}
          />
          {/* Línea inferior */}
          <span 
            className={`h-0.5 w-6 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* DESPLEGABLE MÓVIL */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#120F1D]/95 backdrop-blur-lg border-b border-purple-500/20 ${
          open ? 'max-h-80 opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="space-y-4 font-mono text-xs uppercase text-neutral-300">
          <a href="#servicios" onClick={() => setOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">// 01. Servicios サービス</a>
          <a href="#about" onClick={() => setOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">// 02. Nosotros 概要</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="block py-2 hover:text-purple-400 transition-colors">// 03. Portfolio 実績</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block py-2 text-purple-400 font-bold hover:text-purple-300 transition-colors">// Contacto 連絡先</a>
        </div>
      </div>
    </nav>
  );
}