/**
 * ============================================
 * COMPONENTE: CAROUSEL DE TESTIMONIOS
 * ============================================
 */

import { CONFIG } from '../config.js';

export function createTestimonialCarousel() {
  const section = document.createElement('section');
  section.className = 'testimonials-carousel';
  
  const stars = '⭐'.repeat(5);
  
  const testimonialsHTML = CONFIG.testimonials.map((testimonial, index) => `
    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
      <div class="testimonial-card-carousel">
        <div class="quote-icon">"</div>
        <div class="stars">${stars}</div>
        <p class="testimonial-text">${testimonial.text}</p>
        <p class="testimonial-author">- ${testimonial.author}</p>
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title scroll-reveal">Lo que dicen nuestras clientas</h2>
      
      <div class="carousel-container">
        <button class="carousel-btn carousel-prev" aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div class="carousel-wrapper">
          <div class="carousel-track">
            ${testimonialsHTML}
          </div>
        </div>
        
        <button class="carousel-btn carousel-next" aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      <div class="carousel-dots">
        ${CONFIG.testimonials.map((_, index) => `
          <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Ir a testimonio ${index + 1}"></button>
        `).join('')}
      </div>
    </div>
  `;
  
  return section;
}

export function initTestimonialCarousel() {
  // Buscar la sección de testimonios estática
  const staticTestimonials = document.querySelector('.testimonials');
  if (!staticTestimonials) return;
  
  // Crear y reemplazar con carousel
  const carousel = createTestimonialCarousel();
  staticTestimonials.replaceWith(carousel);
  
  // Inicializar funcionalidad
  setupCarousel();
}

function setupCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (!track || slides.length === 0) return;
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayInterval;
  
  function goToSlide(index) {
    // Normalizar índice
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    // Actualizar slides
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    // Actualizar dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentIndex = index;
  }
  
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }
  
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }
  
  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoplay();
    });
  });
  
  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }
  
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }
  
  // Pausar al hover
  const container = document.querySelector('.carousel-container');
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
  }
  
  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetAutoplay();
    }
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });
  
  // Iniciar autoplay
  startAutoplay();
}
