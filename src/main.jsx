import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/**
 * Punto de entrada de la aplicación.
 * 
 * BrowserRouter envuelve toda la app para habilitar
 * el enrutamiento del lado del cliente (SPA).
 * 
 * ScrollRestoration se maneja manualmente en cada página
 * para garantizar que al navegar a un caso de estudio
 * la página empiece desde arriba.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
