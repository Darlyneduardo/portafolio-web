import React, { useState, useEffect } from "react";
import { proyectos, habilidades, certificados } from "./data.jsx";
import GalaxyBackground from "./GalaxyBackground.jsx";


function Header() {
    // Scroll suave a la sección correspondiente
    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <header>
            <h1 className="brand">Darlyn Eduardo Carabali Mera</h1>
            <nav>
                <a href="#sobre-mi" onClick={e => handleNavClick(e, 'sobre-mi')}>Sobre mí</a>
                <a href="#hoja-de-vida" onClick={e => handleNavClick(e, 'hoja-de-vida')}>Hoja de Vida</a>
                <a href="#proyectos" onClick={e => handleNavClick(e, 'proyectos')}>Proyectos</a>
                <a href="#habilidades" onClick={e => handleNavClick(e, 'habilidades')}>Habilidades</a>
                <a href="#experiencia" onClick={e => handleNavClick(e, 'experiencia')}>Experiencia</a>
                <a href="#contacto" onClick={e => handleNavClick(e, 'contacto')}>Contacto</a>
            </nav>
        </header>
    );
}

function Main({ hoveredProject }) {


    return (
        <main className="main" style={{ minHeight: '100vh', width: '100vw', position: 'relative', zIndex: 2 }}>
            <section id="hero" className="section hero" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="profile-hover-group" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <span style={{
                        content: "", position: 'absolute', top: 0, left: 0, width: '330px', height: '390px', borderRadius: '50%', border: '7px solid #9333ea', filter: 'drop-shadow(0 0 10px #9333ea) drop-shadow(0 0 40px #9333ea)', zIndex: 1, background: 'transparent', pointerEvents: 'none'
                    }}></span>
                    <img 
                        src="/img/darlyn.png" 
                        alt="Foto de Darlyn Eduardo Carabali Mera" 
                        className="profile-image"
                        style={{ width: '330px', height: '390px', borderRadius: '50%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 2, background: 'transparent', pointerEvents: 'none' }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
                <h2>Desarrollador Web</h2>
                <p>Construyo aplicaciones modernas, veloces y accesibles.</p>
                <a href="#proyectos" className="button button-hero button-pulse">Ver proyectos</a>
            </section>

            <section id="sobre-mi" className="sobre-mi-panel" style={{
                margin: '40px auto 0 auto',
                background: 'rgba(30, 20, 50, 0.97)',
                color: '#fff',
                borderRadius: 22,
                boxShadow: '0 6px 32px 0 rgba(147, 51, 234, 0.18), 0 2px 16px rgba(0,0,0,0.18)',
                padding: '36px 36px 28px 36px',
                maxWidth: 540,
                minWidth: 320,
                border: '2.5px solid #c084fc',
                fontSize: '1.13rem',
                backdropFilter: 'blur(18px)',
                boxSizing: 'border-box',
                textAlign: 'left',
                wordBreak: 'break-word',
                whiteSpace: 'pre-line',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12
            }}>
                <h2>Sobre mí</h2>
                <p>
                    Soy desarrollador Full Stack con experiencia en la creación de aplicaciones web y software
                    personalizado utilizando React, Python, PostgreSQL y APIs REST. Me apasiona construir soluciones
                    tecnológicas modernas, eficientes y seguras. Cuento con conocimientos en redes, bases de datos y
                    mantenimiento de sistemas, lo que me permite abordar proyectos de forma integral. Y convertir los
                    requerimientos del cliente en código escalable y funcional.
                </p>
            </section>

            <section id="hoja-de-vida" className="section" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
                <h2>Hoja de Vida</h2>
                     <a href="/hoja-de-vida/eduardo-c-wb-full.pdf" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block',
                    padding: '16px 32px',
                    background: 'linear-gradient(90deg, #9333ea 0%, #c084fc 100%)',
                    color: '#fff',
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    marginTop: 16,
                    boxShadow: '0 2px 12px rgba(147, 51, 234, 0.18)'
                    }}>
                    Abrir Hoja de Vida (PDF)
                    </a>
            </section>

            <div className="section-divider"></div>

            <div className="certificados-section" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>Certificaciones</h3>
                <div className="certificados-carousel">
                    <div className="carousel-container" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        gap: '48px',
                        minHeight: '220px',
                        width: '100vw',
                    }}>
                        {certificados.map((cert, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}} className="certificado-hover-group">
                                <div
                                    className="certificado-slide active certificado-img-wrapper"
                                    style={{
                                        '--clr': cert.color || '#9333ea',
                                        margin: '0 0 10px 0',
                                        zIndex: 1
                                    }}
                                    title={cert.nombre}
                                >
                                    <img
                                        src={cert.imagen}
                                        alt={cert.nombre}
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            position: 'relative',
                                            zIndex: 2
                                        }}
                                    />
                                    <div className="certificado-info-hover">
                                        <strong style={{fontSize: '1.1em'}}>{cert.nombre}</strong>
                                        <div style={{fontSize: '0.95em', margin: '4px 0', color: '#c084fc'}}>{cert.fecha}</div>
                                        <div style={{fontSize: '0.95em', color: '#fff', whiteSpace: 'pre-line'}}>{cert.descripcion}</div>
                                    </div>
                                </div>
                                <span style={{marginTop: '10px', color: '#fff', fontWeight: 500, textAlign: 'center', maxWidth: 200}}>{cert.nombre}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-divider"></div>

            <ProyectosSection hoveredProject={hoveredProject} />

            <div className="section-divider"></div>

            <section id="habilidades" className="section" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Habilidades</h2>
                <ul className="list-inline">
                    {habilidades.map(h => <li key={h} className="tag">{h}</li>)}
                </ul>
            </section>

            <div className="section-divider"></div>

            <section id="experiencia" className="section" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Experiencia</h2>
                <ul className="experience-list">
                    <li>
                        <strong>Tecnocolor</strong> — Desarrollador Web/Software (2022–2024):<br/>
                        <ul>
                            <li>Desarrollo e implementación de un sistema integral para la gestión de ventas, inventarios y servicios técnicos, incluyendo tienda en línea y panel administrativo.</li>
                            <li>Automatización de procesos internos, generación de reportes y control de inventario en tiempo real.</li>
                            <li>Integración de pasarelas de pago, notificaciones y soporte técnico a usuarios.</li>
                            <li>Tecnologías: React, Node.js, Express, PostgreSQL, Python.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Desarrollador Web Full Stack</strong> — Freelance (2020–2022):<br/>
                        <ul>
                            <li>Diseño y desarrollo de sitios web, sistemas de reservas, plataformas de inventario y soluciones personalizadas para clientes de diversos sectores.</li>
                            <li>Gestión completa del ciclo de vida del software: análisis, arquitectura, desarrollo frontend y backend, pruebas y despliegue.</li>
                            <li>Colaboración en proyectos multidisciplinarios, adaptabilidad a requerimientos cambiantes y entrega de productos funcionales y escalables.</li>
                            <li>Tecnologías: React, JavaScript, Node.js, Python, PostgreSQL, HTML5, CSS3.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <div className="section-divider"></div>

            <section id="contacto" className="section contact" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Contacto</h2>
                <p>
                    Escríbeme a <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Darlyn2050@gmail.com</a> o Escríbeme al <a href="https://wa.me/573026058034" target="_blank" rel="noreferrer">WhatsApp</a>.
                </p>
            </section>
        </main>
    );
}


