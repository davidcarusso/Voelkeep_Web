import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import { Icons, Icon } from '@/components/Icons';

const GlossPeel = () => {
  useScrollReveal();
  usePageViewTracking(true, 1.0); // Track page view

  return (
    <div data-page="gloss-peel">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Estrella"
        title="Gloss Peel"
        subtitle="Peeling suave con efecto glow inmediato"
        description="Peeling suave con efecto 'glow' inmediato. Aporta luminosidad y uniformidad al tono de la piel. Apto para verano y especialmente indicado para pieles sensibles o con rosácea."
        whatsappKey="glossPeel"
        variant="gloss"
      />

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Gloss Peel</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Glow inmediato"
              description="Luminosidad y uniformidad visible desde la primera sesión"
            />
            <BenefitCard
              iconComponent={Icons.verano}
              title="Apto para verano"
              description="Peeling suave que podés usar todo el año"
            />
            <BenefitCard
              iconComponent={Icons.sensible}
              title="Pieles sensibles"
              description="Especialmente indicado para pieles sensibles o con rosácea"
            />
            <BenefitCard
              iconComponent={Icons.magistral}
              title="Resultados naturales"
              description="Renueva sin irritar, respetando tu tipo de piel"
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
