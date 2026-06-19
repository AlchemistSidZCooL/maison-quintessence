import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

/**
 * App.jsx — El enrutador central de Maison Quintessence.
 * 
 * Estructura:
 * - "/" → MainLayout (fondo, nav, footer) > HomePage (Hero + Portafolio)
 * - "/caso/:slug" → MainLayout > CaseStudyPage (detalle del proyecto)
 * 
 * MainLayout envuelve todas las rutas para compartir el fondo,
 * la navegación y el footer sin re-renderizarlos.
 */
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/caso/:slug" element={<CaseStudyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
