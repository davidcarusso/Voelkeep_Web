// ============================================
// CONFIGURACIÓN CENTRALIZADA
// ============================================
// IMPORTANTE: Para cambiar cualquier dato (precio, teléfono, etc.)
// solo tenés que editar este objeto

const CONFIG = {
  // Contacto
  phone: '+5491123387610',
  phoneFormatted: '+54 9 11 2338-7610',
  instagram: 'voelkeep',
  instagramUrl: 'https://www.instagram.com/voelkeep',
  
  // Ubicación
  address: 'Consultá nuestra ubicación exacta por WhatsApp',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168080449854!2d-58.381592!3d-34.603722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08b2c2d8e830!2sVoelkeep!5e0!3m2!1ses!2sar!4v1234567890',
  
  // Precios y servicios
  pricing: {
    sessionPrice: 35000,
    currency: '$',
    priceNote: '*Precio por sesión individual'
  },
  
  // Mensajes de WhatsApp
  messages: {
    hero: 'Hola! Quiero agendar una sesión de Gloss Peel',
    pricing: 'Hola! Quiero consultar por Gloss Peel y agendar una sesión',
    general: 'Hola! Quiero consultar sobre los tratamientos de Voelkeep'
  }
};

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Formatear precio argentino
function formatPrice(price) {
  return CONFIG.pricing.currency + price.toLocaleString('es-AR');
}

// Generar URL de WhatsApp
function generateWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.phone.replace(/\D/g, '')}?text=${encodedMessage}`;
}

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Configurar precio
  const priceElement = document.getElementById('sessionPrice');
  if (priceElement) {
    priceElement.textContent = formatPrice(CONFIG.pricing.sessionPrice);
  }
  
  // 2. Configurar todos los enlaces de WhatsApp
  const whatsappBtn = document.getElementById('whatsappBtn');
  const ctaHero = document.querySelector('.cta-hero');
  const ctaPricing = document.querySelector('.cta-pricing');
  const phoneLink = document.getElementById('phoneLink');
  const footerPhone = document.getElementById('footerPhone');
  const footerWhatsapp = document.getElementById('footerWhatsapp');
  
  if (whatsappBtn) {
    whatsappBtn.href = generateWhatsAppUrl(CONFIG.messages.general);
  }
  
  if (ctaHero) {
    ctaHero.href = generateWhatsAppUrl(CONFIG.messages.hero);
  }
  
  if (ctaPricing) {
    ctaPricing.href = generateWhatsAppUrl(CONFIG.messages.pricing);
  }
  
  if (phoneLink) {
    phoneLink.href = generateWhatsAppUrl(CONFIG.messages.general);
    phoneLink.textContent = CONFIG.phoneFormatted;
  }
  
  if (footerPhone) {
    footerPhone.href = generateWhatsAppUrl(CONFIG.messages.general);
    footerPhone.textContent = CONFIG.phoneFormatted;
  }
  
  if (footerWhatsapp) {
    footerWhatsapp.href = generateWhatsAppUrl(CONFIG.messages.general);
  }
  
  // 3. Configurar dirección
  const addressText = document.getElementById('addressText');
  if (addressText) {
    addressText.textContent = CONFIG.address;
  }
  
  // 4. Cargar mapa de Google
  const googleMap = document.getElementById('googleMap');
  const mapLoader = document.getElementById('mapLoader');
  
  if (googleMap && mapLoader) {
    // Mostrar loader mientras carga
    googleMap.style.opacity = '0';
    
    // Configurar el src del iframe
    googleMap.src = CONFIG.mapUrl;
    
    // Cuando el mapa cargue, ocultar loader
    googleMap.onload = function() {
      mapLoader.style.display = 'none';
      googleMap.style.opacity = '1';
      googleMap.style.transition = 'opacity 0.5s ease';
    };
    
    // Si falla la carga del mapa
    googleMap.onerror = function() {
      mapLoader.textContent = 'No se pudo cargar el mapa. Contactanos por WhatsApp.';
      mapLoader.style.color = '#C94C7C';
    };
  }
  
  // 5. Animaciones al hacer scroll
  initScrollReveal();
  
  // 6. Smooth scroll para enlaces internos
  initSmoothScroll();
});

// ============================================
// ANIMACIONES AL HACER SCROLL
// ============================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('revealed');
      }
    });
  };
  
  // Ejecutar al cargar
  revealOnScroll();
  
  // Ejecutar al hacer scroll (con throttle para performance)
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(revealOnScroll);
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignorar enlaces vacíos o solo con #
      if (href === '#' || href === '') {
        return;
      }
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// ============================================

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Si es móvil, ajustar el comportamiento del botón de WhatsApp
if (isMobile()) {
  document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
      // En móvil, abrir directamente WhatsApp sin tooltip
      whatsappBtn.style.cursor = 'pointer';
    }
  });
}

// ============================================
// PERFORMANCE: Lazy loading para el mapa
// ============================================

// Observer para cargar el mapa solo cuando esté visible
const mapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      if (!iframe.src) {
        iframe.src = CONFIG.mapUrl;
      }
      mapObserver.unobserve(iframe);
    }
  });
}, {
  rootMargin: '50px'
});

// Activar observer cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const googleMap = document.getElementById('googleMap');
  if (googleMap) {
    mapObserver.observe(googleMap);
  }
});

// ============================================
// ANALYTICS Y TRACKING (Opcional)
// ============================================

// Función para trackear clicks en CTAs
function trackCTA(ctaName) {
  // Acá podés agregar Google Analytics, Facebook Pixel, etc.
  console.log(`CTA clicked: ${ctaName}`);
  
  // Ejemplo con Google Analytics (si lo tenés configurado):
  // gtag('event', 'click', {
  //   'event_category': 'CTA',
  //   'event_label': ctaName
  // });
}

// Agregar tracking a los botones principales
document.addEventListener('DOMContentLoaded', function() {
  const ctaHero = document.querySelector('.cta-hero');
  const ctaPricing = document.querySelector('.cta-pricing');
  const whatsappBtn = document.getElementById('whatsappBtn');
  
  if (ctaHero) {
    ctaHero.addEventListener('click', () => trackCTA('Hero Button'));
  }
  
  if (ctaPricing) {
    ctaPricing.addEventListener('click', () => trackCTA('Pricing Button'));
  }
  
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => trackCTA('WhatsApp Float Button'));
  }
});

// ============================================
// UTILIDADES ADICIONALES
// ============================================

// Función para cambiar el precio dinámicamente (útil para promociones)
function updatePrice(newPrice) {
  CONFIG.pricing.sessionPrice = newPrice;
  const priceElement = document.getElementById('sessionPrice');
  if (priceElement) {
    priceElement.textContent = formatPrice(newPrice);
    
    // Animación de cambio de precio
    priceElement.style.transform = 'scale(1.1)';
    priceElement.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      priceElement.style.transform = 'scale(1)';
    }, 300);
  }
}

// Función para mostrar un mensaje temporal (útil para promociones flash)
function showPromoMessage(message, duration = 5000) {
  const promo = document.createElement('div');
  promo.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #8B1E5A, #C94C7C);
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(139, 30, 90, 0.4);
    z-index: 9999;
    font-weight: 600;
    text-align: center;
    animation: slideDown 0.5s ease;
  `;
  
  promo.textContent = message;
  document.body.appendChild(promo);
  
  // Remover después del tiempo especificado
  setTimeout(() => {
    promo.style.animation = 'slideUp 0.5s ease';
    setTimeout(() => promo.remove(), 500);
  }, duration);
}

