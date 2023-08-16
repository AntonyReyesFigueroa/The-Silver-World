import React, { useEffect, useState } from 'react'
import DetalleAccesorio from './DetalleAccesorio'
import Productos from '../../../Object/Productos'
import Cookies from 'js-cookie'

const AccesoriosHombres = () => {

  const { products } = Productos()

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
          data.categoria === 'H' ?
            <DetalleAccesorio
              key={index}
              data={data}
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

export default AccesoriosHombres