import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

/**
 * Layout maestro compartido por todas las páginas.
 * 
 * Contiene: Orbes de fondo, patrón de grid, Navigation y Footer.
 * El contenido de cada página se inyecta donde está <Outlet />.
 * 
 * Este patrón se llama "Layout Route" en React Router v6+.
 * Ventaja: Navigation y Footer se renderizan una sola vez,
 * sin re-montarse en cada cambio de ruta.
 */
const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-mq-black text-slate-200 selection:bg-mq-gold/30 overflow-x-hidden relative font-sans">
      
      {/* Orbes de fondo - fijos para que permanezcan durante el scroll */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-mq-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-mq-silver/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Patrón de puntos */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <Navigation />
      
      <main className="flex flex-col items-center w-full relative z-10">
        <Outlet key={location.pathname} />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
