import { generateWhatsAppUrl, CONFIG } from '@/config';
import { Icon, Icons } from '@/components/Icons';
import { trackWhatsAppConversion } from '@/hooks/useGoogleTagManager';

const ContactInfo = ({ icon, iconComponent, title, children, href, isExternal = false, onClick }) => (
  <div className="info-item">
    <div className="info-icon">
      {iconComponent ? <Icon icon={iconComponent} size={24} /> : icon}
    </div>
    <div>
      <h3>{title}</h3>
      {href ? (
        <p>
          <a 
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={onClick}
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
  const handleWhatsAppClick = async (e) => {
    e.preventDefault();
    const whatsappUrl = generateWhatsAppUrl('general');
    await trackWhatsAppConversion(whatsappUrl, 100.0);
  };

  return (
    <section className="location-section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Encontranos</h2>
        <div className="location-content">
          <div className="location-info scroll-reveal">
            
            <ContactInfo iconComponent={Icons.location} title="Dirección">
              {CONFIG.location.addressFull}
            </ContactInfo>
            
            <ContactInfo 
              iconComponent={Icons.phone}
              title="WhatsApp"
              href={generateWhatsAppUrl('general')}
              isExternal
              onClick={handleWhatsAppClick}
            >
              {CONFIG.contact.phoneFormatted}
            </ContactInfo>
            
            <ContactInfo 
              iconComponent={Icons.instagram}
              title="Instagram"
              href={CONFIG.contact.instagramUrl}
              isExternal
            >
              @{CONFIG.contact.instagram}
            </ContactInfo>
            
            <ContactInfo iconComponent={Icons.clock} title="Horarios">
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
