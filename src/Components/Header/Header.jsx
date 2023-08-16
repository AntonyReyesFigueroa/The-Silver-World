import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import { Link, Outlet } from 'react-router-dom'

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className='header__container'>
      <nav className='header__nav'>
        <div className='Header__logo'>
          <img src={logo} alt="" />
          <div className={`nav_toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='header__sticky'>
          {
            isOpen ?
              <ul className={`displayFlexFila header__container-li ${isOpen && "open__menu"}`} >
                <li onClick={() => setIsOpen(!isOpen)} className='Header__li' ><Link to='/'>Inicio</Link></li>
                <li onClick={() => setIsOpen(!isOpen)} className='Header__li' ><Link to='/filosofia'>Filosofia</Link></li>
                <li onClick={() => setIsOpen(!isOpen)} className='Header__li' ><Link to='/quiero-comprar'>Quiero comprar</Link></li>
                <li onClick={() => setIsOpen(!isOpen)} className='Header__li' ><Link to='/contacto'>Contacto</Link></li>
              </ul>
              :
              null
          }
        </div>
      </nav>
      <Outlet />
    </header>
  )
}

export default Header