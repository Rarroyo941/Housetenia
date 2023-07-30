import './Style.css';
import logo from '../../imagenes/housetenia-logo-black-sinfondo.jpg';
import gimnasta from '../../imagenes/pexels-anush-gorak-1431282-removebg.jpg';
import {AiOutlineDown} from 'react-icons/ai';
import {FaSearchengin} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useRef } from 'react';

function Hero() {
        const heroContainerRef = useRef(null);
        const heroImgRef = useRef(null);
      
        useEffect(() => {
          const heroDiv = heroContainerRef.current;
          const paragraphs = heroDiv.querySelectorAll('p');
          const button = heroDiv.querySelector('.hero-btn');
      
          paragraphs.forEach((paragraph, index) => {
            paragraph.style.opacity = '1';
            paragraph.style.transform = 'translateX(0)';
            paragraph.style.transitionDelay = `${index * 0.5}s`;
          });
      
          button.style.opacity = '1';
          button.style.transform = 'translateX(0)';
          button.style.transitionDelay = `${paragraphs.length * 0.5}s`;
      
          const img = heroImgRef.current;
            img.style.opacity = '1';
            img.style.transitionDelay = '2.5s';
        }, []);

  return (
    <div className='navbar-hero-container'>
        <navbar className="navbar">
            <div className='navbar-logo-container'>
                <img src={logo} alt='logo'/>
                <p><span className='span-house'>HOUSE</span><span className='span-tenia'>TENIA</span></p>
            </div>
            <a href='#'>INICIO <AiOutlineDown className='a-icon'/></a>
            <a href='#'>CLASES <AiOutlineDown className='a-icon'/></a>
            <a href='#'>PLANES <AiOutlineDown className='a-icon'/></a>
            <a href='#'>BLOG <AiOutlineDown className='a-icon'/></a>
            <a href='#'>OPINIONES <AiOutlineDown className='a-icon'/></a>
            <a href='#'>CONTACTO <AiOutlineDown className='a-icon'/></a>
            <div className='navbar-search-container'><FaSearchengin/></div>
        </navbar>
        <div className='hero-container'>
            <div ref={heroContainerRef}  className='hero-izquierdo'>
                <p>ALCANZÁ TUS METAS</p>
                <p>TRANSFORMÁ</p>
                <p>TU CUERPO</p>
                <p>Bienvenido a nuestro equipo de entrenamiento personalizado. Juntos, alcanzaremos tus metas de acondicionamiento físico con un programa adaptado a tus necesidades y objetivos.</p>
                <p>¡Comencemos esta emocionante travesía hacia un nuevo tú!</p>
                <Button className='hero-btn'>EMPEZÁ HOY</Button>
            </div>
            <div className='hero-derecho'>
                <div ref={heroImgRef}className='hero-img-container'>
                    <img src={gimnasta} alt='gimnasta'/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero