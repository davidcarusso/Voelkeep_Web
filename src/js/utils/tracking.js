/**
 * ============================================
 * UTILIDADES: TRACKING Y ANALYTICS
 * ============================================
 */

/**
 * Sistema de tracking de eventos
 */
export function trackEvent(eventName, data = {}) {
  // Log en consola (desarrollo)
  console.log(`📊 Event: ${eventName}`, data);
  
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, data);
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, data);
  }
  
  // Puedes agregar otros servicios de analytics aquí
}

/**
 * Trackear clicks en CTAs
 */
export function initCTATracking() {
  const allCTAs = document.querySelectorAll('[class*="cta"]');
  
  allCTAs.forEach(cta => {
    cta.addEventListener('click', function() {
      const ctaText = this.textContent.trim();
      const ctaClass = this.className;
      const section = getSection(this);
      
      trackEvent('CTA Click', {
        text: ctaText,
        class: ctaClass,
        section: section,
        url: window.location.pathname
      });
    });
  });
}

/**
 * Trackear hovers en tarjetas de servicio
 */
export function initServiceCardTracking() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      const serviceName = this.querySelector('h3')?.textContent || `Service ${index + 1}`;
      
      trackEvent('Service Card Hover', {
        service: serviceName,
        position: index + 1
      });
    });
  });
}

/**
 * Tracking de tiempo en página
 */
export function initTimeTracking() {
  let timeOnPage = 0;
  let timeInterval;
  
  window.addEventListener('load', function() {
    timeInterval = setInterval(() => {
      timeOnPage += 5;
      
      // Trackear cada 30 segundos
      if (timeOnPage % 30 === 0) {
        trackEvent('Time on Page', {
          seconds: timeOnPage,
          page: window.location.pathname
        });
      }
    }, 5000);
  });
  
  window.addEventListener('beforeunload', function() {
    clearInterval(timeInterval);
    trackEvent('Page Exit', {
      timeSpent: timeOnPage,
      page: window.location.pathname
    });
  });
}

/**
 * Performance monitoring
 */
export function trackPerformance() {
  window.addEventListener('load', function() {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      
      if (perfData) {
        trackEvent('Performance Metrics', {
          loadTime: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          domReady: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
          ttfb: Math.round(perfData.responseStart - perfData.requestStart)
        });
      }
    }, 0);
  });
}

// Función auxiliar para obtener la sección
function getSection(element) {
  const section = element.closest('section');
  if (section) {
    return section.className.split(' ')[0] || section.id || 'unknown';
  }
  return 'unknown';
}
