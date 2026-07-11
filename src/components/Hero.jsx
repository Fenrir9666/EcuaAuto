import React from 'react';
import './Hero.css'; 
// Importación con el nombre exacto de tu archivo y la ruta correcta hacia assets
import videoChevrolet from '../assets/chevro.mp4'; 

const Hero = () => {
  return (
    <header className="hero-container">
      {/* El video se renderizará automáticamente gracias a este tag */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={videoChevrolet} type="video/mp4" />
        Tu navegador no soporta videos de fondo.
      </video>

      <div className="hero-overlay"></div>
      
      {/* Contenedor principal con rol de sección */}
      <div className="hero-content" role="region" aria-label="Introducción principal">
        <span className="hero-tag">Chevrolet</span>
        <h1 className="hero-title">
          El corazón de América
        </h1>
        <button className="hero-btn" aria-label="Descubrir más sobre Chevrolet">
          Descubrir Más
        </button>
      </div>
    </header>
  );
};

export default Hero;
