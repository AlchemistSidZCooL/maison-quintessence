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

## [2.0.0-beta.1] - 2026-09-28
### Refactorización "Quiet Luxury" (primera versión, rama `refactor/v2-quiet-luxury`, sin publicar)

#### Añadido
*   **Nueva home de una sola página:** Hero (nombre y frase clara), Servicios, Trabajos seleccionados, Cómo trabajo (escuchar, diseñar, construir, verificar, publicar), El arquitecto (enlace a `danisid.com`) y Contacto.
*   **Servicios:** los tres de danisid.com con la misma redacción (*Digital Boutique*, *Experiencias interactivas*, *Presencia para artistas*).
*   **Trabajos:** El Rincón de Tetuán, Eddy Soundscapes, Marian Isac y Asociación Creando Sueños, con capturas reales de cada web en producción (WebP, `loading="lazy"`).
*   **Logo vectorial:** monograma MQ "Inscrito" (M de alto contraste dentro de la Q) en `src/components/ui/Logo.jsx` y `public/brand/logo-mq.svg`, favicon simplificado para 16–32 px y tres propuestas para elegir en `Assets_Branding/logo/propuestas.html`.
*   **SEO:** título y descripción nuevos, canonical, Open Graph y Twitter con `og-image.jpg` (1200×630, generada con código), JSON-LD `ProfessionalService` con `founder` enlazado a la `Person` de danisid.com, `robots.txt` y `sitemap.xml`.
*   **Analítica preparada:** `src/lib/analytics.js` carga GA4 solo en el dominio de producción y solo si existe `VITE_GA_ID`; registra eventos `contact` (WhatsApp y email).
*   **Accesibilidad:** foco visible dorado, enlace "Saltar al contenido", `prefers-reduced-motion` (CSS y `MotionConfig`), textos alternativos y objetivos táctiles de al menos 44 px.

#### Modificado
*   **Identidad visual alineada con danisid.com:** fondo `#0A0A0A`, superficie `#0F0E0D`, oro `#D4AF37`, marfil `#F4F0EB`, texto secundario `#8C8273`; tipografías Outfit, Space Grotesk y JetBrains Mono.
*   **Menú móvil funcional** (antes el botón no hacía nada): panel a pantalla completa que se cierra con Escape o al elegir un enlace.
*   **Botón flotante de WhatsApp** rediseñado en oro sobre negro, con mensaje ya escrito.
*   **Textos:** se retiran superlativos y cifras no demostrables ("Alto Estatus", "100%", "1.5s", "Código Implacable").

#### Eliminado
*   Google Analytics con el ID de danisid.com (`G-MHT141WKZZ`), a la espera de un ID propio para MQ.
*   Páginas `/caso/:slug` (no se enlazaban y fallaban al renderizar), `react-router-dom` y `lucide-react`.
*   Assets sin uso de `public/` (teasers y anuncio generados por IA, PNG del logo, capturas antiguas): se mueven a `Assets_Branding/legacy/`. `public/` pasa de ~5,6 MB a ~220 KB.
