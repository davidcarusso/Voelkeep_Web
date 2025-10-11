import { useEffect } from 'react';
import { CONFIG } from '@/config';

/**
 * Custom hook para cargar el mapa de Google Maps de forma lazy
 */
export const useGoogleMapsLoader = () => {
  useEffect(() => {
    const mapLoader = document.getElementById('mapLoader');
    const googleMap = document.getElementById('googleMap');
    
    if (googleMap && mapLoader) {
      const timer = setTimeout(() => {
        googleMap.src = CONFIG.location.mapEmbedUrl;
        googleMap.onload = () => {
          mapLoader.style.display = 'none';
          googleMap.style.opacity = '1';
        };
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);
};
