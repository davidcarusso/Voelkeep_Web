import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const ExosomasFacial = () => {
  useScrollReveal();

  return (
    <div data-page="exosomas-facial">
      {/* Hero Section */}
      <HeroSection
        badge="Regeneración Avanzada"
        title="Exosomas Facial"
        subtitle="Tecnología regeneradora de última generación"
        description="Tratamiento regenerador avanzado que utiliza exosomas para potenciar la renovación celular. Mejora la textura, luminosidad y firmeza de la piel, restaurando su vitalidad. Ideal para pieles desvitalizadas o con signos de envejecimiento."
        whatsappKey="exosomasFacial"
        variant="advanced"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Qué son los exosomas?</h2>
            <p className="intro-text">
              Los exosomas son vesículas microscópicas que contienen información celular esencial. 
              Actúan como mensajeros que estimulan la regeneración, mejoran la comunicación entre 
              células y potencian los mecanismos naturales de reparación de la piel. Es uno de los 
              tratamientos más avanzados en medicina regenerativa estética.
            </p>
            
            <div className="highlight-box">
              <h3><Icon icon={Icons.ciencia} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Ciencia de vanguardia</h3>
              <p>Tecnología innovadora que revoluciona el cuidado y rejuvenecimiento de la piel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de los Exosomas Faciales</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.renovacion}
              title="Regeneración celular"
              description="Estimula la renovación profunda de la piel"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Mejora la luminosidad"
              description="Devuelve el brillo y vitalidad natural"
            />
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Aumenta la firmeza"
              description="Tonifica y reafirma los tejidos"
            />
            <BenefitCard
              iconComponent={Icons.diamante}
              title="Textura mejorada"
              description="Piel más suave y uniforme"
            />
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Restaura vitalidad"
              description="Ideal para pieles desvitalizadas o apagadas"
            />
            <BenefitCard
              iconComponent={Icons.ciencia}
              title="Anti-edad avanzado"
              description="Combate los signos de envejecimiento"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel desvitalizada o apagada</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Signos de envejecimiento</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Pérdida de firmeza</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel con falta de luminosidad</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Busca un tratamiento regenerador avanzado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés probar la regeneración avanzada?"
        description="Consultá por el tratamiento de exosomas faciales y descubrí la tecnología del futuro"
        buttonText="Consultar tratamiento"
        whatsappKey="exosomasFacial"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Tecnología de vanguardia en medicina estética</>}
      />
    </div>
  );
};

export default ExosomasFacial;
