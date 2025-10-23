import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Radiofrecuencia = () => {
  useScrollReveal();

  return (
    <div data-page="radiofrecuencia">
      {/* Hero Section */}
      <HeroSection
        badge="Rejuvenecimiento No Invasivo"
        title="Radiofrecuencia Facial"
        subtitle="Firmeza y rejuvenecimiento sin cirugía"
        description="Estimula la producción natural de colágeno y elastina mediante calor controlado. Mejora la firmeza, redefine el óvalo facial y reduce líneas de expresión. Proporciona un efecto tensor visible sin procedimientos invasivos."
        whatsappKey="radiofrecuencia"
        variant="lift"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona la radiofrecuencia?</h2>
            <p className="intro-text">
              La radiofrecuencia multipolar utiliza energía electromagnética para calentar las capas 
              profundas de la piel de manera controlada y uniforme. Este calentamiento estimula 
              la producción de colágeno nuevo y reorganiza las fibras existentes, generando un 
              efecto tensor natural.
            </p>
            
            <div className="tech-features">
              <div className="tech-card">
                <span className="tech-icon"><Icon icon={Icons.radiofrecuencia} size={32} /></span>
                <h3>Calor controlado</h3>
                <p>Temperatura precisa para máxima eficacia y confort</p>
              </div>
              <div className="tech-card">
                <span className="tech-icon"><Icon icon={Icons.target} size={32} /></span>
                <h3>Penetración profunda</h3>
                <p>Actúa en las capas dérmicas donde se produce el colágeno</p>
              </div>
              <div className="tech-card">
                <span className="tech-icon"><Icon icon={Icons.sparkle} size={32} /></span>
                <h3>Sin dolor</h3>
                <p>Sensación agradable de calor suave y relajante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de la Radiofrecuencia</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Efecto tensor"
              description="Reafirma y tensa la piel visiblemente"
            />
            <BenefitCard
              iconComponent={Icons.ciencia}
              title="Estimula colágeno"
              description="Produce colágeno nuevo de forma natural"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Reduce flacidez"
              description="Combate la pérdida de firmeza facial"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Redefine el óvalo facial"
              description="Mejora el contorno y definición del rostro"
            />
            <BenefitCard
              iconComponent={Icons.clock}
              title="Resultados duraderos"
              description="Efectos progresivos y de larga duración"
            />
            <BenefitCard
              iconComponent={Icons.calidad}
              title="Sin cirugía"
              description="Alternativa no invasiva al lifting quirúrgico"
            />
          </div>
        </div>
      </section>

      {/* Áreas de tratamiento */}
      <section className="treatment-areas">
        <div className="container">
          <div className="areas-content scroll-reveal">
            <h2>Áreas de aplicación</h2>
            <div className="areas-grid">
              <div className="area-card">
                <h3><Icon icon={Icons.user} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Rostro completo</h3>
                <p>Mejilla, mentón, frente y contorno facial</p>
              </div>
              <div className="area-card">
                <h3><Icon icon={Icons.fuerza} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Cuello y papada</h3>
                <p>Reafirma y reduce la flacidez en esta zona delicada</p>
              </div>
              <div className="area-card">
                <h3><Icon icon={Icons.sparkle} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Contorno de ojos</h3>
                <p>Atenúa líneas finas y reafirma párpados</p>
              </div>
              <div className="area-card">
                <h3><Icon icon={Icons.labios} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Código de barras</h3>
                <p>Suaviza las líneas alrededor de los labios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Ideal para vos si tenés:</h2>
            <ul className="ideal-list">
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Flacidez facial leve a moderada</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Pérdida de definición en el óvalo facial</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Arrugas y líneas de expresión</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Papada o cuello con falta de firmeza</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Ganas de rejuvenecer sin cirugía</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Deseo de prevenir el envejecimiento</li>
            </ul>
            <p className="note">
              <strong>Protocolo recomendado:</strong> Se sugiere un plan de sesiones semanales 
              o quincenales para resultados óptimos. Los efectos son acumulativos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés un lifting sin cirugía?"
        description="Consultá por radiofrecuencia y descubrí cómo reafirmar tu piel naturalmente"
        buttonText="Consultar tratamiento"
        whatsappKey="radiofrecuencia"
        note={<><Icon icon={Icons.relajacion} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Tratamiento relajante • Resultados visibles desde la primera sesión</>}
      />
    </div>
  );
};

export default Radiofrecuencia;
