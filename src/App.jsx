import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promo from './components/Promo';
import Showroom from './components/Showroom';
import Footer from './components/Footer';

import Nosotros from './pages/Nosotros';

import './components/Taller.css';



function Inicio() {

  return (

    <div>

      <Navbar />

      <Hero />

      <Promo />

      <Showroom />



      {/* Sección Informativa Taller/Servicios */}

      <section id="taller" className="taller-section">


        <div
          className="taller-image"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80")',
          }}
        />


        <div className="taller-content">

          <h2>
            ¡Conoce nuestro taller!
          </h2>


          <p>
            Ofrecemos servicios integrales que garantizan
            el óptimo rendimiento de tu Chevrolet con total
            tranquilidad y repuestos originales.
          </p>


          <button 
            className="taller-btn"
          >
            Agendar Cita Técnico
          </button>


        </div>


      </section>



      <Footer />

    </div>

  );

}





function App() {


  return (

    <BrowserRouter>


      <Routes>


        <Route 
          path="/" 
          element={<Inicio />} 
        />


        <Route 
          path="/nosotros" 
          element={<Nosotros />} 
        />


      </Routes>


    </BrowserRouter>

  );


}


export default App;