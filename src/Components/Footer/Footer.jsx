import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container displayFlexFila">
                <div className='footer__section'>
                    <h2>Sobre the silver word</h2>
                    <p>Inicio</p>
                    <p>Filosofia</p>
                    <p>Quiero comprar</p>
                </div>
                <div className='footer__section'>
                    <h2>Ayuda</h2>
                    <p>Preguntas Frecuentes</p>
                    <p>Homologación de Celulares</p>
                    <p>Consulta IMEI</p>
                    <p>Libro de Reclamaciones</p>
                    <p>Términos y Condiciones</p>
                    <p>Comprobantes Electrónicos</p>
                    <p>Trabaja con nosotros</p>
                </div>
                <div className='footer__section'>
                    <h2>Contacto</h2>
                    <p>Envíos</p>
                    <p>Contáctanos</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer