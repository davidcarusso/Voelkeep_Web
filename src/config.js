/**
 * ============================================
 * CONFIGURACIÓN CENTRALIZADA - VOELKEEP
 * ============================================
 * 
 * Archivo de configuración global de la aplicación.
 * Centraliza toda la información de contacto, ubicación,
 * mensajes de WhatsApp y URLs importantes.
 */

import { Icons } from '@/components/Icons';

export const CONFIG = {
  // ============================================
  // GOOGLE TAG MANAGER / ANALYTICS
  // ============================================
  googleAds: {
    trackingId: 'AW-17641216867',
  },

  // ============================================
  // INFORMACIÓN DE CONTACTO
  // ============================================
  contact: {
    phone: '+5491123387610',
    phoneFormatted: '+54 9 11 2338-7610',
    phoneDisplay: '11 2338-7610',
    instagram: 'voelkeep',
    instagramUrl: 'https://www.instagram.com/voelkeep',
    email: 'info@voelkeep.com',
  },

  // ============================================
  // INFORMACIÓN DE UBICACIÓN
  // ============================================
  location: {
    address: 'Av. Bartolomé Mitre 4240, Villa Dominico',
    addressFull: 'Av. Bartolomé Mitre 4240, B1874 Villa Dominico, Provincia de Buenos Aires',
    city: 'Villa Dominico',
    province: 'Buenos Aires',
    country: 'Argentina',
    coordinates: {
      lat: -34.68963435116331,
      lng: -58.3360788332687,
    },
    mapUrl: 'https://maps.app.goo.gl/zQjmRhdwMuqtUgFz6',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.234567890123!2d-58.33828568477!3d-34.68963437294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccde8f0c5d4e7%3A0x8b5c3d2e1f4a6b9c!2sVoelkeep%20(Cosmetologia%20Estetica)!5e0!3m2!1ses-419!2sar!4v1696789012345!5m2!1ses-419!2sar',
  },

  // ============================================
  // HORARIOS DE ATENCIÓN
  // ============================================
  schedule: {
    weekdays: 'Lunes a Viernes: 10:00 - 20:00',
    saturday: 'Sábados: 10:00 - 18:00',
    sunday: 'Domingos: Cerrado',
  },

  // ============================================
  // MENSAJES PREDEFINIDOS DE WHATSAPP
  // ============================================
  whatsappMessages: {
    general: 'Hola! Quiero consultar sobre los tratamientos de Voelkeep',
    agendar: 'Hola! Quiero agendar un turno para tratamiento facial',
    
    // Tratamientos Faciales
    glossPeel: 'Hola! Quiero consultar sobre el tratamiento Gloss Peel',
    limpiezaProfunda: 'Hola! Quiero consultar sobre la Limpieza Facial Profunda',
    peelingFacial: 'Hola! Quiero consultar sobre el Peeling Químico',
    peelingEnzimatico: 'Hola! Quiero consultar sobre el Peeling Enzimático',
    dermaplaning: 'Hola! Quiero consultar sobre el Dermaplaning',
    microneedling: 'Hola! Quiero consultar sobre el Microneedling',
    exosomasFacial: 'Hola! Quiero consultar sobre el tratamiento de Exosomas Facial',
    radiofrecuencia: 'Hola! Quiero consultar sobre la Radiofrecuencia Facial',
    hidralips: 'Hola! Quiero consultar sobre el tratamiento Hydralips',
    tratamientoAcne: 'Hola! Quiero consultar sobre el Tratamiento para Acné y Piel Seborreica',
    terapiaLED: 'Hola! Quiero consultar sobre la Terapia con Luz LED',
    
    // Tratamientos Corporales
    reductores: 'Hola! Quiero consultar sobre los Tratamientos Reductores',
    reafirmantes: 'Hola! Quiero consultar sobre los Tratamientos Reafirmantes',
    anticeluliticos: 'Hola! Quiero consultar sobre el Tratamiento Anticelulítico y Reafirmante',
    limpiezaCorporal: 'Hola! Quiero consultar sobre la Limpieza Corporal',
    peelingCorporal: 'Hola! Quiero consultar sobre el Peeling Corporal',
    exfoliacionHidratacion: 'Hola! Quiero consultar sobre el tratamiento de Exfoliación + Hidratación Corporal',
    
    // Asesoramiento
    asesoramiento: 'Hola! Quiero consultar sobre el Asesoramiento de Skincare personalizado',
    
    // Legacy / Otros
    limpieza: 'Hola! Quiero consultar sobre la Limpieza Facial Profunda',
    ritual: 'Hola! Quiero consultar sobre el Ritual Corporal',
    giftCard: 'Hola! Quiero consultar sobre las Gift Cards de Voelkeep',
    pricing: 'Hola! Quiero consultar precios de tratamientos',
  },

  // ============================================
  // INFORMACIÓN DE TRATAMIENTOS
  // ============================================
  treatments: {
    glossPeel: {
      name: 'Gloss Peel',
      description: 'Peeling facial suave y seguro, apto para verano y pieles sensibles',
      priceFrom: 35000,
      duration: '60 min',
      url: '/gloss-peel',
    },
    limpieza: {
      name: 'Limpieza Facial Profunda',
      description: 'Tratamiento completo con punta de diamante y extracciones',
      priceFrom: 30000,
      duration: '75 min',
    },
    ritual: {
      name: 'Ritual Corporal',
      description: 'Experiencia completa de renovación y relajación corporal',
      priceFrom: 45000,
      duration: '90 min',
    },
  },

  // ============================================
  // CONFIGURACIÓN DE LA APLICACIÓN
  // ============================================
  app: {
    name: 'Voelkeep',
    tagline: 'Renovamos tu piel, renovamos tu bienestar',
    description: 'Centro de cosmetología profesional especializado en tratamientos faciales y corporales',
    year: new Date().getFullYear(),
    version: '2.0.0',
  },

  // ============================================
  // URLs DEL SITIO
  // ============================================
  urls: {
    home: '/',
    glossPeel: '/gloss-peel',
    giftCard: '/gift-card',
  },

  // ============================================
  // CONFIGURACIÓN DE SEO
  // ============================================
  seo: {
    keywords: [
      'cosmetología',
      'estética',
      'tratamientos faciales',
      'Buenos Aires',
      'Voelkeep',
      'skincare',
      'peeling',
      'limpieza facial',
      'gift cards',
    ].join(', '),
    ogImage: '/images/og-image.jpg',
    twitterHandle: '@voelkeep',
  },

  // ============================================
  // CARACTERÍSTICAS DEL NEGOCIO
  // ============================================
  features: [
    {
      iconComponent: Icons.magistral,
      icon: '🔬', // Fallback para compatibilidad
      title: 'Productos Magistrales',
      description: 'Formulaciones farmacéuticas personalizadas de la más alta calidad',
    },
    {
      iconComponent: Icons.atencion,
      icon: '👩‍⚕️',
      title: 'Atención Profesional',
      description: 'Equipo especializado en cosmetología con años de experiencia',
    },
    {
      iconComponent: Icons.tratamiento,
      icon: '🌟',
      title: 'Tratamientos Personalizados',
      description: 'Cada sesión se adapta a las necesidades específicas de tu piel',
    },
    {
      iconComponent: Icons.comprobados,
      icon: '🏆',
      title: 'Resultados Comprobados',
      description: 'Tratamientos efectivos con evidencia de mejoras visibles',
    },
  ],

  // ============================================
  // TESTIMONIOS
  // ============================================
  testimonials: [
    {
      text: 'El Gloss Peel cambió completamente mi piel. Es suave, efectivo y los resultados son increíbles. Lo recomiendo 100%',
      author: 'María L.',
      rating: 5,
    },
    {
      text: 'Excelente atención y profesionalismo. Los productos magistrales que usan son de primera calidad. Mi piel nunca estuvo mejor',
      author: 'Carolina R.',
      rating: 5,
    },
    {
      text: 'Me regalaron una Gift Card y fue la mejor experiencia. El tratamiento fue personalizado y salí renovada',
      author: 'Lucía M.',
      rating: 5,
    },
  ],
};

/**
 * Genera URL de WhatsApp con mensaje predefinido
 * @param {string} messageKey - Clave del mensaje en CONFIG.whatsappMessages
 * @param {string} customMessage - Mensaje personalizado (opcional)
 * @returns {string} URL de WhatsApp
 */
export function generateWhatsAppUrl(messageKey = 'general', customMessage = null) {
  const message = customMessage || CONFIG.whatsappMessages[messageKey] || CONFIG.whatsappMessages.general;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = CONFIG.contact.phone.replace(/\D/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Formatea precio a pesos argentinos
 * @param {number} price - Precio numérico
 * @returns {string} Precio formateado
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
}

/**
 * Verifica si el dispositivo es móvil
 * @returns {boolean}
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default CONFIG;
