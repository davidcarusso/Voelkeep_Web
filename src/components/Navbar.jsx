import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateWhatsAppUrl } from '@/config';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const [lastScroll, setLastScroll] = useState(0);

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
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
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
            <a href="/#tratamientos" className="navbar-link" onClick={closeMenu}>
              Tratamientos
            </a>
            <Link to="/gloss-peel" className="navbar-link" onClick={closeMenu}>
              Gloss Peel
            </Link>
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
