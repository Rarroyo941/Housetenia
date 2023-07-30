import './Style.css';
import React from 'react';
import mujerpelota from '../../imagenes/mujer-pelota.jpg';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {LiaClipboardListSolid} from 'react-icons/lia'
import {CgGym} from 'react-icons/cg'

function Afterhero() {
    return(
        <section className='after-hero-section'>
            <div className='after-hero-titulo'>
                <h1>ENTRENADOR PERSONAL</h1>
                <h4>PASIÓN POR LA SALUD Y EL FITNESS</h4>
                <p>Tu aliado valioso para buscar mejorar tu bienestar físico y alcanzar tu máximo potencial</p>
            </div>
            <div className='after-hero-contenedor'>
                <div className='after-hero-contenedor-izq'>
                    <img src={mujerpelota} alt="mujer ejercitandose"/>
                </div>
                <div className='after-hero-contenedor-der'>
                    <div className='after-hero-contenedor-der-articulo'>
                        <AiOutlineWhatsApp className='after-hero-icon'/>
                        <p>Seguimiento las 24 hs</p>
                    </div>
                    <div className='after-hero-contenedor-der-articulo segundo-articulo'>
                        <LiaClipboardListSolid className='after-hero-icon'/>
                        <p>Tu plan personalizado</p>
                    </div>
                    <div className='after-hero-contenedor-der-articulo'>
                        <CgGym className='after-hero-icon' />
                        <p>Entrena donde gustes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Afterhero