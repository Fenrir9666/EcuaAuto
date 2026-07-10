import React from 'react';
import './Promo.css';
import autos from '../assets/autos.png'; // tu imagen del carro

const Promo = () => {
  return (
    <section
      className="promo-banner"
      style={{ backgroundImage: `url(${autos})` }}
    >
      <div className="promo-overlay">
        <div className="promo-content">
          <h2>
            ¡Llegó el momento de tener el <span>Chevrolet perfecto</span> para ti!
          </h2>
          <p>Conoce nuestras ofertas y adquiere el auto de tus sueños.</p>
          <div className="promo-buttons">
            <button className="btn-primary">Explorar modelos</button>
            <button className="btn-secondary">Ver ofertas</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
