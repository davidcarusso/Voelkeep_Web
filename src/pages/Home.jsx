import { Link } from 'react-router-dom';
import { CONFIG, generateWhatsAppUrl } from '@/config';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useGoogleMapsLoader } from '@/hooks/useGoogleMapsLoader';
import Icons, { Icon } from '@/components/Icons';

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
            <h1 className="">VOELKEEP</h1>
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
      <section className="featured-services" id="tratamientos">
        <div className="container">
          <h2 className="section-title scroll-reveal">Nuestros tratamientos destacados</h2>
          
          {/* Tratamientos Faciales */}
          <h3 className="subsection-title scroll-reveal">
            <Icon icon={Icons.sparkle} size={28} /> Tratamientos Faciales
          </h3>
          <div className="services-grid">
            
            <ServiceCard
              iconComponent={Icons.glossPeel}
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
              iconComponent={Icons.limpieza}
              title="Limpieza Facial Profunda"
              description="El primer paso para una piel sana y luminosa. Elimina impurezas y células muertas."
              features={[
                'Vaporización y extracción',
                'Exfoliación completa',
                'Mascarilla personalizada'
              ]}
              linkTo="/limpieza-profunda"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.peeling}
              title="Peeling Facial"
              description="Renovación celular para mejorar textura, luminosidad y uniformidad de la piel."
              features={[
                'Reduce manchas y líneas',
                'Mejora la textura',
                'Diferentes intensidades'
              ]}
              linkTo="/peeling-facial"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.dermaplaning}
              title="Dermaplaning"
              description="Piel de porcelana al instante. Elimina vello fino y células muertas sin dolor."
              features={[
                'Piel ultra suave',
                'Efecto inmediato',
                'Sin tiempo de recuperación'
              ]}
              linkTo="/dermaplaning"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.microneedling}
              title="Microneedling"
              description="Estimula colágeno y elastina naturalmente. Reduce cicatrices y mejora la textura."
              features={[
                'Regeneración natural',
                'Reduce cicatrices de acné',
                'Resultados progresivos'
              ]}
              linkTo="/microneedling"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.radiofrecuencia}
              title="Radiofrecuencia Multipolar"
              description="Reafirma y rejuvenece sin cirugía. Estimula colágeno en capas profundas."
              features={[
                'Efecto lifting natural',
                'Sin dolor ni molestias',
                'Resultados duraderos'
              ]}
              linkTo="/radiofrecuencia"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.hidralips}
              title="Hidralips"
              description="Hidratación intensiva para labios suaves con brillo natural, sin inyecciones."
              features={[
                'Labios más suaves',
                'Efecto gloss natural',
                'Sin agujas'
              ]}
              linkTo="/hidralips"
              linkText="Conocer más"
            />

          </div>

          {/* Tratamientos Corporales */}
          <h3 className="subsection-title scroll-reveal" style={{ marginTop: '4rem' }}>
            <Icon icon={Icons.fuerza} size={28} /> Tratamientos Corporales
          </h3>
          <div className="services-grid">
            
            <ServiceCard
              iconComponent={Icons.reductores}
              title="Tratamientos Reductores"
              description="Modela tu figura y reduce volumen en zonas específicas del cuerpo."
              features={[
                'Reduce medidas',
                'Elimina toxinas',
                'Mejora la circulación'
              ]}
              linkTo="/reductores"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.reafirmantes}
              title="Tratamientos Reafirmantes"
              description="Recupera la firmeza y elasticidad de tu piel corporal."
              features={[
                'Combate la flacidez',
                'Estimula colágeno',
                'Piel más firme'
              ]}
              linkTo="/reafirmantes"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.anticeluliticos}
              title="Tratamientos Anticelulíticos"
              description="Reduce la celulitis y mejora la textura de la piel corporal."
              features={[
                'Reduce piel de naranja',
                'Mejora circulación',
                'Drenaje linfático'
              ]}
              linkTo="/anticeluliticos"
              linkText="Conocer más"
            />

          </div>

          {/* Asesoramiento */}
          <h3 className="subsection-title scroll-reveal" style={{ marginTop: '4rem' }}>
            <Icon icon={Icons.asesoramiento} size={28} /> Asesoramiento Personalizado
          </h3>
          <div className="services-grid">
            
            <ServiceCard
              iconComponent={Icons.asesoramiento}
              title="Asesoramiento de Skincare"
              description="Diagnóstico profesional y diseño de rutina personalizada para tu piel."
              features={[
                'Diagnóstico completo',
                'Rutina a tu medida',
                'Seguimiento continuo'
              ]}
              linkTo="/asesoramiento"
              linkText="Conocer más"
            />

          </div>
        </div>
      </section>

      {/* Gift Cards CTA */}
      <section className="giftcard-banner">
        <div className="container">
          <div className="banner-content scroll-reveal">
            <div className="banner-text">
              <span className="banner-badge">
                <Icon icon={Icons.gift} size={20} /> Nuevo
              </span>
              <h2>Regalá Bienestar</h2>
              <p>Gift Cards personalizadas para que regales una experiencia única de cuidado y renovación</p>
              <Link to="/gift-card" className="cta-button cta-gift">Ver Gift Cards</Link>
            </div>
            <div className="banner-icon">
              <div className="gift-box">
                <Icon icon={Icons.gift} size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title scroll-reveal">¿Por qué elegir Voelkeep?</h2>
          <div className="reasons-grid">
            {CONFIG.features.map((feature, index) => (
              <FeatureCard
                key={index}
                iconComponent={feature.iconComponent}
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
        note={
          <>
            <Icon icon={Icons.phone} size={18} /> Respuesta inmediata por WhatsApp
          </>
        }
      />
    </div>
  );
};

export default Home;
