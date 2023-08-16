import React, { useEffect, useState } from 'react'
import './DetalleAccesorio.css'
import { Link, Outlet } from 'react-router-dom';
import DetalleInfo from './DetalleInfo';
import Cookies from 'js-cookie';

const DetalleAccesorio = ({ data, setValueCookie, handleCookie,index }) => {




    
    

    return (

        <div onMouseEnter={() => {
            handleCookie()
            setValueCookie(index)
        }} 
        
        onClick={() => {
            handleCookie()
            setValueCookie(index)
        }}
        >
            <Link to='/info-producto'>
            <section className='section'>
                <img src={data.img} alt={data.name} />
                <p>{data.name}</p>
                <p>Precio s/{data.precio} </p>

            </section>

            </Link>
            <Outlet />
        </div>

    )
}

export default DetalleAccesorio