import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Comprar.css'

const Comprar = () => {
  return (
    <div className='displayFlexFila container__comprar'>

      <div >
        <Link to='/accesorios-hombres'>
          {/* <div >
            <b>Accesorios para hombres</b>
          </div> */}
          <div className='accesorios__h'></div>
        </Link>
      </div>

      <div>
        <Link to='/accesorios-mujeres'>
          {/* <div >
            <b>Accesorios para Mujeres</b>
          </div> */}
          <div  className='accesorios__m'></div>
        </Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Comprar