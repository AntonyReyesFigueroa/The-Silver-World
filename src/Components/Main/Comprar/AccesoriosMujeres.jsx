import React, { useEffect, useState } from 'react'
import Productos from '../../../Object/Productos';
import DetalleAccesorio from './DetalleAccesorio';
import Cookies from 'js-cookie';

const AccesoriosMujeres = () => {
  const {products} = Productos()

  const [valueCookie, setValueCookie] = useState("");

  const handleCookie = (req, res) => {

    if (typeof valueCookie === "number") {
      Cookies.set('testCookie', valueCookie, { expires: 20000000, path: "/" });
    }
  };




  useEffect(() => {

    const gettingCookie = Cookies.get("testCookie");
    setValueCookie(gettingCookie)

  }, []);

  console.log(valueCookie);

  return (
    <div className='container__Detallecomprar'>
    {
      products?.map((data, index) => (
        data.categoria === 'M'?
        <DetalleAccesorio
        key={index}
        data = {data}
        setValueCookie={setValueCookie}
        handleCookie={handleCookie}
        index={index}
        />
        :
        ''
      ))
    }
  </div>
  )
}

export default AccesoriosMujeres