import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import videoCodigo from "../assets/codigo.mp4";
// 📸 IMPORTACIÓN DE TUS RECURSOS REALES
import fotoIntegrante1 from "../assets/David.png"; 
// import fotoIntegrante2 from "../assets/Companero.png"; // 🔧 Descomenta e importa la de tu compañero cuando la tengas
import "./EquipoPage.css";

const EquipoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const desarrolladores = [
    {
      nombre: "Alex David Vilatuña Tipan", 
      rol: "Desarrollador Web",
      imagen: fotoIntegrante1, // ✅ Vinculado directamente a tu foto David.png
      desc: "Responsable del frontend y backend",
      techs: ["React.js", "Vite", "CSS3 Vanilla", "React Router"],
      github: "https://github.com/Fenrir9666", 
      linkedin: "#" 
    },
    {
      nombre: "Nombre de tu Compañero", // 🔧 Cambia por el nombre real de tu compañero
      rol: "Full-Stack Engineer",
      imagen: "https://placeholder.com", // 🔧 Cambia por fotoIntegrante2 cuando la importes arriba
      desc: "Encargado de la lógica de estados globales, estructuración del catálogo de datos centralizado y la modularización de componentes reutilizables.",
      techs: ["React.js", "JavaScript ES6+", "Git & GitHub", "UI/UX Design"],
      github: "https://github.com", // 🔧 Cambia por el GitHub de tu compañero
      linkedin: "#" 
    }
  ];

  return (
    <div className="equipo-page">
      <link href="https://googleapis.com" rel="stylesheet" />
      <Navbar />
      
      <main className="equipo-page-wrapper">
        <section className="equipo-hero-banner-video">
          <video className="equipo-video-bg" autoPlay loop muted playsInline>
            <source src={videoCodigo} type="video/mp4" />
          </video>
          <div className="equipo-video-overlay"></div>
          <div className="equipo-hero-content">
            <h1 className="texto-matriz-digital">EQUIPO DE DESARROLLO</h1>
            <p className="subtexto-matriz-digital">Creadores de la plataforma digital EcuaAuto Chevrolet</p>
          </div>
        </section>

        {/* CONTENEDOR DE TARJETAS CYBERTECH */}
        <section className="equipo-container">
          <div className="equipo-grid">
            {desarrolladores.map((dev, i) => (
              <div className="equipo-card-tech" key={i}>
                {/* Contenedor circular para la foto con resplandor neón */}
                <div className="avatar-foto-wrapper">
                  <img src={dev.imagen} alt={dev.nombre} className="avatar-foto-img" />
                </div>
                
                <h2 className="dev-nombre-tech">{dev.nombre}</h2>
                <span className="equipo-rol-tech">{dev.rol}</span>
                
                <p className="dev-desc-tech">{dev.desc}</p>
                
                <div className="tecnologias-tags-tech">
                  {dev.techs.map((tech) => (
                    <span key={tech} className="tech-tag-digital">{tech}</span>
                  ))}
                </div>
                
                <div className="equipo-social-tech">
                  <a href={dev.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EquipoPage;
