# ⚡ GUÍA RÁPIDA DE INICIO - Lyntrix

## 📥 Quick Start (60 segundos)

### 1️⃣ Abrir la Página
```bash
# Opción 1: Abrir directo en navegador
1. Ve a: c:\Users\lauti\Desktop\Muestras Lyntrix\Nivel 1\
2. Doble click en index.html
3. ¡Listo!

# Opción 2: Live Server (VS Code)
1. Abre la carpeta en VS Code
2. Click derecho en index.html
3. "Open with Live Server"
4. Se abre en navegador automáticamente

# Opción 3: Local Server
python -m http.server 8000
# Luego abre: http://localhost:8000
```

---

## 🎨 Cambios Comunes

### Cambiar Colores
**Archivo:** `css/styles.css` (líneas 1-20)
```css
:root {
    --teal: #00D1FF;              /* Tu color aquí */
    --teal-dark: #00A8CC;         /* Tu color oscuro aquí */
    --bg-dark: #0F0F0F;           /* Tu fondo aquí */
}
```

### Cambiar Texto del Hero
**Archivo:** `index.html` (línea ~100)
```html
<h1 class="hero-title">
    Tu título aquí
</h1>

<p class="hero-description">
    Tu descripción aquí
</p>
```

### Cambiar Servicios
**Archivo:** `index.html` (línea ~160)
```html
<div class="service-card">
    <i class="fas fa-nuevo-icono service-icon"></i>
    <h3 class="service-title">Mi Servicio</h3>
    <p class="service-description">Mi descripción</p>
</div>
```

### Cambiar Texto del Footer
**Archivo:** `index.html` (línea ~280)
```html
<p>Tu texto de ubicación aquí</p>
<p>Tu país aquí</p>
```

---

## 📱 Responsive Breakpoints

La página es responsive en:
- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

Pruébalo con F12 (DevTools) → Ctrl+Shift+M (Responsive mode)

---

## 🚀 Agregar Nueva Sección

### Paso 1: Crear HTML en `index.html`
```html
<section class="mi-seccion">
    <div class="mi-container">
        <h2>Mi Sección</h2>
        <p>Contenido aquí</p>
    </div>
</section>
```

### Paso 2: Agregar CSS en `styles.css`
```css
.mi-seccion {
    padding: 3rem 1rem;
    background-color: var(--bg-dark);
}

.mi-container {
    max-width: 80rem;
    margin: 0 auto;
}

.mi-seccion h2 {
    font-size: 2.5rem;
    color: var(--teal);
    font-weight: 700;
    margin-bottom: 2rem;
}
```

### Paso 3: Opcional - Agregar JavaScript
En `js/script.js`, dentro de la función `init()`:
```javascript
const init = () => {
    setupSmoothScroll();
    // ... otros setups
    miNuevaFuncion(); // 👈 Tu nueva función
};

const miNuevaFuncion = () => {
    // Tu código aquí
};
```

---

## 🎯 Agregar Links Reales

### Links de Navegación
En `index.html`, busca los links `href="#"` y reemplaza:
```html
<!-- Antes -->
<a href="#servicios">Servicios</a>

<!-- Después -->
<a href="https://tudominio.com/servicios">Servicios</a>
```

### Redes Sociales
En `index.html` (línea ~300):
```html
<a href="https://twitter.com/tu-usuario" class="social-link" title="Twitter">
    <i class="fab fa-twitter"></i>
</a>
```

### Email
```html
<a href="mailto:info@lyntrix.com">info@lyntrix.com</a>
```

### WhatsApp
```html
<a href="https://wa.me/5492612345678" class="social-link" title="WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
```

---

## 🔧 Modificar Header

En `index.html` (línea ~40):
```html
<header>
    <div class="header-container">
        <!-- Logo -->
        <div class="logo">
            <div class="logo-icon"></div>
            <span class="logo-text">Lyntrix</span>  <!-- Tu nombre -->
        </div>

        <!-- Botón Contacto -->
        <a href="#contacto" class="btn-primary">
            Contacto
        </a>
    </div>
</header>
```

---

## 💬 Cambiar Ubicación del Footer

