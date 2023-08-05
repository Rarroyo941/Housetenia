import React, { useRef } from 'react';
import './Style.css';
import video from '../../imagenes/video.mp4';
import video2 from '../../imagenes/video2.mp4';
import {GiMeditation, GiScales, GiHealthIncrease, GiWeightLiftingUp} from 'react-icons/gi'

const Video = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = video2;
      videoElement.play();
    }
  };

  return (
    <section className='video-section'>
      <div className='video-container'>
        <video ref={videoRef} autoPlay muted onEnded={handleVideoEnded}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className='video-texts-container'>
        <div className='video-text'>
          <div className="video-text-icon-border">
            <GiMeditation className='video-text-icon'/>
          </div>
          <h5>CUERPO Y MENTE</h5>
          <p>Nuestro entrenador construirá un balance excepcional entre tu cuerpo y tu mente</p>
        </div>
        <div className='video-text'>
          <div className="video-text-icon-border">
            <GiScales className='video-text-icon'/>
          </div>
          <h5>CONSEJOS PARA UNA VIDA SALUDABLE</h5>
          <p>Descubre cómo nutrir y cuidar tu cuerpo para alcanzar el bienestar que mereces.</p>
        </div>

        <div className='video-text'>
          <div className="video-text-icon-border">
            <GiHealthIncrease className='video-text-icon'/>
          </div>
          <h5>ESTRATEGIAS PARA EL ÉXITO</h5>
          <p>Explora planes especializados diseñados para ayudarte a alcanzar tu máximo potencial en todas las áreas de tu vida.</p>
        </div>

        <div className='video-text'>
          <div className="video-text-icon-border">
            <GiWeightLiftingUp className='video-text-icon'/>
          </div>
          <h5>PROGRAMAS DE ENTRENAMIENTO PERSONALIZADOS</h5>
          <p>Descubre entrenamientos adaptados a tu nivel físico y metas, para que puedas lograr un progreso constante y saludable.</p>
        </div> 
      </div>
    </section>
  );
};

export default Video;