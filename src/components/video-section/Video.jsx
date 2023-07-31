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
        <GiMeditation/>
        </div>
        <div className='video-text'>
        <GiScales/>
        </div> 
        <div className='video-text'>
        <GiHealthIncrease/>
        </div> 
        <div className='video-text'>
        <GiWeightLiftingUp/>
        </div> 
      </div>
    </section>
  );
};

export default Video;