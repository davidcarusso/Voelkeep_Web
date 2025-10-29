import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateWhatsAppUrl } from '@/config';
import Icons, { Icon } from '@/components/Icons';
import { trackWhatsAppConversion } from '@/hooks/useGoogleTagManager';

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

  const handleWhatsAppClick = async (e, messageKey) => {
    e.preventDefault();
    const whatsappUrl = generateWhatsAppUrl(messageKey);
    closeMenu();
    await trackWhatsAppConversion(whatsappUrl, 100.0);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const servicios = {
    faciales: [
      { nombre: 'Limpieza Facial Profunda', ruta: '/limpieza-profunda' },
      { nombre: 'Peeling Químico', ruta: '/peeling-facial' },
      { nombre: 'Gloss Peel', ruta: '/gloss-peel' },
      { nombre: 'Peeling Enzimático', ruta: '/peeling-enzimatico' },
      { nombre: 'Dermaplaning', ruta: '/dermaplaning' },
      { nombre: 'Microneedling', ruta: '/microneedling' },
      { nombre: 'Exosomas Facial', ruta: '/exosomas-facial' },
      { nombre: 'Hydralips', ruta: '/hidralips' },
      { nombre: 'Tratamiento para Acné', ruta: '/tratamiento-acne' },
      { nombre: 'Radiofrecuencia Facial', ruta: '/radiofrecuencia' },
      { nombre: 'Terapia con Luz LED', ruta: '/terapia-led' },
    ],
    corporales: [
      { nombre: 'Limpieza Corporal', ruta: '/limpieza-corporal' },
      { nombre: 'Peeling Corporal', ruta: '/peeling-corporal' },
      { nombre: 'Exfoliación + Hidratación', ruta: '/exfoliacion-hidratacion' },
      { nombre: 'Anticelulítico y Reafirmante', ruta: '/anticeluliticos' },
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
                    <h4 className="dropdown-title">
                      <Icon icon={Icons.sparkle} size={20} /> Faciales
                    </h4>
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
                    <h4 className="dropdown-title">
                      <Icon icon={Icons.fuerza} size={20} /> Corporales
                    </h4>
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
                    
                    <div className="dropdown-divider"></div>
                    
                    {/* <h4 className="dropdown-title">
                      <Icon icon={Icons.asesoramiento} size={20} /> Asesoramiento
                    </h4>
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
                    
                    <div className="dropdown-divider"></div> */}
                    
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
            <Link to="/preguntas-frecuentes" className="navbar-link" onClick={closeMenu}>
              FAQ
            </Link>
            <a 
              href={generateWhatsAppUrl('general')} 
              className="navbar-link" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, 'general')}
            >
              Contacto
            </a>
            <a 
              href={generateWhatsAppUrl('agendar')} 
              className="navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleWhatsAppClick(e, 'agendar')}
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
