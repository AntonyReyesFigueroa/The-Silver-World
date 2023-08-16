import React from 'react'
import './Contacto.css'
import { FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="contacto">
    <h2>Contacto</h2>
    <div className="enlaces">
      <a href="https://wa.me/51987741641" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp /> WhatsApp
      </a>
      <a href="https://www.facebook.com/profile.php?id=61550325689645&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Facebook
      </a>
      <a href="mailto:thesilverworld123@gmail.com">
        <FaEnvelope /> Correo Electrónico
      </a>
    </div>

    <img src="https://www.beedigital.es/wp-content/uploads/2020/09/datos-contacto-negocio-1.jpg" alt="" />
  </div>
  )
}

export default Contacto