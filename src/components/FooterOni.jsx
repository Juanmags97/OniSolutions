import logoOni from '../assets/OniNav.png';

const SERVICIOS = [
  ['Desarrollo Web', '#servicios'],
  ['Plataformas & Datos', '#servicios'],
  ['IA & Automatización', '#servicios'],
  ['Aplicaciones Móviles', '#apps-moviles'],
];

export default function FooterOni() {
  return (
    <footer className="relative overflow-hidden bg-[#08080C] border-t border-purple-500/15 px-6">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr_.8fr] gap-12">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3 group" aria-label="Oni Solutions — Inicio">
            <div className="w-12 h-12 rounded-xl bg-[#120F1D] border border-purple-500/30 p-2">
              <img src={logoOni} alt="Isotipo Oni Solutions" className="w-full h-full object-contain" />
            </div>
            <span>
              <strong className="block text-lg tracking-wider [font-family:'Orbitron',sans-serif]">ONI <span className="text-purple-500">SOLUTIONS</span></strong>
              <span className="block mt-1 text-[9px] font-mono uppercase tracking-widest text-neutral-500">Software Architecture</span>
            </span>
          </a>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
            Diseñamos y construimos productos digitales que conectan estrategia, experiencia y tecnología para hacer crecer tu negocio.
          </p>
        </div>

        <div>
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-purple-400">// Servicios</h2>
          <ul className="mt-5 space-y-3">
            {SERVICIOS.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-sm text-neutral-400 hover:text-purple-300 transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-purple-400">// Contacto</h2>
          <a
            href="https://www.instagram.com/0ni.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm text-white hover:text-purple-300 transition-colors"
          >
            @0ni.solutions <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i>
          </a>
          <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-neutral-600">Buenos Aires · Argentina</p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto py-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[9px] font-mono uppercase tracking-widest text-neutral-600">
        <span>© 2026 Oni Solutions</span>
        <span>鬼 // Productos digitales con precisión.</span>
      </div>
    </footer>
  );
}
