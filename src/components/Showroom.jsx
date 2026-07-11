import React, { useState } from 'react';
import vehiculosData from '../data/vehiculosData'; // 📊 Importa tu base de datos central
import ModalVehiculo from './ModalVehiculo';       // 🪟 Importa tu componente modal
import './Showroom.css';

// 📸 TUS IMPORTACIONES LOCALES PERFECTAS:
import dmax from '../assets/dmax.png';
import colorado from '../assets/colorado.png';
import silverado from '../assets/silverado.png';

const Showroom = () => {
  // Estado local para controlar qué vehículo se muestra en la ficha técnica
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);

  // Tu arreglo original con las variables de imágenes locales
  const models = [
    { name: 'D-Max', price: '$28,990', img: dmax },
    { name: 'Colorado', price: '$42,500', img: colorado },
    { name: 'Silverado', price: '$68,900', img: silverado },
  ];

  // Función interactiva para buscar los datos extendidos en tu JS de datos
  const manejarAbrirModal = (nombreModelo) => {
    // Buscamos dentro de la categoría "Camionetas" el auto que coincida
    const datosCompletos = vehiculosData.Camionetas?.find(auto => 
      auto.nombre.toLowerCase().includes(nombreModelo.toLowerCase())
    );

    if (datosCompletos) {
      setVehiculoSeleccionado(datosCompletos);
    } else {
      console.warn(`No se encontraron especificaciones para: ${nombreModelo}`);
    }
  };

  return (
    <section id="modelos" className="showroom-section">
      {/* Mantenemos tu encabezado original intacto */}
      <div className="showroom-header">
        <h2>Conoce nuestra excelencia</h2>
        <p>Modelos listos para cualquier desafío</p>
      </div>

      <div className="showroom-grid">
        {models.map((car, idx) => (
          <div key={idx} className="showroom-card">
            <div className="showroom-img">
              <img src={car.img} alt={car.name} />
            </div>
            <div className="showroom-info">
              <div>
                <h3>{car.name}</h3>
                <p>Desde {car.price}</p>
              </div>
              
              {/* 🚀 ENLAZAMOS TU BOTÓN CON LA LOGICA DE APERTURA */}
              <button 
                className="showroom-btn"
                onClick={() => manejarAbrirModal(car.name)}
                aria-label={`Ver ficha técnica de Chevrolet ${car.name}`}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 RENDERIZADO CONDICIONAL DE LA MODAL EXTENDIDA */}
      {vehiculoSeleccionado && (
        <ModalVehiculo 
          vehiculo={vehiculoSeleccionado} 
          cerrar={() => setVehiculoSeleccionado(null)} 
        />
      )}
    </section>
  );
};

export default Showroom;

