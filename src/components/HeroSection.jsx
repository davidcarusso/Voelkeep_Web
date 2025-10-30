import { generateWhatsAppUrl } from '@/config';
import { trackWhatsAppConversion } from '@/hooks/useGoogleTagManager';

const HeroSection = ({ 
  badge, 
  title, 
  subtitle, 
  description, 
  primaryCta = null,
  secondaryCta = null,
  whatsappKey = 'agendar',
  variant = 'default' // 'default', 'gloss', 'gift'
}) => {
  const heroClass = variant === 'default' ? 'hero' : `hero hero-${variant}`;
  const circleCount = variant === 'default' ? 3 : 2;

  const handleWhatsAppClick = async (e) => {
    e.preventDefault();
    const whatsappUrl = generateWhatsAppUrl(whatsappKey);
    await trackWhatsAppConversion(whatsappUrl, 100.0);
  };

  return (
    <section className={heroClass}>
      <div className="hero-background">
        {Array.from({ length: circleCount }, (_, i) => (
          <div key={i} className={`circle circle-${i + 1}`}></div>
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge fade-in">{badge}</span>
          <h1 className="">{title}</h1>
          <p className="hero-subtitle fade-in">{subtitle}</p>
          <p className="hero-description fade-in">{description}</p>
          
          {(primaryCta || secondaryCta || whatsappKey) && (
            <div className="hero-ctas fade-in">
              {primaryCta && primaryCta}
              {secondaryCta && secondaryCta}
              {!primaryCta && !secondaryCta && (
                <a 
                  href={generateWhatsAppUrl(whatsappKey)} 
                  className="cta-button cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                >
                  Consultar tratamiento
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
