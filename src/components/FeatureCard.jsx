import { Icon } from './Icons';

const FeatureCard = ({ icon, title, description, className = '', iconComponent }) => {
  return (
    <div className={`reason-card scroll-reveal ${className}`}>
      <div className="reason-icon">
        {iconComponent ? (
          <Icon icon={iconComponent} size={40} />
        ) : (
          icon
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
