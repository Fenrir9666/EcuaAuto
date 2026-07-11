import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showroom from "./components/Showroom";
import Taller from "./components/Taller";
import Footer from "./components/Footer";

import Nosotros from "./pages/Nosotros";
import ServiciosPage from "./pages/ServiciosPage";
import PromocionesPage from "./components/PromocionesPage"; // ✅ Importa tu página de promociones

function Inicio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Showroom />
      <Taller />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/promociones" element={<PromocionesPage />} /> {/* ✅ Nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
