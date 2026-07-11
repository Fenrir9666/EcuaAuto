import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServiciosPage.css";

const ServiciosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    anoModelo: "",
    modelo: "",
    kilometros: "",
    placa: "",
    servicioSeleccionado: ""
  });

  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Datos del agendamiento recolectados:", formData);
    setEnviado(true);
  };

  // Resolución dinámica de URLs para evitar que Vite rompa la compilación
  const bannerImgUrl = new URL('../assets/servicios.png', import.meta.url).href;
  const videoUrl = new URL('../assets/servicios.mp4', import.meta.url).href;

  return (
    <div>
      <Navbar />
      
      <main className="servicios-page-wrapper">
        
        {/* HERO VISUAL BANNER (Usa servicios.png de tus assets) */}
        <section 
          className="servicios-hero-banner"
          style={{ backgroundImage: `url(${bannerImgUrl})` }}
        >
          <div className="servicios-hero-overlay"></div>
          <div className="servicios-hero-content">
            <h1>AGENDAMIENTO ONLINE<br />DE SERVICIOS CHEVROLET</h1>
            <p>¡Nuestros talleres están siempre listos para tu auto!</p>
          </div>
        </section>

  

    {/* ==========================================================================
   SECCIÓN DE VIDEO ASÍNCRONA - DISEÑO DIVIDIDO (VIDEO IZQ / TEXTO DER)
   ========================================================================== */}
<section className="servicios-split-section">
  
  {/* Bloque Izquierdo: Video Cinematográfico de Fondo */}
  <div className="split-video-side">
    <video 
      className="split-video-player" 
      autoPlay 
      loop 
      muted 
      playsInline
      preload="auto"
    >
      <source src={videoUrl} type="video/mp4" />
      Tu navegador no soporta videos de fondo.
    </video>
    {/* Capa de contraste sutil para suavizar el reflejo del video */}
    <div className="split-video-overlay"></div>
  </div>

  {/* Bloque Derecho: Contenido Informativo Limpio */}
  <div className="split-text-side">
    <span className="split-tag">Servicio Posventa</span>
    <h2>Tu Chevrolet en Manos de Expertos</h2>
    <p>
      Descubre por qué nuestro servicio posventa certificado es la mejor opción para resguardar tu inversión, garantizar el óptimo rendimiento de tu vehículo y respaldar tu seguridad en cada viaje.
    </p>
    <p className="split-subtext">
      Contamos con técnicos altamente calificados y herramientas de diagnóstico de última generación respaldadas directamente por la fábrica.
    </p>
  </div>

</section>

{/* ==========================================================================
   BARRA INFORMATIVA OPTIMIZADA (TEXTO A LA DERECHA - IMAGEN VISIBLE)
   ========================================================================== */}
<section className="servicios-intro-brandbar">
  <div className="brandbar-overlay"></div>
  
  <div className="brandbar-content">
    <h2>
      ¡AGENDÁ TU SERVICIO CON <span className="text-yellow">ECUAAUTO</span>!
    </h2>
    <p>
      Desde revisiones, Cambio de aceite y filtros, alineación y balanceo, 
      hasta el cambio de llantas, correas, embrague, amortiguadores o 
      <span className="text-yellow"> higienización de la cabina</span>, Y MUCHÓ MÁS.
    </p>
  </div>
</section>





        {/* CONTENEDOR DEL FORMULARIO INTERACTIVO */}
        <div className="servicios-form-container">
          {enviado ? (
            <div className="mensaje-exito-card">
              <div className="exito-icono">✓</div>
              <h2>¡Formulario Completo y Enviado!</h2>
              <p>Estimado/a <strong>{formData.nombre}</strong>, hemos registrado su solicitud para el servicio de <strong>{formData.servicioSeleccionado}</strong>.</p>
              <p>Un asesor técnico de EcuaAuto se contactará al correo <em>{formData.correo}</em> o al teléfono <em>{formData.telefono}</em> para confirmar la fecha exacta de su cita.</p>
              <button className="btn-regresar" onClick={() => setEnviado(false)}>
                Agendar otra cita
              </button>
            </div>
          ) : (
            <form className="formulario-agendamiento" onSubmit={manejarEnvio}>
              
              {/* BLOQUE 1: DATOS PERSONALES */}
              <fieldset className="form-seccion">
                <legend>1. Datos Personales</legend>
                <div className="form-group-row">
                  <div className="input-box">
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input 
                      type="text" id="nombre" name="nombre" required 
                      value={formData.nombre} onChange={manejarCambio} 
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="correo">Correo Electrónico *</label>
                    <input 
                      type="email" id="correo" name="correo" required 
                      value={formData.correo} onChange={manejarCambio} 
                      placeholder="juan.perez@email.com"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="telefono">Teléfono / Celular *</label>
                    <input 
                      type="tel" id="telefono" name="telefono" required 
                      value={formData.telefono} onChange={manejarCambio} 
                      placeholder="099XXXXXXX"
                    />
                  </div>
                </div>
              </fieldset>

              {/* BLOQUE 2: SELECCIONAR VEHÍCULO */}
              <fieldset className="form-seccion">
                <legend>2. Información del Vehículo</legend>
                <div className="form-group-grid">
                  <div className="input-box">
                    <label htmlFor="anoModelo">Año Modelo *</label>
                    <select 
                      id="anoModelo" name="anoModelo" required 
                      value={formData.anoModelo} onChange={manejarCambio}
                    >
                      <option value="">Seleccione el Año</option>
                      <option value="2027">2027</option>
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="Antes de 2023">Antes de 2023</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <label htmlFor="kilometros">Kilómetros (Opcional)</label>
                    <input 
                      type="number" id="kilometros" name="kilometros" 
                      value={formData.kilometros} onChange={manejarCambio} 
                      placeholder="Ej. 10000"
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="modelo">Modelo *</label>
                    <select 
                      id="modelo" name="modelo" required 
                      value={formData.modelo} onChange={manejarCambio}
                    >
                      <option value="">Seleccione el Modelo</option>
                      <option value="D-Max">Chevrolet D-Max</option>
                      <option value="Colorado">Chevrolet Colorado</option>
                      <option value="Groove">Chevrolet Groove</option>
                      <option value="Tracker">Chevrolet Tracker</option>
                      <option value="Captiva">Chevrolet Captiva</option>
                      <option value="Otro">Otro Modelo</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <label htmlFor="placa">Número de Placa (Opcional)</label>
                    <input 
                      type="text" id="placa" name="placa" 
                      value={formData.placa} onChange={manejarCambio} 
                      placeholder="Ej. PBA-1234"
                      maxLength="8"
                    />
                  </div>
                </div>
              </fieldset>

              {/* BLOQUE 3: SELECCIÓN DEL SERVICIO */}
              <fieldset className="form-seccion">
                <legend>3. Tipo de Mantenimiento</legend>
                <div className="input-box full-width">
                  <label htmlFor="servicioSeleccionado">Seleccione el servicio requerido *</label>
                  <select 
                    id="servicioSeleccionado" name="servicioSeleccionado" required 
                    value={formData.servicioSeleccionado} onChange={manejarCambio}
                  >
                    <option value="">-- Escoja una opción --</option>
                    <option value="Mantenimiento Preventivo por Kilometraje">Mantenimiento Preventivo por Kilometraje</option>
                    <option value="Cambio de Aceite y Filtros">Cambio de Aceite y Filtros</option>
                    <option value="Alineación, Balanceo y Rotación">Alineación, Balanceo y Rotación</option>
                    <option value="Revisión de Sistema de Frenos">Revisión de Sistema de Frenos</option>
                    <option value="Diagnóstico Electrónico por Escáner">Diagnóstico Electrónico por Escáner</option>
                    <option value="Higienización de Cabina A/C">Higienización de Cabina A/C</option>
                  </select>
                </div>
              </fieldset>

              <p className="aviso-legal-gm">
                Los servicios de programación de citas son proporcionados por EcuaAuto y están sujetos a la <strong>Política de Protección de Datos Personales</strong> de la empresa.
              </p>

              <div className="form-actions">
                <button type="submit" className="btn-enviar-formulario">
                  Continuar y Registrar Cita
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiciosPage;
