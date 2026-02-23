/**
 * LYNTRIX - Landing Page Script
 * ========================================
 * Funcionalidades:
 * - Smooth scroll en navegación
 * - Efectos visuales en scroll
 * - Manejo de eventos de interactividad
 * ========================================
 */

// ===== UTILIDADES =====

/**
 * Espera a que el DOM esté completamente cargado
 * @param {Function} callback - Función a ejecutar cuando el DOM esté listo
 */
const onReady = (callback) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
};

// ===== NAVEGACIÓN Y SCROLL SUAVE =====

/**
 * Configura el scroll suave para todos los links de navegación
 */
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
                
                // Log para debugging
                console.log(`Navegando a: ${targetId}`);
            }
        });
    });
};

// ===== EFECTOS DE SCROLL EN HEADER =====

/**
 * Agrega efecto visual al header cuando scrolleas
 */
const setupHeaderScrollEffect = () => {
    const header = document.querySelector('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// ===== ANIMACIONES EN VIEWPORT (INTERSECTION OBSERVER) =====

/**
 * Anima elementos cuando entran en viewport
 */
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
    
    // Observar elementos animables
    const animatableElements = document.querySelectorAll('.service-card, .why-item');
    animatableElements.forEach(el => {
        observer.observe(el);
    });
};

// ===== EFECTOS DE BOTONES =====

/**
 * Agrega efectos de ripple a botones
 */
const setupButtonEffects = () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
};

// ===== MODAL O FORMULARIO DE CONTACTO =====

/**
 * Maneja el click en el botón de contacto
 */
const setupContactButton = () => {
    const contactBtn = document.querySelector('a[href="#contacto"]');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar lógica para mostrar un modal
            // Por ahora, solo hacemos scroll suave
            console.log('Botón de contacto clickeado');
            
            // Ejemplo: mostrar un alert (remover en producción)
            // alert('Formulario de contacto - Próximamente');
        });
    }
};

// ===== LOADING DE PÁGINA =====

/**
 * Muestra un loading inicial si es necesario
 */
const setupPageLoad = () => {
    // Agregar animación cuando la página carga
    window.addEventListener('load', function() {
        console.log('Página cargada completamente');
        document.body.style.opacity = '1';
    });
};

// ===== LOGS Y DEBUGGING =====

/**
 * Información de debugging en consola
 */
const setupDebugInfo = () => {
    console.log('========================================');
    console.log('LYNTRIX - Landing Page Loaded');
    console.log('Version: 1.0.0');
    console.log('Author: Senior Web Developer');
    console.log('========================================');
};

// ===== INICIALIZACIÓN PRINCIPAL =====

/**
 * Inicializa todos los módulos cuando el DOM está listo
 */
const init = () => {
    console.log('Inicializando Lyntrix Landing Page...');
    
    // Ejecutar setup functions
    setupSmoothScroll();
    setupHeaderScrollEffect();
    setupIntersectionObserver();
    setupButtonEffects();
    setupContactButton();
    setupPageLoad();
    setupDebugInfo();
    
    console.log('✓ Inicialización completada');
};

// Ejecutar cuando el DOM esté listo
onReady(init);

// ===== EVENT LISTENERS ADICIONALES (OPCIONAL) =====

/**
 * Resisencia a errores - capturar errores globales
 */
window.addEventListener('error', function(event) {
    console.error('Error global capturado:', event.error);
});

/**
 * Prevenor console spam en producción
 */
if (process?.env?.NODE_ENV === 'production') {
    console.log = () => {};
    console.warn = () => {};
}