En `index.html` (línea ~280):
```html
<div class="location-info">
    <i class="fas fa-map-marker-alt location-icon"></i>
    <div class="location-text">
        <p>Tu Ubicación</p>        <!-- Aquí -->
        <p>Tu País</p>             <!-- Y aquí -->
    </div>
</div>
```

---

## 📊 Cambiar Stats del Hero

En `index.html` (línea ~125):
```html
<div class="stat-item">
    <p class="stat-number">50+</p>           <!-- Tu número -->
    <p class="stat-label">Proyectos</p>     <!-- Tu label -->
</div>
```

---

## 🎬 Desactivar/Modificar Animaciones

### Desactivar Glow del Título
En `css/styles.css`, busca `.hero-title`:
```css
.hero-title {
    /* ... otros estilos ... */
    animation: glow 3s ease-in-out infinite;  /* 👈 Elimina esta línea */
}
```

### Desactivar Hover de Botones
En `css/styles.css`, busca `.btn-primary:hover`:
```css
.btn-primary:hover {
    /* Deja vacío o comenta */
    /* transform: translateY(-2px); */
}
```

### Cambiar Velocidad de Scroll
En `css/styles.css`:
```css
html {
    scroll-behavior: smooth;  /* Cambiar a 'auto' para scroll normal */
}
```

---

## 📸 Agregar Imágenes

### En Hero
```html
<section class="hero">
    <!-- Agregar antes del contenido -->
    <img src="ruta/a/imagen.jpg" alt="Descripción" class="hero-image">
    <div class="hero-content">
        <!-- ... contenido ... -->
    </div>
</section>
```

Luego en CSS:
```css
.hero-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    z-index: 1;
}
```

---

## 🔐 Cambiar Información de Contacto

### Email
En `index.html`:
```html
<a href="mailto:tu-email@example.com">tu-email@example.com</a>
```

### Teléfono
```html
<a href="tel:+5492612345678">+54 9261 2345678</a>
```

### Dirección
```html
<p>Tu Calle 123, Malargüe, Mendoza</p>
```

---

## ✅ Checklist Rápido

- [ ] Cambié colores a mis marcas
- [ ] Actualicé el nombre de la empresa
- [ ] Cambié el título hero
- [ ] Actualicé los servicios
- [ ] Agregué ubicación correcta
- [ ] Configuré links de redes sociales
- [ ] Probé en mobile (F12 + Ctrl+Shift+M)
- [ ] Probé links de navegación
- [ ] Probé hover effects
- [ ] Probé scroll suave

---

## 📞 Soporte Rápido

| Problema | Solución |
|----------|----------|
| No carga CSS | Recarga con Ctrl+Shift+R |
| No funciona scroll | Verifica console (F12) |
| Estilos raros | Ajusta variables CSS en :root |
| Colores no se ven | Aumenta/disminuye brightness |
| Animaciones lag | Reduce simultáneas, usa transform |

---

## 🚀 Próximos Pasos

1. **Agregar Formulario de Contacto**
   - FormValidation.io
   - Backend (Node.js, Python, etc.)

2. **Agregar Blog**
   - Crear nueva página
   - Sistema de categorías
   - SEO para articles

3. **Agregar Analytics**
   - Google Analytics
   - Hotjar para user behavior

4. **Mejorar SEO**
   - Meta tags dinámicas
   - Sitemap
   - Robots.txt

5. **Convertir a PWA**
   - Service Worker
   - Manifest.json
   - Offline support

---

## 📚 Archivo de Referencia

- 📄 **index.html** → Estructura HTML
- 🎨 **css/styles.css** → Todos los estilos
- 📝 **js/script.js** → Interactividad
- 📖 **docs/README.md** → Guía general
- 📖 **docs/DOCUMENTACION.md** → Detalles técnicos
- 📖 **docs/ESTRUCTURA.md** → Arquitectura

---

## 💡 Tips Profesionales

1. **Usa variables CSS** para cambios globales
2. **Comenta cambios importantes** en el código
3. **Prueba en múltiples navegadores** antes de publicar
4. **Verifica responsive** antes de ir a producción
5. **Usa Lighthouse** para checklist final

---

**¿Necesitas ayuda?** Consulta los archivos en `docs/`

**¡Bienvenido a Lyntrix!** 🚀
