import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa"; // Iconos profesionales integrados
import "./Nosotros.css";

// IMPORTACIÓN DE TU NUEVA IMAGEN LOCAL DE ASSETS
import motorImg from "../assets/fami.png"; // Asegúrate de que el nombre coincida con tu archivo (ej. motor.png, motor.jpg)

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      <Navbar />

      {/* CONTENEDOR PRINCIPAL CON ESPACIADO INTEGRADO PARA EL NAVBAR */}
      <main className="nosotros-main-content">
        
        {/* SECCIÓN PRINCIPAL HERO */}
        <section className="nosotros-hero">
          <div>
             <h1><span class="text-yellow">Quiénes Somos</span></h1>
            <p>
              En EcuaAuto somos una empresa dedicada a ofrecer
              soluciones de movilidad Chevrolet, brindando vehículos
              de calidad, tecnología y respaldo integral para todos nuestros clientes.
            </p>
          </div>
        </section>

        {/* HISTORIA DE LA EMPRESA (DISEÑO ASÍNCRONO) */}
        <section className="historia">
          <div className="historia-imagen">
            {/* INTEGRADO: Ahora renderiza de forma local tu asset real de motores Chevrolet */}
            <img
              src={motorImg}
              alt="Taller y componentes originales EcuaAuto Chevrolet"
            />
          </div>

          <div className="historia-texto">
            <h2>Nuestra historia</h2>
            <p>
              EcuaAuto forma parte del desarrollo automotriz del país,
              brindando soluciones de movilidad Chevrolet con vehículos
              de alta tecnología y un equipo comprometido con nuestros clientes.
            </p>
            <p>
              Nuestro objetivo es ofrecer una experiencia completa,
              desde la compra del vehículo hasta el servicio posventa,
              garantizando total confianza y el respaldo oficial de la marca.
            </p>
          </div>
        </section>

      {/* ==========================================================================
   SECCIÓN NUESTRA EMPRESA CON IMAGEN DE FONDO INMERSIVA
   ========================================================================== */}
<section className="nosotros-info">
  {/* Capa de contraste que protege la lectura de las tarjetas */}
  <div className="nosotros-info-overlay"></div>
  
  <div className="nosotros-info-content">
    <h2>Nuestra empresa</h2>
    
    <div className="nosotros-cards">
      <div className="nosotros-card">
        <h3>Nuestra misión</h3>
        <p>
          Brindar soluciones automotrices Chevrolet con
          excelencia, tecnología y un servicio personalizado
          para nuestros clientes.
        </p>
      </div>

      <div className="nosotros-card">
        <h3>Nuestra visión</h3>
        <p>
          Ser líderes en movilidad ofreciendo experiencias
          innovadoras y confiables dentro del sector automotriz.
        </p>
      </div>

      <div className="nosotros-card">
        <h3>Nuestros valores</h3>
        <p>
          Compromiso, confianza, innovación y calidad
          en cada proceso que realizamos.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* UBICACIÓN Y DATOS (SUTILEZA TIPOGRÁFICA OPTIMIZADA) */}
        <section className="ubicacion">
          <h2>Nuestra ubicación</h2>

          <div className="ubicacion-contenido">
            <div className="mapa">
              <iframe
                title="Ubicación EcuAuto Chevrolet"
                src="https://www.google.com/maps?q=EcuAuto%20Chevrolet%20San%20Rafael%20Quito&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <div className="datos-ubicacion">
              <h3>EcuaAuto Chevrolet</h3>

              {/* CORREGIDO UX/UI: Los emojis fueron eliminados y sustituidos por componentes vectoriales limpios */}
              <div className="dato-contacto-block">
                <p>
                  <FaMapMarkerAlt className="contacto-icono" /> 
                  <strong>Dirección:</strong> San Rafael, Valle de los Chillos. Quito - Ecuador
                </p>
              </div>

              <div className="dato-contacto-block">
                <p>
                  <FaClock className="contacto-icono" /> 
                  <strong>Horarios de atención:</strong>
                  <br />
                  Lunes a Viernes: 08:00 - 18:00
                  <br />
                  Sábados: 09:00 - 14:00
                </p>
              </div>

              <div className="dato-contacto-block">
                <p>
                  <FaPhoneAlt className="contacto-icono" /> 
                  <strong>Contacto:</strong> 099 140 2100
                  <br />
                  <span className="contacto-subtext">Comunícate directo con nuestro equipo Chevrolet</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nosotros;