function ProyectosSection({ hoveredProject }) {
    const [proyectoExpandido, setProyectoExpandido] = useState(null);

    const toggleProyecto = (id) => {
        setProyectoExpandido(proyectoExpandido === id ? null : id);
    };

    // Si hay hoveredProject, buscar el proyecto real
    const hovered = hoveredProject ? proyectos.find(p => p.titulo === hoveredProject.name) : null;

    return (
        <section id="proyectos" className="section">
            <h2>Proyectos</h2>
            <div className="grid">
                {proyectos.map(p => {
                    const isHovered = hovered && hovered.id === p.id;
                    return (
                        <article key={p.id} className={`card ${proyectoExpandido === p.id ? 'expanded' : ''} ${isHovered ? 'hovered' : ''}`} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            boxShadow: isHovered ? '0 0 24px 0 #c084fc' : undefined,
                            transform: isHovered ? 'scale(1.04) translateY(-6px)' : undefined,
                            zIndex: isHovered ? 2 : 1,
                            transition: 'all 0.3s cubic-bezier(.4,2,.3,1)'
                        }}>
                            <div className="proyecto-img-effect" style={{
                                position: 'relative',
                                width: '200px',
                                height: '200px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '18px',
                            }}>
                                <span style={{
                                    content: "", position: 'absolute', top: 0, left: 0, width: '200px', height: '200px', borderRadius: '50%', border: '7px solid #9333ea', filter: 'drop-shadow(0 0 10px #9333ea) drop-shadow(0 0 40px #9333ea)', zIndex: 0, background: 'transparent'
                                }}></span>
                                {p.imagen ? (
                                    <img 
                                        src={`/${p.imagen}`} 
                                        alt={p.alt} 
                                        className="card-image"
                                        style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 1, background: 'transparent' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="card-image-placeholder" style={{width: '180px', height: '180px', borderRadius: '50%', background: 'transparent', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', position: 'relative', zIndex: 1}}>
                                        {p.titulo.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <h3 style={{textAlign: 'center', margin: '0 0 8px 0'}}>{p.titulo}</h3>
                            <p style={{textAlign: 'center'}}>{p.descripcion}</p>
                            <div className="tags" style={{justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
                                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>
                            {/* Información expandida */}
                            {proyectoExpandido === p.id && (
                                <div className="proyecto-detalles">
                                    <div className="detalle-seccion">
                                        <h4>Descripción completa</h4>
                                        <p>{p.detalles.descripcionCompleta}</p>
                                    </div>
                                    <div className="detalle-seccion">
                                        <h4>Características principales</h4>
                                        <ul className="caracteristicas-list">
                                            {p.detalles.caracteristicas.map((car, index) => (
                                                <li key={index}>{car}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="detalle-seccion">
                                        <h4>Tecnologías utilizadas</h4>
                                        <div className="tags">
                                            {p.detalles.tecnologias.map(tech => (
                                                <span key={tech} className="tag tag-tech">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button 
                                onClick={() => toggleProyecto(p.id)} 
                                className="button button-toggle"
                            >
                                {proyectoExpandido === p.id ? '▲ Ver menos' : '▼ Ver más'}
                            </button>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}


function Footer() {
    return (
        <footer>
            <small>© {new Date().getFullYear()} Darlyn Eduardo Carabali Mera — Todos los derechos reservados.</small>
            <div className="footer-links">
                <a href="https://github.com/Darlyneduardo" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Email</a>
                <a href="https://wa.me/573026058034" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
        </footer>
    );
}


function App() {
    const [hoveredProject, setHoveredProject] = useState(null);
    useEffect(() => {
        const grid = document.querySelector('.grid');
        if (!grid) return;
        if (hoveredProject) {
            grid.style.transform = 'scale(1.04) rotateY(2deg)';
            grid.style.transition = 'transform 0.4s cubic-bezier(.4,2,.3,1)';
        } else {
            grid.style.transform = '';
        }
    }, [hoveredProject]);
    return (
        <>
            <GalaxyBackground
                projects={proyectos.map(p => ({
                    name: p.titulo,
                    description: p.descripcion,
                    color: '#c084fc',
                }))}
                onProjectHover={setHoveredProject}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Header />
                <Main hoveredProject={hoveredProject} />
                <Footer />
            </div>
        </>
    );
}

export default App;
