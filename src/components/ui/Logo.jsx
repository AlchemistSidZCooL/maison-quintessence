import React from 'react';

/**
 * Logotipo Geométrico de Alta Costura B2B.
 * 
 * Corrección de percepción: 
 * Se abandona la fuente Serif estándar para evitar confusiones tipográficas ("M2").
 * Se construye un monograma desde cero utilizando geometría pura (líneas y círculos),
 * el estándar de oro en marcas de lujo (ej. Cartier, Chanel, Polestar).
 * 
 * - M: Estructura arquitectónica firme.
 * - Q: Círculo perfecto (el absoluto) con un corte diagonal preciso (oro).
 */
const Logo = ({ className = "w-10 h-10", monogramOnly = false }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(0, -5)">
        {/* Monograma M - Pilares de la Ingeniería */}
        <path 
          d="M 32 60 L 32 30 L 45 48 L 58 30 L 58 60" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="square" 
          strokeLinejoin="miter" 
        />
        
        {/* Monograma Q - El Círculo Absoluto */}
        <circle 
          cx="62" 
          cy="42" 
          r="12" 
          stroke="#D4AF37" /* Oro antiguo */
          strokeWidth="1.5" 
        />
        {/* La cola de la Q - Corte de 45 grados */}
        <line 
          x1="68" y1="48" 
          x2="76" y2="58" 
          stroke="#D4AF37" 
          strokeWidth="2" 
          strokeLinecap="square" 
        />
      </g>

      {!monogramOnly && (
        <>
          {/* MAISON */}
          <text 
            x="50" 
            y="78" 
            textAnchor="middle" 
            fill="currentColor" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="300"
            fontSize="7"
            letterSpacing="0.4em"
          >
            MAISON
          </text>
          
          {/* QUINTESSENCE */}
          <text 
            x="50" 
            y="88" 
            textAnchor="middle" 
            fill="currentColor" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="300"
            fontSize="5"
            letterSpacing="0.25em"
            opacity="0.6"
          >
            QUINTESSENCE
          </text>
        </>
      )}
    </svg>
  );
};

export default Logo;
