import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import { Icons, Icon } from '@/components/Icons';

const Hidralips = () => {
  useScrollReveal();
  usePageViewTracking();

  return (
    <div data-page="hidralips">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento de Labios"
        title="Hydralips"
        subtitle="Hidratación y regeneración sin inyecciones"
        description="Tratamiento hidratante y regenerador de labios. Aporta un leve volumen, suavidad y aspecto saludable sin necesidad de inyecciones. Ideal para labios resecos o con grietas."
        whatsappKey="hidralips"
        variant="lips"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Qué es Hidralips?</h2>
            <p className="intro-text">
              Hidralips es un tratamiento innovador diseñado específicamente para revitalizar 
              los labios. Utiliza activos humectantes profundos y revitalizantes que penetran 
              en las capas dérmicas del labio, restaurando su hidratación natural, mejorando 
              la textura y devolviéndoles ese brillo saludable.
            </p>
            
            <div className="highlight-box">
              <h3><Icon icon={Icons.labios} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Sin agujas, sin dolor</h3>
              <p>Conseguí labios más bonitos sin inyecciones. El resultado es natural, suave y con un efecto "gloss" inmediato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de Hidralips</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.hidratacion}
              title="Hidratación profunda"
              description="Labios suaves y profundamente hidratados"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Efecto gloss natural"
              description="Brillo saludable sin productos pegajosos"
            />
            <BenefitCard
              iconComponent={Icons.flor}
              title="Mejora el color"
              description="Devuelve el tono rosado natural a los labios"
            />
            <BenefitCard
              iconComponent={Icons.heart}
              title="Volumen sutil"
              description="Realza el volumen natural sin exageraciones"
            />
            <BenefitCard
              iconComponent={Icons.herramienta}
              title="Repara grietas"
              description="Ideal para labios resecos o agrietados"
            />
            <BenefitCard
              iconComponent={Icons.radiofrecuencia}
              title="Resultados inmediatos"
              description="Sentí y ví la diferencia desde la primera sesión"
            />
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="process-section">
        <div className="container">
          <div className="process-content scroll-reveal">
            <h2>El proceso de Hidralips</h2>
            <div className="process-timeline">
              <div className="timeline-step">
                <span className="step-num">1</span>
                <h3>Limpieza y preparación</h3>
                <p>Preparamos tus labios para recibir el tratamiento</p>
              </div>
              <div className="timeline-step">
                <span className="step-num">2</span>
                <h3>Aplicación de activos</h3>
                <p>Activos hidratantes y revitalizantes de alta concentración</p>
              </div>
              <div className="timeline-step">
                <span className="step-num">3</span>
                <h3>Masaje y penetración</h3>
                <p>Técnicas específicas para maximizar la absorción</p>
              </div>
              <div className="timeline-step">
                <span className="step-num">4</span>
                <h3>Sellado y protección</h3>
                <p>Sellamos la hidratación para resultados duraderos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Perfecto para vos si:</h2>
            <ul className="ideal-list">
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tenés labios secos o agrietados</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés mejorar la textura de tus labios</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Buscás un efecto natural sin inyecciones</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tus labios perdieron color o vitalidad</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés un boost antes de un evento especial</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Necesitás cuidado extra en temporada de frío</li>
            </ul>
            
            <div className="tip-box">
              <h3><Icon icon={Icons.sparkle} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Tip profesional</h3>
              <p>Combina Hidralips con tu rutina de skincare facial para un look completo y armonioso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés labios de ensueño?"
        description="Probá Hidralips y descubrí la diferencia de unos labios bien cuidados"
        buttonText="Consultar por Hidralips"
        whatsappKey="hidralips"
        note={<><Icon icon={Icons.labios} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Sin dolor • Resultados naturales e inmediatos</>}
      />
    </div>
  );
};

export default Hidralips;
