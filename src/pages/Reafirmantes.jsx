import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Reafirmantes = () => {
  useScrollReveal();

  return (
    <div data-page="reafirmantes">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Corporal"
        title="Tratamientos Reafirmantes"
        subtitle="Recuperá la firmeza y elasticidad de tu piel"
        description="Tratamientos diseñados para mejorar la tonicidad de la piel corporal, estimulando la producción de colágeno y combatiendo la flacidez."
        whatsappKey="reafirmantes"
        variant="firm"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funcionan los tratamientos reafirmantes?</h2>
            <p className="intro-text">
              Los tratamientos reafirmantes trabajan en profundidad para estimular la producción 
              de colágeno y elastina, las proteínas responsables de mantener la piel firme y 
              elástica. Combinamos tecnología, productos tensores y técnicas manuales para 
              combatir la flacidez y devolver la tonicidad a tu piel.
            </p>
            
            <div className="methods-grid">
              <div className="method-card">
                <span className="icon"><Icon icon={Icons.radiofrecuencia} size={32} /></span>
                <h3>Radiofrecuencia</h3>
                <p>Estimula colágeno mediante calor controlado</p>
              </div>
              <div className="method-card">
                <span className="icon"><Icon icon={Icons.relajacion} size={32} /></span>
                <h3>Masajes especializados</h3>
                <p>Técnicas que tonifican y reactivan los tejidos</p>
              </div>
              <div className="method-card">
                <span className="icon"><Icon icon={Icons.formula} size={32} /></span>
                <h3>Productos tensores</h3>
                <p>Activos reafirmantes de alta eficacia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de los Tratamientos Reafirmantes</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Combate la flacidez"
              description="Piel más firme y tonificada"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Mejora la elasticidad"
              description="Piel más flexible y resistente"
            />
            <BenefitCard
              iconComponent={Icons.ciencia}
              title="Estimula colágeno"
              description="Producción natural de fibras de sostén"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Remodela contornos"
              description="Define y estiliza la silueta"
            />
            <BenefitCard
              iconComponent={Icons.sparkle}
              title="Textura mejorada"
              description="Piel más lisa y uniforme"
            />
            <BenefitCard
              iconComponent={Icons.clock}
              title="Resultados progresivos"
              description="Mejoras visibles sesión tras sesión"
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
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Brazos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Glúteos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Muslos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Piernas</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Cara interna de brazos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Cara interna de muslos</div>
              <div className="zone-item"><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Zona del busto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Situaciones ideales */}
      <section className="ideal-situations">
        <div className="container">
          <div className="situations-content scroll-reveal">
            <h2>¿Cuándo son ideales estos tratamientos?</h2>
            <div className="situations-grid">
              <div className="situation-card">
                <h3><Icon icon={Icons.user} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Post-embarazo</h3>
                <p>Recuperá la firmeza después de la maternidad</p>
              </div>
              <div className="situation-card">
                <h3><Icon icon={Icons.fuerza} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Después de adelgazar</h3>
                <p>Tonificá la piel tras una pérdida de peso</p>
              </div>
              <div className="situation-card">
                <h3><Icon icon={Icons.clock} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Envejecimiento natural</h3>
                <p>Combatí la flacidez por el paso del tiempo</p>
              </div>
              <div className="situation-card">
                <h3><Icon icon={Icons.fuerza} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Potencia tu entrenamiento</h3>
                <p>Complementá tu rutina de ejercicios</p>
              </div>
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tenés flacidez en abdomen, brazos, glúteos o piernas</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Perdiste elasticidad en la piel</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés prevenir o tratar la flacidez</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Bajaste de peso y necesitás tensar la piel</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Pasaste por un embarazo</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Buscás complementar tu rutina fitness</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Querés mejorar la apariencia general de tu piel corporal</li>
            </ul>
            
            <div className="tip-box">
              <h3><Icon icon={Icons.sparkle} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />Recomendación profesional</h3>
              <p>
                Para mejores resultados, estos tratamientos se pueden combinar con 
                ejercicios de tonificación muscular y una alimentación rica en proteínas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés una piel más firme?"
        description="Consultá por nuestros tratamientos reafirmantes personalizados"
        buttonText="Consultar tratamiento"
        whatsappKey="reafirmantes"
        note={<><Icon icon={Icons.fuerza} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Sesiones adaptadas a tus necesidades específicas</>}
      />
    </div>
  );
};

export default Reafirmantes;
