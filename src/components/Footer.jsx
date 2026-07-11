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
            <li><a href="#promociones">Promociones</a></li>
            <li><a href="#exonerados">Exonerados</a></li>
            <li><a href="#flotas">Flotas</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>VEHÍCULOS</h4>
          <ul>
            <li><a href="#modelos">Todos los modelos</a></li>
            <li><a href="#suv">SUV & Crossovers</a></li>
            <li><a href="#camionetas">Camionetas</a></li>
            <li><a href="#vans">Vans</a></li>
            <li><a href="#electricos">Eléctricos</a></li>
            <li><a href="#hibridos">Híbridos</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POSVENTA</h4>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#agendamiento">Agendamiento de servicios</a></li>
            <li><a href="#accesorios">Accesorios</a></li>
            <li><a href="#repuestos">Repuestos</a></li>
            <li><a href="#garantia">Garantía</a></li>
            <li><a href="#onstar">OnStar</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SOBRE NOSOTROS</h4>
          <ul>
            <li><a href="#quienes-somos">Quiénes somos</a></li>
            <li><a href="#contactanos">Contáctanos</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
            <li><a href="#trabaja-con-nosotros">Trabaja con nosotros</a></li>
            <li><a href="#politica-datos">Política de Datos</a></li>
            <li><a href="#aspectos-legales">Aspectos Legales</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <h5>NUESTRAS REDES</h5>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ECUAUTO Chevrolet. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
