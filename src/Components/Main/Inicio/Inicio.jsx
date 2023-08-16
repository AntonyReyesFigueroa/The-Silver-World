import React from 'react'
import Productos from '../../../Object/Productos'
import fondoInicio from '../../../img/fondoInicio.png'
// import c1 from '../../../img/collar.jpg'
import './Inicio.css'
import { Link, Outlet } from 'react-router-dom'

const Inicio = () => {

  const  {p1, p2, p3, p4, p5, p6, p7, products} = Productos()

  console.log(products);

  return (
    <main>
      <div>
        <div className='inicio__img'>
          {/* <img src={pulsera1.img} alt="" />
          <img src={c1} alt="" />
          <p>Crea tu propio estilo</p>
          <h2>Ver mas</h2> */}
          <Link to='/quiero-comprar'>< img className='inicio__img__img' src={fondoInicio} alt="" /></Link>
          
        </div>
        
      </div>

      <Outlet/>
    </main>
  )
}

export default Inicio