# Estándar de Estructura de Proyectos (Luxury & High-Ticket)

**Clasificación:** Confidencial / Operaciones Core
**Propósito:** Estandarizar la arquitectura de carpetas para clientes de alto perfil, garantizando máxima seguridad (OPSEC), eficiencia técnica y una presentación impecable.

Todo proyecto profesional en este ecosistema debe adherirse a la siguiente arquitectura de directorios:

## 📂 Arquitectura Base del Proyecto

### `00_Intel_y_Contexto/`
El cerebro del proyecto. Aquí va toda la información estratégica antes de escribir una sola línea de código.
- Análisis de chats extraídos (`extractor-comunicaciones`).
- Perfil psicológico y requerimientos del cliente.
- Credenciales, tokens y notas de seguridad (OPSEC).
- Briefings y actas de reuniones.

### `01_Assets_Luxury/`
Recursos visuales y auditivos de primera calidad.
- Imágenes en alta resolución (.webp, .png, .svg).
- Paletas de colores (hexadecimales, CSS variables).
- Tipografías premium.
- Sonidos, videos o renders.

### `02_Core_System/`
El motor técnico del proyecto.
- Código fuente de la aplicación o web (React, Node, HTML/CSS).
- Configuraciones de Docker (`docker-compose.yml`).
- Scripts de automatización locales.

### `03_Data_y_Backups/`
Manejo seguro de la información.
- Bases de datos (dumps SQL, JSONs).
- Logs del sistema (para auditoría).
- Respaldos cifrados.

### `04_Entregables_Client/`
Lo único que el cliente verá. Presentación inmaculada.
- Informes finales exportados a PDF.
- Presentaciones HTML minimalistas.
- Facturas y presupuestos.

---

## 📄 Archivos Raíz Obligatorios

1. **`README.md`**: Resumen ejecutivo del proyecto. Quién es el cliente, qué se está construyendo y cómo arrancar el sistema.
2. **`CHANGELOG.md`**: Bitácora técnica. Cada avance se documenta aquí para alimentar el sistema de la `Academia_IA`.
3. **`.gitignore`**: Reglas de seguridad para evitar que contraseñas o archivos pesados suban a GitHub.

---
> **Nota de la Academia IA:** Dominar esta estructura te separa de un programador novato. Los clientes "High-Ticket" pagan por el orden, la seguridad y la previsibilidad. Si tu estructura interna es caótica, el producto final lo será. Repasa esta estructura hasta que sea tu segunda naturaleza al crear un proyecto nuevo.
