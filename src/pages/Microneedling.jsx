import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Microneedling = () => {
  useScrollReveal();

  return (
    <div data-page="microneedling">
      {/* Hero Section */}
      <HeroSection
        badge="Tecnología Avanzada"
        title="Microneedling"
        subtitle="Estimulá la producción natural de colágeno"
        description="Técnica avanzada que utiliza microagujas para regenerar la piel desde adentro, mejorando textura, firmeza y elasticidad de forma natural."
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
                <span className="step-icon">🎯</span>
                <h3>Estimulación controlada</h3>
                <p>Las microagujas crean micropunciones precisas</p>
              </div>
              <div className="process-step">
                <span className="step-icon">⚡</span>
                <h3>Activación celular</h3>
                <p>El cuerpo responde regenerando tejido nuevo</p>
              </div>
              <div className="process-step">
                <span className="step-icon">✨</span>
                <h3>Resultados progresivos</h3>
                <p>La piel se renueva naturalmente en las siguientes semanas</p>
              </div>
            </div>
            
            <div className="highlight-box">
              <h3>💉 Potenciación de activos</h3>
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
              <li>✓ Cicatrices de acné o marcas en la piel</li>
              <li>✓ Poros dilatados</li>
              <li>✓ Líneas finas o arrugas</li>
              <li>✓ Pérdida de firmeza</li>
              <li>✓ Textura irregular</li>
              <li>✓ Estrías (también funciona en cuerpo)</li>
              <li>✓ Ganas de mejorar la calidad general de tu piel</li>
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
