# 🚀 LYNTRIX - Landing Page

## Descripción General

Lyntrix es una **landing page moderna y responsive** para una empresa de software especializada en desarrollo web, bots inteligentes, software personalizado y consultoría tecnológica.

**Ubicación:** Malargüe, Mendoza, Argentina  
**Stack Tecnológico:** HTML5 + CSS3 (Vanilla) + JavaScript Vanilla  
**Versión:** 1.0.0

---

## 📁 Estructura del Proyecto

```
Lyntrix/
├── index.html              # Archivo HTML principal
├── css/
│   └── styles.css          # Estilos CSS personalizados
├── js/
│   └── script.js           # JavaScript de interactividad
├── assets/                 # Recursos (imágenes, íconos, etc.)
├── docs/                   # Documentación del proyecto
│   ├── README.md           # Este archivo
│   ├── DOCUMENTACION.md    # Guía técnica completa
│   └── ESTRUCTURA.md       # Detalles de la estructura
└── .gitignore             # Archivos a ignorar en Git
```

---

## 🎨 Diseño Visual

### Colores Principales
- **Fondo Oscuro:** `#0F0F0F` (Dark Mode)
- **Acento Principal:** `#00D1FF` (Electric Teal)
- **Acento Secundario:** `#00A8CC` (Teal Oscuro)
- **Texto Base:** `#E0E0E0` (Blanco Soft)
- **Texto Muted:** `#A0A0A0` (Gris)

### Tipografía
- **Fuente Principal:** Montserrat (Google Fonts)
- **Pesos:** 400, 600, 700, 800
- **Estilos:** Moderna, limpia, minimalista

### Características de Diseño
✨ Animaciones suaves (glow, hover effects, transitions)  
🌙 Dark Mode completo  
📱 100% Responsive (Mobile, Tablet, Desktop)  
♿ Accesible y semántico

---

## 🔧 Tecnologías Utilizadas

### Frontend
- **HTML5:** Estructura semántica
- **CSS3 Vanilla:** Sin frameworks, sin Tailwind (CSS puro)
- **JavaScript Vanilla:** Sin librerías externas
- **Font Awesome 6.4.0:** Iconografía

### Sin Dependencias Externas
- ❌ No uses Tailwind (está removido)
- ❌ No uses Bootstrap (está removido)
- ❌ No uses jQuery
- ✅ CSS puro con variables CSS
- ✅ JavaScript vanilla modular

---

## 📋 Secciones de la Página

### 1. **Header / Navegación**
- Logo con degradado
- Botón de contacto sticky
- Blur effect al scroll
- Shadow dinámico

### 2. **Hero Section**
- Título con efecto glow animado
- Descripción con énfasis en Python e IA
- Dos botones CTA (Primario + Secundario)
- Stats de la empresa (50+ proyectos, 30+ clientes, 5+ años)
- Fondos decorativos con gradientes radiales

### 3. **Servicios (4 Tarjetas)**
- **Web Express:** Sitios web rápidos y modernos
- **Bots & Automatización:** Automatización inteligente
- **Software a Medida:** Soluciones personalizadas
- **Consultoría Tech:** Asesoramiento estratégico

Cada tarjeta incluye:
- Ícono Font Awesome
- Hover effect con elevación
- Efecto brillo (shine animation)
- Transformación de ícono

### 4. **Sección "¿Por qué Lyntrix?"**
- 3 pilares: Rápido, Seguro, Soporte
- Cajas con íconos
- Estilos consistentes

### 5. **Footer**
- Información de empresa
- Enlaces rápidos
- Ubicación con ícono
- Redes sociales (Twitter, LinkedIn, GitHub, WhatsApp)
- Copyright

---

## 🎯 Características Principales

### Interactividad
✅ Scroll suave en navegación  
✅ Efectos hover en botones y tarjetas  
✅ Animaciones de entrada para elementos  
✅ Header sticky con efecto al scroll  
✅ Intersection Observer para animaciones  

### Responsive Design
✅ Breakpoints optimizados (640px, 768px, 1024px)  
✅ Grillas adaptables  
✅ Tipografía escalable  
✅ Espaciado proporcional  

### Performance
✅ CSS minificable  
✅ JavaScript optimizado  
✅ Carga rápida de recursos  
✅ Sin render blocking  

