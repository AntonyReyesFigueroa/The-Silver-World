
import './App.css'
import './General.css'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Inicio from './Components/Main/Inicio/Inicio'
import Filosofia from './Components/Main/Filosofia/Filosofia'
import Comprar from './Components/Main/Comprar/Comprar'
import Contacto from './Components/Main/Contacto/Contacto'
import Footer from './Components/Footer/Footer'
import AccesoriosHombres from './Components/Main/Comprar/AccesoriosHombres'
import AccesoriosMujeres from './Components/Main/Comprar/AccesoriosMujeres'
import DetalleInfo from './Components/Main/Comprar/DetalleInfo'

function App() {


  return (
    <>
      <div className='container__app'>
        <Header />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/filosofia' element={<Filosofia />} />
          <Route path='/quiero-comprar' element={<Comprar/>} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/accesorios-hombres' element={<AccesoriosHombres />} />
          <Route path='/accesorios-mujeres' element={<AccesoriosMujeres />} />
          <Route path='/info-producto' element={<DetalleInfo />} />
        </Routes>

        <Footer/>

      </div>
    </>
  )
}

export default App
