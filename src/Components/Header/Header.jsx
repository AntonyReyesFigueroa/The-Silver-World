import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <header className='header__container'>
        <nav className='header__nav'>
            <div className='Header__logo'><img src={logo} alt="" /> </div>
            <ul className='displayFlexFila'>
                <li className='Header__li' >Inicio</li>
                <li className='Header__li' >Filosofia</li>
                <li className='Header__li' >Quiero comprar</li>
                <li className='Header__li' >Contacto</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header