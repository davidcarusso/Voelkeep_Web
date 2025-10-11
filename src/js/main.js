/**
 * ============================================
 * MAIN.JS - Entry Point de la Aplicación
 * ============================================
 */

import '../styles/main.css';
import { initWhatsAppButton, setupWhatsAppLinks } from './components/whatsapp.js';
import { initFooter } from './components/footer.js';
import { initNavbar } from './components/navbar.js';
import { initScrollProgress, initBackToTop } from './components/scroll-elements.js';
import { initTestimonialCarousel } from './components/carousel.js';
import { initScrollReveal, initSmoothScroll, initParallax, initLazyLoading, preventEmptyLinks } from './utils/animations.js';
import { initCTATracking, initServiceCardTracking, initTimeTracking, trackPerformance } from './utils/tracking.js';
import { CONFIG } from './config.js';

/**
 * Inicialización de la aplicación
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log(`🌸 ${CONFIG.app.name} v${CONFIG.app.version} - Cargando...`);
  
  // 1. Componentes principales
  initNavbar();
  initFooter();
  initScrollProgress();
  initBackToTop();
  
  // 2. Componentes de página
  initTestimonialCarousel();
  
  // 3. WhatsApp
  const pageType = document.body.dataset.page || 'home';
  const whatsappMessages = {
    home: 'general',
    'gloss-peel': 'glossPeel',
    'gift-card': 'giftCard'
  };
  initWhatsAppButton(whatsappMessages[pageType]);
  setupWhatsAppLinks();
  
  // 4. Animaciones
  initScrollReveal();
  initSmoothScroll();
  initParallax();
  initLazyLoading();
  preventEmptyLinks();
  
  // 5. Tracking
  initCTATracking();
  initServiceCardTracking();
  initTimeTracking();
  trackPerformance();
  
  // 6. Configurar mapa (si existe)
  setupMap();
  
  // 7. Efectos especiales según la página
  initPageSpecificFeatures();
  
  console.log(`✅ ${CONFIG.app.name} cargado correctamente`);
});

/**
 * Configurar mapa de Google
 */
function setupMap() {
  const googleMap = document.getElementById('googleMap');
  const mapLoader = document.getElementById('mapLoader');
  
  if (!googleMap || !mapLoader) return;
  
  mapLoader.textContent = 'Cargando mapa...';
  
  googleMap.onload = function() {
    mapLoader.style.opacity = '0';
    setTimeout(() => {
      mapLoader.style.display = 'none';
    }, 300);
  };
  
  googleMap.onerror = function() {
    mapLoader.textContent = '❌ Error al cargar el mapa';
    mapLoader.style.color = 'var(--rosa-fuerte)';
  };
  
  try {
    googleMap.src = CONFIG.location.mapEmbedUrl;
  } catch (err) {
    console.error('Error al cargar el mapa:', err);
  }
}

/**
 * Características específicas de cada página
 */
function initPageSpecificFeatures() {
  const pageType = document.body.dataset.page;
  
  switch(pageType) {
    case 'gift-card':
      initGiftCardFeatures();
      break;
    case 'gloss-peel':
      initGlossPeelFeatures();
      break;
    case 'home':
    default:
      initHomeFeatures();
      break;
  }
}

/**
 * Features específicos de la página home
 */
function initHomeFeatures() {
  // Agregar cualquier funcionalidad específica del home
  console.log('🏠 Inicializando features del Home');
}

/**
 * Features específicos de Gift Card
 */
function initGiftCardFeatures() {
  console.log('🎁 Inicializando features de Gift Card');
  
  // Texto cambiante en el hero badge
  const changingText = document.getElementById('changing-text');
  if (changingText) {
    const texts = [
      '🎁 El regalo perfecto',
      '✨ Regala bienestar',
      '💝 Gift Cards personalizadas',
      '🌟 Para quien querés'
    ];
    let currentIndex = 0;
    
    function changeText() {
      changingText.style.opacity = '0';
      setTimeout(() => {
        changingText.textContent = texts[currentIndex];
        changingText.style.opacity = '1';
        currentIndex = (currentIndex + 1) % texts.length;
      }, 500);
    }
    
    changeText();
    setInterval(changeText, 3000);
  }
}

/**
 * Features específicos de Gloss Peel
 */
function initGlossPeelFeatures() {
  console.log('✨ Inicializando features de Gloss Peel');
  
  // Agregar cualquier funcionalidad específica de Gloss Peel
}

/**
 * Exportar funciones globales para uso en HTML inline (si es necesario)
 */
window.VoelkeepApp = {
  config: CONFIG,
};
