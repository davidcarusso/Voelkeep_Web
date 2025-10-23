import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const LimpiezaCorporal = () => {
  useScrollReveal();

  return (
    <div data-page="limpieza-corporal">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Corporal"
        title="Limpieza Corporal"
        subtitle="Piel limpia y equilibrada en todo el cuerpo"
        description="Remueve impurezas, puntos negros y células muertas en zonas específicas del cuerpo (espalda, glúteos o piernas). Ideal para pieles grasas, con acné corporal o para preparar la piel antes de otros tratamientos. Deja la piel limpia, suave y equilibrada."
        whatsappKey="limpiezaCorporal"
        variant="clean"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>Zonas que tratamos</h2>
            <div className="zones-grid">
              <div className="zone-card">
                <span className="zone-icon"><Icon icon={Icons.target} size={32} /></span>
                <h3>Espalda</h3>
                <p>Limpieza profunda para eliminar impurezas y acné corporal</p>
              </div>
              <div className="zone-card">
                <span className="zone-icon"><Icon icon={Icons.target} size={32} /></span>
                <h3>Glúteos</h3>
                <p>Suaviza y equilibra la piel de esta zona tan olvidada</p>
              </div>
              <div className="zone-card">
                <span className="zone-icon"><Icon icon={Icons.target} size={32} /></span>
                <h3>Piernas</h3>
                <p>Prepara la piel para tratamientos posteriores o eventos especiales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de la Limpieza Corporal</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.limpieza}
              title="Elimina impurezas"
              description="Piel libre de puntos negros y comedones"
            />
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Piel más suave"
              description="Textura mejorada y tacto sedoso"
            />
            <BenefitCard
              iconComponent={Icons.natural}
              title="Equilibra la piel"
              description="Regula la producción de sebo"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Trata acné corporal"
              description="Ideal para espalda con brotes o puntos negros"
            />
            <BenefitCard
              iconComponent={Icons.empaque}
              title="Prepara para otros tratamientos"
              description="Base perfecta para exfoliaciones o hidrataciones"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Piel saludable"
              description="Aspecto limpio, fresco y cuidado"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Acné corporal (especialmente en espalda)</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel grasa en el cuerpo</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Puntos negros o comedones corporales</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel áspera o descuidada</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Quieres preparar la piel antes de un evento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés una limpieza corporal profunda?"
        description="Consultá por este tratamiento para tener una piel limpia y saludable en todo el cuerpo"
        buttonText="Consultar tratamiento"
        whatsappKey="limpiezaCorporal"
        note={<><Icon icon={Icons.phone} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Tratamiento personalizado según tu zona a tratar</>}
      />
    </div>
  );
};

export default LimpiezaCorporal;
