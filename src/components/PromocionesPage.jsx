import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormularioCotizar from "../components/FormularioCotizar";
import "./PromocionesPage.css";

// IMPORTACIÓN DE IMÁGENES DEL CARRUSEL
import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";

// Importaciones de los vehículos
import dmaxImg from "../assets/dmax.png";
import grooveImg from "../assets/groove.png";
import sparkImg from "../assets/sparkEUV.png";
import trackerImg from "../assets/tracker.png"; 

const PromocionesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [vehiculoACotizar, setVehiculoACotizar] = useState(null);
  
  // LÓGICA DEL CARRUSEL DE PROMOCIONES
  const imagenesCarrusel = [promo1, promo2];
  const [slideActivo, setSlideActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActivo((prev) => (prev === imagenesCarrusel.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia automáticamente cada 5 segundos
    return () => clearInterval(intervalo);
  }, [imagenesCarrusel.length]);

  const slideSiguiente = () => {
    setSlideActivo(slideActivo === imagenesCarrusel.length - 1 ? 0 : slideActivo + 1);
  };

  const slideAnterior = () => {
    setSlideActivo(slideActivo === 0 ? imagenesCarrusel.length - 1 : slideActivo - 1);
  };

  const ofertasVehiculos = [
    { id: 1, nombre: "Chevrolet D-Max", imagen: dmaxImg, oferta: "Entrada desde $3.299*", tags: ["Camionetas Chevrolet", "D-MAX"] },
    { id: 2, nombre: "Chevrolet Groove", imagen: grooveImg, oferta: "Bono hasta $2.000*", tags: ["SUV Chevrolet", "Groove"] },
    { id: 3, nombre: "Chevrolet Spark EUV", imagen: sparkImg, oferta: "Bono de $1.000*", tags: ["Eléctricos Chevrolet", "Spark EUV"] },
    { id: 4, nombre: "Chevrolet Tracker Turbo", imagen: trackerImg, oferta: "Seguro Gratis por 1 Año*", tags: ["SUV Turbo", "Tracker"] }
  ];

  return (
    <div>
      <Navbar />
      
      {/* SE ELIMINÓ EL MARGEN DE MAIN PARA QUE EL CARRUSEL PEGUE DIRECTAMENTE ABAJO DEL NAVBAR */}
      <main className="promociones-page-container">
        
        {/* ==========================================
           CARRUSEL DE PROMOCIONES DE ALTO IMPACTO (UI AUTOMOTRIZ)
           ========================================== */}
        <section className="promo-carrusel-section">
          <button className="carrusel-control prev" onClick={slideAnterior} aria-label="Anterior promoción">
            ❮
          </button>
          
          <div className="carrusel-slide">
            <img src={imagenesCarrusel[slideActivo]} alt={`Promoción exclusiva EcuaAuto ${slideActivo + 1}`} />
          </div>

          <button className="carrusel-control next" onClick={slideSiguiente} aria-label="Siguiente promoción">
            ❯
          </button>

          {/* Indicadores inferiores (Dots) */}
          <div className="carrusel-dots">
            {imagenesCarrusel.map((_, index) => (
              <span 
                key={index} 
                className={`carrusel-dot ${slideActivo === index ? "activo" : ""}`}
                onClick={() => setSlideActivo(index)}
              ></span>
            ))}
          </div>
        </section>

        {/* CONTENEDOR DEL ENCABEZADO Y LA REJILLA */}
        <div className="promociones-content-wrapper">
          <div className="promociones-header">
            <h1>OFERTA DE VEHÍCULOS</h1>
            <p>Aproveche los bonos exclusivos, financiamientos especiales y beneficios únicos de este mes en EcuaAuto.</p>
          </div>

          <div className="promociones-grid">
            {ofertasVehiculos.map((auto) => (
              <div className="promo-card" key={auto.id}>
                <div className="promo-card-header">
                  <h3>{auto.nombre}</h3>
                </div>
                <div className="promo-card-media">
                  <img src={auto.imagen} alt={auto.nombre} />
                </div>
                <div className="promo-card-body">
                  <h4>{auto.oferta}</h4>
                  <div className="promo-card-tags">
                    {auto.tags.map((tag, idx) => (
                      <span key={idx} className={`promo-tag ${idx === 1 ? 'model-tag' : ''}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn-cotiza-ya" onClick={() => setVehiculoACotizar(auto)}>
                    Cotiza ya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {vehiculoACotizar && (
          <FormularioCotizar 
            vehiculo={vehiculoACotizar} 
            cerrar={() => setVehiculoACotizar(null)} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PromocionesPage;
