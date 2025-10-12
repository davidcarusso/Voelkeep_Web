import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Dermaplaning = () => {
  useScrollReveal();

  return (
    <div data-page="dermaplaning">
      {/* Hero Section */}
      <HeroSection
        badge="Efecto Inmediato"
        title="Dermaplaning"
        subtitle="Piel de porcelana al instante"
        description="Procedimiento no invasivo que elimina células muertas y vello facial fino, dejando tu piel ultra suave, luminosa y lista para absorber mejor los productos."
        whatsappKey="dermaplaning"
        variant="smooth"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿En qué consiste?</h2>
            <p className="intro-text">
              El dermaplaning es una técnica de exfoliación física que utiliza una herramienta 
              especializada para eliminar suavemente las células muertas de la superficie de la 
              piel y el vello facial fino (peach fuzz). El resultado es una piel increíblemente 
              suave, luminosa y con un acabado perfecto.
            </p>
            
            <div className="highlight-box">
              <h3>✨ Sin tiempo de recuperación</h3>
              <p>Podés retomar tu rutina normal inmediatamente después del tratamiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Dermaplaning</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.diamante}
              title="Piel ultra suave"
              description="Textura sedosa y acabado impecable"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Luminosidad instantánea"
              description="Brillo natural desde la primera sesión"
            />
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Maquillaje perfecto"
              description="Base y productos se aplican como nunca antes"
            />
            <BenefitCard
              iconComponent={Icons.empaque}
              title="Mejor absorción"
              description="Tus productos de skincare penetran más eficazmente"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Sin dolor ni molestias"
              description="Procedimiento suave y relajante"
            />
            <BenefitCard
              iconComponent={Icons.radiofrecuencia}
              title="Resultados inmediatos"
              description="Efecto visible al instante"
            />
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Perfecto antes de eventos especiales</h2>
            <p className="highlight">
              Si tenés una boda, fiesta, sesión de fotos o cualquier ocasión especial, 
              el dermaplaning es tu mejor aliado para lucir una piel impecable.
            </p>
            
            <h3>Ideal para vos si buscás:</h3>
            <ul className="ideal-list">
              <li>✓ Piel súper suave y luminosa al instante</li>
              <li>✓ Mejorar la aplicación del maquillaje</li>
              <li>✓ Preparar la piel para otros tratamientos</li>
              <li>✓ Eliminar el vello facial fino</li>
              <li>✓ Exfoliación profunda sin químicos</li>
              <li>✓ Tratamiento seguro y sin dolor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés lucir una piel perfecta?"
        description="Probá el dermaplaning y descubrí el efecto piel de porcelana"
        buttonText="Agendar dermaplaning"
        whatsappKey="dermaplaning"
        note={<><Icon icon={Icons.sparkle} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Ideal antes de eventos • Resultados inmediatos</>}
      />
    </div>
  );
};

export default Dermaplaning;
