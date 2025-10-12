import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const GlossPeel = () => {
  useScrollReveal();

  return (
    <div data-page="gloss-peel">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Estrella"
        title="Gloss Peel"
        subtitle="Peeling facial suave y seguro"
        description="Renovación celular profunda con productos magistrales. Apto para verano y pieles sensibles."
        whatsappKey="glossPeel"
        variant="gloss"
      />

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Gloss Peel</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.renovacion}
              title="Renovación celular"
              description="Estimula la regeneración natural de la piel"
            />
            <BenefitCard
              iconComponent={Icons.verano}
              title="Apto para verano"
              description="Peeling suave que podés usar todo el año"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Brillo natural"
              description="Recuperá la luminosidad de tu piel"
            />
            <BenefitCard
              iconComponent={Icons.magistral}
              title="Productos magistrales"
              description="Formulaciones personalizadas de alta calidad"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés probar el Gloss Peel?"
        description="Consultá por este tratamiento y descubrí la renovación que tu piel necesita"
        buttonText="Consultar por WhatsApp"
        whatsappKey="glossPeel"
        note={
          <>
            <Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> 
            Respuesta inmediata
          </>
        }
      />
    </div>
  );
};

export default GlossPeel;
