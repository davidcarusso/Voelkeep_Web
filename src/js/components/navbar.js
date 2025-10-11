/**
 * ============================================
 * COMPONENTE: NAVBAR
 * ============================================
 */

import { CONFIG } from '../config.js';

export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';
  
  nav.innerHTML = `
    <div class="container">
      <div class="navbar-content">
        <a href="/" class="navbar-brand">
          <img src="./images/Logo_SVG.svg" alt="Voelkeep Logo" class="navbar-logo">
          <span class="navbar-name">VOELKEEP</span>
        </a>
        
        <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle menu">
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </button>
        
        <div class="navbar-menu" id="navbarMenu">
          <a href="/" class="navbar-link">Inicio</a>
          <a href="/#tratamientos" class="navbar-link">Tratamientos</a>
          <a href="/gloss-peel.html" class="navbar-link">Gloss Peel</a>
          <a href="/gift-card.html" class="navbar-link">Gift Cards</a>
          <a href="/#" class="navbar-link" data-whatsapp="general">Contacto</a>
          <a href="#" class="navbar-cta" data-whatsapp="agendar">Agendar Turno</a>
        </div>
      </div>
    </div>
  `;
  
  return nav;
}

/**
 * Inicializa el navbar en la página
 */
export function initNavbar() {
  const navbar = createNavbar();
  document.body.insertBefore(navbar, document.body.firstChild);
  
  // Funcionalidad del menú mobile
  setupMobileMenu();
  
  // Efecto de scroll
  setupScrollEffect();
  
  // Cerrar menú al hacer click en un link
  setupMenuLinks();
}

/**
 * Configurar menú móvil
 */
function setupMobileMenu() {
  const toggle = document.getElementById('navbarToggle');
  const menu = document.getElementById('navbarMenu');
  const navbar = document.getElementById('navbar');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active');
    
    if (isOpen) {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      navbar.classList.remove('menu-open');
      document.body.style.overflow = '';
    } else {
      menu.classList.add('active');
      toggle.classList.add('active');
      navbar.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    }
  });
  
  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && menu.classList.contains('active')) {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      navbar.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Efecto al hacer scroll
 */
function setupScrollEffect() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  const scrollThreshold = 100;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Agregar clase 'scrolled' cuando hace scroll
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar al hacer scroll
    if (currentScroll > scrollThreshold) {
      if (currentScroll > lastScroll && !navbar.classList.contains('menu-open')) {
        // Scrolling down
        navbar.classList.add('hidden');
      } else {
        // Scrolling up
        navbar.classList.remove('hidden');
      }
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Cerrar menú al hacer click en links
 */
function setupMenuLinks() {
  const menu = document.getElementById('navbarMenu');
  const toggle = document.getElementById('navbarToggle');
  const navbar = document.getElementById('navbar');
  
  if (!menu) return;
  
  const links = menu.querySelectorAll('.navbar-link, .navbar-cta');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      if (toggle) toggle.classList.remove('active');
      if (navbar) navbar.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });
}
