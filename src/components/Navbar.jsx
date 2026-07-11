import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logoChevrolet from '../assets/logo1.png';
import Vehiculos from './Vehiculos';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  const [mostrarVehiculos, setMostrarVehiculos] = useState(false);

  // 1. 🚀 Agregamos 'Equipo de Desarrollo' como un elemento principal independiente
  const navItems = [
    { label: 'Servicios', hasDropdown: false },
    { label: 'Vehículos', hasDropdown: true },
    { label: 'Promociones', hasDropdown: false }, 
    { label: 'Acerca de Nosotros', hasDropdown: true },
    { label: 'Equipo de Desarrollo', hasDropdown: false } // ✅ Nuevo elemento principal
  ];

  // 2. 🚀 Agregamos la acción de redirección directa al hacer clic
  const manejarClicMenu = (label) => {
    if (label === 'Servicios') {
      setMostrarVehiculos(false);
      setMostrarNosotros(false);
      navigate("/servicios");
    } else if (label === 'Vehículos') {
      setMostrarVehiculos(!mostrarVehiculos);
      setMostrarNosotros(false);
    } else if (label === 'Promociones') {
      setMostrarVehiculos(false);
      setMostrarNosotros(false);
      navigate("/promociones");
    } else if (label === 'Acerca de Nosotros') {
      setMostrarNosotros(!mostrarNosotros);
      setMostrarVehiculos(false);
    } else if (label === 'Equipo de Desarrollo') { // ✅ Redirección directa al equipo
      setMostrarVehiculos(false);
      setMostrarNosotros(false);
      navigate("/equipo");
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
              /* Agregamos style position relative directamente aquí como ancla */
              <div
                key={idx}
                className={`navbar-item ${estaAbierto ? 'active' : ''}`}
                onClick={() => manejarClicMenu(item.label)}
                style={{ cursor: 'pointer', position: 'relative' }} 
              >
                <span className="navbar-text">{item.label}</span>
                {item.hasDropdown && (
                  <span className="navbar-arrow">{obtenerFlecha(item.label)}</span>
                )}

                {/* 🚀 MOVEMOS EL DROPDOWN AQUÍ ADENTRO: Así se posiciona respecto a este botón */}
                {item.label === 'Acerca de Nosotros' && mostrarNosotros && (
                  <div className="nosotros-dropdown" onClick={(e) => e.stopPropagation()}>
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
          })}
        </div>
      </nav>

      {/* 💡 AQUÍ ABAJO YA SOLO QUEDA EL DROPDOWN DE VEHÍCULOS */}
      {mostrarVehiculos && <Vehiculos />}
    </div>
  );
};

export default Navbar;
