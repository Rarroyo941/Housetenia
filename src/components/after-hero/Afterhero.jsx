import './Style.css';
import React, { useEffect }from 'react';
import mujerpelota from '../../imagenes/Workout-Gym-Fitness-Female-PNG-Image.png';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {LiaClipboardListSolid} from 'react-icons/lia'
import {CgGym} from 'react-icons/cg'

function Afterhero() {
    useEffect(() => {
        const afterHeroContainer = document.querySelector('.after-hero-contenedor-izq');
        const afterHeroArticulos = document.querySelectorAll('.after-hero-contenedor-der-articulo');

        function isElementInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
        function handleScrollAnimation() {
            if (isElementInViewport(afterHeroContainer)) {
              afterHeroContainer.classList.add('show');
              afterHeroArticulos.forEach((articulo) => {
                if (isElementInViewport(articulo)) {
                  articulo.classList.add('show');
                } else {
                  articulo.classList.remove('show');
                }
              });
            } else {
              afterHeroContainer.classList.remove('show');
              afterHeroArticulos.forEach((articulo) => {
                articulo.classList.remove('show');
              });
            }
          }
      
          window.addEventListener('scroll', handleScrollAnimation);
          handleScrollAnimation();
      
          return () => {
            window.removeEventListener('scroll', handleScrollAnimation);
          };
        }, []);
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