import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

/**
 * Navegación principal de Maison Quintessence.
 * 
 * Comportamiento:
 * - Transparente al inicio, se convierte en glass-panel al hacer scroll.
 * - En la Home usa anclas (#philosophy, #trinity, #contact).
 * - En páginas internas usa Link para volver a Home.
 * - El monograma MQ siempre lleva al inicio.
 */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Monograma */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <Logo className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" monogramOnly={true} />
          <span className="text-white font-light tracking-[0.2em] text-sm hidden md:block">MAISON QUINTESSENCE</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-slate-400 uppercase">
          {isHome ? (
            <>
              <a href="#philosophy" className="hover:text-mq-gold transition-colors">Filosofía</a>
              <a href="#trinity" className="hover:text-mq-gold transition-colors">El Portafolio</a>
              <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-mq-gold transition-colors">Inicio</Link>
              <Link to="/#trinity" className="hover:text-mq-gold transition-colors">El Portafolio</Link>
              <Link to="/#contact" className="hover:text-white transition-colors">Contacto</Link>
            </>
          )}
        </div>

        {/* Botón menú móvil */}
        <button className="md:hidden text-slate-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
