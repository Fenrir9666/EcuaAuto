import React, { useState } from "react";
import "./Vehiculos.css";
import vehiculosData from "../data/vehiculosData";
import ModalVehiculo from "./ModalVehiculo";

const Vehiculos = () => {
  // Inicializa con la primera categoría disponible por si "Camionetas" cambia de nombre
  const categorias = Object.keys(vehiculosData);
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0] || "Camionetas");
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);

  // Variable de seguridad para extraer el listado activo de forma segura
  const autosActivos = vehiculosData[categoriaActiva] || [];

  return (
    <div className="vehiculos-desplegable">
      
      {/* SECCIÓN DE CATEGORÍAS (TABS) */}
      <div className="vehiculos-tabs" role="tablist" aria-label="Categorías de vehículos">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            role="tab"
            aria-selected={categoriaActiva === categoria}
            className={`vehiculos-tab ${categoriaActiva === categoria ? "activo" : ""}`}
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* SECCIÓN DEL CATÁLOGO DE VEHÍCULOS */}
      <div className="vehiculos-grid">
        {autosActivos.length > 0 ? (
          autosActivos.map((auto) => (
            <div className="vehiculo-card" key={auto.id}>
              
              {/* MEJORA UX: Hacer clic en la imagen también despliega el modal informativo */}
              <div 
                className="vehiculo-card-media" 
                onClick={() => setVehiculoSeleccionado(auto)}
                style={{ cursor: 'pointer' }}
              >
                <img src={auto.imagen} alt={`Chevrolet ${auto.nombre}`} />
              </div>

              <h3>{auto.nombre}</h3>
              <p>{auto.descripcion}</p>

              <button
                className="btn-conocer"
                onClick={() => setVehiculoSeleccionado(auto)}
                aria-label={`Conocer más detalles sobre Chevrolet ${auto.nombre}`}
              >
                Conocer más
              </button>
            </div>
          ))
        ) : (
          <div className="vehiculos-vacio">
            <p>Próximamente nuevos modelos...</p>
          </div>
        )}
      </div>

      {/* MODAL INFORMATIVO */}
      <ModalVehiculo
        vehiculo={vehiculoSeleccionado}
        cerrar={() => setVehiculoSeleccionado(null)}
      />
    </div>
  );
};

export default Vehiculos;
