import { useEffect } from 'react';

/**
 * Custom hook para inicializar Google Tag Manager
 * @param {string} trackingId - ID de seguimiento de Google Ads (ej: 'AW-17641216867')
 */
export const useGoogleTagManager = (trackingId) => {
  useEffect(() => {
    // Evitar inicializar en desarrollo si lo deseas
    // if (import.meta.env.DEV) return;

    // Crear y añadir el script de gtag.js
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializar dataLayer y gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    // Hacer gtag disponible globalmente
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', trackingId);

    console.log(`✅ Google Tag Manager inicializado: ${trackingId}`);

    // Cleanup: remover el script cuando el componente se desmonte
    return () => {
      const existingScript = document.querySelector(
        `script[src*="googletagmanager.com/gtag/js?id=${trackingId}"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [trackingId]);
};

/**
 * Función helper para enviar eventos personalizados
 * @param {string} eventName - Nombre del evento
 * @param {object} eventParams - Parámetros adicionales del evento
 */
export const sendGtagEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log(`📊 Evento enviado: ${eventName}`, eventParams);
  } else {
    console.warn('⚠️ gtag no está disponible');
  }
};

/**
 * Función helper para tracking de conversiones
 * @param {string} conversionId - ID de la conversión
 * @param {object} conversionData - Datos de la conversión
 */
export const trackConversion = (conversionId, conversionData = {}) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      ...conversionData
    });
    console.log(`🎯 Conversión rastreada: ${conversionId}`, conversionData);
  }
};

/**
 * Tracking específico para clicks en WhatsApp (Book appointment)
 * Reporta conversión cuando alguien hace clic en el botón de WhatsApp
 * @param {string} url - URL de WhatsApp (opcional, se abre después del tracking)
 * @param {number} value - Valor de la conversión (default: 100)
 * @returns {Promise} Promise que se resuelve cuando el tracking está completo
 */
export const trackWhatsAppConversion = (url, value = 100.0) => {
  return new Promise((resolve) => {
    if (window.gtag) {
      const callback = () => {
        console.log(`💚 Conversión WhatsApp rastreada - Valor: $${value} ARS`);
        resolve();
        if (url) {
          window.open(url, '_blank');
        }
      };

      window.gtag('event', 'conversion', {
        send_to: 'AW-17641216867/0Be1CI-80rUbEOO2_ttB',
        value: value,
        currency: 'ARS',
        event_callback: callback
      });

      // Fallback si el callback no se ejecuta
      setTimeout(callback, 1000);
    } else {
      console.warn('⚠️ gtag no está disponible para tracking de WhatsApp');
      resolve();
      if (url) {
        window.open(url, '_blank');
      }
    }
  });
};

/**
 * Tracking específico para vistas de página (Page view conversion)
 * Debe llamarse cuando se carga una página importante
 * @param {number} value - Valor de la conversión (default: 1.0)
 * @param {string} pageName - Nombre de la página (opcional)
 * @param {object} additionalParams - Parámetros adicionales (opcional)
 */
export const trackPageViewConversion = (value = 1.0, pageName = '', additionalParams = {}) => {
  if (window.gtag) {
    // Obtener el nombre de la página desde el DOM si no se proporciona
    const pageTitle = pageName || document.querySelector('[data-page]')?.getAttribute('data-page') || document.title;
    const currentPath = window.location.pathname;
    
    window.gtag('event', 'conversion', {
      send_to: 'AW-17641216867/PaKKCJK80rUbEOO2_ttB',
      value: value,
      currency: 'ARS',
      // Parámetros personalizados para identificar la página
      page_name: pageTitle,
      page_path: currentPath,
      ...additionalParams
    });
    
    console.log(`👁️ Conversión de vista de página rastreada - Página: ${pageTitle} (${currentPath}) - Valor: $${value} ARS`);
  } else {
    console.warn('⚠️ gtag no está disponible para tracking de page view');
  }
};