### Accesibilidad
✅ HTML5 semántico  
✅ Labels descriptivos  
✅ Contraste de colores adecuado  
✅ Focus states en elementos interactivos  

---

## 🚀 Cómo Usar

### Instalación
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! No requiere build process

### Desarrollo Local
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar Live Server (VS Code)
# Instala la extensión "Live Server"
# Click derecho en index.html → "Open with Live Server"

# Opción 3: Servidor Python
python -m http.server 8000
# Luego abre http://localhost:8000
```

### Editar Contenido
1. **Textos:** Edita directamente en `index.html`
2. **Estilos:** Modifica `css/styles.css`
3. **Funcionalidad:** Actualiza `js/script.js`

---

## 📝 Estructura de Archivos Detallada

### `index.html`
- Estructura semántica
- Separación de concerns (sin estilos inline)
- Comentarios HTML organizados por sección
- Meta tags SEO

### `css/styles.css`
- Variables CSS para colores
- Reset de estilos
- Componentes reutilizables
- Media queries organizadas
- Comentarios descriptivos
- Animaciones keyframes

### `js/script.js`
- Funciones modularizadas
- Documentación con JSDoc
- Event listeners organizados
- Manejo de errores
- Logs de debugging

---

## 🎬 Animaciones

### Glow del Título
```css
animation: glow 3s ease-in-out infinite;
```
Efecto de brillo pulsante en el título hero.

### Hover de Tarjetas
- Elevación vertical: `translateY(-8px)`
- Border color enhancement
- Box shadow dinámico
- Shine effect interno

### Hover de Botones
- Elevación: `translateY(-2px)`
- Aumento de box shadow
- Letter spacing mejorado

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Clases CSS |
|------------|-------|-----------|
| Mobile | < 640px | Mobile-first |
| Tablet | 640px - 1024px | Medium |
| Desktop | > 1024px | Large |

---

## 🔐 Seguridad y Mejores Prácticas

✅ HTML semántico  
✅ No hay scripts inline (separado en archivo)  
✅ No hay información sensible en el código  
✅ Validación de eventos  
✅ Manejo de errores  
✅ Performance optimizado  

---

## 🌐 Compatibilidad

| Navegador | Versión | Estado |
|-----------|---------|--------|
| Chrome | 90+ | ✅ Completo |
| Firefox | 88+ | ✅ Completo |
| Safari | 14+ | ✅ Completo |
| Edge | 90+ | ✅ Completo |
| IE | 11 | ⚠️ Parcial (sin CSS Grid) |

---

## 📚 Recursos Utilizados

- [Font Awesome 6.4.0](https://fontawesome.com/) - Iconografía
- [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat) - Tipografía
- [MDN Web Docs](https://developer.mozilla.org/) - Referencia
- [CSS Tricks](https://css-tricks.com/) - Técnicas CSS

---

## 🚀 Mejoras Futuras (Roadmap)

- [ ] Agregar formulario de contacto funcional
- [ ] Integración con backend
- [ ] SEO avanzado (meta tags dinámicos)
- [ ] Analytics (Google Analytics)
- [ ] Blog/Casos de estudio
- [ ] Sistema de comentarios
- [ ] Dark/Light mode toggle
- [ ] Multiidioma (i18n)
- [ ] PWA (Progressive Web App)

---

## 📞 Contacto

**Empresa:** Lyntrix  
**Ubicación:** Malargüe, Mendoza, Argentina  
**Servicios:** Desarrollo Web, Bots, Python, IA, Software Personalizado

---

## 📄 Licencia

Este proyecto es propiedad de **Lyntrix**.  
© 2024 Lyntrix. Todos los derechos reservados.

---

## ✍️ Notas del Desarrollador

Este proyecto fue creado como una **landing page profesional y moderna** siguiendo:
- Principios de Clean Code
- Mobile-first approach
- Accesibilidad (A11y)
- Performance optimization
- Responsive design patterns

**Última actualización:** Febrero 22, 2026

---

## 📖 Documentación Adicional

Para más detalles técnicos, consulta:
- [DOCUMENTACION.md](./DOCUMENTACION.md) - Guía técnica completa
- [ESTRUCTURA.md](./ESTRUCTURA.md) - Detalles de arquitectura
