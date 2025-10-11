import { generateWhatsAppUrl, CONFIG } from '@/config';

const ContactInfo = ({ icon, title, children, href, isExternal = false }) => (
  <div className="info-item">
    <div className="info-icon">{icon}</div>
    <div>
      <h3>{title}</h3>
      {href ? (
        <p>
          <a 
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        </p>
      ) : (
        <p>{children}</p>
      )}
    </div>
  </div>
);

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Encontranos</h2>
        <div className="location-content">
          <div className="location-info scroll-reveal">
            
            <ContactInfo icon="📍" title="Dirección">
              {CONFIG.location.addressFull}
            </ContactInfo>
            
            <ContactInfo 
              icon="📱" 
              title="WhatsApp"
              href={generateWhatsAppUrl('general')}
              isExternal
            >
              {CONFIG.contact.phoneFormatted}
            </ContactInfo>
            
            <ContactInfo 
              icon="📸" 
              title="Instagram"
              href={CONFIG.contact.instagramUrl}
              isExternal
            >
              @{CONFIG.contact.instagram}
            </ContactInfo>
            
            <ContactInfo icon="🕐" title="Horarios">
              {CONFIG.schedule.weekdays}<br />
              {CONFIG.schedule.saturday}<br />
              {CONFIG.schedule.sunday}
            </ContactInfo>
            
          </div>
          <div className="map-container scroll-reveal">
            <div className="map-loader" id="mapLoader">Cargando mapa...</div>
            <iframe 
              id="googleMap"
              src="" 
              width="100%" 
              height="500" 
              style={{border: 0, borderRadius: '15px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Voelkeep"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
