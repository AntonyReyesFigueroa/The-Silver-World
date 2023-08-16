import React from 'react'
import i1 from '../img/Productos/p1.jpg'
import i2 from '../img/Productos/p2.jpg'
import i3 from '../img/Productos/p3.jpg'
import i4 from '../img/Productos/p4.jpg'
import i5 from '../img/Productos/p5.jpg'
import i6 from '../img/Productos/p6.jpg'
import i7 from '../img/Productos/p7.jpg'
import i8 from '../img/Productos/p8.jpg'
import i9 from '../img/Productos/p9.jpg'
import i10 from '../img/Productos/p10.jpg'
import i11 from '../img/Productos/p11.jpg'
import i12 from '../img/Productos/p12.jpg'
import i13 from '../img/Productos/p13.jpg'
import i14 from '../img/Productos/p14.jpg'
import i15 from '../img/Productos/p15.jpg'
import i16 from '../img/Productos/p16.jpg'
import i17 from '../img/Productos/p17.jpg'
import i18 from '../img/Productos/p18.jpg'
import i19 from '../img/Productos/p19.jpg'
import i20 from '../img/Productos/p20.jpg'
import i21 from '../img/Productos/p21.jpg'
import i22 from '../img/Productos/p22.jpg'
import i23 from '../img/Productos/p23.jpg'
import i24 from '../img/Productos/p24.jpg'
import i25 from '../img/Productos/p25.jpg'
import i26 from '../img/Productos/p26.jpg'
import i27 from '../img/Productos/p27.jpg'
import i28 from '../img/Productos/p28.jpg'
import i29 from '../img/Productos/p29.jpg'
import i30 from '../img/Productos/p30.jpg'
import i31 from '../img/Productos/p31.jpg'


const Productos = () => {

    class Producto {
        constructor(name, img, categoria, precio, stock){
            this.name = name;
            this.img = img;
            this.categoria = categoria;
            this.precio = precio;
            this.stock = stock;
        }
    }

    const p1 = new Producto('Collar',i1, "H", 30, 10 )
    const p2 = new Producto('Pulsera 1',i2, "M", 10, 10 )
    const p3 = new Producto('Pulsera',i3, "H", 10, 10 )
    const p4 = new Producto('Pulsera 1',i4, "M", 25, 10 )
    const p5 = new Producto('Pulsera 1',i5, "M", 25, 10 )
    const p6 = new Producto('Pulsera 1',i6, "M", 25, 10 )
    const p7 = new Producto('Pulsera 1',i7, "M", 25, 10 )
    const p8 = new Producto('Pulsera 1',i8, "M", 25, 10 )
    const p9 = new Producto('Pulsera 1',i9, "M", 25, 10 )
    const p10 = new Producto('Aretes',i10, "H", 15, 10 )
    const p11 = new Producto('Pulsera 1',i11, "M", 25, 10 )
    const p12 = new Producto('Pulsera 1',i12, "M", 25, 10 )
    const p13 = new Producto('Pulsera 1',i13, "M", 25, 10 )
    const p14 = new Producto('Pulsera 1',i14, "M", 25, 10 )
    const p15 = new Producto('Pulsera 1',i15, "M", 25, 10 )
    const p16 = new Producto('Pulsera 1',i16, "M", 25, 10 )
    const p17 = new Producto('Pulsera 1',i17, "M", 25, 10 )
    const p18 = new Producto('Pulsera 1',i18, "M", 25, 10 )
    const p19 = new Producto('Pulsera 1',i19, "M", 25, 10 )
    const p20 = new Producto('Pulsera 1',i20, "M", 25, 10 )
    const p21 = new Producto('Collar para hombre',i21, "H", 18, 10 )
    const p22 = new Producto('Pulsera 1',i22, "M", 25, 10 )
    const p23 = new Producto('Pulsera 1',i23, "M", 25, 10 )
    const p24 = new Producto('Pulsera 1',i24, "M", 25, 10 )
    const p25 = new Producto('Pulsera 1',i25, "M", 25, 10 )
    const p26 = new Producto('Collar de plata',i26, "H",65 , 10 )
    const p27 = new Producto('Pulsera 1',i27, "M", 25, 10 )
    const p28 = new Producto('Pulsera 1',i28, "M", 25, 10 )
    const p29 = new Producto('Pulsera 1',i29, "M", 25, 10 )
    const p30 = new Producto('Pirsic triangular',i30, "H", 12, 10 )
    // const p31 = new Producto('Pulsera 1',i31, "H", 25, 10 )

    const products = []
    products.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30)



  return {p1, p2 , p3, p4, p5, p6, p7, p8, p9, products}
}

export default Productos