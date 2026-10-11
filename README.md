# Portafolio Audiovisual Cinematográfico

Estructura base interactiva y sección **Hero** de alto impacto para director, editor audiovisual y colorista, construida con **React**, **Tailwind CSS**, **Lucide Icons**, **GSAP** y **Framer Motion**.

---

## 🎬 Características Principales

### 1. Estética Cinematográfica (Dark Mode)
- **Fondo:** `#0a0a0a` con overlay de viñeta radial y sutil grano fílmico 35mm (`.grain-overlay`).
- **Acentos:** Rosa/Carmín de cine (`#e11d48`) y azul índigo (`#6366f1`) para resplandores y microinteracciones.
- **Tipografía:** *Plus Jakarta Sans* y *Inter* con pesos contrastados y estilo display para directores y casas productoras.

### 2. Header / Floating Navbar (Glassmorphism)
- Barra de navegación flotante con efecto cristal esmerilado (`backdrop-blur-md`).
- Logotipo personal animado con visor de claqueta y punto de grabación ("Live recording").
- Enlaces de navegación con indicadores lineales animados al hover: *Proyectos*, *Sobre mí*, *Servicios*, *Contacto*.
- Menú hamburguesa responsivo para dispositivos móviles con animación fluida mediante Framer Motion.
- Botón de llamada a la acción ("Contrátame" / "Hablemos") con borde gradiente y animación magnética.

### 3. Hero Section Audiovisual
- **Fondo de video en loop:** Video HTML5 (`autoplay`, `muted`, `loop`, `playsinline`) con overlay de gradientes y control de audio integrado.
- **Titular dinámico con GSAP:** Efecto de revelado cinematográfico que alterna entre:
  - `PRODUCTOR AUDIOVISUAL`
  - `EDITOR`
- **Showreel Spotlight Card:** Tarjeta destacada con micro-animación de radar pulsante sobre el botón de Play y metadatos técnicos (4K DCI, HDR 10-Bit, 02:14 min).
- **Showreel Lightbox Modal:** Reproductor en ventana modal a pantalla completa con controles de reproducción, atajo para cerrar con tecla `ESC` y especificaciones de cámara (ARRI Alexa Mini LF / RED V-Raptor / DaVinci Resolve).
- **Barra de Redes Sociales:** Enlaces interactivos con tooltips para **Vimeo**, **YouTube**, **Instagram**, **LinkedIn** y **Behance**.
- **Scroll Indicator:** Indicador animado de ratón y flecha descendente hacia la sección de proyectos.

---

## 🚀 Cómo Ejecutar el Proyecto

El servidor de desarrollo ya está configurado y listo para correr:

```bash
# Iniciar servidor local
npm run dev
```

El proyecto estará disponible en:
```
http://localhost:3000/
```

Para generar la compilación de producción:
```bash
npm run build
```

---

## 📁 Estructura del Código

```
web/
├── index.html                 # Configuración HTML5, fuentes Google Fonts y metaetiquetas SEO
├── package.json               # Dependencias (React, Tailwind, GSAP, Framer Motion, Lucide)
├── tailwind.config.js         # Tokens de color cinematográficos y animaciones personalizadas
├── vite.config.js             # Configuración de Vite en puerto 3000
└── src/
    ├── main.jsx               # Punto de entrada de React
    ├── App.jsx                # Estructura principal y secciones (Proyectos, Servicios, Bio, Contacto)
    ├── index.css              # Utilidades de Glassmorphism, grano fílmico y scrollbar
    └── components/
        ├── Navbar.jsx         # Header flotante y menú móvil desplegable
        ├── Hero.jsx           # Sección audiovisual con video, GSAP y barra social
        └── ShowreelModal.jsx  # Modal Lightbox interactivo para el showreel
```
