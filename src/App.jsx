import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Layouts y componentes globales
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import ScrollToTop from '@/components/ScrollToTop';

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

// Tratamientos Corporales
import Reductores from '@/pages/Reductores';
import Reafirmantes from '@/pages/Reafirmantes';
import Anticeluliticos from '@/pages/Anticeluliticos';

// Asesoramiento
import Asesoramiento from '@/pages/Asesoramiento';

// Estilos
import '@/styles/main.css';

function App() {
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
            <Route path="/gloss-peel" element={<GlossPeel />} />
            <Route path="/limpieza-profunda" element={<LimpiezaProfunda />} />
            <Route path="/peeling-facial" element={<PeelingFacial />} />
            <Route path="/dermaplaning" element={<Dermaplaning />} />
            <Route path="/microneedling" element={<Microneedling />} />
            <Route path="/radiofrecuencia" element={<Radiofrecuencia />} />
            <Route path="/hidralips" element={<Hidralips />} />
            
            {/* Tratamientos Corporales */}
            <Route path="/reductores" element={<Reductores />} />
            <Route path="/reafirmantes" element={<Reafirmantes />} />
            <Route path="/anticeluliticos" element={<Anticeluliticos />} />
            
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
