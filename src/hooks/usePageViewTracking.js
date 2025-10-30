import { useEffect } from 'react';
import { trackPageViewConversion } from './useGoogleTagManager';

/**
 * Hook para trackear conversiones de vistas de página
 * Usar en páginas importantes (tratamientos, gift cards, etc.)
 * @param {boolean} enabled - Si el tracking está habilitado (default: true)
 * @param {number} value - Valor de la conversión (default: 1.0)
 * @param {string} pageName - Nombre de la página (opcional, se auto-detecta)
 */
export const usePageViewTracking = (enabled = true, value = 1.0, pageName = '') => {
  useEffect(() => {
    if (enabled) {
      // Pequeño delay para asegurar que gtag esté listo y el DOM esté montado
      const timer = setTimeout(() => {
        trackPageViewConversion(value, pageName);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [enabled, value, pageName]);
};
