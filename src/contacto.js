// Datos de contacto centralizados. El número es el del asistente de WhatsApp (Bot-wsp).
export const WHATSAPP_NUMERO = '5493876368439';
export const INSTAGRAM_URL = 'https://www.instagram.com/0ni.solutions/';

// Mensajes precargados: el asistente los reconoce y responde la opción que corresponde
export const MENSAJES_WSP = {
  general: '¡Hola! Quiero más información sobre sus servicios.',
  proyecto: '¡Hola! Quiero iniciar un proyecto y hablar con una persona.',
  app: '¡Hola! Quiero hacer una app para mi negocio.',
};

export const whatsappUrl = (mensaje = MENSAJES_WSP.general) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
