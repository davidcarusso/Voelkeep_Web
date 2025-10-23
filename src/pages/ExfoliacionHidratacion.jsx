import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const ExfoliacionHidratacion = () => {
  useScrollReveal();

  return (
    <div data-page="exfoliacion-hidratacion">
      {/* Hero Section */}
      <HeroSection
        badge="Ritual Completo"
        title="Exfoliación + Hidratación Corporal"
        subtitle="Piel suave, nutrida y radiante"
        description="Tratamiento que combina una exfoliación suave con una hidratación profunda. Suaviza, nutre y mejora el aspecto general de la piel, dejándola luminosa, tersa y con un tacto sedoso. Ideal para todo tipo de piel y perfecto antes de eventos o cambio de estación."
        whatsappKey="exfoliacionHidratacion"
        variant="glow"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿En qué consiste?</h2>
            <p className="intro-text">
              Este ritual de belleza combina dos pasos esenciales: primero, una exfoliación suave 
              que elimina células muertas y prepara la piel; segundo, una hidratación profunda con 
              productos nutritivos que penetran en las capas dérmicas. El resultado es una piel 
              increíblemente suave, luminosa y con un aroma delicioso.
            </p>
            
            <div className="treatment-steps">
              <div className="step">
                <span className="step-number">01</span>
                <h3>Exfoliación suave</h3>
                <p>Remueve células muertas sin agredir la piel</p>
              </div>
              <div className="step">
                <span className="step-number">02</span>
                <h3>Hidratación profunda</h3>
                <p>Nutre intensamente con activos de alta calidad</p>
              </div>
              <div className="step">
                <span className="step-number">03</span>
                <h3>Masaje relajante</h3>
                <p>Favorece la absorción y genera bienestar</p>
              </div>
              <div className="step">
                <span className="step-number">04</span>
                <h3>Resultado inmediato</h3>
                <p>Piel luminosa, tersa y con tacto sedoso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Tratamiento</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.diamante}
              title="Piel ultra suave"
              description="Tacto sedoso y aterciopelado"
            />
            <BenefitCard
              iconComponent={Icons.hidratacion}
              title="Hidratación profunda"
              description="Nutre intensamente las capas dérmicas"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Luminosidad renovada"
              description="Piel radiante y con brillo saludable"
            />
            <BenefitCard
              iconComponent={Icons.flor}
              title="Aroma y bienestar"
              description="Experiencia sensorial completa"
            />
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Ideal antes de eventos"
              description="Luce una piel impecable en ocasiones especiales"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Para todo tipo de piel"
              description="Apto para pieles secas, mixtas o normales"
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Ideal para vos si:</h2>
            <ul className="ideal-list">
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tenés piel seca o deshidratada</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Buscás un momento de relax y autocuidado</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tenés un evento especial próximo (boda, fiesta, vacaciones)</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés preparar tu piel para el cambio de estación</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Necesitás revitalizar tu piel corporal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés una piel suave, nutrida y radiante?"
        description="Regalate este ritual de exfoliación e hidratación corporal"
        buttonText="Agendar mi ritual"
        whatsappKey="exfoliacionHidratacion"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Experiencia de bienestar completa</>}
      />
    </div>
  );
};

export default ExfoliacionHidratacion;
