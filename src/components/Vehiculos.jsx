import React, { useState } from "react";
import "./Vehiculos.css";

import vehiculosData from "../data/vehiculosData";
import ModalVehiculo from "./ModalVehiculo";


const Vehiculos = () => {

  const [categoriaActiva, setCategoriaActiva] = useState("Camionetas");
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);


  return (

    <div className="vehiculos-desplegable">


      {/* CATEGORÍAS */}

      <div className="vehiculos-tabs">

        {
          Object.keys(vehiculosData).map((categoria) => (

            <button

              key={categoria}

              className={`vehiculos-tab ${
                categoriaActiva === categoria ? "activo" : ""
              }`}

              onClick={() => setCategoriaActiva(categoria)}

            >

              {categoria}

            </button>

          ))

        }

      </div>



      {/* VEHÍCULOS */}

      <div className="vehiculos-grid">


        {
          vehiculosData[categoriaActiva].length > 0 ? (


            vehiculosData[categoriaActiva].map((auto) => (


              <div 
                className="vehiculo-card" 
                key={auto.id}
              >


                <img

                  src={auto.imagen}

                  alt={auto.nombre}

                />


                <h3>

                  {auto.nombre}

                </h3>


                <p>

                  {auto.descripcion}

                </p>


                <button
                  className="btn-conocer"
                  onClick={() => setVehiculoSeleccionado(auto)}
                >
                  Conocer más
                </button>


              </div>


            ))


          ) : (


            <h3>

              Próximamente...

            </h3>


          )

        }


      </div>

      <ModalVehiculo

    vehiculo={vehiculoSeleccionado}

    cerrar={() => setVehiculoSeleccionado(null)}

      />


    </div>

  );

};


export default Vehiculos;