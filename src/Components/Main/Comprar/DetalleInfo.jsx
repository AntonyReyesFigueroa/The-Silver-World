import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import Productos from '../../../Object/Productos';
import './DetalleInfo.css'

const DetalleInfo = () => {

    const [index, setIndex] = useState()

    const { products } = Productos()

    const [producto, setProducto] = useState()

    useEffect(() => {

        const gettingCookie = Cookies.get("testCookie");
        setIndex(gettingCookie)

        setProducto(products[index])

    }, [index]);
   
    return (
        <div className='container__detalleInfo'>

            <h1> {producto?.name} </h1>

            <div>
                <div className='img__producto_detalle'>
                    <img src={producto?.img} alt="" />
                </div>

                <div>

                </div>
            
           
            </div>
            <h2>Stock: {producto?.stock} </h2>

        </div>
    )
}

export default DetalleInfo