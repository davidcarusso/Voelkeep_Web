const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`reason-card scroll-reveal ${className}`}>
      <div className="reason-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
