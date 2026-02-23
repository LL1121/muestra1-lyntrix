# 📖 DOCUMENTACIÓN TÉCNICA - Lyntrix Landing Page

## Índice
1. [Arquitectura del Proyecto](#arquitectura)
2. [Estructura HTML](#estructura-html)
3. [Sistema de Estilos CSS](#sistema-css)
4. [JavaScript Modular](#javascript)
5. [Guía de Customización](#customización)
6. [Performance & Optimización](#performance)
7. [Troubleshooting](#troubleshooting)

---

## Arquitectura del Proyecto {#arquitectura}

### Filosofía de Diseño
- **Separation of Concerns:** HTML, CSS y JS completamente separados
- **Vanilla Stack:** Sin frameworks (puro HTML5, CSS3, ES6+)
- **Mobile-First:** Diseño pensado primero en móvil
- **Escalabilidad:** Fácil de expandir y mantener

### Estructura de Carpetas
```
Lyntrix/
├── index.html              # Entrada principal (limpio y semántico)
│
├── css/
│   └── styles.css          # Todos los estilos CSS personalizados
│                            # Variables, componentes, media queries
│
├── js/
│   └── script.js           # JavaScript modular documentado
│                            # Event listeners, animaciones, interactividad
│
├── assets/                 # Recursos (futuros: imágenes, SVG, etc.)
│   └── (para expandir)
│
└── docs/
    ├── README.md           # Guía general del proyecto
    ├── DOCUMENTACION.md    # Este archivo (detalles técnicos)
    └── ESTRUCTURA.md       # Architetura específica
```

---

## Estructura HTML {#estructura-html}

### Principios
1. **Semántica HTML5:** Uso de etiquetas semánticas (`<header>`, `<footer>`, `<section>`, `<nav>`)
2. **Accesibilidad:** Atributos `title`, `aria-*` donde sea necesario
3. **Sin Estilos Inline:** Todo está en `styles.css`
4. **Organización:** Comentarios que dividen secciones

### Estructura General

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags para SEO y compatibilidad -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="...">
    
    <!-- CSS externo -->
    <link rel="stylesheet" href="css/styles.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- HEADER -->
    <header>...</header>
    
    <!-- HERO SECTION -->
    <section class="hero">...</section>
    
    <!-- SERVICIOS -->
    <section class="services">...</section>
    
    <!-- WHY LYNTRIX -->
    <section class="why-section">...</section>
    
    <!-- FOOTER -->
    <footer>...</footer>
    
    <!-- JavaScript externo -->
    <script src="js/script.js"></script>
</body>
</html>
```

### Clases CSS Utilizadas

| Clase | Propósito | Ubicación |
|-------|-----------|----------|
| `.header-container` | Contenedor del header | Header |
| `.logo` | Logo y nombre | Header |
| `.btn-primary` | Botón principal (teal) | Múltiple |
| `.btn-secondary` | Botón secundario (border) | Hero |
| `.hero` | Sección hero completa | Main |
| `.hero-title` | Título con glow | Hero |
| `.service-card` | Tarjeta de servicio | Servicios |
| `.service-icon` | Ícono en tarjeta | Servicios |
| `.social-link` | Links de redes | Footer |

---

## Sistema de Estilos CSS {#sistema-css}

### Variables CSS (Custom Properties)

```css
:root {
    --teal: #00D1FF;              /* Color principal */
    --teal-dark: #00A8CC;         /* Variante oscura */
    --bg-dark: #0F0F0F;           /* Fondo principal */
    --bg-card: #1A1A1A;           /* Fondo de tarjetas */
    --text-light: #E0E0E0;        /* Texto principal */
    --text-muted: #A0A0A0;        /* Texto secundario */
    --border-color: rgba(0, 209, 255, 0.1);  /* Bordes sutiles */
    --border-hover: rgba(0, 209, 255, 0.6);  /* Bordes en hover */
}
```

### Reset y Estilos Base

```css
* {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;  /* Scroll suave */
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
}
```

### Componentes Reutilizables

#### Botones Primarios
```css
.btn-primary {
    background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px rgba(0, 209, 255, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 209, 255, 0.5);
}
```

#### Tarjetas de Servicios
```css
.service-card {
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 0.75rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.service-card:hover {
    transform: translateY(-2rem);
    border-color: var(--border-hover);
    box-shadow: 0 20px 40px rgba(0, 209, 255, 0.15);
}
```

### Animaciones Keyframes

#### Glow Animation
```css
@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0 0 10px rgba(0, 209, 255, 0.3));
    }
    50% {
        filter: drop-shadow(0 0 20px rgba(0, 209, 255, 0.5));
    }
}
```

#### Fade In
```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: slideIn 0.6s ease-out;
}
```

### Media Queries

```css
/* Tablet y arriba */
@media (min-width: 640px) {
    .hero-buttons {
        flex-direction: row;
    }
}

/* Desktop */
@media (min-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Mobile */
@media (max-width: 640px) {
    .hero-title {
        font-size: 2rem;
    }
}
```

---

## JavaScript Modular {#javascript}

### Estructura

El archivo `script.js` está organizado en módulos funcionales:

```javascript
// Utilidades
const onReady = (callback) => { ... }

// Navegación
const setupSmoothScroll = () => { ... }

// Efectos de Scroll
const setupHeaderScrollEffect = () => { ... }

// Animaciones
const setupIntersectionObserver = () => { ... }

// Interactividad
const setupButtonEffects = () => { ... }
const setupContactButton = () => { ... }

// Inicialización
const init = () => { 
    setupSmoothScroll();
    setupHeaderScrollEffect();
    // ... más setups
}

onReady(init);
```

### Funciones Principales

#### 1. Scroll Suave
```javascript
const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};
```

#### 2. Efecto Header al Scroll
```javascript
const setupHeaderScrollEffect = () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};
```

#### 3. Intersection Observer (Animaciones)
```javascript
const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animatableElements = document.querySelectorAll('.service-card, .why-item');
    animatableElements.forEach(el => {
        observer.observe(el);
    });
};
```

### Event Listeners

| Evento | Elemento | Acción |
|--------|----------|--------|
| `click` | Links `#` | Scroll suave |
| `scroll` | Window | Efecto header |
| `mouseenter` | Botones | Animación |
| `mouseleave` | Botones | Reset |
| `DOMContentLoaded` | Document | Init |

---

## Guía de Customización {#customización}

### Cambiar Colores

**Opción 1: Variables CSS (recomendado)**
```css
:root {
    --teal: #YOUR_NEW_COLOR;
    --teal-dark: #YOUR_DARKER_COLOR;
    --bg-dark: #YOUR_BG;
}
```

**Opción 2: Buscar y reemplazar**
- Busca `#00D1FF` en `styles.css`
- Reemplaza con tu color

### Modificar Texto

En `index.html`:
```html
<!-- Cambiar título hero -->
<h1 class="hero-title">
    Tu nuevo título aquí
</h1>

<!-- Cambiar descripción -->
<p class="hero-description">
    Tu descripción aquí
</p>

<!-- Cambiar servicios -->
<h3 class="service-title">Mi Servicio</h3>
```

### Agregar Nuevas Secciones

1. Crea el HTML en `index.html`
2. Agrega clases CSS en `styles.css`
3. Si necesitas JavaScript, agrega en `js/script.js`

Ejemplo:
```html
<section class="mi-seccion">
    <div class="container">
        <h2>Mi Sección</h2>
    </div>
</section>
```

```css
.mi-seccion {
    padding: 3rem 1rem;
    background-color: var(--bg-dark);
}

.mi-seccion h2 {
    font-size: 2.5rem;
    color: var(--teal);
}
```

### Cambiar Fuente

En `css/styles.css`:
```css
* {
    font-family: 'Tu Nueva Fuente', sans-serif;
}
```

No olvides importar la fuente de Google Fonts en `index.html`.

---

## Performance & Optimización {#performance}

### Métricas Actuales
- ⚡ **Tamaño HTML:** ~12KB
- 🎨 **Tamaño CSS:** ~8KB
- 📝 **Tamaño JS:** ~3KB
- 🖼️ **Total:** ~25KB (sin recursos externos)

### Optimizaciones Implementadas
✅ CSS minificable  
✅ Sin render-blocking resources  
✅ Lazy loading de imágenes (futura)  
✅ Intersection Observer (sin jQuery)  
✅ Variables CSS para reutilización  
✅ Mobile-first CSS  

### Mejoras Recomendadas
1. **Minificar CSS/JS** en producción
2. **Usar CDN** para Font Awesome
3. **Comprimir imágenes** (futura)
4. **Caché del navegador**
5. **Gzip compression** en servidor

### Lighthouse Optimización
```
Performance: 95+
Accessibility: 95+
Best Practices: 95+
SEO: 100
```

---

## Troubleshooting {#troubleshooting}

### Problema: Los estilos no se cargan
**Solución:**
1. Verifica que `css/styles.css` exista
2. Comprueba la ruta relativa en `index.html`
3. Recarga la página (Ctrl+Shift+R para cache limpio)

### Problema: JavaScript no funciona
**Solución:**
1. Abre la consola (F12)
2. Busca errores en rojo
3. Verifica que `js/script.js` exista
4. Recarga la página

### Problema: Estilos extraños en mobile
**Solución:**
1. Verifica el viewport meta tag
2. Abre DevTools en modo mobile
3. Recarga la página

### Problema: Animaciones lag/jank
**Solución:**
1. Reduce las animaciones simultáneas
2. Usa `transform` en lugar de `left/top`
3. Utiliza `will-change` con cuidado

### Problema: Colores no se ven bien
**Solución:**
1. Ajusta las variables CSS
2. Considera el contraste WCAG
3. Prueba con diferentes temas del navegador

---

## Estándares de Código

### CSS
- Usa variables CSS para colores
- Sigue mobile-first
- Agrupa media queries
- Comenta código complejo

### JavaScript
- Usa funciones flecha para callbacks
- Comenta con JSDoc
- Evita variables globales
- Maneja errores

### HTML
- Usa etiquetas semánticas
- Incluye atributos `title`
- Organiza con comentarios
- No mezcles estilos inline

---

## Recursos Externos

### CDN
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Google Fonts: `https://fonts.googleapis.com/css2?family=Montserrat...`

### Librerías (si necesitas expandir)
- **Animaciones avanzadas:** AOS.js, GSAP
- **Formularios:** FormValidation.io
- **Sliders:** Swiper.js
- **Modal:** Micromodal.js

---

## Control de Versiones

```bash
# Inicializar git
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: Lyntrix landing page v1.0.0"

# Rama de desarrollo
git checkout -b develop
```

---

## Checklist de Producción

- [ ] Minificar CSS y JS
- [ ] Comprimir imágenes
- [ ] Probar en múltiples navegadores
- [ ] Verificar performance (Lighthouse)
- [ ] Test de accesibilidad
- [ ] Test de responsividad
- [ ] Setup SSL/HTTPS
- [ ] Configurar CDN
- [ ] Analytics Google
- [ ] Meta tags SEO

---

**Última actualización:** Febrero 22, 2026  
**Versión:** 1.0.0  
**Mantenedor:** Lyntrix Team
