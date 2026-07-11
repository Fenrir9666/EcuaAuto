import React from "react";
import { useNavigate } from "react-router-dom"; // 🚀 1. Importa el hook de navegación
import videoHero from "../assets/chevro.mp4";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate(); // 🚀 2. Inicializa la función de redirección

  return (
    <section className="hero-container" role="region" aria-label="Introducción principal">
      {/* Video de fondo */}
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source src={videoHero} type="video/mp4" />
        Tu navegador no soporta videos integrados.
      </video>

      {/* Capa de degradado oscuro */}
      <div className="hero-overlay"></div>

      {/* Contenido textual del Banner */}
      <div className="hero-content">
        <span className="hero-tag">CHEVROLET</span>
        <h1 className="hero-title">El corazón de América</h1>
        
       {/* 🛠️ Modifica únicamente la línea del botón en tu Hero.jsx: */}
<button 
  className="hero-btn"
  onClick={() => navigate("/nosotros")} 
  aria-label="Conocer más acerca de nuestra historia y concesionario"
>
  Descubrir Más
</button>

      </div>
    </section>
  );
};

export default Hero;
