import React, { useState, useEffect } from "react";
import { proyectos, habilidades, certificados } from "./data.jsx";


function Header() {
    return (
        <header>
            <h1 className="brand">Darlyn Eduardo Carabali Mera</h1>
            <nav>
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#experiencia">Experiencia</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </header>
    );
}

function Main() {
    const [certificadoActual, setCertificadoActual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCertificadoActual((prev) => (prev + 1) % certificados.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="main">
            <section id="hero" className="section hero">
                <img 
                    src="./img/darlyn.png" 
                    alt="Foto de Darlyn Eduardo Carabali Mera" 
                    className="profile-image"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
                <h2>Desarrollador Web</h2>
                <p>Construyo aplicaciones modernas, veloces y accesibles.</p>
                <a href="#proyectos" className="button button-hero button-pulse">Ver proyectos</a>
            </section>

            <div className="section-divider"></div>

            <section id="sobre-mi" className="section">
                <div className="sobre-mi-container">
                    <h2>Sobre mí</h2>
                    <p>
                        Soy Darlyn Eduardo Carabalí Mera, Técnico en Sistemas y Desarrollador Web Full Stack Junior, con más de 2 años de experiencia como freelance creando páginas y sistemas personalizados para negocios y emprendimientos.
                        Me apasiona el desarrollo web integral —desde el diseño de interfaces hasta la programación del backend— y disfruto construir soluciones tecnológicas funcionales, seguras y adaptadas a las necesidades del usuario.
                        Además, cuento con conocimientos en redes, mantenimiento de equipos, gestión de inventarios y atención al cliente, lo que me permite tener una visión completa del entorno tecnológico.
                        Mi meta es seguir creciendo profesionalmente en el desarrollo de software y contribuir con proyectos innovadores que integren tecnología y sostenibilidad.
                    </p>
                </div>

                <div className="certificados-section">
                    <h3>Certificaciones</h3>
                    <div className="certificados-carousel">
                        <div className="carousel-container">
                            {certificados.map((cert, index) => (
                                <div 
                                    key={index}
                                    className={`certificado-slide ${index === certificadoActual ? 'active' : ''}`}
                                    style={{backgroundImage: `url(${cert.imagen})`}}
                                    title={cert.nombre}
                                />
                            ))}
                        </div>
                        <div className="carousel-dots">
                            {certificados.map((cert, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === certificadoActual ? 'active' : ''}`}
                                    onClick={() => setCertificadoActual(index)}
                                    title={cert.nombre}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            <div className="section-divider"></div>

            <ProyectosSection />

            <div className="section-divider"></div>

            <section id="habilidades" className="section">
                <h2>Habilidades</h2>
                <ul className="list-inline">
                    {habilidades.map(h => <li key={h} className="tag">{h}</li>)}
                </ul>
            </section>

            <div className="section-divider"></div>

            <section id="experiencia" className="section">
                <h2>Experiencia</h2>
                <ul className="experience-list">
                    <li><strong>Tecnocolor</strong> — Desarrollador Web/Software (2022–2024): Desarrollo de un sistema integral para la gestión de ventas y servicios técnicos con tienda en línea.</li>
                    <li><strong>Desarrollador Web Full Stack</strong> — Freelance (2020–2022): Desarrollador web independiente especializado en soluciones integrales, con experiencia en proyectos colaborativos y desarrollo autónomo. Responsable del ciclo completo de desarrollo desde el análisis de requerimientos hasta la implementación final, cubriendo tanto frontend como backend. He trabajado bajo modalidades de contrato por obra, labor y freelance, adaptándome a las necesidades específicas de cada cliente y proyecto.</li>
                </ul>
            </section>

            <div className="section-divider"></div>

            <section id="contacto" className="section contact">
                <h2>Contacto</h2>
                <p>
                    Escríbeme a <a href="mailto:Darlyn2050@gmail.com">Darlyn2050@gmail.com</a> o Escríbeme al <a href="https://wa.me/573135632050" target="_blank" rel="noreferrer">WhatsApp</a>.
                </p>
            </section>
        </main>
    );
}


function ProyectosSection() {
    const [proyectoExpandido, setProyectoExpandido] = useState(null);

    const toggleProyecto = (id) => {
        setProyectoExpandido(proyectoExpandido === id ? null : id);
    };

    return (
        <section id="proyectos" className="section">
            <h2>Proyectos</h2>
            <div className="grid">
                {proyectos.map(p => (
                    <article key={p.id} className={`card ${proyectoExpandido === p.id ? 'expanded' : ''}`}>
                        {p.imagen ? (
                            <img 
                                src={`./img/${p.imagen}`} 
                                alt={p.alt} 
                                className="card-image"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div className="card-image-placeholder" style={{display: p.imagen ? 'none' : 'flex'}}>
                            {p.titulo.charAt(0)}
                        </div>
                        
                        <h3>{p.titulo}</h3>
                        <p>{p.descripcion}</p>
                        
                        <div className="tags">
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
                ))}
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
                <a href="mailto:Darlyn2050@gmail.com">Email</a>
                <a href="https://wa.me/573135632050" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
        </footer>
    );
}


function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
