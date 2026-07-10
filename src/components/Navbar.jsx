import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logoChevrolet from '../assets/logo1.png';
import Vehiculos from './Vehiculos'; // Importamos tu componente de vehículos
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();

  const [mostrarNosotros, setMostrarNosotros] = useState(false);
  // Estado para controlar si el menú de vehículos está abierto o cerrado
  const [mostrarVehiculos, setMostrarVehiculos] = useState(false);
 

  const navItems = [
    { label: 'Comprar', hasDropdown: true },
    { label: 'Vehículos', hasDropdown: true },
    { label: 'Posventa', hasDropdown: true },
    { label: 'Acerca de Nosotros', hasDropdown: true }
  ];

  // Función para capturar el clic en los elementos del menú
  const manejarClicMenu = (label) => {
    if (label === 'Vehículos') {
      // Intercambia el estado (si está abierto lo cierra, si está cerrado lo abre)
      setMostrarVehiculos(!mostrarVehiculos);
    }

    if(label === "Acerca de Nosotros"){

      setMostrarNosotros(!mostrarNosotros);

    }
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
            onClick={() => navigate("/")}
          />
        </div>

        {/* Sección de los Enlaces de Navegación */}
        <div className="navbar-menu">
          {navItems.map((item, idx) => (
            <div 
              key={idx} 
              className="navbar-item"
              onClick={() => manejarClicMenu(item.label)} // Agregamos el evento de clic
              style={{ cursor: item.label === 'Vehículos' ? 'pointer' : 'default' }} // Cambia el cursor a manito en vehículos
            >
              <span className="navbar-text">
                {item.label}
              </span>
              
              {item.hasDropdown && (
                <span className="navbar-arrow">
                  {/* Si es Vehículos y está abierto, muestra la flecha hacia arriba ▲, si no ▼ */}
                  {item.label === 'Vehículos' && mostrarVehiculos ? '▲' : '▼'}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Renderizado Condicional: Si mostrarVehiculos es true, se despliega justo debajo del navbar */}
      {mostrarVehiculos && <Vehiculos />}

      {
mostrarNosotros && (

<div className="nosotros-dropdown">


<button
onClick={() => navigate("/nosotros")}
>
Acerca de Nosotros
</button>


</div>

)
}
    </div>
  );
};

export default Navbar;
