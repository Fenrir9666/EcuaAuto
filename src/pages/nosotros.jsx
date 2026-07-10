import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Nosotros.css";


const Nosotros = () => {
    
  return (

    <div className="nosotros-page">


      <Navbar />



      {/* SECCIÓN PRINCIPAL */}

      <section className="nosotros-hero">


        <div>

          <h1>
            Quiénes Somos
          </h1>


          <p>
            En Ecuauto somos una empresa dedicada a ofrecer
            soluciones de movilidad Chevrolet, brindando vehículos
            de calidad, tecnología y respaldo para nuestros clientes.
          </p>


        </div>


      </section>





      {/* HISTORIA DE LA EMPRESA */}

      <section className="historia">


        <div className="historia-imagen">


          <img

            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900"

            alt="Concesionario Chevrolet"

          />


        </div>





        <div className="historia-texto">


          <h2>
            Nuestra historia
          </h2>



          <p>
            Ecuauto forma parte del desarrollo automotriz del país,
            brindando soluciones de movilidad Chevrolet con vehículos
            de alta tecnología y un equipo comprometido con nuestros clientes.
          </p>



          <p>
            Nuestro objetivo es ofrecer una experiencia completa,
            desde la compra del vehículo hasta el servicio posventa,
            garantizando confianza y respaldo.
          </p>


        </div>



      </section>







      {/* MISION VISION VALORES */}

      <section className="nosotros-info">


        <h2>
          Nuestra empresa
        </h2>




        <div className="nosotros-cards">





          <div className="nosotros-card">


            <h3>
              Nuestra misión
            </h3>


            <p>
              Brindar soluciones automotrices Chevrolet con
              excelencia, tecnología y un servicio personalizado
              para nuestros clientes.
            </p>


          </div>






          <div className="nosotros-card">


            <h3>
              Nuestra visión
            </h3>


            <p>
              Ser líderes en movilidad ofreciendo experiencias
              innovadoras y confiables dentro del sector automotriz.
            </p>


          </div>






          <div className="nosotros-card">


            <h3>
              Nuestros valores
            </h3>


            <p>
              Compromiso, confianza, innovación y calidad
              en cada proceso que realizamos.
            </p>


          </div>





        </div>



      </section>

      {/* UBICACIÓN */}

      <section className="ubicacion">


<h2>
Nuestra ubicación
</h2>

<div className="ubicacion-contenido">

<div className="mapa">

<iframe

title="Ubicación EcuAuto Chevrolet"

src="https://www.google.com/maps?q=EcuAuto%20Chevrolet%20San%20Rafael%20Quito&output=embed"

loading="lazy"

allowFullScreen

></iframe>

</div>

<div className="datos-ubicacion">


<h3>
EcuAuto Chevrolet
</h3>


<p>
📍 San Rafael, Valle de los Chillos
<br/>
Quito - Ecuador
</p>


<p>
🕒 Horarios de atención:
<br/>
Lunes a Viernes: 08:00 - 18:00
<br/>
Sábados: 09:00 - 14:00
</p>


<p>
📞 Contacto:  099 140 2100
<br/>
Comunícate con nuestro equipo Chevrolet
</p>

</div>

</div>

</section>


      <Footer />

    </div>

  );

};

export default Nosotros;