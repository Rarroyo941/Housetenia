import './Style.css';
import logo from '../../imagenes/housetenia-logo-black-sinfondo.jpg'
import gimnasta from '../../imagenes/pexels-anush-gorak-1431282-removebg.jpg';
import {AiOutlineDown} from 'react-icons/ai'
import {FaSearchengin} from 'react-icons/fa'

function Hero() {
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
            <div className='hero-izquierdo'>

            </div>
            <div className='hero-derecho'>
                <img src={gimnasta} alt='gimnasta'/>
            </div>
        </div>
    </div>
  )
}
export default Hero