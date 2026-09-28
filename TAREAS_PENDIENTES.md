# 📋 Tareas Pendientes - Maison Quintessence

Estado a 2026-09-28: primera versión de la refactorización en la rama `refactor/v2-quiet-luxury` (commit local, **sin push ni publicar**). Ver `CHANGELOG.md` [2.0.0-beta.1].

## Para retomar (próxima sesión)

### 1. Seguridad (urgente)
- [ ] **Revocar el token de GitHub** que aparece en la URL del remoto (`git remote -v`) y, después, cambiar el remoto a `https://github.com/AlchemistSidZCool/maison-quintessence.git`. El historial de git no contiene tokens.
- [ ] Decidir si `FILOSOFIA_MAISON_QUINTESSENCE.md` (datos personales y familiares) debe estar en un repo público.

### 2. Google Analytics
- [ ] Crear una propiedad GA4 **propia de Maison Quintessence** (el `G-MHT141WKZZ` es de danisid.com).
- [ ] Añadir el ID en Netlify como variable de entorno `VITE_GA_ID` y volver a desplegar. El código ya está preparado (`src/lib/analytics.js`).

### 3. Logo
- [ ] Abrir `Assets_Branding/logo/propuestas.html` y elegir A (Inscrito, la que hay ahora en la web), B (Sello) o C (Línea).
- [ ] Ajustes finos del monograma elegido y versión definitiva del favicon.

### 4. Textos (revisar todos)
- [ ] Hero: "Webs y experiencias digitales hechas a medida, para marcas y artistas que cuidan los detalles."
- [ ] Descripciones de los cuatro trabajos (`src/data/projects.js`): confirmar datos y qué casos se muestran.
- [ ] "Cómo trabajo" (`src/components/sections/Process.jsx`) y "El arquitecto" (`Architect.jsx`).
- [ ] Confirmar la voz: ahora está en primera persona ("mi estudio", "lo desarrollo").

### 5. Decisiones abiertas
- [ ] **Dominio canónico:** ahora `maison-quintessence.netlify.app`. Si hay dominio propio, cambiarlo en `index.html`, `robots.txt`, `sitemap.xml` y `src/lib/analytics.js`.
- [ ] URL de El Rincón (`elrincontetuan.com` o `carta-digital-el-rincon.netlify.app`) y de Eddy (`eddycamusic.netlify.app` o `eddycastano.com`).
- [ ] ¿Se añade un CTA "Solicitar audiencia" como en danisid.com?
- [ ] Añadir `"@id": "https://www.danisid.com/#person"` al JSON-LD de danisid.com para que el enlace entre ambas webs sea completo.

### 6. Documentación
- [ ] Actualizar `MAISON_QUINTESSENCE_MANUAL.md` y `README.md` a la nueva identidad (hoy siguen con "Alto Estatus", Inter/Playfair, plata y glassmorphism).
- [ ] Merge de `refactor/v2-quiet-luxury` en `main` y publicación **solo con aprobación de Daniel**.

## Operaciones comerciales (sin cambios)
- [ ] **Pitch Deck B2B** para prospectos (clínicas, despachos, restaurantes).
- [ ] **Campaña de Instagram:** usar gráficos hechos con código o capturas reales, no imágenes de IA con texto.
