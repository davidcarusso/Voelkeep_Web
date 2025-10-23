import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const TerapiaLED = () => {
  useScrollReveal();

  return (
    <div data-page="terapia-led">
      {/* Hero Section */}
      <HeroSection
        badge="Complemento Ideal"
        title="Terapia con Luz LED"
        subtitle="Potencia los resultados de tus tratamientos"
        description="Complemento ideal post-tratamiento. Favorece la regeneración celular, calma la piel y potencia los resultados de otros procedimientos. Utiliza diferentes longitudes de onda según el objetivo (antiinflamatorio, reafirmante, regenerador, etc.)."
        whatsappKey="terapiaLED"
        variant="light"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona la terapia LED?</h2>
            <p className="intro-text">
              La terapia con luz LED (fotomodulación) utiliza diferentes longitudes de onda de luz 
              que penetran en la piel y estimulan procesos celulares específicos. Cada color tiene 
              una función particular: reducir inflamación, estimular colágeno, calmar la piel, 
              combatir bacterias, entre otros.
            </p>
            
            <div className="led-colors">
              <div className="color-card red">
                <div className="color-circle" style={{ backgroundColor: '#ff0000' }}></div>
                <h3>Luz Roja</h3>
                <p>Estimula colágeno, reafirma y rejuvenece</p>
              </div>
              <div className="color-card blue">
                <div className="color-circle" style={{ backgroundColor: '#0000ff' }}></div>
                <h3>Luz Azul</h3>
                <p>Antibacteriana, ideal para acné</p>
              </div>
              <div className="color-card green">
                <div className="color-circle" style={{ backgroundColor: '#00ff00' }}></div>
                <h3>Luz Verde</h3>
                <p>Calma, reduce rojeces y manchas</p>
              </div>
              <div className="color-card yellow">
                <div className="color-circle" style={{ backgroundColor: '#ffff00' }}></div>
                <h3>Luz Amarilla</h3>
                <p>Drenaje linfático y circulación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de la Terapia LED</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.renovacion}
              title="Regeneración celular"
              description="Acelera la recuperación y renovación de la piel"
            />
            <BenefitCard
              iconComponent={Icons.flor}
              title="Calma la piel"
              description="Reduce inflamación y rojeces"
            />
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Potencia tratamientos"
              description="Mejora los resultados de otros procedimientos"
            />
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Estimula colágeno"
              description="Reafirma y rejuvenece naturalmente"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="No invasivo"
              description="Sin dolor, sin efectos secundarios"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Relajante"
              description="Momento de descanso y bienestar"
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Ideal como complemento de:</h2>
            <ul className="ideal-list">
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Microneedling</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Peelings químicos</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tratamientos para acné</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Radiofrecuencia</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Dermaplaning</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Cualquier tratamiento facial</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés potenciar tus tratamientos?"
        description="Consultá por la terapia LED como complemento de tu rutina de cuidado"
        buttonText="Consultar tratamiento"
        whatsappKey="terapiaLED"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Sesiones relajantes y sin dolor</>}
      />
    </div>
  );
};

export default TerapiaLED;
