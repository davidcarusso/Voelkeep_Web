import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LimpiezaProfunda = () => {
  useScrollReveal();

  return (
    <div data-page="limpieza-profunda">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Base"
        title="Limpieza Profunda"
        subtitle="El primer paso para una piel sana y luminosa"
        description="Elimina impurezas, células muertas, exceso de sebo y puntos negros, permitiendo que la piel respire y absorba mejor los tratamientos posteriores."
        whatsappKey="limpiezaProfunda"
        variant="clean"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Qué incluye el tratamiento?</h2>
            <div className="treatment-steps">
              <div className="step">
                <span className="step-number">01</span>
                <h3>Vaporización</h3>
                <p>Apertura de poros para facilitar la limpieza profunda</p>
              </div>
              <div className="step">
                <span className="step-number">02</span>
                <h3>Extracción</h3>
                <p>Eliminación profesional de impurezas y comedones</p>
              </div>
              <div className="step">
                <span className="step-number">03</span>
                <h3>Exfoliación</h3>
                <p>Renovación de la superficie cutánea</p>
              </div>
              <div className="step">
                <span className="step-number">04</span>
                <h3>Mascarilla personalizada</h3>
                <p>Aplicación específica según tu tipo de piel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de la Limpieza Profunda</h2>
          <div className="benefits-grid">
            <BenefitCard
              icon="✨"
              title="Piel más luminosa"
              description="Elimina células muertas revelando el brillo natural"
            />
            <BenefitCard
              icon="🎯"
              title="Poros visiblemente reducidos"
              description="Limpieza profunda que minimiza la apariencia de poros"
            />
            <BenefitCard
              icon="💧"
              title="Mejor absorción"
              description="Tu piel absorberá mejor los productos de cuidado"
            />
            <BenefitCard
              icon="🌿"
              title="Para todo tipo de piel"
              description="Especialmente ideal para piel grasa o con poros dilatados"
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Ideal para vos si tenés:</h2>
            <ul className="ideal-list">
              <li>✓ Piel con tendencia grasa</li>
              <li>✓ Puntos negros y comedones</li>
              <li>✓ Poros dilatados</li>
              <li>✓ Piel opaca o sin luminosidad</li>
              <li>✓ Ganas de comenzar una rutina de skincare</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés empezar tu rutina de cuidado facial?"
        description="La limpieza profunda es el primer paso. Consultá por este tratamiento y comenzá a cuidar tu piel."
        buttonText="Agendar mi limpieza"
        whatsappKey="limpiezaProfunda"
        note="📱 Respuesta inmediata • Solo con turno previo"
      />
    </div>
  );
};

export default LimpiezaProfunda;
