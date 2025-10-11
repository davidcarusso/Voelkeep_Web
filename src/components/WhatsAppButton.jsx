import { generateWhatsAppUrl } from '@/config';

const WhatsAppButton = ({ messageKey = 'general', tooltipText = 'Consultá por WhatsApp' }) => {
  const handleClick = () => {
    // Tracking de clicks
    console.log('📊 Event: WhatsApp Click', {
      source: 'floating_button',
      message: messageKey,
    });
    
    // Integración con Google Analytics (si está disponible)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'WhatsApp Click', {
        source: 'floating_button',
        message: messageKey,
      });
    }
    
    // Integración con Facebook Pixel (si está disponible)
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'WhatsApp Click', {
        source: 'floating_button',
        message: messageKey,
      });
    }
  };

  return (
    <a
      href={generateWhatsAppUrl(messageKey)}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={handleClick}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.823.745 5.607 2.156 8.063L.047 31.937l8.109-2.094A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.51 0-4.969-.703-7.115-2.031l-.51-.313-5.292 1.365 1.396-5.104-.344-.531A13.26 13.26 0 012.667 16c0-7.365 5.99-13.333 13.333-13.333S29.333 8.635 29.333 16 23.365 29.333 16 29.333z" fill="white"/>
        <path d="M23.573 19.49c-.396-.198-2.344-1.156-2.708-1.292-.365-.135-.63-.198-.896.198-.266.396-1.031 1.292-1.266 1.563-.234.27-.469.302-.865.104-.396-.198-1.672-.615-3.182-1.964-1.177-1.052-1.969-2.349-2.203-2.745-.234-.396-.026-.609.177-.807.177-.177.396-.458.594-.688.198-.229.266-.396.396-.661.135-.266.068-.5-.031-.698-.104-.198-.896-2.156-1.229-2.953-.323-.776-.651-.672-.896-.682-.229-.01-.49-.01-.755-.01s-.688.094-1.052.49c-.365.396-1.391 1.359-1.391 3.318s1.422 3.849 1.62 4.115c.198.266 2.792 4.266 6.766 5.984.948.406 1.688.651 2.266.833.953.302 1.818.26 2.505.156.766-.115 2.344-.958 2.672-1.88.333-.927.333-1.724.234-1.885-.099-.177-.365-.281-.76-.479z" fill="white"/>
      </svg>
      <span className="whatsapp-tooltip">{tooltipText}</span>
    </a>
  );
};

export default WhatsAppButton;
