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
              iconComponent={Icons.limpieza}
              title="Limpieza Facial Profunda"
              description="Elimina impurezas, puntos negros y células muertas. Ideal como primer paso para potenciar otros tratamientos."
              features={[
                'Mejora textura y luminosidad',
                'Para todo tipo de piel',
                'Base para otros tratamientos'
              ]}
              linkTo="/limpieza-profunda"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.peeling}
              title="Peeling Químico"
              description="Renueva la piel con ácidos seleccionados. Trata manchas, acné, líneas finas y signos de envejecimiento."
              features={[
                'Piel más uniforme y revitalizada',
                'Reduce manchas y líneas',
                'Adaptado a tu tipo de piel'
              ]}
              linkTo="/peeling-facial"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.glossPeel}
              title="Gloss Peel"
              description="Peeling suave con efecto glow inmediato. Apto para verano y especialmente para pieles sensibles o con rosácea."
              features={[
                'Luminosidad inmediata',
                'Apto para verano',
                'Ideal para pieles sensibles'
              ]}
              linkTo="/gloss-peel"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.peeling}
              title="Peeling Enzimático"
              description="Exfoliación natural que remueve impurezas sin irritar. Ideal para pieles sensibles o con rosácea."
              features={[
                'Suave y no irritante',
                'Ingredientes naturales',
                'Para pieles reactivas'
              ]}
              linkTo="/peeling-enzimatico"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.dermaplaning}
              title="Dermaplaning"
              description="Exfoliación física con bisturí estéril. Piel extremadamente suave, luminosa y lista para absorber activos."
              features={[
                'Acabado uniforme y radiante',
                'Elimina vello facial',
                'Efecto inmediato'
              ]}
              linkTo="/dermaplaning"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.microneedling}
              title="Microneedling"
              description="Terapia de inducción de colágeno. Mejora firmeza, textura y reduce cicatrices de acné."
              features={[
                'Resultados progresivos',
                'Reduce cicatrices',
                'Estimula colágeno'
              ]}
              linkTo="/microneedling"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.ciencia}
              title="Exosomas Facial"
              description="Tratamiento regenerador avanzado. Mejora textura, luminosidad y firmeza restaurando la vitalidad."
              features={[
                'Tecnología de vanguardia',
                'Regeneración profunda',
                'Anti-edad avanzado'
              ]}
              linkTo="/exosomas-facial"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.hidralips}
              title="Hydralips"
              description="Tratamiento hidratante y regenerador de labios. Aporta leve volumen y aspecto saludable sin inyecciones."
              features={[
                'Suavidad y volumen natural',
                'Sin agujas',
                'Ideal para labios resecos'
              ]}
              linkTo="/hidralips"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.limpieza}
              title="Tratamiento para Acné"
              description="Regula el exceso de sebo, reduce inflamación y previene brotes. Para pieles grasas o con tendencia acneica."
              features={[
                'Controla el sebo',
                'Previene brotes',
                'Piel equilibrada'
              ]}
              linkTo="/tratamiento-acne"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.radiofrecuencia}
              title="Radiofrecuencia Facial"
              description="Estimula colágeno mediante calor controlado. Mejora firmeza y redefine el óvalo facial."
              features={[
                'Efecto tensor visible',
                'Sin procedimientos invasivos',
                'Reduce líneas de expresión'
              ]}
              linkTo="/radiofrecuencia"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.sparkle}
              title="Terapia con Luz LED"
              description="Complemento post-tratamiento. Favorece regeneración celular y potencia resultados."
              features={[
                'Diferentes colores por objetivo',
                'No invasivo',
                'Potencia otros tratamientos'
              ]}
              linkTo="/terapia-led"
              linkText="Conocer más"
            />

          </div>

          {/* Tratamientos Corporales */}
          <h3 className="subsection-title scroll-reveal" style={{ marginTop: '4rem' }}>
            <Icon icon={Icons.fuerza} size={28} /> Tratamientos Corporales
          </h3>
          <div className="services-grid">
            
            <ServiceCard
              iconComponent={Icons.limpieza}
              title="Limpieza Corporal"
              description="Remueve impurezas en espalda, glúteos o piernas. Ideal para acné corporal o preparación pre-tratamiento."
              features={[
                'Espalda, glúteos o piernas',
                'Trata acné corporal',
                'Piel limpia y equilibrada'
              ]}
              linkTo="/limpieza-corporal"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.peeling}
              title="Peeling Corporal"
              description="Renovación profunda de la piel del cuerpo. Estimula regeneración y mejora textura y luminosidad."
              features={[
                'Renueva la piel',
                'Reduce asperezas',
                'Atenúa manchas'
              ]}
              linkTo="/peeling-corporal"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.hidratacion}
              title="Exfoliación + Hidratación"
              description="Ritual completo: exfoliación suave + hidratación profunda. Ideal antes de eventos o cambio de estación."
              features={[
                'Piel ultra suave',
                'Nutrición profunda',
                'Luminosidad renovada'
              ]}
              linkTo="/exfoliacion-hidratacion"
              linkText="Conocer más"
            />

            <ServiceCard
              iconComponent={Icons.anticeluliticos}
              title="Tratamiento Anticelulítico y Reafirmante"
              description="Combina radiofrecuencia, técnicas manuales y activos específicos para reducir la celulitis, mejorar la circulación y tonificar los tejidos."
              features={[
                'Reduce celulitis visible',
                'Reafirma y tonifica',
                'Mejora circulación'
              ]}
              linkTo="/anticeluliticos"
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
