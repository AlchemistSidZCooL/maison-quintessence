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

## [1.1.2] - 2026-06-21
### Consolidación del Brand Manifesto e Inteligencia Comercial

#### Modificado
*   **Manual de Identidad:** Actualización mayor del archivo `MAISON_QUINTESSENCE_MANUAL.md` para integrar el núcleo estratégico de la agencia:
    *   **Identidad y Posicionamiento:** Definición formal del modelo *B2B High-Ticket* y el *tagline* ("Arquitectura Digital de Alto Estatus").
    *   **Cliente Ideal:** Incorporación del perfil de cliente de alta gama y la "Regla de Oro" antimorosidad (lecciones aprendidas).
    *   **El Arquitecto:** Integración estratégica del vínculo con `danisid.com` como el "Laboratorio de I+D", elevando la autoridad de la marca matriz.
    *   **Servicios Core:** Definición de los tres pilares comerciales (*Digital Boutiques*, *Sistemas Interactivos* y *EPK Premium*).

## [1.1.3] - 2026-09-24
### Auditoría y Matriz Estratégica del Ecosistema

#### Añadido
*   **Inventario Maestro:** Auditoría y registro de todos los proyectos activos, en desarrollo y legacy en el ecosistema dual (Maison Quintessence y DaniSid.com).
*   **Matriz de Distribución:** Estrategia clara para definir la ubicación de cada caso de estudio y proyecto, separando la identidad "Digital Da Vinci" (DaniSid) del portafolio comercial B2B (Maison Quintessence).
