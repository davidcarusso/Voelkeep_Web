import { generateWhatsAppUrl } from '@/config';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  linkTo, 
  linkText = 'Conocer más',
  whatsappKey 
}) => {
  return (
    <div className="service-card scroll-reveal">
      <div className="service-image">
        <div className="service-icon">{icon}</div>
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
          >
            {linkText} →
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
