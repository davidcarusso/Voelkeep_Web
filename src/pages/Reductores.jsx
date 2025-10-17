import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Reductores = () => {
  useScrollReveal();

  return (
    <div data-page="reductores">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Corporal"
        title="Tratamientos Reductores"
        subtitle="Modelá tu figura y reducí volumen"
        description="Tratamientos enfocados en modelar y reducir medidas en zonas específicas del cuerpo, combinando técnicas manuales y aparatología."
        whatsappKey="reductores"
        variant="body"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funcionan los tratamientos reductores?</h2>
            <p className="intro-text">
              Los tratamientos reductores combinan diferentes técnicas para ayudar a reducir 
              volumen y modelar zonas específicas. Trabajamos sobre el tejido adiposo mediante 
              masajes especializados, aparatología y productos lipolíticos que favorecen la 
              eliminación de toxinas y mejoran la circulación.
            </p>
            
            <div className="techniques-grid">
              <div className="technique-card">
                <span className="icon"><Icon icon={Icons.relajacion} size={32} /></span>
                <h3>Masajes manuales</h3>
                <p>Técnicas de drenaje y modelado corporal</p>
              </div>
              <div className="technique-card">
                <span className="icon"><Icon icon={Icons.radiofrecuencia} size={32} /></span>
                <h3>Aparatología</h3>
                <p>Tecnología que potencia los resultados</p>
              </div>
              <div className="technique-card">
                <span className="icon"><Icon icon={Icons.formula} size={32} /></span>
                <h3>Productos lipolíticos</h3>
                <p>Activos de alta concentración para quemar grasa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de los Tratamientos Reductores</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.reductores}
              title="Reduce medidas"
              description="Disminución visible del contorno corporal"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Zonas específicas"
              description="Focalizamos el tratamiento donde lo necesitás"
            />
            <BenefitCard
              iconComponent={Icons.hidratacion}
              title="Elimina toxinas"
              description="Favorece la depuración del organismo"
            />
            <BenefitCard
              iconComponent={Icons.refresh}
              title="Mejora la circulación"
              description="Estimula el flujo sanguíneo y linfático"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Figura más definida"
              description="Silueta más estilizada y armoniosa"
            />
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Complementa tu esfuerzo"
              description="Potencia los resultados de dieta y ejercicio"
            />
          </div>
        </div>
      </section>

      {/* Zonas de tratamiento */}
      <section className="treatment-zones">
        <div className="container">
          <div className="zones-content scroll-reveal">
            <h2>Zonas de aplicación</h2>
            <div className="zones-grid">
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Abdomen</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Cintura</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Caderas</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Cartucheras</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Muslos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Brazos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Espalda</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Piernas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="ideal-for">
        <div className="container">
          <div className="ideal-content scroll-reveal">
            <h2>Ideal para vos si:</h2>
            <ul className="ideal-list">
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés reducir medidas en zonas específicas</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tenés adiposidad localizada</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Buscás definir tu silueta</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés potenciar tu rutina de ejercicio y alimentación</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Necesitás eliminar retención de líquidos</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Deseás mejorar tu figura para un evento especial</li>
            </ul>
            
            <div className="important-note">
              <h3><Icon icon={Icons.clipboard} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Importante</h3>
              <p>
                Los tratamientos reductores son un complemento ideal de hábitos saludables. 
                Para resultados óptimos y duraderos, se recomienda combinarlos con 
                alimentación equilibrada y actividad física regular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés modelar tu figura?"
        description="Consultá por nuestros tratamientos reductores personalizados"
        buttonText="Consultar tratamiento"
        whatsappKey="reductores"
        note={<><Icon icon={Icons.personalizacion} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Plan personalizado según tus objetivos</>}
      />
    </div>
  );
};

export default Reductores;
