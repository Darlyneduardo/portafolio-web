// Ilustraciones SVG para EcoChain y EcoChain Wallet
export function EcoChainSVG(props) {
    return (
        <svg viewBox="0 0 180 180" width={props.size || 180} height={props.size || 180} {...props}>
            <defs>
                <radialGradient id="ecoBg" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#a7f3d0"/>
                    <stop offset="100%" stopColor="#16a34a"/>
                </radialGradient>
                <linearGradient id="ecoLeaf" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#16a34a"/>
                </linearGradient>
            </defs>
            <circle cx="90" cy="90" r="85" fill="url(#ecoBg)" stroke="#10b981" strokeWidth="6"/>
            <ellipse cx="90" cy="110" rx="38" ry="60" fill="#fff" fillOpacity="0.18"/>
            <path d="M90 50 Q110 80 90 130 Q70 80 90 50 Z" fill="url(#ecoLeaf)" stroke="#10b981" strokeWidth="3"/>
            <circle cx="90" cy="90" r="18" fill="#16a34a" fillOpacity="0.7"/>
            <text x="90" y="170" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#065f46" fontFamily="sans-serif">EcoChain</text>
        </svg>
    );
}

export function EcoChainWalletSVG(props) {
    return (
        <svg viewBox="0 0 180 180" width={props.size || 180} height={props.size || 180} {...props}>
            <defs>
                <radialGradient id="walletBg" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="#fef9c3"/>
                    <stop offset="100%" stopColor="#f59e42"/>
                </radialGradient>
                <linearGradient id="walletBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fbbf24"/>
                    <stop offset="100%" stopColor="#f59e42"/>
                </linearGradient>
            </defs>
            <circle cx="90" cy="90" r="85" fill="url(#walletBg)" stroke="#f59e42" strokeWidth="6"/>
            <rect x="45" y="70" width="90" height="50" rx="14" fill="url(#walletBody)" stroke="#b45309" strokeWidth="3"/>
            <circle cx="65" cy="95" r="8" fill="#fffde7" stroke="#f59e42" strokeWidth="2"/>
            <rect x="100" y="85" width="30" height="20" rx="6" fill="#fde68a" stroke="#f59e42" strokeWidth="2"/>
            <text x="90" y="170" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#b45309" fontFamily="sans-serif">Wallet</text>
        </svg>
    );
}
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
        imagen: "/certificados/hackathon_skinnovation.png",
        pdf: "/certificados/hackathon_skinnovation.png",
        nombre: "Hackathon Equipo Retador – Skinnovation (Talento Tech Valle)",
        color: "#16a34a",
        fecha: "16 y 17 de octubre de 2025",
        descripcion: "Participación destacada en la hackathon “Skinnovation” organizada por Talento Tech Valle, donde se desarrollaron soluciones tecnológicas innovadoras enfocadas en el análisis de piel mediante inteligencia artificial. Darlyn Eduardo Carabalí formó parte del equipo retador, aplicando conocimientos en desarrollo de software y diseño de interfaces centradas en el usuario."
    },
    {
        imagen: "/certificados/DARLYN_EDUARDO_CARABALI_MERA.PNG",
        pdf: "/certificados/DARLYN_EDUARDO_CARABALI_MERA.PNG",
        nombre: "Hackathon Unibots (Talento Tech Valle)",
        color: "#9333ea",
        fecha: "18 y 19 de julio de 2025",
        descripcion: "Reconocimiento por la participación en el desafío “Unibots”, enfocado en la creación de aplicaciones con integración de inteligencia artificial y robótica educativa. Se valoró la creatividad, el uso de tecnologías modernas y el trabajo en equipo en entornos ágiles."
    },
    {
        imagen: "/certificados/web3_cert.PNG",
        pdf: "/certificados/web3_cert.PNG",
        nombre: "Participante Hackathon ETH•CO Cali – Web3 & Blockchain",
        color: "#8b5cf6",
        fecha: "13 y 14 de junio de 2025",
        descripcion: "Participación en la Hackathon ETH•CO Cali impulsada por Talento Tech Valle y NIDO, orientada al desarrollo de soluciones basadas en Web3, Blockchain y contratos inteligentes. Se exploraron herramientas descentralizadas para la innovación digital y la seguridad en entornos distribuidos."
    },
    // Puedes agregar más certificados aquí si subes más imágenes a la carpeta /public/certificados
    // {
    // imagen: "/certificados/certificado_tatu_IA.png",
    // pdf: "/certificados/certificado_tatu_IA.png",
    // nombre: "Certificado Tatu IA",
    // color: "#c084fc"
    // },
  
];