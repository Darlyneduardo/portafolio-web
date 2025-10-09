// Datos del portafolio

export const proyectos = [
    { 
        id: 1, 
        titulo: "Tecnocolor/POS/web", 
        descripcion: "Sistema integral para gestión de ventas y servicios técnicos", 
        enlace: "#", 
        tags:  ["React", "Python","PostgreSQL", "HTML5", "CSS3", "JavaScript"],
        imagen: "img/tecnocolor.png",
        alt: "Tecnocolor POS",
        detalles: {
            descripcionCompleta: "Sistema completo de gestión empresarial que incluye punto de venta, inventario, facturación electrónica, gestión de clientes y tienda en línea. Desarrollado con React para el frontend y Python para el backend, con base de datos PostgreSQL.",
            caracteristicas: [
                "Punto de venta con código de barras",
                "Gestión completa de inventario",
                "Tienda en línea integrada",
                "Dashboard con reportes y estadísticas",
                "Sistema de usuarios y permisos",
                "El sistema se divide en (3) partes por separado, cada uno con una función diferente pero el mismo objetivo: la gestión y organización del establecimiento"
            ],
            tecnologias: ["React", "Python", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
            enlaceDemo: "#",
            enlaceGithub: "#"
        }
    },
    { 
        id: 2, 
        titulo: "ShadowPentAI", 
        descripcion: "Aplicación hecha para Linux y Windows para ciberseguridad con modelos de inteligencia artificial, capaz de generar código y recomendaciones de los pasos y procesos.", 
        enlace: "#", 
        tags: ["Python", "PostgreSQL","API REST", "IA locales"],
        imagen: "img/ShadowPentAI.png",
        alt: "ShadowPentAI",
        detalles: {
            descripcionCompleta: "Una herramienta de ciberseguridad con modelos de inteligencia artificial, capaz de generar código y recomendaciones de los pasos y procesos de ciberseguridad.",
            caracteristicas: [
                "API REST completa",
                "Herramientas de ciberseguridad",
                "Base de datos PostgreSQL",
                "Generación de código con modelos de inteligencia artificial locales",
                
            ],
            tecnologias: ["Python", "API REST", "PostgreSQL"],
            enlaceDemo: "#",
            enlaceGithub: "#"
        }
        
    },
    {
        id: 3,
        titulo: "EcoChain",
        descripcion: "Plataforma de gestión de cadenas de suministro sostenibles y el reciclaje con blockchain.",
        enlace: "#",
        tags: ["Blockchain", "Smart Contracts", "Supply Chain"],
        imagen: "img/EcoChain.png",
        alt: "EcoChain",
        detalles: {
            descripcionCompleta: "EcoChain es una plataforma innovadora que utiliza tecnología blockchain para mejorar la transparencia y sostenibilidad en las cadenas de suministro y el reciclaje.",
            caracteristicas: [
                "Seguimiento en tiempo real de productos",
                "Contratos inteligentes para automatización",
                "Informes de sostenibilidad y huella de carbono",
                "Incentivos para prácticas ecológicas y reciclaje con criptomonedas"
            ],
            tecnologias: ["Blockchain", "Smart Contracts", "React", "Node.js"],
            enlaceDemo: "https://ecochain-landing.vercel.app/",
            enlaceGithub: "#"
        }
    },
    {
        id: 4,
        titulo: "EcoChain wallet",
        descripcion: "Billetera digital para gestionar criptomonedas y tokens ecológicos.",
        enlace: "#",
        tags: ["Blockchain", "Wallet", "HTML", "CSS", "JavaScript", "Python"],
        imagen: "img/EcoChain_2.png",
        detalles: {
            descripcionCompleta: "Billetera digital que permite gestionar criptomonedas y tokens ecológicos de manera segura y eficiente.",
            caracteristicas: [
                "Interfaz intuitiva y fácil de usar",
                "Soporte para múltiples criptomonedas",
                "Integración con plataformas de intercambio",
                "Funciones de seguridad avanzadas"
            ],
            tecnologias: ["Python", "Blockchain", "Node.js", "HTML", "CSS", "JavaScript"],
            enlaceDemo: "#",
            enlaceGithub: "#"
        }
    },
];

export const habilidades = ["Python", "JavaScript", "HTML5", "React", "Node.js", "CSS","PostgreSQL","API REST"];

export const certificados = [
       {
        imagen: "/certificados/DARLYN_EDUARDO_CARABALI_MERA.PNG",
        pdf: "/certificados/DARLYN_EDUARDO_CARABALI_MERA.PNG",
        nombre: "Certificado UNIBOTS"
    },

    {
        imagen: "/certificados/web3_cert.PNG",
        pdf: "/certificados/web3_cert.PNG",
        nombre: "Certificado web3"
    },
  
];