import React from 'react';
import './Showroom.css';
import dmax from '../assets/dmax.png';
import colorado from '../assets/colorado.png';
import silverado from '../assets/silverado.png';

const models = [
  { name: 'D-Max', price: '$28,990', img: dmax },
  { name: 'Colorado', price: '$42,500', img: colorado },
  { name: 'Silverado', price: '$68,900', img: silverado },
];

const Showroom = () => {
  return (
    <section id="modelos" className="showroom-section">
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
              <button className="showroom-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showroom;
