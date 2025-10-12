import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const GiftCard = () => {
  useScrollReveal();

  return (
    <div data-page="gift-card">
      {/* Hero Section */}
      <HeroSection
        badge={
          <>
            <Icon icon={Icons.gift} size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} /> 
            Regalo Perfecto
          </>
        }
        title="Gift Cards"
        subtitle="Regalá bienestar y belleza"
        description="Gift Cards personalizadas para que regales una experiencia única de cuidado y renovación"
        whatsappKey="giftCard"
        variant="gift"
      />

      {/* Características */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">¿Por qué regalar una Gift Card?</h2>
          <div className="features-grid">
            <FeatureCard
              iconComponent={Icons.heart}
              title="Regalo Único"
              description="Una experiencia de bienestar inolvidable"
              className="feature-card"
            />
            <FeatureCard
              iconComponent={Icons.sparkle}
              title="Personalizable"
              description="Elegí el monto y el tratamiento"
              className="feature-card"
            />
            <FeatureCard
              iconComponent={Icons.calendar}
              title="Sin vencimiento"
              description="Pueden usarla cuando quieran"
              className="feature-card"
            />
            <FeatureCard
              iconComponent={Icons.gift}
              title="Presentación especial"
              description="Empaque elegante y tarjeta personalizada"
              className="feature-card"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés regalar una experiencia única?"
        description="Consultá por nuestras Gift Cards personalizadas"
        buttonText="Consultar por WhatsApp"
        whatsappKey="giftCard"
        note={
          <>
            <Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> 
            Te asesoramos para elegir el regalo perfecto
          </>
        }
      />
    </div>
  );
};

export default GiftCard;
