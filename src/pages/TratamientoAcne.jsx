import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const TratamientoAcne = () => {
  useScrollReveal();

  return (
    <div data-page="tratamiento-acne">
      {/* Hero Section */}
      <HeroSection
        badge="Piel Seborreica"
        title="Tratamiento para Acné y Piel Seborreica"
        subtitle="Controla el exceso de grasa y previene brotes"
        description="Regula el exceso de sebo, reduce la inflamación y mejora la textura general de la piel. Ayuda a controlar brotes y prevenir nuevas imperfecciones. Recomendado para pieles grasas, mixtas o con tendencia acneica."
        whatsappKey="tratamientoAcne"
        variant="clean"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona el tratamiento?</h2>
            <p className="intro-text">
              Este tratamiento integral combina limpieza profunda, regulación sebácea y productos 
              específicos para controlar el acné. Trabajamos sobre las causas del problema: 
              exceso de sebo, inflamación, bacterias y obstrucción de poros.
            </p>
            
            <div className="treatment-steps">
              <div className="step">
                <span className="step-number">01</span>
                <h3>Limpieza profunda</h3>
                <p>Eliminación de impurezas y comedones</p>
              </div>
              <div className="step">
                <span className="step-number">02</span>
                <h3>Regulación sebácea</h3>
                <p>Control del exceso de grasa</p>
              </div>
              <div className="step">
                <span className="step-number">03</span>
                <h3>Antiinflamatorio</h3>
                <p>Reduce rojeces y brotes activos</p>
              </div>
              <div className="step">
                <span className="step-number">04</span>
                <h3>Prevención</h3>
                <p>Evita nuevas imperfecciones</p>
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
              iconComponent={Icons.limpieza}
              title="Controla el sebo"
              description="Regula la producción excesiva de grasa"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Reduce inflamación"
              description="Calma brotes activos y rojeces"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Mejora la textura"
              description="Piel más uniforme y suave"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Previene brotes"
              description="Evita nuevas imperfecciones"
            />
            <BenefitCard
              iconComponent={Icons.natural}
              title="Piel equilibrada"
              description="Restaura el balance natural"
            />
            <BenefitCard
              iconComponent={Icons.diamante}
              title="Poros refinados"
              description="Minimiza poros dilatados"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Acné activo (leve, moderado o severo)</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel grasa o mixta</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Poros dilatados</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Comedones (puntos negros)</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Brotes frecuentes</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tendencia acneica</li>
            </ul>
            <p className="note">
              <strong>Nota:</strong> Para casos severos, te recomendaremos trabajar en conjunto con dermatólogo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés controlar el acné y mejorar tu piel?"
        description="Consultá por este tratamiento especializado en piel seborreica y acneica"
        buttonText="Consultar tratamiento"
        whatsappKey="tratamientoAcne"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Evaluación personalizada de tu tipo de piel</>}
      />
    </div>
  );
};

export default TratamientoAcne;
