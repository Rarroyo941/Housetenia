import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/hero/Hero.jsx';
import Afterhero from './components/after-hero/Afterhero';
import Planes from './components/planes/Planes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './components/video-section/Video';
import Imc from './components/imc/Imc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Afterhero />
    <Planes />
    <Video/>
    <Imc />
  </React.StrictMode>
);

