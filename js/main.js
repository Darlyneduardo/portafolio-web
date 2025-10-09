// JavaScript principal del portafolio

// Estado del carrusel de certificados
let certificadoActual = 0;
let certificados = [];

// Estado de los proyectos expandidos
let proyectoExpandido = null;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portafolio cargado correctamente');
    
    // Cargar datos
    cargarDatos();
    
    // Inicializar carrusel de certificados
    inicializarCarruselCertificados();
    
    // Inicializar navegación suave
    inicializarNavegacionSuave();
    
    // Inicializar proyectos expandibles
    inicializarProyectos();
});

// Función para cargar datos desde data.js
function cargarDatos() {
    // Los datos se cargarán desde data.js que se incluirá antes
    if (typeof window.datosPortafolio !== 'undefined') {
        certificados = window.datosPortafolio.certificados;
        console.log('Datos cargados:', window.datosPortafolio);
    }
}

// Inicializar carrusel de certificados
function inicializarCarruselCertificados() {
    if (certificados.length > 0) {
        // Crear elementos del carrusel
        crearCarruselCertificados();
        
        // Inicializar rotación automática
        setInterval(function() {
            certificadoActual = (certificadoActual + 1) % certificados.length;
            actualizarCarruselCertificados();
        }, 5000);
    }
}

// Crear elementos del carrusel
function crearCarruselCertificados() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselDots = document.querySelector('.carousel-dots');
    
    if (!carouselContainer || !carouselDots) return;
    
    // Limpiar contenedores
    carouselContainer.innerHTML = '';
    carouselDots.innerHTML = '';
    
    // Crear slides
    certificados.forEach((cert, index) => {
        // Crear slide
        const slide = document.createElement('div');
        slide.className = `certificado-slide ${index === certificadoActual ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${cert.imagen})`;
        slide.title = cert.nombre;
        carouselContainer.appendChild(slide);
        
        // Crear dot
        const dot = document.createElement('button');
        dot.className = `dot ${index === certificadoActual ? 'active' : ''}`;
        dot.title = cert.nombre;
        dot.addEventListener('click', () => {
            certificadoActual = index;
            actualizarCarruselCertificados();
        });
        carouselDots.appendChild(dot);
    });
}

// Actualizar carrusel de certificados
function actualizarCarruselCertificados() {
    const slides = document.querySelectorAll('.certificado-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === certificadoActual);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === certificadoActual);
    });
}

// Inicializar navegación suave
function inicializarNavegacionSuave() {
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar proyectos expandibles
function inicializarProyectos() {
    const toggleButtons = document.querySelectorAll('.button-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const proyectoId = parseInt(card.dataset.proyectoId);
            
            if (proyectoExpandido === proyectoId) {
                // Colapsar proyecto
                proyectoExpandido = null;
                card.classList.remove('expanded');
                this.innerHTML = '▼ Ver más';
            } else {
                // Colapsar proyecto anterior si existe
                const prevExpanded = document.querySelector('.card.expanded');
                if (prevExpanded) {
                    prevExpanded.classList.remove('expanded');
                    prevExpanded.querySelector('.button-toggle').innerHTML = '▼ Ver más';
                }
                
                // Expandir nuevo proyecto
                proyectoExpandido = proyectoId;
                card.classList.add('expanded');
                this.innerHTML = '▲ Ver menos';
            }
        });
    });
}

// Función para manejar errores de carga de imágenes
function handleImageError(img) {
    img.style.display = 'none';
    const placeholder = img.nextElementSibling;
    if (placeholder && placeholder.classList.contains('card-image-placeholder')) {
        placeholder.style.display = 'flex';
    }
}

// Exportar funciones si es necesario
window.portafolioJS = {
    certificadoActual,
    actualizarCarruselCertificados,
    handleImageError
};