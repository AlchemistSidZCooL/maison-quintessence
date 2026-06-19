import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import TrinityShowcase from '../components/sections/TrinityShowcase';

/**
 * Página principal (Home) de Maison Quintessence.
 * 
 * Compone las secciones: Hero + Filosofía + Portafolio.
 * Es una "page" pura: solo ensambla secciones, sin lógica propia.
 */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <TrinityShowcase />
    </>
  );
};

export default HomePage;
