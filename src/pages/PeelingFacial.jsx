import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const PeelingFacial = () => {
  useScrollReveal();

  return (
    <div data-page="peeling-facial">
      {/* Hero Section */}
      <HeroSection
        badge="Renovación Celular"
        title="Peeling Facial"
        subtitle="Mejorá la textura, luminosidad y uniformidad de tu piel"
        description="Tratamiento de renovación celular con ácidos en concentraciones controladas para estimular la regeneración cutánea."
        whatsappKey="peelingFacial"
        variant="renew"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona?</h2>
            <p className="intro-text">
              Se aplican ácidos en concentraciones controladas para eliminar las capas superficiales 
              de la piel y estimular su regeneración natural. Cada tipo de peeling es seleccionado 
              según las necesidades específicas de tu piel.
            </p>
            
            <div className="types-grid">
              <div className="type-card">
                <h3>Peeling Suave</h3>
                <p>Renovación superficial, sin tiempo de recuperación. Ideal para mantenimiento.</p>
              </div>
              <div className="type-card">
                <h3>Peeling Medio</h3>
                <p>Penetración más profunda para tratar manchas y líneas de expresión.</p>
              </div>
              <div className="type-card">
                <h3>Peeling Profundo</h3>
                <p>Renovación intensa para casos que requieren resultados más dramáticos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Peeling Facial</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Reduce manchas"
              description="Aclara hiperpigmentaciones y unifica el tono"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Atenúa líneas finas"
              description="Disminuye la apariencia de arrugas superficiales"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Mejora la textura"
              description="Piel más lisa y suave al tacto"
            />
            <BenefitCard
              iconComponent={Icons.diamante}
              title="Minimiza poros"
              description="Poros menos visibles y más refinados"
            />
            <BenefitCard
              iconComponent={Icons.ciencia}
              title="Trata marcas de acné"
              description="Reduce cicatrices y marcas post-acné"
            />
            <BenefitCard
              iconComponent={Icons.verano}
              title="Luminosidad renovada"
              description="Brillo natural y piel revitalizada"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Manchas en la piel o hiperpigmentación</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Líneas finas o arrugas superficiales</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Poros dilatados</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Marcas o cicatrices de acné</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel opaca o sin vitalidad</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Textura irregular</li>
            </ul>
            <p className="note">
              <strong>Nota importante:</strong> El tipo de peeling será determinado en consulta 
              profesional según tu tipo de piel y objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés renovar tu piel?"
        description="Consultá por el tratamiento de peeling facial personalizado para vos"
        buttonText="Consultar tratamiento"
        whatsappKey="peelingFacial"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Te asesoramos sobre el mejor tipo de peeling para tu piel</>}
      />
    </div>
  );
};

export default PeelingFacial;
