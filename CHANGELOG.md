# Changelog - Maison Quintessence

Todas las actualizaciones notables de este proyecto se documentarán en este archivo.

## [1.0.0] - 2026-06-19
### Lanzamiento Oficial (Fase 1: El Atelier)

#### Añadido
*   **Arquitectura Base:** Inicialización del proyecto con Vite, React 19 y Tailwind CSS v4.
*   **Design System:** Implementación completa del tema visual "Quiet Luxury" (OLED Black, Oro, Plata) en `src/index.css`.
*   **Componentes Core UI:**
    *   `Hero.jsx`: Integración del logo monograma brillante y el manifiesto de ingeniería.
    *   `Navigation.jsx`: Barra de navegación de cristal (*glassmorphism*) reactiva al scroll con anclajes suaves.
    *   `TrinityShowcase.jsx`: Exhibición del portafolio comercial conectado dinámicamente a la data (`projects.js`).
    *   `Footer.jsx`: Cierre minimalista y enlaces al ecosistema dual.

#### Modificado (Decisiones Arquitectónicas de Última Hora)
*   **Refactorización de Enrutamiento:** Se optimizó el componente `TrinityShowcase` para usar enlaces externos directos (`<a href>`) hacia los despliegues en producción (ej. El Rincón) en lugar de un enrutador interno (`<Link>`). Esto reduce la fricción del usuario B2B y demuestra el producto final inmediatamente.
*   **Separación de Conceptos:** Todo el contenido biográfico y narrativo se migró al proyecto paralelo `DaniSid_Personal` (`danisid.com`), dejando a Maison Quintessence como una interfaz puramente comercial y objetiva.

#### Despliegue
*   Preparación exitosa del entorno de producción (`dist`) para su despliegue mediante CI/CD en Netlify.

## [1.1.0] - 2026-06-19
### Incorporación de Caso de Estudio B2B: Eddy Soundscapes (EPK)

#### Añadido
*   **Nuevo Producto Escalable (EPK Premium):** Desarrollo, refactorización y despliegue del portafolio digital para el cantautor Eddy Castaño (`eddycamusic.netlify.app`).
*   **Estrategia de Conversión:** Implementación de embudo directo para *Booking* vía WhatsApp B2B y arquitectura preparada para monetización ("La Gorra Digital").
*   **Diseño de Identidad:** Extracción y aplicación del concepto "Stage Lighting Luxury" (Glassmorphism, Dark Mode, Acentos Ámbar) validando la capacidad de la agencia para hacer *Design Engineering* musical.
*   **Documentación:** Generación del informe corporativo `CASO_DE_ESTUDIO_EDDY_SOUNDSCAPES.md` para ser utilizado como *pitch* de ventas a futuros clientes de la industria.

## [1.1.1] - 2026-06-19
### Documentación Estratégica

#### Añadido
*   **Filosofía e Historia:** Creación del documento `FILOSOFIA_MAISON_QUINTESSENCE.md` que consolida la visión ("Quiet Luxury"), la historia, la evolución de la marca y la estrategia del ecosistema dual.
