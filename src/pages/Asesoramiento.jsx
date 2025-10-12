import { generateWhatsAppUrl } from '@/config';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Icons, Icon } from '@/components/Icons';

const Asesoramiento = () => {
  useScrollReveal();

  return (
    <div data-page="asesoramiento">
      {/* Hero Section */}
      <HeroSection
        badge="Cuidado Personalizado"
        title="Asesoramiento de Skincare"
        subtitle="Descubrí la rutina perfecta para tu piel"
        description="Evaluación profesional del tipo y estado de tu piel, con diseño de una rutina de skincare personalizada adaptada a tus necesidades."
        whatsappKey="asesoramiento"
        variant="consult"
      />

      {/* Detalles del Servicio */}
      <section className="service-details">
        <div className="container">
          <div className="detail-content scroll-reveal">
            <h2>¿En qué consiste el asesoramiento?</h2>
            <p className="intro-text">
              El asesoramiento de skincare es un servicio completo de diagnóstico y planificación 
              personalizada. Evaluamos tu tipo de piel, identificamos sus necesidades específicas, 
              y diseñamos una rutina de cuidado adaptada a tu estilo de vida y objetivos. 
              No es solo comprar productos, es entender tu piel y aprender a cuidarla correctamente.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de Asesoramiento */}
      <section className="consultation-process">
        <div className="container">
          <h2 className="section-title scroll-reveal">El proceso paso a paso</h2>
          <div className="process-steps">
            <div className="process-step scroll-reveal">
              <span className="step-number">01</span>
              <div className="step-content">
                <h3>Diagnóstico profesional</h3>
                <p>
                  Evaluamos tu tipo de piel, estado actual, preocupaciones y objetivos. 
                  Analizamos textura, hidratación, sensibilidad y otras características clave.
                </p>
              </div>
            </div>
            
            <div className="process-step scroll-reveal">
              <span className="step-number">02</span>
              <div className="step-content">
                <h3>Diseño de rutina personalizada</h3>
                <p>
                  Creamos una rutina de skincare específica para vos, considerando tu tipo 
                  de piel, estilo de vida, presupuesto y tiempo disponible.
                </p>
              </div>
            </div>
            
            <div className="process-step scroll-reveal">
              <span className="step-number">03</span>
              <div className="step-content">
                <h3>Recomendaciones de productos</h3>
                <p>
                  Te indicamos qué productos usar (limpiadores, tónicos, serums, cremas, 
                  protector solar) con marcas y activos específicos para tu caso.
                </p>
              </div>
            </div>
            
            <div className="process-step scroll-reveal">
              <span className="step-number">04</span>
              <div className="step-content">
                <h3>Educación y seguimiento</h3>
                <p>
                  Te enseñamos cómo aplicar cada producto correctamente y hacemos seguimiento 
                  para ajustar la rutina según la evolución de tu piel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title scroll-reveal">Beneficios del Asesoramiento</h2>
          <div className="benefits-grid">
            <BenefitCard
              iconComponent={Icons.asesoramiento}
              title="Rutina a tu medida"
              description="Personalizada según tu tipo de piel y necesidades"
            />
            <BenefitCard
              iconComponent={Icons.dinero}
              title="Ahorrá dinero"
              description="Invertí solo en lo que tu piel realmente necesita"
            />
            <BenefitCard
              iconComponent={Icons.aprendizaje}
              title="Aprendé a cuidarte"
              description="Entendé tu piel y cómo tratarla correctamente"
            />
            <BenefitCard
              iconComponent={Icons.clock}
              title="Optimizá tu tiempo"
              description="Rutinas eficientes adaptadas a tu día a día"
            />
            <BenefitCard
              iconComponent={Icons.magistral}
              title="Productos dermatológicos"
              description="Recomendaciones de productos magistrales de calidad"
            />
            <BenefitCard
              iconComponent={Icons.resultados}
              title="Resultados visibles"
              description="Mejorá tu piel con el cuidado adecuado"
            />
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="includes-section">
        <div className="container">
          <div className="includes-content scroll-reveal">
            <h2>¿Qué incluye el asesoramiento?</h2>
            <div className="includes-grid">
              <div className="include-item">
                <span className="check">✓</span>
                <div>
                  <h3>Diagnóstico facial completo</h3>
                  <p>Análisis profesional de tu tipo de piel</p>
                </div>
              </div>
              
              <div className="include-item">
                <span className="check">✓</span>
                <div>
                  <h3>Rutina mañana y noche</h3>
                  <p>Paso a paso de tu cuidado diario</p>
                </div>
              </div>
              
              <div className="include-item">
                <span className="check">✓</span>
                <div>
                  <h3>Lista de productos recomendados</h3>
                  <p>Con marcas, activos y dónde conseguirlos</p>
                </div>
              </div>
              
              <div className="include-item">
                <span className="check">✓</span>
                <div>
                  <h3>Guía de aplicación</h3>
                  <p>Cómo y cuándo usar cada producto</p>
                </div>
              </div>
              
              <div className="include-item">
                <span className="check">✓</span>
                <div>
                  <h3>Seguimiento personalizado</h3>
                  <p>Ajustes según la evolución de tu piel</p>
                </div>
              </div>
              
              <div className="include-item">
                <span className="check">✓</span>
                <div>
                  <h3>Asesoramiento continuo</h3>
                  <p>Consultas por WhatsApp ante dudas</p>
                </div>
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
              <li>✓ No sabés qué productos usar para tu piel</li>
              <li>✓ Probaste mil cosas y nada funciona</li>
              <li>✓ Querés empezar una rutina de skincare desde cero</li>
              <li>✓ Gastaste mucho dinero en productos que no necesitás</li>
              <li>✓ Tu piel cambió y no sabés cómo adaptarte</li>
              <li>✓ Buscás optimizar tu rutina actual</li>
              <li>✓ Querés resultados reales con productos de calidad</li>
              <li>✓ Necesitás asesoramiento profesional personalizado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diferencia */}
      <section className="difference-section">
        <div className="container">
          <div className="difference-content scroll-reveal">
            <h2>La diferencia de un asesoramiento profesional</h2>
            <div className="comparison-grid">
              <div className="comparison-card without">
                <h3>❌ Sin asesoramiento</h3>
                <ul>
                  <li>Productos genéricos que no funcionan</li>
                  <li>Gastás en cosas que no necesitás</li>
                  <li>Resultados lentos o inexistentes</li>
                  <li>Confusión con tanto consejo contradictorio</li>
                  <li>Piel que no mejora o empeora</li>
                </ul>
              </div>
              
              <div className="comparison-card with">
                <h3>✅ Con asesoramiento Voelkeep</h3>
                <ul>
                  <li>Rutina específica para tu piel</li>
                  <li>Invertís inteligentemente</li>
                  <li>Resultados visibles y progresivos</li>
                  <li>Claridad y educación profesional</li>
                  <li>Piel saludable y bien cuidada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Querés descubrir la rutina perfecta para tu piel?"
        description="Agendá tu asesoramiento personalizado y comenzá a cuidar tu piel correctamente"
        buttonText="Solicitar asesoramiento"
        whatsappKey="asesoramiento"
        note={<><Icon icon={Icons.clipboard} size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} /> Consultá por disponibilidad y valor</>}
      />
    </div>
  );
};

export default Asesoramiento;
