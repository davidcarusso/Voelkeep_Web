import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageViewTracking } from '@/hooks/usePageViewTracking';
import { Icons, Icon } from '@/components/Icons';

const GlossPeel = () => {
  useScrollReveal();
  usePageViewTracking(true, 1.0); // Track page view

  return (
    <div data-page="gloss-peel">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Estrella"
        title="Gloss Peel"
        subtitle="Peeling suave con efecto glow inmediato"
        description="Peeling suave con efecto 'glow' inmediato. Aporta luminosidad y uniformidad al tono de la piel. Apto para verano y especialmente indicado para pieles sensibles o con rosácea."
        whatsappKey="glossPeel"
        variant="gloss"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Cómo funciona?</h2>
            <p className="intro-text">
              El Gloss Peel es un peeling de última generación que combina ácidos suaves 
              con activos iluminadores. A diferencia de los peelings tradicionales, trabaja 
              en las capas más superficiales de la piel sin causar irritación, descamación 
              visible ni tiempo de recuperación.
            </p>
            
            <div className="highlight-box">
              <h3><Icon icon={Icons.sparkle} size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Efecto Glow Instantáneo</h3>
              <p>
                El resultado es una piel radiante, uniforme y con un brillo natural desde 
                la primera sesión. Es el tratamiento perfecto antes de un evento especial 
                o para mantener tu piel siempre luminosa.
              </p>
            </div>

            <div className="types-grid">
              <div className="type-card">
                <h3><Icon icon={Icons.shield} size={28} /> Para pieles sensibles</h3>
                <p>Formulado especialmente para pieles delicadas, reactivas o con rosácea. Sin irritación.</p>
              </div>
              <div className="type-card">
                <h3><Icon icon={Icons.verano} size={28} /> Todo el año</h3>
                <p>A diferencia de otros peelings, podés hacerlo en cualquier época, incluso en verano.</p>
              </div>
              <div className="type-card">
                <h3><Icon icon={Icons.precision} size={28} /> Sin downtime</h3>
                <p>Salís del centro y seguís con tu rutina normal. Sin descamación ni enrojecimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Gloss Peel</h2>
          <p className="section-subtitle scroll-reveal">
            Un tratamiento revolucionario que transforma tu piel sin agredirla
          </p>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Glow inmediato"
              description="Luminosidad y uniformidad visible desde la primera sesión. Perfecto para eventos especiales."
            />
            <BenefitCard
              iconComponent={Icons.verano}
              title="Apto para verano"
              description="El único peeling que podés usar todo el año sin restricciones de sol"
            />
            <BenefitCard
              iconComponent={Icons.shield}
              title="Pieles sensibles"
              description="Especialmente formulado para pieles sensibles, reactivas o con rosácea"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Sin downtime"
              description="Cero descamación, cero enrojecimiento. Seguís con tu vida normal"
            />
            <BenefitCard
              iconComponent={Icons.magistral}
              title="Unifica el tono"
              description="Reduce manchas leves y mejora la uniformidad de la piel"
            />
            <BenefitCard
              iconComponent={Icons.natural}
              title="Resultados naturales"
              description="Renueva sin irritar, respetando la integridad de tu piel"
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
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Rosácea o rojeces</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Piel opaca o sin luminosidad</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Tono irregular o manchas leves</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Ganas de un glow natural sin agresiones</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Necesidad de un tratamiento express antes de un evento</li>
              <li><Icon icon={Icons.check} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Buscás mantenimiento facial suave todo el año</li>
            </ul>
            <div className="highlight-box" style={{ marginTop: '2rem' }}>
              <p>
                <strong><Icon icon={Icons.verano} size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} /> Perfecto para verano:</strong> Mientras otros peelings requieren evitar el sol, 
                el Gloss Peel es seguro para usar durante todo el año. Solo necesitás 
                tu protector solar habitual.
              </p>
            </div>
            <p className="note">
              <strong>Consejo profesional:</strong> Para mejores resultados, recomendamos 
              un protocolo de 4-6 sesiones espaciadas cada 2-3 semanas, seguido de 
              mantenimiento mensual.
            </p>
          </div>
        </div>
      </section>

      {/* Diferencias con otros peelings */}
      <section className="treatment-details" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Por qué elegir Gloss Peel?</h2>
            <div className="comparison-grid">
              <div className="comparison-card highlight">
                <h3><Icon icon={Icons.sparkle} size={32} /> Gloss Peel</h3>
                <ul className="comparison-list">
                  <li><Icon icon={Icons.check} size={16} /> Sin descamación visible</li>
                  <li><Icon icon={Icons.check} size={16} /> Sin tiempo de recuperación</li>
                  <li><Icon icon={Icons.check} size={16} /> Apto para pieles sensibles</li>
                  <li><Icon icon={Icons.check} size={16} /> Se puede usar en verano</li>
                  <li><Icon icon={Icons.check} size={16} /> Glow inmediato</li>
                  <li><Icon icon={Icons.check} size={16} /> Ideal para rosácea</li>
                </ul>
              </div>
              <div className="comparison-card">
                <h3>Peelings tradicionales</h3>
                <ul className="comparison-list">
                  <li>Descamación durante días</li>
                  <li>Requiere recuperación en casa</li>
                  <li>Puede irritar pieles sensibles</li>
                  <li>No recomendado en verano</li>
                  <li>Resultados después de la descamación</li>
                  <li>No aptos para rosácea</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés lucir una piel radiante sin tiempo de recuperación?"
        description="Descubrí el Gloss Peel, el peeling revolucionario que podés hacer en cualquier época del año. Ideal para pieles sensibles y eventos especiales."
        buttonText="Consultar por WhatsApp"
        whatsappKey="glossPeel"
        note={
          <>
            <Icon icon={Icons.sparkle} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> 
            Glow inmediato • Sin descamación • Perfecto para verano
          </>
        }
      />
    </div>
  );
};

export default GlossPeel;
