import React from 'react';
import { motion } from 'framer-motion';

const PROYECTOS = [
  {
    codigo: 'PROJECT_01',
    kanji: '開発',
    titulo: 'GW Desarrollos / GW Del Sol',
    categoria: 'Desarrollo Web & Branding',
    descripcion: 'Plataforma institucional responsiva con soporte i18n multilenguaje, reproductor de video horizontal HD, visor de dossier PDF nativo y conexión directa de solicitudes a Google Sheets.',
    tags: ['React', 'Tailwind CSS', 'i18next', 'Google Apps Script'],
    linkText: 'Ver Detalles // 詳細'
  },
  {
    codigo: 'PROJECT_02',
    kanji: '不動産',
    titulo: 'Plataforma Inmobiliaria & Catalogación',
    categoria: 'Fullstack / Base de Datos SQL',
    descripcion: 'Sistema de catálogo inmobiliario con filtros avanzados por ubicación, tipo y rango de precio. Integración de Supabase (PostgreSQL + Storage) para gestión de inventarios.',
    tags: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    linkText: 'Ver Proyecto // 詳細'
  }
];

export default function PortfolioOni() {
  return (
    <section id="portfolio" className="relative py-28 px-6 bg-[#0A0A0E] overflow-hidden border-t border-purple-500/10">
      
      {/* KANJI DE FONDO 'JISSEKI' (実績 - LOGROS/PORTFOLIO) */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[200px] sm:text-[320px] font-bold text-fuchsia-900/5 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        実績
      </div>

      {/* Glow neón de fondo */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO CON FUENTE CYBERPUNK Y JAPONESA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-purple-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20">
              // 実績 Portfolio & Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 [font-family:'Orbitron',sans-serif]">
              Trabajos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Recientes</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed">
            Una muestra de las soluciones desarrolladas para clientes e iniciativas propias, combinando velocidad, precisión y diseño de alto impacto.
          </p>
        </div>

        {/* GRILLA DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROYECTOS.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative bg-[#120F1D] border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(157,78,221,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Marca de agua Kanji dentro de cada tarjeta */}
              <span className="absolute top-4 right-6 text-2xl font-bold text-purple-500/10 [font-family:'Noto_Sans_JP',sans-serif]">
                {proj.kanji}
              </span>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">
                    {proj.codigo}
                  </span>
                  <span className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider block">
                    {proj.categoria}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors [font-family:'Orbitron',sans-serif]">
                  {proj.titulo}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {proj.descripcion}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-purple-500/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/30">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-mono font-bold text-purple-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  <span>{proj.linkText}</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}