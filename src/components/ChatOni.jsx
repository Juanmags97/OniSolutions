import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { whatsappUrl, INSTAGRAM_URL } from '../contacto';
import { SALUDO, TEMAS, RESPUESTA_LIBRE, wspLibre, detectarTema } from '../chatContenido';
import logoOni from '../assets/OniNav.png';

const CLAVE_AVISO = 'oni-chat-aviso-visto';

function leerAvisoVisto() {
  try {
    return sessionStorage.getItem(CLAVE_AVISO) === '1';
  } catch {
    return false;
  }
}

function marcarAvisoVisto() {
  try {
    sessionStorage.setItem(CLAVE_AVISO, '1');
  } catch {
    /* sin storage: el aviso puede volver a aparecer, no pasa nada */
  }
}

function Acciones({ wsp }) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <a
        href={whatsappUrl(wsp)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-[#0A0A0E] text-xs font-bold hover:brightness-110 transition"
      >
        <i className="fa-brands fa-whatsapp text-base" aria-hidden="true"></i> Seguir por WhatsApp
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-purple-500/40 text-purple-200 text-xs font-bold hover:bg-purple-600/20 transition"
      >
        <i className="fa-brands fa-instagram text-base" aria-hidden="true"></i> Escribinos por Instagram
      </a>
    </div>
  );
}

export default function ChatOni() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [escribiendo, setEscribiendo] = useState(false);
  const [texto, setTexto] = useState('');
  const [aviso, setAviso] = useState(false);

  const finRef = useRef(null);
  const inputRef = useRef(null);
  const timers = useRef([]);

  const programar = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  };

  useEffect(() => {
    const pendientes = timers.current;
    return () => pendientes.forEach(clearTimeout);
  }, []);

  // Aviso "¿Te ayudo?" una vez por sesión, si no abrieron el chat
  useEffect(() => {
    if (leerAvisoVisto()) return undefined;
    const id = setTimeout(() => setAviso(true), 8000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [mensajes, escribiendo]);

  useEffect(() => {
    if (!abierto) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [abierto]);

  const responder = (mensajeBot) => {
    setEscribiendo(true);
    programar(() => {
      setEscribiendo(false);
      setMensajes((m) => [...m, { de: 'bot', ...mensajeBot }]);
    }, 650);
  };

  const abrir = () => {
    setAbierto(true);
    setAviso(false);
    marcarAvisoVisto();
    if (mensajes.length === 0 && !escribiendo) responder({ texto: SALUDO });
  };

  const elegirTema = (tema) => {
    if (escribiendo) return;
    setMensajes((m) => [...m, { de: 'yo', texto: tema.etiqueta }]);
    responder({ texto: tema.respuesta, wsp: tema.wsp });
  };

  const enviar = (e) => {
    e.preventDefault();
    const consulta = texto.trim();
    if (!consulta || escribiendo) return;
    setTexto('');
    setMensajes((m) => [...m, { de: 'yo', texto: consulta }]);
    const tema = detectarTema(consulta);
    responder(
      tema
        ? { texto: tema.respuesta, wsp: wspLibre(consulta) }
        : { texto: RESPUESTA_LIBRE, wsp: wspLibre(consulta) },
    );
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {abierto && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Chat con el asistente de Oni Solutions"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-2.5rem)] sm:w-[370px] h-[min(560px,calc(100dvh-7.5rem))] flex flex-col rounded-2xl overflow-hidden border border-purple-500/40 bg-[#0D0B14]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(157,78,221,0.3)]"
          >
            <header className="flex items-center gap-3 px-4 py-3 border-b border-purple-500/20 bg-[#120F1D]">
              <div className="w-9 h-9 rounded-lg bg-[#0A0A0E] border border-purple-500/40 p-1">
                <img src={logoOni} alt="" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <strong className="block text-sm tracking-wider [font-family:'Orbitron',sans-serif]">ONI <span className="text-purple-400">// ASISTENTE</span></strong>
                <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" /> En línea
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAbierto(false)}
                aria-label="Cerrar chat"
                className="w-8 h-8 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-purple-400 outline-none"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
              {mensajes.map((m, i) => (
                <div key={i} className={`flex ${m.de === 'yo' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line ${
                      m.de === 'yo'
                        ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-br-md'
                        : 'bg-[#1A1528] border border-purple-500/20 text-neutral-200 rounded-bl-md'
                    }`}
                  >
                    {m.texto}
                    {m.wsp && <Acciones wsp={m.wsp} />}
                  </div>
                </div>
              ))}
              {escribiendo && (
                <div className="flex justify-start" aria-label="Oni está escribiendo">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-[#1A1528] border border-purple-500/20 flex gap-1">
                    {[0, 1, 2].map((n) => (
                      <span key={n} className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce motion-reduce:animate-none" style={{ animationDelay: `${n * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={finRef} />
            </div>

            <div className="px-3 pt-2 border-t border-purple-500/20 bg-[#120F1D]/80">
              <div className="flex flex-wrap gap-1.5 pb-2">
                {TEMAS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => elegirTema(t)}
                    disabled={escribiendo}
                    className="shrink-0 px-3 py-1.5 rounded-full border border-purple-500/30 bg-[#0A0A0E] text-[11px] text-purple-200 hover:border-purple-400 hover:bg-purple-950/40 disabled:opacity-50 transition-colors"
                  >
                    {t.etiqueta}
                  </button>
                ))}
              </div>
              <form onSubmit={enviar} className="flex items-center gap-2 pb-3">
                <label htmlFor="chat-oni-input" className="sr-only">Escribí tu consulta</label>
                <input
                  id="chat-oni-input"
                  ref={inputRef}
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  maxLength={500}
                  placeholder="Escribí tu consulta..."
                  autoComplete="off"
                  className="flex-1 min-w-0 px-3.5 py-2.5 rounded-xl bg-[#0A0A0E] border border-purple-500/30 text-base sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  aria-label="Enviar"
                  disabled={!texto.trim() || escribiendo}
                  className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white disabled:opacity-40 transition-opacity"
                >
                  <i className="fa-solid fa-paper-plane text-sm" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {aviso && !abierto && (
          <motion.div
            key="aviso"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="relative max-w-[240px] pl-4 pr-8 py-3 rounded-2xl rounded-br-md bg-[#120F1D]/95 border border-purple-500/40 text-sm text-neutral-200 shadow-[0_0_25px_rgba(157,78,221,0.25)]"
          >
            <button type="button" onClick={abrir} className="text-left">
              ¿Te ayudo a elegir? 👋
            </button>
            <button
              type="button"
              onClick={() => { setAviso(false); marcarAvisoVisto(); }}
              aria-label="Cerrar aviso"
              className="absolute top-1.5 right-2 text-neutral-500 hover:text-white text-xs"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => (abierto ? setAbierto(false) : abrir())}
        aria-label={abierto ? 'Cerrar chat' : 'Abrir chat con el asistente'}
        aria-expanded={abierto}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white text-2xl flex items-center justify-center shadow-[0_0_25px_rgba(157,78,221,0.55)] hover:scale-110 transition-transform focus-visible:ring-2 focus-visible:ring-purple-300 outline-none"
      >
        {!abierto && <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20 motion-reduce:hidden" aria-hidden="true" />}
        <i className={`fa-solid ${abierto ? 'fa-xmark' : 'fa-comments'} relative`} aria-hidden="true"></i>
        {!abierto && (
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#25D366] border-2 border-[#0A0A0E] flex items-center justify-center text-[10px]" aria-hidden="true">
            <i className="fa-brands fa-whatsapp"></i>
          </span>
        )}
      </button>
    </div>
  );
}
