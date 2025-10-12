import { Icon } from './Icons';

const BenefitCard = ({ icon, title, description, iconComponent }) => {
  return (
    <div className="benefit-card scroll-reveal">
      <div className="benefit-icon">
        {iconComponent ? (
          <Icon icon={iconComponent} size={48} />
        ) : (
          icon
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;
