import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logoChevrolet from '../assets/logo1.png';
import Vehiculos from './Vehiculos';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  const [mostrarVehiculos, setMostrarVehiculos] = useState(false);

  const navItems = [
    { label: 'Servicios', hasDropdown: false },
    { label: 'Vehículos', hasDropdown: true },
    { label: 'Promociones', hasDropdown: false }, // 🔧 Ya no tiene dropdown
    { label: 'Acerca de Nosotros', hasDropdown: true }
  ];

  const manejarClicMenu = (label) => {
    if (label === 'Servicios') {
      setMostrarVehiculos(false);
      setMostrarNosotros(false);
      navigate("/servicios");
    } else if (label === 'Vehículos') {
      setMostrarVehiculos(!mostrarVehiculos);
      setMostrarNosotros(false);
    } else if (label === 'Promociones') {
      // 🔧 Redirige directamente a la página de promociones
      setMostrarVehiculos(false);
      setMostrarNosotros(false);
      navigate("/promociones");
    } else if (label === 'Acerca de Nosotros') {
      setMostrarNosotros(!mostrarNosotros);
      setMostrarVehiculos(false);
    }
  };

  const obtenerFlecha = (label) => {
    if (label === 'Vehículos') return mostrarVehiculos ? '▲' : '▼';
    if (label === 'Acerca de Nosotros') return mostrarNosotros ? '▲' : '▼';
    return '▼';
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container">
        <div className="navbar-logo-wrapper">
          <img
            src={logoChevrolet}
            alt="EcuaAuto Somos Chevrolet"
            className="navbar-logo-img"
            onClick={() => {
              setMostrarVehiculos(false);
              setMostrarNosotros(false);
              navigate("/");
            }}
          />
        </div>

        <div className="navbar-menu">
          {navItems.map((item, idx) => {
            const estaAbierto =
              (item.label === 'Vehículos' && mostrarVehiculos) ||
              (item.label === 'Acerca de Nosotros' && mostrarNosotros);

            return (
              <div
                key={idx}
                className={`navbar-item ${estaAbierto ? 'active' : ''}`}
                onClick={() => manejarClicMenu(item.label)}
                style={{ cursor: 'pointer' }}
              >
                <span className="navbar-text">{item.label}</span>
                {item.hasDropdown && (
                  <span className="navbar-arrow">{obtenerFlecha(item.label)}</span>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {mostrarVehiculos && <Vehiculos />}
      {mostrarNosotros && (
        <div className="nosotros-dropdown">
          <button
            onClick={() => {
              setMostrarNosotros(false);
              navigate("/nosotros");
            }}
          >
            Acerca de Nosotros
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
