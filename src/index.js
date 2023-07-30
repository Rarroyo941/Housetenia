import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/hero/Hero.jsx';
import Afterhero from './components/after-hero/Afterhero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Afterhero />
  </React.StrictMode>
);

