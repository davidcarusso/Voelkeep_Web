import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import { Icons, Icon } from '@/components/Icons';

const Microneedling = () => {
  useScrollReveal();
  usePageViewTracking();

  return (
    <div data-page="microneedling">
      {/* Hero Section */}
      <HeroSection
        badge="Tecnología Avanzada"
        title="Microneedling"
        subtitle="Terapia de inducción de colágeno"
        description="Estimula la producción de colágeno y elastina mediante microperforaciones controladas. Mejora la firmeza, textura y elasticidad de la piel, reduciendo cicatrices, poros dilatados y marcas de acné. Resultados progresivos y naturales."
        whatsappKey="microneedling"
        variant="advanced"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona?</h2>
            <p className="intro-text">
              El microneedling crea microcanales en la piel que desencadenan el proceso natural 
              de reparación del cuerpo. Esto estimula la producción de colágeno y elastina, 
              las proteínas responsables de mantener la piel firme, elástica y juvenil.
            </p>
            
            <div className="process-steps">
              <div className="process-step">
                <span className="step-icon"><Icon icon={Icons.target} size={32} /></span>
                <h3>Estimulación controlada</h3>
                <p>Las microagujas crean micropunciones precisas</p>
              </div>
              <div className="process-step">
                <span className="step-icon"><Icon icon={Icons.radiofrecuencia} size={32} /></span>
                <h3>Activación celular</h3>
                <p>El cuerpo responde regenerando tejido nuevo</p>
              </div>
              <div className="process-step">
                <span className="step-icon"><Icon icon={Icons.sparkle} size={32} /></span>
                <h3>Resultados progresivos</h3>
                <p>La piel se renueva naturalmente en las siguientes semanas</p>
              </div>
            </div>
            
            <div className="highlight-box">
              <h3><Icon icon={Icons.ciencia} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Potenciación de activos</h3>
              <p>Podemos combinar el tratamiento con vitaminas, ácido hialurónico o péptidos para resultados superiores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Microneedling</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.ciencia}
              title="Reduce cicatrices"
              description="Especialmente efectivo en marcas de acné"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Mejora la textura"
              description="Piel más lisa y uniforme"
            />
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Aumenta firmeza"
              description="Estimula colágeno y elastina natural"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Minimiza poros"
              description="Poros visiblemente reducidos"
            />
            <BenefitCard
              iconComponent={Icons.reduccion}
              title="Atenúa líneas finas"
              description="Reduce arrugas y líneas de expresión"
            />
            <BenefitCard
              iconComponent={Icons.natural}
              title="Resultados naturales"
              description="Regeneración progresiva y auténtica"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Cicatrices de acné o marcas en la piel</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Poros dilatados</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Líneas finas o arrugas</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Pérdida de firmeza</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Textura irregular</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Estrías (también funciona en cuerpo)</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Ganas de mejorar la calidad general de tu piel</li>
            </ul>
            <p className="note">
              <strong>Nota:</strong> Los resultados son progresivos. Se recomienda un protocolo 
              de varias sesiones para optimizar el tratamiento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés regenerar tu piel naturalmente?"
        description="Consultá por microneedling y descubrí cómo mejorar la calidad de tu piel desde adentro"
        buttonText="Consultar tratamiento"
        whatsappKey="microneedling"
        note={<><Icon icon={Icons.ciencia} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Tecnología avanzada • Resultados naturales y duraderos</>}
      />
    </div>
  );
};

export default Microneedling;
