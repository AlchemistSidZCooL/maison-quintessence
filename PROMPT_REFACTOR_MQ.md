# Prompt: refactorización de Maison Quintessence

Copia todo lo que hay debajo de la línea en una sesión nueva de Claude Code abierta en la carpeta `01_Proyectos_Activos/MaisonQuintessence`.

---

Vas a refactorizar **Maison Quintessence** (MQ), el estudio de encargos de Daniel García (DaniSid), un Design Engineer en Madrid. La web actual está en `maison-quintessence.netlify.app` y el código en esta carpeta (React 19 + Vite + Tailwind CSS v4 + Framer Motion, desplegado en Netlify).

## Paso 0 — Seguridad (antes de cualquier otra cosa)
La URL del remoto de git (`git remote -v`) contiene un token personal de GitHub en texto plano. **No lo muestres ni lo copies en ningún sitio.** Pide a Daniel que confirme que ya lo revocó en GitHub y, con su permiso, cambia el remoto a una URL sin credenciales (`git remote set-url origin https://github.com/AlchemistSidZCool/maison-quintessence.git`). Busca también otros secretos en el repo y en el historial y avísale si aparecen.

## Qué es MQ (y qué no)
- **danisid.com** es la persona: el artista digital y Design Engineer, su obra (arte generativo con Canvas y Web Audio, proyectos) y su forma de trabajar.
- **Maison Quintessence** es **el estudio donde se contrata ese talento**. Su filosofía está en `FILOSOFIA_MAISON_QUINTESSENCE.md`: "la tecnología empresarial no tiene por qué ser fría ni genérica". Estética *Quiet Luxury*.
- Los tres servicios, con la misma redacción que ya usa danisid.com:
  1. **Digital Boutique:** webs de marca a medida: rápidas, cuidadas al detalle y fáciles de encontrar.
  2. **Experiencias interactivas:** piezas generativas con movimiento y sonido para marcas, artistas y eventos.
  3. **Presencia para artistas:** portafolios y EPK para músicos y creadores, con contacto y reservas directas.
- **No incluyas** auditoría forense ni peritajes aunque aparezcan en `informe_portafolio_servicios.md`: todavía no están listos para ofrecerse como servicio.

## Identidad visual (coherente con danisid.com)
- Colores: fondo `#0A0A0A`, superficie `#0F0E0D`, oro `#D4AF37`, marfil `#F4F0EB`, texto secundario `#8C8273`, bordes `rgba(212,175,55,0.2)`.
- Tipografías: Outfit (títulos finos con mucho espaciado), Space Grotesk y JetBrains Mono (detalles).
- Lujo = contención: mucho espacio negro, filetes dorados finos, movimiento lento. Nada de neón, cian ni violeta.
- El nombre se escribe siempre **Maison Quintessence**. Algunos banners antiguos dicen "Quintassence": no los uses.

## El logo
`public/images/logo_mq_luxury.png` es un render (1024×1024) con fondo, así que no escala ni se puede recolorear. Rehazlo como **SVG vectorial**: monograma MQ con trazo fino en oro y una versión horizontal con el nombre. Debe funcionar sobre negro, en una sola tinta, y reducido a favicon (32 px). Enséñale a Daniel 2 o 3 propuestas antes de elegir.

## Reglas de contenido
- Primera persona o voz de estudio sobria. **Sin superlativos ni cifras que no se puedan demostrar** ("élite", "alto estatus", "0 ms", "100%"…).
- **No uses imágenes generadas por IA con texto** (placas, rótulos, código de fondo): se inventan palabras. Usa capturas reales de los proyectos o gráficos hechos con código.
- Los casos reales para enseñar como trabajos del estudio son El Rincón de Tetuán, Eddy Soundscapes, Marian Isac y Asociación Creando Sueños, cada uno con su URL en producción y capturas reales. Confirma con Daniel cuáles quiere mostrar.
- Contacto: botón de WhatsApp (`https://wa.me/34641868620`, con un mensaje ya escrito) y email `garciadanielsid@gmail.com`.

## Tareas
1. **Auditoría primero, sin tocar código:** recorre la web en escritorio y en móvil (390 px), revisa `src/`, `TAREAS_PENDIENTES.md`, el `CHANGELOG.md` y el peso de `public/`. Entrega a Daniel una lista priorizada de problemas y un plan. Espera su visto bueno.
2. **Estructura de la home:** hero con el nombre y una frase clara; servicios; trabajos seleccionados (capturas reales y enlace a cada web); cómo trabajo (escuchar, diseñar, construir, verificar, publicar); bloque "El arquitecto" que enlace a `https://www.danisid.com`; contacto.
3. **Móvil impecable:** menú funcional, nada que dependa solo del hover, sin scroll horizontal, botones de al menos 44 px.
4. **Rendimiento:** imágenes en WebP con `loading="lazy"`, sin assets que no se usen, sin librerías que no se usen.
5. **SEO:** título, meta description, canonical, Open Graph y Twitter con una imagen 1200×630, JSON-LD `ProfessionalService` enlazado a la `Person` de danisid.com, `sitemap.xml`, `robots.txt` y `lang="es"`.
6. **Analítica:** pregunta a Daniel si MQ tiene su propio ID de Google Analytics 4. Cárgalo solo en el dominio de producción y registra eventos de contacto (WhatsApp, email, solicitar audiencia).
7. **Accesibilidad:** contraste suficiente, textos alternativos, foco visible y `prefers-reduced-motion`.

## Forma de trabajar
- Anota cada cambio en `CHANGELOG.md`, con el mismo estilo de siempre.
- Comprueba cada cambio en el navegador (escritorio y móvil) antes de darlo por hecho.
- **No publiques ni hagas push** sin la aprobación explícita de Daniel.
- Si algo del contenido no se puede verificar en el código o en los documentos, pregunta en vez de inventarlo.
