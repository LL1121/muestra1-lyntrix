# ========================================
# LYNTRIX - Configuración de Ejemplo
# ========================================

# Este archivo contiene configuraciones y ejemplos
# Úsalo como referencia para setup de desarrollo/producción

---

## 🚀 DEPLOYMENT OPCIONES

### 1. GitHub Pages (GRATIS)
```bash
# 1. Crear repositorio en GitHub
# 2. Push código
# 3. Settings → Pages → Branch: main
# URL: https://username.github.io/lyntrix
```

### 2. Vercel (GRATIS)
```bash
npm i -g vercel
vercel
# Seguir instrucciones
```

### 3. Netlify (GRATIS)
```bash
# Arrastra la carpeta a netlify.com
# O usa CLI:
npm i -g netlify-cli
netlify deploy
```

### 4. Servidor Propio
```bash
# Subir archivos vía FTP/SSH
# Configurar servidor web (Apache, Nginx)
```

---

## 📊 SEO OPTIMIZATION

### Meta Tags Importantes
```html
<!-- Yá están en index.html, pero verifica: -->
<meta name="description" content="Máx 160 caracteres">
<meta name="keywords" content="palabra1, palabra2, palabra3">
<meta property="og:title" content="Lyntrix">
<meta property="og:description" content="...">
<meta property="og:image" content="URL a imagen">
```

### Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://tudominio.com/</loc>
        <lastmod>2024-02-22</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://tudominio.com/sitemap.xml
```

---

## 📈 ANALYTICS

### Google Analytics
```html
<!-- Agregar en </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔐 SEGURIDAD

### HTTPS
- Obtén certificado SSL (Let's Encrypt es gratis)
- Redirige HTTP → HTTPS

### Headers de Seguridad
```nginx
# En nginx.conf
add_header X-Content-Type-Options "nosniff";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000" always;
```

---

## 🎨 CUSTOMIZACIÓN AVANZADA

### Cambiar Fuente Completa
En `css/styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=NUEVA-FUENTE:wght@400;600;700;800&display=swap');

* {
    font-family: 'NUEVA-FUENTE', sans-serif;
}
```

### Tema Claro (Light Mode)
```css
:root {
    --teal: #0099CC;
    --bg-dark: #FFFFFF;
    --text-light: #1A1A1A;
    --text-muted: #666666;
}

/* Invertir colores según necesidad */
```

### Agregar Favicon
```html
<!-- En <head> -->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
```

---

## ⚡ PERFORMANCE BOOST

### Minificar CSS
```bash
# Online: https://www.minifycode.com/css-minifier/
# O usar herramienta CLI
```

### Minificar JavaScript
```bash
# Online: https://www.minifycode.com/javascript-minifier/
```

### Comprimir Imágenes
```bash
# TinyPNG: https://tinypng.com/
# ImageOptim: https://imageoptim.com/
```

### Cache Headers
```nginx
# Archivos estáticos
expires 30d;
add_header Cache-Control "public, immutable";
```

---

## 📱 PWA - Progressive Web App

### Agregar Manifest
Crear `manifest.json`:
```json
{
  "name": "Lyntrix",
  "short_name": "Lyntrix",
  "description": "Innovación Digital desde el Sur",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0F0F0F",
  "theme_color": "#00D1FF",
  "icons": [
    {
      "src": "/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

En `index.html` (head):
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#00D1FF">
```

### Service Worker
Crear `sw.js`:
```javascript
const CACHE_NAME = 'lyntrix-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

En `js/script.js`:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

---

## 🔗 FORMULARIO DE CONTACTO

### Opción 1: Email (FormSubmit.co)
```html
<form action="https://formsubmit.co/tu-email@example.com" method="POST">
    <input type="email" name="email" required>
    <input type="text" name="asunto" required>
    <textarea name="mensaje" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

### Opción 2: Netlify Forms
```html
<form name="contacto" method="POST" netlify>
    <input type="email" name="email" required />
    <textarea name="mensaje" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

---

## 📞 CHAT WIDGET (OPCIONAL)

### Crisp Chat
```html
<!-- En </body> -->
<script>
  window.$crisp=[];
  window.CRISP_TOKEN_ID="your_token";
  (function(){
    d=document;
    s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
```

---

## 🎯 TESTING

### Lighthouse
```bash
# Chrome DevTools → Lighthouse
# O CLI:
npm install -g lighthouse
lighthouse https://tudominio.com
```

### Responsive Testing
```bash
# Chrome DevTools (F12 + Ctrl+Shift+M)
# https://responsively.app/
```

---

## 📊 MONITOREO

### Uptime Monitor
- UptimeRobot (gratis)
- Monitorizar ping cada 5 min

### Error Tracking
- Sentry.io (gratis básico)
- Capturar errores automáticamente

---

## 🚀 CI/CD PIPELINE

### GitHub Actions
Crear `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to hosting
        run: npm run deploy
```

---

## 📋 CHECKLIST FINAL

- [ ] Dominio registrado
- [ ] SSL/HTTPS configurado
- [ ] Meta tags completados
- [ ] Sitemap.xml creado
- [ ] Robots.txt configurado
- [ ] Google Analytics agregado
- [ ] Redes sociales vinculadas
- [ ] Formulario de contacto funcional
- [ ] Lighthouse score 90+
- [ ] Mobile tested
- [ ] Navegadores testeados
- [ ] Backup del proyecto
- [ ] Monitor de uptime activo

---

**Última actualización:** Febrero 22, 2026
