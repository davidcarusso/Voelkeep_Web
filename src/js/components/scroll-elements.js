/**
 * ============================================
 * COMPONENTE: SCROLL PROGRESS BAR
 * ============================================
 */

export function createScrollProgress() {
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.innerHTML = '<div class="scroll-progress-bar"></div>';
  return progress;
}

export function initScrollProgress() {
  const progress = createScrollProgress();
  document.body.appendChild(progress);
  
  const progressBar = progress.querySelector('.scroll-progress-bar');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }
  });
}

/**
 * ============================================
 * COMPONENTE: BACK TO TOP BUTTON
 * ============================================
 */

export function createBackToTop() {
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Volver arriba');
  button.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  return button;
}

export function initBackToTop() {
  const button = createBackToTop();
  document.body.appendChild(button);
  
  // Mostrar/ocultar según scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });
  
  // Scroll suave al top
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
