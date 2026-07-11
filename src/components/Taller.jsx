import React from "react";
import { useNavigate } from "react-router-dom"; // Hook de navegación integrado
import "./Taller.css"; 
import miImagen from "../assets/taller.png"; 

const Taller = () => {
  const navigate = useNavigate(); // Inicializamos el disparador de rutas

  return (
    <section id="taller" className="taller-section">
      <div
        className="taller-image"
        style={{
          backgroundImage: `url(${miImagen})`,
        }}
      ></div>

      <div className="taller-content">
        <h2>¡Conoce nuestro taller!</h2>
        <p>
          En nuestro taller especializado contamos con técnicos
          certificados, equipos de diagnóstico de última generación y
          repuestos originales Chevrolet para mantener tu vehículo en las
          mejores condiciones.
        </p>
        <p>
          Realizamos mantenimientos preventivos y correctivos para brindarte
          seguridad, confianza y el mejor rendimiento en cada viaje.
        </p>
        
        {/* INTERACCIÓN UX: Ahora redirige dinámicamente a la ruta de servicios */}
        <button
          className="taller-btn"
          onClick={() => navigate("/servicios")}
          aria-label="Agendar una cita con un técnico de servicio"
        >
          Agendar Cita
        </button>
      </div>
    </section>
  );
};

export default Taller;
