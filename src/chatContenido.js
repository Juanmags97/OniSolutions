// Contenido del chat de la web. Mantenerlo alineado con el bot de WhatsApp (Bot-wsp/config.js).
// `wsp`: mensaje precargado al pasar a WhatsApp. Incluye "persona" a propósito para que el bot
// derive directo al equipo (el visitante ya leyó la info básica acá).

export const SALUDO = '¡Hola! 👋 Soy Oni, el asistente de Oni Solutions. ¿Qué estás buscando?';

export const TEMAS = [
  {
    id: 'web',
    etiqueta: '🌐 Página web',
    palabras: ['pagina', 'web', 'sitio', 'landing', 'tienda', 'ecommerce', 'wordpress', 'dominio'],
    respuesta:
      'Hacemos sitios institucionales, landing pages y tiendas online, rápidos, adaptados a celular y con diseño a medida de tu marca.\n\n¿Querés un estimado de costo? Tocá 💰 Precios o seguí por WhatsApp.',
    wsp: '¡Hola! Quiero cotizar una página web. ¿Puedo hablar con una persona?',
  },
  {
    id: 'ia',
    etiqueta: '🤖 Asistente IA / bot',
    palabras: ['bot', 'chatbot', 'asistente', 'ia', 'inteligencia', 'automatizar', 'automatizacion', 'whatsapp', 'wsp', 'crm'],
    respuesta:
      'Creamos asistentes que atienden a tus clientes 24/7 por WhatsApp o Instagram, responden consultas, captan prospectos y te avisan cuando alguien necesita una persona.\n\n¿Querés un estimado de costo? Tocá 💰 Precios o seguí por WhatsApp.',
    wsp: '¡Hola! Quiero un asistente de IA para mi negocio. ¿Puedo hablar con una persona?',
  },
  {
    id: 'apps',
    etiqueta: '📱 App o sistema',
    palabras: ['app', 'apps', 'aplicacion', 'android', 'ios', 'iphone', 'sistema', 'software', 'plataforma', 'gestion'],
    respuesta:
      'Desarrollamos apps para iOS y Android y sistemas de gestión con panel de administración: de la idea a la publicación y el mantenimiento.\n\n¿Querés un estimado de costo? Tocá 💰 Precios o seguí por WhatsApp.',
    wsp: '¡Hola! Quiero cotizar una app o sistema a medida. ¿Puedo hablar con una persona?',
  },
  {
    id: 'precios',
    etiqueta: '💰 Precios',
    palabras: ['precio', 'precios', 'costo', 'cuesta', 'sale', 'salen', 'cobran', 'presupuesto', 'cotizar', 'cotizacion', 'valor', 'plan', 'planes'],
    respuesta:
      'Te paso un estimado orientativo (no es un presupuesto):\n🌐 Landing o web institucional: USD 250 a 600\n🛒 Tienda online: desde USD 700\n🤖 Asistente de WhatsApp: instalación USD 100 a 250 + abono desde USD 25/mes\n📱 Apps y sistemas a medida: desde USD 2.500\n\nEl precio real depende de tu proyecto. Para un presupuesto exacto te atiende uno de los socios por WhatsApp, sin compromiso.',
    wsp: '¡Hola! Quiero que me coticen mi proyecto. ¿Puedo hablar con una persona?',
  },
  {
    id: 'humano',
    etiqueta: '🙋 Hablar con una persona',
    palabras: ['persona', 'humano', 'asesor', 'alguien', 'hablar', 'llamar', 'contacto', 'contactar'],
    respuesta: '¡De una! Te atiende uno de los socios de Oni Solutions por WhatsApp, o si preferís podés escribirnos por Instagram.',
    wsp: '¡Hola! Quiero hablar con una persona del equipo.',
  },
];

export const RESPUESTA_LIBRE =
  '¡Gracias! Para darte una respuesta precisa, lo mejor es seguir por WhatsApp: te dejo tu consulta ya escrita, solo tenés que enviarla 👇';

// Mensaje precargado cuando el visitante escribió su propia consulta
export const wspLibre = (texto) => `¡Hola! Quiero hablar con una persona. Mi consulta: ${texto}`;

const normalizar = (t) =>
  t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9\s]/g, ' ');

// Tema que corresponde a un texto libre, o null
export function detectarTema(texto) {
  const palabras = new Set(normalizar(texto).split(/\s+/));
  const orden = ['humano', 'precios', 'web', 'ia', 'apps'];
  for (const id of orden) {
    const tema = TEMAS.find((t) => t.id === id);
    if (tema.palabras.some((p) => palabras.has(p))) return tema;
  }
  return null;
}
