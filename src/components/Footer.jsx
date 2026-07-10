import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>COMPRAR</h4>
          <ul>
            <li>Promociones</li>
            <li>Exonerados</li>
            <li>Flotas</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>VEHÍCULOS</h4>
          <ul>
            <li>Todos los modelos</li>
            <li>SUV & Crossovers</li>
            <li>Camionetas</li>
            <li>Vans</li>
            <li>Eléctricos</li>
            <li>Híbridos</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POSVENTA</h4>
          <ul>
            <li>Servicios</li>
            <li>Agendamiento de servicios</li>
            <li>Accesorios</li>
            <li>Repuestos</li>
            <li>Garantía</li>
            <li>OnStar</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SOBRE NOSOTROS</h4>
          <ul>
            <li>Quiénes somos</li>
            <li>Contáctanos</li>
            <li>Ubicación</li>
            <li>Trabaja con nosotros</li>
            <li>Política de Datos</li>
            <li>Aspectos Legales</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <h5>NUESTRAS REDES</h5>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ECUAUTO Chevrolet. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
