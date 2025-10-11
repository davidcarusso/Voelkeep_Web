import { Link } from 'react-router-dom';
import { generateWhatsAppUrl } from '@/config';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // Agregar clase al body para estilos específicos
    document.body.classList.add('error-page');
    return () => {
      document.body.classList.remove('error-page');
    };
  }, []);

  return (
    <div className="not-found-page" data-page="404">
      <section className="error-section">
        <div className="error-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        
        <div className="container">
          <div className="error-content">
            <div className="error-icon">😢</div>
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Página no encontrada</h2>
            <p className="error-description">
              Lo sentimos, la página que estás buscando no existe o fue movida.
            </p>
            
            <div className="error-suggestions">
              <h3>¿Qué podés hacer?</h3>
              <ul>
                <li>Verificar que la URL esté correcta</li>
                <li>Volver a la página principal</li>
                <li>Explorar nuestros tratamientos</li>
                <li>Contactarnos si necesitás ayuda</li>
              </ul>
            </div>

            <div className="error-actions">
              <Link to="/" className="cta-button cta-primary">
                Volver al inicio
              </Link>
              <Link to="/gloss-peel" className="cta-button cta-secondary">
                Ver tratamientos
              </Link>
              <a 
                href={generateWhatsAppUrl('general')}
                className="cta-button cta-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </div>

            <div className="error-links">
              <p>Páginas populares:</p>
              <div className="quick-links">
                <Link to="/">Inicio</Link>
                <Link to="/gloss-peel">Gloss Peel</Link>
                <Link to="/gift-card">Gift Cards</Link>
                <a href="/#tratamientos">Tratamientos</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