// Agregar animaciones CSS para el mensaje promo
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);

// ============================================
// PREVENCIÓN DE ERRORES COMUNES
// ============================================

// Prevenir que los enlaces vacíos recarguen la página
document.addEventListener('click', function(e) {
  const target = e.target.closest('a');
  if (target && (target.getAttribute('href') === '#' || target.getAttribute('href') === '')) {
    e.preventDefault();
  }
});

// ============================================
// MANEJO DE ERRORES GLOBAL
// ============================================

window.addEventListener('error', function(e) {
  console.error('Error capturado:', e.message);
  // Acá podrías enviar el error a un servicio de logging
});

// ============================================
// EXPORTAR FUNCIONES PARA USO EXTERNO
// ============================================

// Si necesitás usar estas funciones desde la consola o desde otros scripts
window.VoelkeepLanding = {
  config: CONFIG,
  updatePrice: updatePrice,
  showPromoMessage: showPromoMessage,
  formatPrice: formatPrice,
  generateWhatsAppUrl: generateWhatsAppUrl,
  trackCTA: trackCTA
};

// ============================================
// EJEMPLO DE USO DESDE LA CONSOLA DEL NAVEGADOR
// ============================================

/*
  Para cambiar el precio dinámicamente:
  VoelkeepLanding.updatePrice(40000);
  
  Para mostrar un mensaje promocional:
  VoelkeepLanding.showPromoMessage('🎉 Promo especial: 20% OFF en tu primera sesión!', 8000);
  
  Para generar una URL de WhatsApp personalizada:
  const url = VoelkeepLanding.generateWhatsAppUrl('Hola! Quiero consultar por el pack de 6 sesiones');
  window.open(url, '_blank');
*/

