/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals for performance optimization
 * Note: Install 'web-vitals' package for full functionality
 * npm install web-vitals
 */

// Report Web Vitals to console (or analytics service)
export const reportWebVitals = (metric) => {
  // In production, you might want to send this to an analytics endpoint
  if (import.meta.env.DEV) {
    console.log('📊 Web Vital:', metric);
  }
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Initialize Web Vitals tracking (optional - requires web-vitals package)
export const initWebVitals = async () => {
  if (typeof window === 'undefined') return;
  if ('web-vital' in window) return; // Already initialized
  
  try {
    // Try to import web-vitals if available
    const webVitals = await import('web-vitals').catch(() => null);
    
    if (webVitals) {
      const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = webVitals;
      
      onCLS(reportWebVitals);
      onFID(reportWebVitals);
      onFCP(reportWebVitals);
      onLCP(reportWebVitals);
      onTTFB(reportWebVitals);
      if (onINP) onINP(reportWebVitals);
      
      window['web-vital'] = true;
    }
  } catch (error) {
    // Web Vitals not available - that's ok, performance will still be good
    console.info('Web Vitals library not installed. Install with: npm install web-vitals');
  }
};

// Prefetch critical routes
export const prefetchRoute = (route) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

// Preload critical resources
export const preloadResource = (href, as = 'script') => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
};
