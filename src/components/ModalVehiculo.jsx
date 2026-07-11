import React, { useEffect } from "react";
import "./ModalVehiculo.css";

const ModalVehiculo = ({ vehiculo, cerrar }) => {
  // Manejo de cierre con la tecla Escape (Mejora UX)
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (e.key === "Escape") cerrar();
    };

    if (vehiculo) {
      window.addEventListener("keydown", manejarTeclado);
      // Bloquea el scroll del fondo cuando el modal está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", manejarTeclado);
      document.body.style.overflow = "unset";
    };
  }, [vehiculo, cerrar]);

  if (!vehiculo) return null;

  // Evita que el modal se cierre al hacer clic dentro del contenido
  const detenerPropagacion = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-fondo" onClick={cerrar} role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <div className="modal-contenido" onClick={detenerPropagacion}>
        <button 
          className="modal-cerrar"
          onClick={cerrar}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <img
          src={vehiculo.imagen}
          alt={vehiculo.nombre}
          className="modal-imagen"
        />

        <h2 id="modal-titulo">
          {vehiculo.nombre}
        </h2>

        <p className="modal-descripcion">
          {vehiculo.descripcion}
        </p>

        <div className="caracteristicas">
          <h3>Ficha Técnica</h3>
          
          {/* Se corrigió la estructura HTML: se eliminó el <ul> externo inválido */}
          <div className="datos-vehiculo">
            <div className="dato">
              <h4>Precio</h4>
              <p>{vehiculo.precio}</p>
            </div>

            <div className="dato">
              <h4>Motor</h4>
              <p>{vehiculo.motor}</p>
            </div>

            <div className="dato">
              <h4>Potencia</h4>
              <p>{vehiculo.potencia}</p>
            </div>

            <div className="dato">
              <h4>Transmisión</h4>
              <p>{vehiculo.transmision}</p>
            </div>

            <div className="dato">
              <h4>Combustible</h4>
              <p>{vehiculo.combustible}</p>
            </div>

            <div className="dato">
              <h4>Tracción</h4>
              <p>{vehiculo.traccion}</p>
            </div>
          </div>

          <div className="lista-info">
            {vehiculo.seguridad && vehiculo.seguridad.length > 0 && (
              <>
                <h3>Seguridad</h3>
                <ul>
                  {vehiculo.seguridad.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {vehiculo.equipamiento && vehiculo.equipamiento.length > 0 && (
              <>
                <h3>Equipamiento</h3>
                <ul>
                  {vehiculo.equipamiento.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVehiculo;
