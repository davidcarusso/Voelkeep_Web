import { generateWhatsAppUrl } from '@/config';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import { trackWhatsAppConversion } from '@/hooks/useGoogleTagManager';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  linkTo, 
  linkText = 'Conocer más',
  whatsappKey,
  iconComponent 
}) => {
  const handleWhatsAppClick = async (e) => {
    e.preventDefault();
    const whatsappUrl = generateWhatsAppUrl(whatsappKey);
    await trackWhatsAppConversion(whatsappUrl, 100.0);
  };

  return (
    <div className="service-card scroll-reveal">
      <div className="service-image">
        <div className="service-icon">
          {iconComponent ? (
            <Icon icon={iconComponent} size={56} />
          ) : (
            icon
          )}
        </div>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {features && features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        {linkTo ? (
          <Link to={linkTo} className="service-link">
            {linkText} →
          </Link>
        ) : (
          <a 
            href={generateWhatsAppUrl(whatsappKey)} 
            className="service-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
          >
            {linkText} →
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
