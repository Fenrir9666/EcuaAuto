import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logoChevrolet from '../assets/logo1.png';
import Vehiculos from './Vehiculos'; // Importamos tu componente de vehículos
import Promo from './Promo'; // Importamos tu componente Banner de Promociones
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();

  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  const [mostrarVehiculos, setMostrarVehiculos] = useState(false);
  // Nuevo estado para controlar de forma inteligente el despliegue del Banner Promo
  const [mostrarPromociones, setMostrarPromociones] = useState(false);
 
  const navItems = [
    { label: 'Comprar', hasDropdown: true },
    { label: 'Vehículos', hasDropdown: true },
    { label: 'Promociones', hasDropdown: true }, // MODIFICADO: Reemplazado 'Posventa' por 'Promociones'
    { label: 'Acerca de Nosotros', hasDropdown: true }
  ];

  // Función para capturar el clic en los elementos del menú y alternar estados de manera inteligente
  const manejarClicMenu = (label) => {
    if (label === 'Vehículos') {
      setMostrarVehiculos(!mostrarVehiculos);
      setMostrarNosotros(false);
      setMostrarPromociones(false); // Cierra Promociones si abres Vehículos
    } else if (label === 'Acerca de Nosotros') {
      setMostrarNosotros(!mostrarNosotros);
      setMostrarVehiculos(false);
      setMostrarPromociones(false); // Cierra Promociones si abres Nosotros
    } else if (label === 'Promociones') {
      setMostrarPromociones(!mostrarPromociones); // Alterna el banner promocional en pantalla
      setMostrarVehiculos(false); // Cierra Vehículos para que no se superpongan
      setMostrarNosotros(false); // Cierra Nosotros
    } else {
      setMostrarVehiculos(false);
      setMostrarNosotros(false);
      setMostrarPromociones(false);
    }
  };

  // Función helper para determinar qué flecha mostrar de forma dinámica
  const obtenerFlecha = (label) => {
    if (label === 'Vehículos') return mostrarVehiculos ? '▲' : '▼';
    if (label === 'Acerca de Nosotros') return mostrarNosotros ? '▲' : '▼';
    if (label === 'Promociones') return mostrarPromociones ? '▲' : '▼'; // Integración en la UI
    return '▼';
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container">
        
        {/* Sección del Logotipo */}
        <div className="navbar-logo-wrapper">
          <img 
            src={logoChevrolet} 
            alt="EcuaAuto Somos Chevrolet" 
            className="navbar-logo-img" 
            onClick={() => {
              setMostrarVehiculos(false);
              setMostrarNosotros(false);
              setMostrarPromociones(false);
              navigate("/");
            }}
          />
        </div>

        {/* Sección de los Enlaces de Navegación */}
        <div className="navbar-menu">
          {navItems.map((item, idx) => {
            // Evaluamos si el item actual está abierto en React para pintar la línea amarilla fija
            const estaAbierto = 
              (item.label === 'Vehículos' && mostrarVehiculos) ||
              (item.label === 'Acerca de Nosotros' && mostrarNosotros) ||
              (item.label === 'Promociones' && mostrarPromociones); // Línea amarilla integrada aquí

            return (
              <div 
                key={idx} 
                className={`navbar-item ${estaAbierto ? 'active' : ''}`}
                onClick={() => manejarClicMenu(item.label)}
                style={{ cursor: 'pointer' }}
              >
                <span className="navbar-text">
                  {item.label}
                </span>
                
                {item.hasDropdown && (
                  <span className="navbar-arrow">
                    {obtenerFlecha(item.label)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Renderizado Condicional de Submenús justo debajo del Navbar */}
      {mostrarVehiculos && <Vehiculos />}

      {/* SOLUCIÓN: Si activas Promociones en el menú, el componente Promo se inyecta directamente aquí de forma visible */}
      {mostrarPromociones && <Promo />}

      {mostrarNosotros && (
        <div className="nosotros-dropdown">
          <button onClick={() => {
            setMostrarNosotros(false);
            navigate("/nosotros");
          }}>
            Acerca de Nosotros
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
