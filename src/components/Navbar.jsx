import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateWhatsAppUrl } from '@/config';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [lastScroll, setLastScroll] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const scrollThreshold = 100;

      // Agregar clase 'scrolled' cuando hace scroll
      setIsScrolled(currentScroll > 50);

      // Hide/show navbar al hacer scroll
      if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScroll && !isMenuOpen) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll, isMenuOpen]);

  useEffect(() => {
    // Cerrar menú al cambiar de ruta
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.style.overflow = '';
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const servicios = {
    faciales: [
      { nombre: 'Limpieza Profunda', ruta: '/limpieza-profunda' },
      { nombre: 'Peeling Facial', ruta: '/peeling-facial' },
      { nombre: 'Dermaplaning', ruta: '/dermaplaning' },
      { nombre: 'Microneedling', ruta: '/microneedling' },
      { nombre: 'Radiofrecuencia', ruta: '/radiofrecuencia' },
      { nombre: 'Hidralips', ruta: '/hidralips' },
      { nombre: 'Gloss Peel', ruta: '/gloss-peel' },
    ],
    corporales: [
      { nombre: 'Reductores', ruta: '/reductores' },
      { nombre: 'Reafirmantes', ruta: '/reafirmantes' },
      { nombre: 'Anticelulíticos', ruta: '/anticeluliticos' },
    ],
    asesoramiento: [
      { nombre: 'Asesoramiento Skincare', ruta: '/asesoramiento' },
    ]
  };

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      id="navbar"
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img src="/images/Logo_SVG.svg" alt="Voelkeep Logo" className="navbar-logo" />
            <span className="navbar-name">VOELKEEP</span>
          </Link>
          
          <button 
            className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
          
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Inicio
            </Link>
            
            {/* Menú desplegable de Tratamientos */}
            <div className="navbar-dropdown" ref={dropdownRef}>
              <button 
                className={`navbar-link dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}
                onClick={toggleDropdown}
              >
                Tratamientos
                <span className="dropdown-arrow">▼</span>
              </button>
              
              <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <h4 className="dropdown-title">✨ Tratamientos Faciales</h4>
                    {servicios.faciales.map((servicio, index) => (
                      <Link 
                        key={index}
                        to={servicio.ruta} 
                        className="dropdown-item"
                        onClick={closeMenu}
                      >
                        {servicio.nombre}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="dropdown-section">
                    <h4 className="dropdown-title">💆‍♀️ Tratamientos Corporales</h4>
                    {servicios.corporales.map((servicio, index) => (
                      <Link 
                        key={index}
                        to={servicio.ruta} 
                        className="dropdown-item"
                        onClick={closeMenu}
                      >
                        {servicio.nombre}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="dropdown-section">
                    <h4 className="dropdown-title">📋 Asesoramiento</h4>
                    {servicios.asesoramiento.map((servicio, index) => (
                      <Link 
                        key={index}
                        to={servicio.ruta} 
                        className="dropdown-item"
                        onClick={closeMenu}
                      >
                        {servicio.nombre}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="dropdown-section">
                    <a href="/#tratamientos" className="dropdown-view-all" onClick={closeMenu}>
                      Ver todos los tratamientos →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/gift-card" className="navbar-link" onClick={closeMenu}>
              Gift Cards
            </Link>
            <a 
              href={generateWhatsAppUrl('general')} 
              className="navbar-link" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Contacto
            </a>
            <a 
              href={generateWhatsAppUrl('agendar')} 
              className="navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Agendar Turno
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
