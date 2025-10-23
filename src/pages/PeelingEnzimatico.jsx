import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const PeelingEnzimatico = () => {
  useScrollReveal();

  return (
    <div data-page="peeling-enzimatico">
      {/* Hero Section */}
      <HeroSection
        badge="Exfoliación Natural"
        title="Peeling Enzimático"
        subtitle="Exfoliación suave para pieles sensibles"
        description="Exfoliación natural que remueve impurezas sin irritar la piel. Ideal para pieles sensibles o con rosácea que no toleran ácidos químicos. Deja la piel suave, luminosa y equilibrada."
        whatsappKey="peelingEnzimatico"
        variant="gentle"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Qué es el peeling enzimático?</h2>
            <p className="intro-text">
              A diferencia de los peelings químicos, el peeling enzimático utiliza enzimas naturales 
              (generalmente derivadas de frutas como papaya o piña) que actúan de forma selectiva 
              sobre las células muertas, sin agredir la piel sana. Es la opción perfecta para pieles 
              reactivas, sensibles o con rosácea.
            </p>
            
            <div className="highlight-box">
              <h3><Icon icon={Icons.natural} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Exfoliación inteligente</h3>
              <p>Las enzimas solo actúan sobre las células muertas, respetando la piel sana y sensible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Peeling Enzimático</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.flor}
              title="Suave y no irritante"
              description="Perfecto para pieles sensibles o reactivas"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Luminosidad natural"
              description="Piel suave y con brillo saludable"
            />
            <BenefitCard
              iconComponent={Icons.natural}
              title="Ingredientes naturales"
              description="Enzimas de frutas sin químicos agresivos"
            />
            <BenefitCard
              iconComponent={Icons.hidratacion}
              title="Equilibra la piel"
              description="Calma y equilibra pieles reactivas"
            />
            <BenefitCard
              iconComponent={Icons.verano}
              title="Apto para rosácea"
              description="Ideal para pieles con rosácea o cuperosis"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Sin tiempo de recuperación"
              description="Podés seguir con tu rutina inmediatamente"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel sensible o reactiva</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Rosácea o cuperosis</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Intolerancia a ácidos químicos</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel deshidratada</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Busca exfoliación suave sin irritación</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés una exfoliación suave y respetuosa?"
        description="Consultá por el peeling enzimático, ideal para pieles sensibles"
        buttonText="Consultar tratamiento"
        whatsappKey="peelingEnzimatico"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Tratamiento seguro y sin irritación</>}
      />
    </div>
  );
};

export default PeelingEnzimatico;
