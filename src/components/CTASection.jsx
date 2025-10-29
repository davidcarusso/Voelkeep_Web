import { generateWhatsAppUrl } from '@/config';
import { trackWhatsAppConversion } from '@/hooks/useGoogleTagManager';

const CTASection = ({ 
  title, 
  description, 
  buttonText, 
  whatsappKey = 'agendar',
  note = null 
}) => {
  const handleClick = async (e) => {
    e.preventDefault();
    const whatsappUrl = generateWhatsAppUrl(whatsappKey);
    await trackWhatsAppConversion(whatsappUrl, 100.0);
  };

  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-box scroll-reveal">
          <h2>{title}</h2>
          <p>{description}</p>
          <a 
            href={generateWhatsAppUrl(whatsappKey)} 
            className="cta-button-large"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            {buttonText}
          </a>
          {note && <p className="cta-note">{note}</p>}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
