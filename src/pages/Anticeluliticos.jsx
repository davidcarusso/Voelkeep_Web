import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Anticeluliticos = () => {
  useScrollReveal();

  return (
    <div data-page="anticeluliticos">
      {/* Hero Section */}
      <HeroSection
        badge="Tratamiento Corporal"
        title="Tratamientos Anticelulíticos"
        subtitle="Mejorá la textura de tu piel y reducí la celulitis"
        description="Tratamientos específicos para reducir la apariencia de la celulitis, mejorando la microcirculación y la textura de la piel."
        whatsappKey="anticeluliticos"
        variant="smooth"
      />

      {/* Detalles del Tratamiento */}
      <section className="treatment-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿Qué es la celulitis y cómo la tratamos?</h2>
            <p className="intro-text">
              La celulitis es una alteración del tejido subcutáneo que afecta la microcirculación 
              y genera esa apariencia de "piel de naranja". Nuestros tratamientos actúan sobre 
              múltiples frentes: mejoran la circulación, favorecen el drenaje linfático, 
              oxigenan los tejidos y ayudan a eliminar líquidos retenidos.
            </p>
            
            <div className="treatment-approach">
              <div className="approach-card">
                <span className="icon">🔄</span>
                <h3>Mejora la circulación</h3>
                <p>Activa el flujo sanguíneo y linfático</p>
              </div>
              <div className="approach-card">
                <span className="icon">💧</span>
                <h3>Drenaje linfático</h3>
                <p>Elimina toxinas y líquidos retenidos</p>
              </div>
              <div className="approach-card">
                <span className="icon">🌬️</span>
                <h3>Oxigenación</h3>
                <p>Mejora la nutrición de los tejidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios de los Tratamientos Anticelulíticos</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.brillo}
              title="Reduce piel de naranja"
              description="Mejora visible de la textura cutánea"
            />
            <BenefitCard
              iconComponent={Icons.anticeluliticos}
              title="Elimina líquidos"
              description="Disminuye la retención y la hinchazón"
            />
            <BenefitCard
              iconComponent={Icons.fuerza}
              title="Piel más firme"
              description="Textura lisa y tonificada"
            />
            <BenefitCard
              iconComponent={Icons.refresh}
              title="Mejor circulación"
              description="Estimula el flujo sanguíneo y linfático"
            />
            <BenefitCard
              iconComponent={Icons.precision}
              title="Resultados duraderos"
              description="Mejoras progresivas con tratamiento constante"
            />
            <BenefitCard
              iconComponent={Icons.check}
              title="Piel más uniforme"
              description="Suaviza irregularidades y nódulos"
            />
          </div>
        </div>
      </section>

      {/* Grados de celulitis */}
      <section className="cellulite-grades">
        <div className="container">
          <div className="grades-content scroll-reveal">
            <h2>Grados de celulitis que tratamos</h2>
            <div className="grades-grid">
              <div className="grade-card">
                <span className="grade-number">I</span>
                <h3>Grado 1</h3>
                <p>Solo visible al pellizcar la piel</p>
              </div>
              <div className="grade-card">
                <span className="grade-number">II</span>
                <h3>Grado 2</h3>
                <p>Visible al estar de pie, no al acostarse</p>
              </div>
              <div className="grade-card">
                <span className="grade-number">III</span>
                <h3>Grado 3</h3>
                <p>Visible en cualquier posición</p>
              </div>
              <div className="grade-card">
                <span className="grade-number">IV</span>
                <h3>Grado 4</h3>
                <p>Nódulos visibles y palpables</p>
              </div>
            </div>
            <p className="note-center">
              En todos los grados podemos ver mejoras significativas con tratamiento adecuado y constante.
            </p>
          </div>
        </div>
      </section>

      {/* Zonas de tratamiento */}
      <section className="treatment-zones">
        <div className="container">
          <div className="zones-content scroll-reveal">
            <h2>Zonas de aplicación más comunes</h2>
            <div className="zones-grid">
              <div className="zone-item">✓ Glúteos</div>
              <div className="zone-item">✓ Muslos</div>
              <div className="zone-item">✓ Caderas</div>
              <div className="zone-item">✓ Abdomen</div>
              <div className="zone-item">✓ Brazos</div>
              <div className="zone-item">✓ Piernas</div>
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
              <li>✓ Tenés celulitis visible en glúteos, muslos o piernas</li>
              <li>✓ Querés mejorar la textura de tu piel</li>
              <li>✓ Sufrís de retención de líquidos</li>
              <li>✓ Tenés mala circulación</li>
              <li>✓ Buscás complementar tu rutina de ejercicio</li>
              <li>✓ Querés prevenir el avance de la celulitis</li>
            </ul>
            
            <div className="important-note">
              <h3>🥗 Recomendación integral</h3>
              <p>
                Los tratamientos anticelulíticos son más efectivos cuando se combinan con 
                actividad física regular, hidratación abundante y una alimentación equilibrada 
                baja en sal y azúcares procesados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés decirle adiós a la celulitis?"
        description="Consultá por nuestros tratamientos anticelulíticos y empezá a ver resultados"
        buttonText="Consultar tratamiento"
        whatsappKey="anticeluliticos"
        note={<><Icon icon={Icons.precision} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Combinamos técnicas para máxima eficacia</>}
      />
    </div>
  );
};

export default Anticeluliticos;
