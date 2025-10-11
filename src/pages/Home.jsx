import { Link } from 'react-router-dom';
import { CONFIG, generateWhatsAppUrl } from '@/config';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useGoogleMapsLoader } from '@/hooks/useGoogleMapsLoader';

const Home = () => {
  useScrollReveal();
  useGoogleMapsLoader();

  return (
    <div data-page="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge fade-in">Cosmetología Profesional</span>
            <h1 className="fade-in">VOELKEEP</h1>
            <p className="hero-subtitle fade-in">Renovamos tu piel, renovamos tu bienestar</p>
            <p className="hero-description fade-in">
              Centro de estética profesional especializado en tratamientos faciales y corporales con productos magistrales
            </p>
            <div className="hero-ctas fade-in">
              <a href="#tratamientos" className="cta-button cta-primary">Ver tratamientos</a>
              <a 
                href={generateWhatsAppUrl('agendar')} 
                className="cta-button cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar turno
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="featured-services">
        <div className="container">
          <h2 className="section-title scroll-reveal">Nuestros tratamientos destacados</h2>
          <div className="services-grid">
            
            <ServiceCard
              icon="✨"
              title="Gloss Peel"
              description="Peeling facial suave y seguro, apto para verano y pieles sensibles. Recuperá el brillo natural de tu piel."
              features={[
                'Renovación celular profunda',
                'Productos magistrales',
                'Resultados inmediatos'
              ]}
              linkTo="/gloss-peel"
              linkText="Conocer más"
            />

            <ServiceCard
              icon="💎"
              title="Limpieza Facial Profunda"
              description="Tratamiento completo de limpieza con punta de diamante y extracciones profesionales."
              features={[
                'Exfoliación completa',
                'Microdermoabrasión',
                'Hidratación personalizada'
              ]}
              whatsappKey="limpieza"
              linkText="Consultar"
            />

            <ServiceCard
              icon="💆‍♀️"
              title="Ritual Corporal"
              description="Experiencia completa de renovación y relajación corporal con productos de alta calidad."
              features={[
                'Exfoliación corporal',
                'Hidratación integral',
                'Relajación profunda'
              ]}
              whatsappKey="ritual"
              linkText="Consultar"
            />

          </div>
        </div>
      </section>

      {/* Gift Cards CTA */}
      <section className="giftcard-banner">
        <div className="container">
          <div className="banner-content scroll-reveal">
            <div className="banner-text">
              <span className="banner-badge">🎁 Nuevo</span>
              <h2>Regalá Bienestar</h2>
              <p>Gift Cards personalizadas para que regales una experiencia única de cuidado y renovación</p>
              <Link to="/gift-card" className="cta-button cta-gift">Ver Gift Cards</Link>
            </div>
            <div className="banner-icon">
              <div className="gift-box">🎁</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="why-us" id="tratamientos">
        <div className="container">
          <h2 className="section-title scroll-reveal">¿Por qué elegir Voelkeep?</h2>
          <div className="reasons-grid">
            {CONFIG.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <TestimonialCarousel />

      {/* Ubicación y Contacto */}
      <LocationSection />

      {/* CTA Final */}
      <CTASection
        title="¿Lista para renovar tu piel?"
        description="Agendá tu consulta y descubrí el tratamiento perfecto para vos"
        buttonText="Agendar turno ahora"
        whatsappKey="agendar"
        note="📱 Respuesta inmediata por WhatsApp"
      />
    </div>
  );
};

export default Home;
