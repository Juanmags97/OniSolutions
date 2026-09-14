import { useState } from 'react';
import logoOni from '../assets/OniNav.png';

const NAV_ITEMS = [
  ['01', 'サービス', 'Servicios', '#servicios'],
  ['02', 'アプリ', 'Apps', '#apps-moviles'],
  ['03', '概要', 'Nosotros', '#about'],
  ['04', '実績', 'Portfolio', '#portfolio'],
];

export default function NavbarOni() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0E]/90 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3 group" aria-label="Oni Solutions — Inicio">
          <div className="w-10 h-10 rounded-xl bg-[#120F1D] border border-purple-500/30 p-1.5 flex items-center justify-center group-hover:border-purple-500/80 group-hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all">
            <img src={logoOni} alt="Isotipo Oni Solutions" className="w-full h-full object-contain" />
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-sm lg:text-base tracking-wider text-white [font-family:'Orbitron',sans-serif] whitespace-nowrap">
              ONI <span className="text-purple-500">SOLUTIONS</span>
            </span>
            <span className="text-[8px] text-purple-400/60 font-mono tracking-widest [font-family:'Noto_Sans_JP',sans-serif]">
              鬼ソリューションズ
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[10px] xl:text-xs uppercase tracking-widest font-mono text-neutral-400">
          {NAV_ITEMS.map(([number, japanese, text, href]) => (
            <a key={href} href={href} className="hover:text-purple-400 transition-colors whitespace-nowrap">
              <span className="text-purple-500">// {number}.</span> {japanese} ({text})
            </a>
          ))}
          <a
            href="https://www.instagram.com/0ni.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-[0_0_15px_rgba(157,78,221,0.2)]"
          >
            連絡先 Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg z-50"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`h-0.5 w-6 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${open ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
          <span className={`h-0.5 w-6 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#120F1D]/98 backdrop-blur-lg border-b border-purple-500/20 ${
          open ? 'max-h-[440px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="space-y-2 font-mono text-xs uppercase text-neutral-300">
          {NAV_ITEMS.map(([number, japanese, text, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 border-b border-purple-500/10 hover:text-purple-400 transition-colors">
              <span className="text-purple-500">// {number}.</span> {text} {japanese}
            </a>
          ))}
          <a
            href="https://www.instagram.com/0ni.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block pt-5 text-purple-400 font-bold hover:text-purple-300 transition-colors"
          >
            // Contacto 連絡先
          </a>
        </div>
      </div>
    </nav>
  );
}
