import React from 'react';
import { motion } from 'framer-motion';

const SERVICIOS = [
  {
    id: 'SYS_01',
    kanji: 'ウェブ',
    icono: 'fa-code',
    titulo: 'Desarrollo Web & Frontend Moderno',
    descripcion: 'Sitios institucionales, landing pages e interfaces de alto rendimiento. Construidos con React, Vite y Tailwind CSS para lograr máxima velocidad, fluidez y diseño responsive.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite']
  },
  {
    id: 'SYS_02',
    kanji: '基盤',
    icono: 'fa-database',
    titulo: 'Arquitectura SQL & CMS Backend',
    descripcion: 'Sistemas con bases de datos relacionales, catálogos dinámicos y paneles de administración a medida. Integración fluida con Supabase / PostgreSQL para gestión de datos y multimedia.',
    tags: ['Supabase', 'PostgreSQL', 'APIs Rest', 'CMS']
  },
  {
    id: 'SYS_03',
    kanji: '網',
    icono: 'fa-server',
    titulo: 'Soporte IT & Infraestructura de Redes',
    descripcion: 'Configuración y optimización de redes de alta velocidad, despliegue de servidores locales/nube, entornos Linux (Debian) y armado de estaciones de trabajo de alto rendimiento.',
    tags: ['Redes Cat 6a', 'Linux/Debian', 'Servidores', 'Hardware IT']
  },
  {
    id: 'SYS_04',
    kanji: '安全',
    icono: 'fa-shield-halved',
    titulo: 'Ciberseguridad & Performance',
    descripcion: 'Hardening web, auditorías de seguridad, configuración de CDN (Cloudflare) y optimización de infraestructura para garantizar disponibilidad y protección total.',
    tags: ['Cloudflare', 'SSL/TLS', 'Security Hardening', 'Auditorías']
  }
];

export default function ServiciosOni() {
  return (
    <section id="servicios" className="relative py-28 px-6 bg-[#0A0A0E] overflow-hidden border-t border-purple-500/10">
      
      {/* KANJI DE FONDO 'SĀBISU' (サービス - SERVICIOS) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] sm:text-[380px] font-bold text-purple-900/5 select-none pointer-events-none [font-family:'Noto_Sans_JP',sans-serif]">
        サービス
      </div>

      {/* Luz neón lateral de fondo */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-purple-400 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20">
            // サービス Soluciones Digitales & IT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white [font-family:'Orbitron',sans-serif]">
            Especialidades & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Servicios</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Combinamos desarrollo de software de vanguardia, infraestructura IT sólida y altos estándares de seguridad para potenciar tu negocio.
          </p>
        </div>

        {/* GRILLA DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICIOS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#120F1D]/80 border border-purple-500/20 p-8 rounded-2xl backdrop-blur-xl hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(157,78,221,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Kanji decorativo interno */}
              <span className="absolute top-4 right-6 text-2xl font-bold text-purple-500/10 [font-family:'Noto_Sans_JP',sans-serif]">
                {item.kanji}
              </span>

              <div>
                {/* ID & ÍCONO */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <i className={`fa-solid ${item.icono}`}></i>
                  </div>
                  <span className="text-xs font-mono text-purple-400/60 font-bold tracking-widest">
                    {item.id}
                  </span>
                </div>

                {/* TÍTULO Y DESCRIPCIÓN */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors [font-family:'Orbitron',sans-serif]">
                  {item.titulo}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.descripcion}
                </p>
              </div>

              {/* TAGS TÉCNICOS */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/10">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-purple-300/80 bg-[#0A0A0E] px-2.5 py-1 rounded border border-purple-500/20">
                    #{tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}