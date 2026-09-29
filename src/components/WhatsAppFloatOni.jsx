import { whatsappUrl } from '../contacto';

export default function WhatsAppFloatOni() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:block px-3 py-2 rounded-lg bg-[#120F1D]/95 border border-purple-500/30 text-[10px] font-mono uppercase tracking-widest text-purple-200 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Escribinos // 連絡
      </span>
      <span className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl shadow-[0_0_25px_rgba(37,211,102,0.45)] ring-2 ring-purple-500/40 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(157,78,221,0.6)] transition-all duration-300">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 motion-reduce:hidden" aria-hidden="true" />
        <i className="fa-brands fa-whatsapp relative" aria-hidden="true"></i>
      </span>
    </a>
  );
}
