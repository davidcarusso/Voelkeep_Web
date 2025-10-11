const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card scroll-reveal">
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;
