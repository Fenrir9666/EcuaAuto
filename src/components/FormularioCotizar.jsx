import React, { useState, useEffect } from "react";
import "./FormularioCotizar.css";

const FormularioCotizar = ({ vehiculo, cerrar }) => {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    ciudad: "Quito",
    mensaje: ""
  });

  // Manejo de Escape + bloqueo scroll
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", manejarTeclado);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
      document.body.style.overflow = "unset";
    };
  }, [cerrar]);

  if (!vehiculo) return null;

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setCargando(true);

    // Simulación de envío (puedes reemplazar con fetch/axios)
    setTimeout(() => {
      console.log(`Cotización registrada para ${vehiculo.nombre}:`, datos);
      setCargando(false);
      setEnviado(true);
    }, 1500);
  };

  return (
    <div className="cotizar-fondo" onClick={cerrar}>
      <div className="cotizar-card" onClick={(e) => e.stopPropagation()}>
        
        <button 
          className="cotizar-cerrar" 
          onClick={cerrar} 
          aria-label="Cerrar formulario" 
          tabIndex="0"
        >
          ✕
        </button>

        {enviado ? (
          <div className="cotizar-exito">
            <div className="exito-check">✓</div>
            <h2>¡Formulario completo y enviado!</h2>
            <p>
              Estimado/a <strong>{datos.nombre}</strong>, hemos recibido su solicitud para cotizar el <strong>{vehiculo.nombre}</strong>.
            </p>
            <p>Un asesor comercial de EcuaAuto se pondrá en contacto con usted en las próximas horas.</p>
            <button className="btn-entendido" onClick={cerrar}>Entendido</button>
          </div>
        ) : (
          <form onSubmit={enviarFormulario} className="cotizar-form">
            <div className="cotizar-header">
              <h2>COTIZAR VEHÍCULO</h2>
              <span className="cotizar-auto-nombre">{vehiculo.nombre}</span>
            </div>

            <div className="cotizar-body">
              <div className="caja-input">
                <label>Nombre Completo *</label>
                <input 
                  type="text" name="nombre" required 
                  value={datos.nombre} onChange={manejarCambio} 
                  placeholder="Ej. Carlos Andrade"
                />
              </div>

              <div className="caja-input">
                <label>Correo Electrónico *</label>
                <input 
                  type="email" name="correo" required 
                  value={datos.correo} onChange={manejarCambio} 
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="caja-input">
                <label>Teléfono Celular *</label>
                <input 
                  type="tel" name="telefono" required 
                  pattern="[0-9]{9,10}" 
                  value={datos.telefono} onChange={manejarCambio} 
                  placeholder="099XXXXXXX"
                />
              </div>

              <div className="caja-input">
                <label>Ciudad de Preferencia *</label>
                <select name="ciudad" value={datos.ciudad} onChange={manejarCambio}>
                  <option value="Quito">Quito</option>
                  <option value="Guayaquil">Guayaquil</option>
                  <option value="Cuenca">Cuenca</option>
                  <option value="Ambato">Ambato</option>
                  <option value="Manta">Manta</option>
                </select>
              </div>

              <div className="caja-input full-width">
                <label>Comentario u Observación (Opcional)</label>
                <textarea 
                  name="mensaje" rows="3" 
                  value={datos.mensaje} onChange={manejarCambio}
                  placeholder="¿Desea financiamiento, recibir información de un color específico, etc.?"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn-confirmar-cotizacion" disabled={cargando}>
              {cargando ? "Enviando..." : "Enviar Solicitud"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormularioCotizar;
