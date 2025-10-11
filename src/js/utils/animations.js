/**
 * ============================================
 * UTILIDADES: ANIMACIONES Y SCROLL
 * ============================================
 */

/**
 * Inicializa animaciones de scroll reveal mejoradas
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  // Intersection Observer con opciones mejoradas
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Agregar clase con un pequeño delay para stagger effect
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        
        // Dejar de observar después de revelar
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar todos los elementos
  revealElements.forEach((element, index) => {
    // Agregar delay automático para elementos en grids
    if (!element.dataset.delay) {
      const delay = Math.min(index * 100, 500);
      element.dataset.delay = delay;
    }
    observer.observe(element);
  });
}

/**
 * Inicializa smooth scroll para enlaces internos
 */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignorar enlaces vacíos
      if (href === '#' || href === '') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Actualizar URL sin hacer scroll adicional
        history.pushState(null, null, href);
      }
    });
  });
}

/**
 * Efecto parallax suave en el hero y otros elementos
 */
export function initParallax() {
  const parallaxElements = [
    { selector: '.hero-content', speed: 0.5, opacityFade: true }
  ];
  
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(config => {
      const elements = document.querySelectorAll(config.selector);
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const elementVisible = (
          scrolled + window.innerHeight > elementTop &&
          scrolled < elementTop + rect.height
        );
        
        if (elementVisible) {
          const yPos = (scrolled - elementTop) * config.speed;
          let transform = `translateY(${yPos}px)`;
          
          element.style.transform = transform;
          
          if (config.opacityFade) {
            const opacity = 1 - (Math.abs(yPos) / window.innerHeight) * 1.2;
            element.style.opacity = Math.max(0, Math.min(1, opacity));
          }
        }
      });
    });
    
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
  
  // Ejecutar una vez al cargar
  updateParallax();
}

/**
 * Lazy loading de imágenes
 */
export function initLazyLoading() {
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px'
    }
  );
  
  // Activar lazy loading para imágenes con data-src
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Animación de números (contador)
 */
export function animateNumber(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.round(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
    }
  }, 16);
}

/**
 * Prevenir que los enlaces vacíos recarguen la página
 */
export function preventEmptyLinks() {
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target && (target.getAttribute('href') === '#' || target.getAttribute('href') === '')) {
      e.preventDefault();
    }
  });
}
