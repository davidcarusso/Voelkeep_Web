import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

// Layouts y componentes globales
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import ScrollToTop from '@/components/ScrollToTop';

// Hooks
import { useGoogleTagManager } from '@/hooks/useGoogleTagManager';

// Config
import { CONFIG } from '@/config';

// Páginas principales (carga inmediata)
import Home from '@/pages/Home';

// Lazy loading para otras páginas
const GlossPeel = lazy(() => import('@/pages/GlossPeel'));
const GiftCard = lazy(() => import('@/pages/GiftCard'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Tratamientos Faciales (lazy)
const LimpiezaProfunda = lazy(() => import('@/pages/LimpiezaProfunda'));
const PeelingFacial = lazy(() => import('@/pages/PeelingFacial'));
const Dermaplaning = lazy(() => import('@/pages/Dermaplaning'));
const Microneedling = lazy(() => import('@/pages/Microneedling'));
const Radiofrecuencia = lazy(() => import('@/pages/Radiofrecuencia'));
const Hidralips = lazy(() => import('@/pages/Hidralips'));
const PeelingEnzimatico = lazy(() => import('@/pages/PeelingEnzimatico'));
const ExosomasFacial = lazy(() => import('@/pages/ExosomasFacial'));
const TratamientoAcne = lazy(() => import('@/pages/TratamientoAcne'));
const TerapiaLED = lazy(() => import('@/pages/TerapiaLED'));

// Tratamientos Corporales (lazy)
const Anticeluliticos = lazy(() => import('@/pages/Anticeluliticos'));
const LimpiezaCorporal = lazy(() => import('@/pages/LimpiezaCorporal'));
const PeelingCorporal = lazy(() => import('@/pages/PeelingCorporal'));
const ExfoliacionHidratacion = lazy(() => import('@/pages/ExfoliacionHidratacion'));

// Asesoramiento (lazy)
const Asesoramiento = lazy(() => import('@/pages/Asesoramiento'));

// Estilos
import '@/styles/main.css';

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: 'var(--primary-color)'
  }}>
    Cargando...
  </div>
);

function App() {
  // Inicializar Google Tag Manager
  useGoogleTagManager(CONFIG.googleAds.trackingId);

  useEffect(() => {
    console.log('🌸 Voelkeep v2.0.0 - React Edition - Cargando...');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Tratamientos Faciales */}
              <Route path="/limpieza-profunda" element={<LimpiezaProfunda />} />
              <Route path="/peeling-facial" element={<PeelingFacial />} />
              <Route path="/gloss-peel" element={<GlossPeel />} />
              <Route path="/peeling-enzimatico" element={<PeelingEnzimatico />} />
              <Route path="/dermaplaning" element={<Dermaplaning />} />
              <Route path="/microneedling" element={<Microneedling />} />
              <Route path="/exosomas-facial" element={<ExosomasFacial />} />
              <Route path="/hidralips" element={<Hidralips />} />
              <Route path="/tratamiento-acne" element={<TratamientoAcne />} />
              <Route path="/radiofrecuencia" element={<Radiofrecuencia />} />
              <Route path="/terapia-led" element={<TerapiaLED />} />
              
              {/* Tratamientos Corporales */}
              <Route path="/anticeluliticos" element={<Anticeluliticos />} />
              <Route path="/limpieza-corporal" element={<LimpiezaCorporal />} />
              <Route path="/peeling-corporal" element={<PeelingCorporal />} />
              <Route path="/exfoliacion-hidratacion" element={<ExfoliacionHidratacion />} />
              
              {/* Asesoramiento */}
              <Route path="/asesoramiento" element={<Asesoramiento />} />
              
              {/* Otros */}
              <Route path="/gift-card" element={<GiftCard />} />
              <Route path="/preguntas-frecuentes" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppButton messageKey="general" />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
