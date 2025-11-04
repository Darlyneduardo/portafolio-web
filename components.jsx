import React, { useState } from "react";
import { proyectos, certificados } from "./data.jsx";
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

// Agrega el componente Proyectos correctamente
function Proyectos() {
    const [proyectoExpandido, setProyectoExpandido] = useState(null);

    const toggleProyecto = (id) => {
        setProyectoExpandido(proyectoExpandido === id ? null : id);
    };

    return (
        <section id="proyectos">
            <h2>Proyectos</h2>
            <div className="proyectos-list">
                {proyectos.map(p => (
                    <article key={p.id} className="proyecto-card">
                        <div className="card-image-container">
                            {p.imagen ? (
                                <img
                                    src={p.imagen}
                                    alt={p.titulo}
                                    className="card-image"
                                    style={{width: '180px', height: '180px', borderRadius: '50%'}}
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
                        {/* Enlaces de demo y GitHub */}
                        <div style={{display:'flex', gap:'12px', justifyContent:'center', margin:'12px 0'}}>
                            {p.detalles?.enlaceDemo && p.detalles.enlaceDemo !== '#' && (
                                <a href={p.detalles.enlaceDemo} target="_blank" rel="noopener noreferrer" className="button button-outline">Demo en Vercel</a>
                            )}
                            {p.detalles?.enlaceGithub && p.detalles.enlaceGithub !== '#' && (
                                <a href={p.detalles.enlaceGithub} target="_blank" rel="noopener noreferrer" className="button button-outline">GitHub</a>
                            )}
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
        <div>
            <footer>
                <small>© {new Date().getFullYear()} Darlyn Eduardo Carabali Mera — Todos los derechos reservados.</small>
            </footer>
        </div>
    );
}

function App() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
            <GalaxyBackground projects={proyectos} />
            <Header />
            <main>
                <section id="sobre-mi" style={{margin:'48px auto 32px auto', maxWidth:'540px', background:'rgba(30,20,50,0.97)', color:'#fff', borderRadius:'22px', boxShadow:'0 6px 32px 0 rgba(147,51,234,0.18), 0 2px 16px rgba(0,0,0,0.18)', padding:'36px 36px 28px 36px', border:'2.5px solid #c084fc', fontSize:'1.13rem', backdropFilter:'blur(18px)', textAlign:'center', wordBreak:'break-word', whiteSpace:'pre-line', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center', gap:'18px'}}>
                    <div style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'18px'}}>
                        <span style={{content:'', position:'absolute', top:0, left:0, width:'170px', height:'170px', borderRadius:'50%', border:'5px solid #9333ea', filter:'drop-shadow(0 0 10px #9333ea) drop-shadow(0 0 40px #9333ea)', zIndex:1, background:'transparent', pointerEvents:'none'}}></span>
                        <img src="/img/darlyn.png" alt="Foto de Darlyn Eduardo Carabali Mera" style={{width:'170px', height:'170px', borderRadius:'50%', objectFit:'cover', display:'block', position:'relative', zIndex:2, background:'transparent', pointerEvents:'none', boxShadow:'0 2px 12px #9333ea'}} />
                    </div>
                    <h2 style={{marginBottom:'12px'}}>Sobre mí</h2>
                    <p style={{fontWeight:500, fontSize:'1.08rem', marginBottom:'0'}}>
                        Desarrollador Full Stack especializado en React, Node.js y Python. Apasionado por crear soluciones web modernas, seguras y eficientes.<br/><br/>
                        Experiencia en desarrollo de aplicaciones, integración de APIs, automatización y ciberseguridad básica.<br/><br/>
                        Mi enfoque es convertir ideas en productos digitales funcionales y escalables, con comunicación clara y resultados medibles.
                    </p>
                </section>
                <section id="experiencia" style={{margin:'24px auto 32px auto', maxWidth:'540px', background:'rgba(30,20,50,0.97)', color:'#fff', borderRadius:'22px', boxShadow:'0 4px 24px 0 rgba(147,51,234,0.13), 0 2px 12px rgba(0,0,0,0.13)', padding:'32px 36px 24px 36px', border:'2px solid #9333ea', fontSize:'1.08rem', backdropFilter:'blur(14px)', textAlign:'left', zIndex:10}}>
                    <h2 style={{textAlign:'center', marginBottom:'18px'}}>Experiencia</h2>
                    <div style={{display:'flex', flexDirection:'column', gap:'18px'}}>
                        <div>
                            <h3 style={{margin:'0 0 6px 0', fontSize:'1.07rem', color:'#c084fc'}}>Desarrollador Full Stack</h3>
                            <span style={{fontWeight:600}}>Freelance / Proyectos personales</span>
                            <ul style={{margin:'8px 0 0 18px', padding:0, fontSize:'1rem'}}>
                                <li>Desarrollo de portafolios, dashboards y sistemas web con React, Node.js y Python.</li>
                                <li>Integración de APIs, automatización de procesos y despliegue en Vercel y Azure.</li>
                                <li>Implementación de buenas prácticas de seguridad y optimización de rendimiento.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{margin:'0 0 6px 0', fontSize:'1.07rem', color:'#c084fc'}}>Soporte Técnico y Automatización</h3>
                            <span style={{fontWeight:600}}>Tecnocolor (2023-2024)</span>
                            <ul style={{margin:'8px 0 0 18px', padding:0, fontSize:'1rem'}}>
                                <li>Automatización de tareas administrativas con Python y JavaScript.</li>
                                <li>Soporte en migración de datos y mantenimiento de sistemas internos.</li>
                                <li>Capacitación básica en ciberseguridad para usuarios finales.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="hoja-de-vida" style={{margin:'32px auto', textAlign:'center'}}>
                    <h2>Hoja de Vida</h2>
                    <a href="/eduardo-c-wb-full.pdf" target="_blank" rel="noopener noreferrer" className="button button-primary" style={{display:'inline-block',padding:'16px 32px',fontWeight:600,fontSize:'1.1rem',borderRadius:12,background:'linear-gradient(90deg,#9333ea 0%,#c084fc 100%)',color:'#fff',margin:'18px 0'}}>Descargar Hoja de Vida (PDF)</a>
                    <iframe src="/eduardo-c-wb-full.pdf" style={{width:'100%',maxWidth:'700px',height:'600px',border:'2px solid #9333ea',borderRadius:'12px',margin:'24px auto',background:'#fff'}} title="Hoja de Vida PDF" />
                </section>
                <section id="habilidades" style={{margin:'32px auto', maxWidth:'540px', background:'rgba(30,20,50,0.97)', color:'#fff', borderRadius:'22px', boxShadow:'0 4px 24px 0 rgba(147,51,234,0.13), 0 2px 12px rgba(0,0,0,0.13)', padding:'32px 36px 24px 36px', border:'2px solid #9333ea', fontSize:'1.08rem', backdropFilter:'blur(14px)', textAlign:'center', zIndex:10}}>
                    <h2 style={{marginBottom:'18px'}}>Habilidades</h2>
                    <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexWrap:'wrap', gap:'12px', justifyContent:'center'}}>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>React</li>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>Node.js</li>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>Python</li>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>JavaScript</li>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>HTML & CSS</li>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>Automatización</li>
                        <li style={{background:'#9333ea22', borderRadius:'8px', padding:'8px 18px', color:'#c084fc', fontWeight:600}}>APIs REST</li>
                    </ul>
                </section>
                <Proyectos />
                <section id="certificados" style={{margin:'40px auto 32px auto', maxWidth:'900px', background:'rgba(30,20,50,0.97)', color:'#fff', borderRadius:'22px', boxShadow:'0 4px 24px 0 rgba(147,51,234,0.13), 0 2px 12px rgba(0,0,0,0.13)', padding:'32px 36px 24px 36px', border:'2px solid #9333ea', fontSize:'1.08rem', backdropFilter:'blur(14px)', textAlign:'center', zIndex:10}}>
                    <h2 style={{marginBottom:'18px'}}>Certificados</h2>
                    <div style={{display:'flex', flexWrap:'wrap', gap:'32px', justifyContent:'center'}}>
                        {certificados.map(cert => (
                            <div key={cert.nombre} style={{background:'#1e1432', borderRadius:'16px', boxShadow:'0 2px 12px #9333ea22', border:`2px solid ${cert.color}`, maxWidth:'320px', width:'100%', padding:'18px 18px 12px 18px', textAlign:'left', display:'flex', flexDirection:'column', alignItems:'center', gap:'10px'}}>
                                <img src={cert.imagen} alt={cert.nombre} style={{width:'100%', maxWidth:'220px', borderRadius:'12px', marginBottom:'8px', boxShadow:'0 2px 12px #9333ea44'}} />
                                <h3 style={{color:cert.color, fontWeight:700, fontSize:'1.08rem', margin:'0 0 6px 0', textAlign:'center'}}>{cert.nombre}</h3>
                                <span style={{fontSize:'0.98rem', color:'#c084fc', fontWeight:600, marginBottom:'6px', textAlign:'center'}}>{cert.fecha}</span>
                                <p style={{fontSize:'0.97rem', color:'#fff', margin:'0 0 8px 0', textAlign:'center'}}>{cert.descripcion}</p>
                                <a href={cert.pdf} target="_blank" rel="noopener noreferrer" style={{color:cert.color, fontWeight:600, textDecoration:'underline', fontSize:'0.98rem'}}>Ver certificado</a>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="contacto" style={{margin:'40px auto 32px auto', maxWidth:'540px', background:'rgba(30,20,50,0.97)', color:'#fff', borderRadius:'22px', boxShadow:'0 4px 24px 0 rgba(147,51,234,0.13), 0 2px 12px rgba(0,0,0,0.13)', padding:'32px 36px 24px 36px', border:'2px solid #9333ea', fontSize:'1.08rem', backdropFilter:'blur(14px)', textAlign:'center', zIndex:10}}>
                    <h2 style={{marginBottom:'18px'}}>Contacto</h2>
                    <div style={{display:'flex', flexDirection:'column', gap:'16px', alignItems:'center'}}>
                        <div style={{fontWeight:600, fontSize:'1.07rem'}}>
                            <span style={{marginRight:'8px', fontSize:'1.3rem'}}>📧</span>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrsqqRMMPdpfWCdhjhpXKwMwHWzSwZgvqQhkczmqDKtkLNdQhSVTwbvJWvlNTPCBSQZnB" target="_blank" rel="noopener noreferrer" style={{color:'#c084fc', textDecoration:'none'}}>darlyneduardo@gmail.com</a>
                        </div>
                        <div style={{fontWeight:600, fontSize:'1.07rem'}}>
                            <span style={{marginRight:'8px', fontSize:'1.3rem'}}></span>
                            <a href="https://wa.me/573026058034" target="_blank" rel="noopener noreferrer" style={{color:'#c084fc', textDecoration:'none'}}>WhatsApp: 3026058034</a>
                        </div>
                        <div style={{display:'flex', gap:'18px', marginTop:'10px'}}>
                            <a href="https://github.com/Darlyneduardo" target="_blank" rel="noopener noreferrer" title="GitHub" style={{color:'#fff', fontSize:'1.7rem'}}><span role="img" aria-label="GitHub">🐙</span></a>
                            <a href="https://www.linkedin.com/in/darlyn-eduardo-carabali-mera-a301b9211/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{color:'#0e76a8', fontSize:'1.7rem'}}><span role="img" aria-label="LinkedIn">💼</span></a>
                            <a href="https://www.freelancer.com/u/darlyneduardo" target="_blank" rel="noopener noreferrer" title="Freelancer" style={{color:'#29b2fe', fontSize:'1.7rem'}}><span role="img" aria-label="Freelancer">🧑‍💻</span></a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
