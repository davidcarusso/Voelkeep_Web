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
import NotFound from '@/pages/NotFound';

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
            <Route path="/gloss-peel" element={<GlossPeel />} />
            <Route path="/gift-card" element={<GiftCard />} />
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
