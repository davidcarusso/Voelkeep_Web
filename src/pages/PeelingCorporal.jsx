import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import { Icons, Icon } from '@/components/Icons';

const PeelingCorporal = () => {
  useScrollReveal();
  usePageViewTracking();

  return (
    <div data-page="peeling-corporal">
      {/* Hero Section */}
      <HeroSection
        badge="Renovación Corporal"
        title="Peeling Corporal"
        subtitle="Renueva la piel de tu cuerpo"
        description="Renovación profunda de la piel del cuerpo mediante ácidos o exfoliantes naturales. Estimula la regeneración celular y mejora la textura y luminosidad de la piel. Recomendado para zonas con piel áspera, manchas o falta de uniformidad."
        whatsappKey="peelingCorporal"
        variant="renew"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona?</h2>
            <p className="intro-text">
              El peeling corporal utiliza agentes exfoliantes (ácidos o enzimas naturales) para 
              eliminar las capas superficiales de piel muerta, estimulando la regeneración celular. 
              El resultado es una piel más suave, uniforme, luminosa y preparada para absorber 
              mejor tratamientos hidratantes.
            </p>
            
            <div className="highlight-box">
              <h3><Icon icon={Icons.renovacion} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Renovación integral</h3>
              <p>Ideal para mejorar zonas con piel áspera como codos, rodillas, espalda o piernas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Peeling Corporal</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Renueva la piel"
              description="Estimula la regeneración celular profunda"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Mejora textura y luminosidad"
              description="Piel más suave, uniforme y radiante"
            />
            <BenefitCard
              iconComponent={Icons.diamante}
              title="Reduce asperezas"
              description="Suaviza codos, rodillas y otras zonas ásperas"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Atenúa manchas"
              description="Unifica el tono de la piel corporal"
            />
            <BenefitCard
              iconComponent={Icons.empaque}
              title="Prepara para hidratación"
              description="Piel lista para absorber mejor los productos"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Piel renovada"
              description="Aspecto fresco, joven y saludable"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel áspera o rugosa</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Manchas en el cuerpo</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Falta de luminosidad en la piel corporal</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Zonas desuniformes (codos, rodillas, espalda)</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Quieres preparar la piel antes de un evento especial</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés renovar la piel de tu cuerpo?"
        description="Consultá por el peeling corporal y descubrí una piel más suave y luminosa"
        buttonText="Consultar tratamiento"
        whatsappKey="peelingCorporal"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Tratamiento personalizado según tu tipo de piel</>}
      />
    </div>
  );
};

export default PeelingCorporal;
