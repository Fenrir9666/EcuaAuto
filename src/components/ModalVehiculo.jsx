import React from "react";
import "./ModalVehiculo.css";


const ModalVehiculo = ({ vehiculo, cerrar }) => {


  if (!vehiculo) return null;


  return (

    <div className="modal-fondo">


      <div className="modal-contenido">


        <button 
          className="modal-cerrar"
          onClick={cerrar}
        >
          ✕
        </button>



        <img

          src={vehiculo.imagen}

          alt={vehiculo.nombre}

          className="modal-imagen"

        />



        <h2>

          {vehiculo.nombre}

        </h2>



        <p>

          {vehiculo.descripcion}

        </p>



        <div className="caracteristicas">


          <h3>
            Características
          </h3>


          <ul>

            <div className="datos-vehiculo">


<div className="dato">

<h4>💰 Precio</h4>

<p>{vehiculo.precio}</p>

</div>


<div className="dato">

<h4>⚙ Motor</h4>

<p>{vehiculo.motor}</p>

</div>


<div className="dato">

<h4>🚀 Potencia</h4>

<p>{vehiculo.potencia}</p>

</div>


<div className="dato">

<h4>🔄 Transmisión</h4>

<p>{vehiculo.transmision}</p>

</div>


<div className="dato">

<h4>⛽ Combustible</h4>

<p>{vehiculo.combustible}</p>

</div>


<div className="dato">

<h4>🚙 Tracción</h4>

<p>{vehiculo.traccion}</p>

</div>


</div>


         <div className="lista-info">


<h3>
🛡 Seguridad
</h3>


<ul>

{
vehiculo.seguridad?.map((item,index)=>(

<li key={index}>
{item}
</li>

))
}

</ul>



<h3>
⭐ Equipamiento
</h3>


<ul>

{
vehiculo.equipamiento?.map((item,index)=>(

<li key={index}>
{item}
</li>

))
}

</ul>


</div>


          </ul>


        </div>


      </div>


    </div>

  );

};


export default ModalVehiculo;