// ============================================
// DEBUG MODE (Activar solo en desarrollo)
// ============================================

const DEBUG = false; // Cambiar a true para ver logs en consola

if (DEBUG) {
  console.log('=== VOELKEEP LANDING PAGE DEBUG ===');
  console.log('Configuración:', CONFIG);
  console.log('Precio formateado:', formatPrice(CONFIG.pricing.sessionPrice));
  console.log('URL WhatsApp Hero:', generateWhatsAppUrl(CONFIG.messages.hero));
  console.log('Funciones disponibles en window.VoelkeepLanding');
  
  // Resaltar visualmente elementos con animaciones
  document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    console.log(`Elementos con animación al scroll: ${scrollElements.length}`);
    
    // Agregar borde de debug
    if (DEBUG) {
      scrollElements.forEach(el => {
        el.style.outline = '2px dashed rgba(201, 76, 124, 0.3)';
      });
    }
  });
}

// ============================================
// OPTIMIZACIONES DE PERFORMANCE
// ============================================

// Precargar fuentes críticas
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.as = 'font';
fontPreload.type = 'font/woff2';
fontPreload.crossOrigin = 'anonymous';

// Usar Intersection Observer para lazy loading de imágenes (si las agregás después)
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    }
  });
}, {
  rootMargin: '50px'
});

// Activar lazy loading para imágenes con data-src
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
});

// ============================================
// EVENTOS PERSONALIZADOS
// ============================================

// Disparar evento cuando se carga todo el contenido
window.addEventListener('load', function() {
  const event = new CustomEvent('voelkeepLoaded', {
    detail: {
      timestamp: new Date(),
      config: CONFIG
    }
  });
  window.dispatchEvent(event);
  
  if (DEBUG) {
    console.log('Evento voelkeepLoaded disparado');
  }
});

// Escuchar cambios de precio (útil para integraciones)
document.addEventListener('priceUpdated', function(e) {
  if (DEBUG) {
    console.log('Precio actualizado:', e.detail);
  }
});

// ============================================
// FUNCIONALIDAD DE SCROLL PROGRESS (Opcional)
// ============================================

function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #8B1E5A, #C94C7C, #E88BA0);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

// Descomentar la siguiente línea para activar la barra de progreso
// document.addEventListener('DOMContentLoaded', initScrollProgress);

// ============================================
// MANEJO DE FORMULARIOS (Para futuras implementaciones)
// ============================================

function initFormHandling() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validación básica
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#C94C7C';
        } else {
          input.style.borderColor = '';
        }
      });
      
      if (isValid) {
        // Acá iría la lógica de envío
        showPromoMessage('¡Formulario enviado! Te contactaremos pronto 🎉');
        form.reset();
      } else {
        showPromoMessage('Por favor completá todos los campos requeridos', 3000);
      }
    });
  });
}

// ============================================
// DETECCIÓN DE AD BLOCKERS (Opcional)
// ============================================

function detectAdBlock() {
  const testAd = document.createElement('div');
  testAd.innerHTML = '&nbsp;';
  testAd.className = 'adsbox';
  document.body.appendChild(testAd);
  
  window.setTimeout(() => {
    if (testAd.offsetHeight === 0) {
      if (DEBUG) {
        console.log('AdBlock detectado');
      }
    }
    testAd.remove();
  }, 100);
}

// ============================================
// INICIALIZACIÓN FINAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Activar funcionalidades opcionales
  // initScrollProgress(); // Descomentar si querés la barra de progreso
  // detectAdBlock(); // Descomentar si necesitás detectar ad blockers
  
  if (DEBUG) {
    console.log('✅ Landing page completamente cargada y funcional');
    console.log('💡 Tip: Usá window.VoelkeepLanding para acceder a funciones útiles');
  }
});

// ============================================
// COMPATIBILIDAD CON NAVEGADORES ANTIGUOS
// ============================================

// Polyfill para Array.forEach (IE11)
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Polyfill para Element.closest (IE11)
if (!Element.prototype.closest) {
  Element.prototype.closest = function(selector) {
    var el = this;
    while (el) {
      if (el.matches(selector)) return el;
      el = el.parentElement;
    }
    return null;
  };
}

// ============================================
// FIN DEL SCRIPT
// ============================================

console.log('%c🌟 Voelkeep Landing Page', 'color: #C94C7C; font-size: 20px; font-weight: bold;');
console.log('%cDesarrollado por SixSight Studio - UADE Team Two', 'color: #8B1E5A; font-size: 12px;');