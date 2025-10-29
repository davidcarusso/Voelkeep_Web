import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

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

// Páginas
import Home from '@/pages/Home';
import GlossPeel from '@/pages/GlossPeel';
import GiftCard from '@/pages/GiftCard';
import FAQ from '@/pages/FAQ';
import NotFound from '@/pages/NotFound';

// Tratamientos Faciales
import LimpiezaProfunda from '@/pages/LimpiezaProfunda';
import PeelingFacial from '@/pages/PeelingFacial';
import Dermaplaning from '@/pages/Dermaplaning';
import Microneedling from '@/pages/Microneedling';
import Radiofrecuencia from '@/pages/Radiofrecuencia';
import Hidralips from '@/pages/Hidralips';
import PeelingEnzimatico from '@/pages/PeelingEnzimatico';
import ExosomasFacial from '@/pages/ExosomasFacial';
import TratamientoAcne from '@/pages/TratamientoAcne';
import TerapiaLED from '@/pages/TerapiaLED';

// Tratamientos Corporales
import Anticeluliticos from '@/pages/Anticeluliticos';
import LimpiezaCorporal from '@/pages/LimpiezaCorporal';
import PeelingCorporal from '@/pages/PeelingCorporal';
import ExfoliacionHidratacion from '@/pages/ExfoliacionHidratacion';

// Asesoramiento
import Asesoramiento from '@/pages/Asesoramiento';

// Estilos
import '@/styles/main.css';

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
        </main>

        <Footer />
        <WhatsAppButton messageKey="general" />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
