// Datos del portafolio

const datosPortafolio = {
    proyectos: [
        { 
            id: 1, 
            titulo: "Tecnocolor/POS/web", 
            descripcion: "Sistema integral para gestión de ventas y servicios técnicos", 
            enlace: "#", 
            tags:  ["React", "Python","PostgreSQL", "HTML5", "CSS3", "JavaScript"],
            imagen: "tecnocolor.png",
            alt: "Tecnocolor POS",
            detalles: {
                descripcionCompleta: "Sistema completo de gestión empresarial que incluye punto de venta, inventario, facturación electrónica, gestión de clientes y tienda en línea. Desarrollado con React para el frontend y Python para el backend, con base de datos PostgreSQL.",
                caracteristicas: [
                    "Punto de venta con código de barras",
                    "Gestión completa de inventario",
                    "Tienda en línea integrada",
                    "Dashboard con reportes y estadísticas",
                    "Sistema de usuarios y permisos",
                    "el sistema se divide en (3) partes por separado cada uno con una funcion diferente pero el mismo objetivo la gestion y organizacion del establecimiento"
                ],
                tecnologias: ["React", "Python", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
                enlaceDemo: "#",
                enlaceGithub: "#"
            }
        },
        { 
            id: 2, 
            titulo: "ShadowPentAI", 
            descripcion: "aplicacion echa para linux y windows para ciber seguridad con modelos de inteligencia artificial, capas de generar codigo y recomendaciones de los pasos y procesos.", 
            enlace: "#", 
            tags: ["python", "posgreSQL","API REST", "IA locales"],
            imagen: "ShadowPentAI.png",
            alt: "ShadowPentAI",
            detalles: {
                descripcionCompleta: "una heramienta de ciber seguridad con modelos de inteligencia artificial, capas de generar codigo y recomendaciones de los pasos y procesos de ciberseguridad.",
                caracteristicas: [
                    "API REST completa",
                    "heramientas de ciberseguridad",
                    "Base de datos PostgreSQL",
                    "generacion de codigo con modelos de inteligencia artificial locales",
                    
                ],
                tecnologias: ["python", "API REST", "PostgreSQL",],
                enlaceDemo: "#",
                enlaceGithub: "#"
            }
        },
    ],

    habilidades: ["Python", "JavaScript", "HTML5", "React", "Node.js", "CSS","PostgreSQL","API REST"],

    certificados: [
           {
            imagen: "./certificados/DARLYN_EDUARDO_CARABALI_MERA.PNG",
            pdf: "./certificados/DARLYN_EDUARDO_CARABALI_MERA.PNG",
            nombre: "Certificado UNIBOTS"
        },

        {
            imagen: "./certificados/web3_cert.PNG",
            pdf: "./certificados/web3_cert.PNG",
            nombre: "certificado web3"
        },
      
    ]
};

// Hacer los datos disponibles globalmente
window.datosPortafolio = datosPortafolio;