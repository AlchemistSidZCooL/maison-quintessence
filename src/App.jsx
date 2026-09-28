import { MotionConfig } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import Process from './components/sections/Process';
import Architect from './components/sections/Architect';
import Contact from './components/sections/Contact';

/**
 * Maison Quintessence: una sola página.
 * MotionConfig respeta prefers-reduced-motion en todas las animaciones.
 */
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-mq-surface focus:px-4 focus:py-3 focus:text-mq-ivory"
      >
        Saltar al contenido
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Architect />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}

export default App;
