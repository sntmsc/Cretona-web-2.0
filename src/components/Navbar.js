import {useContext} from 'react'
import {Link} from 'react-router-dom'
import CarritoLogo from './Carrito/CarritoLogo'
import { useMediaQuery } from 'react-responsive'
import { MenuVisibleContext } from './Context/MenuVisible';

const NavbarMenu = () => {
  const {menuToggle,setMenuToggle} = useContext(MenuVisibleContext)
  const noEsMobile = useMediaQuery({ query: '(min-width:850px)' })
  const EsMobile = useMediaQuery({query : '(max-width:850px)'})
  const menuMobileToggle = () =>{
    setMenuToggle(!menuToggle);
  }
    return(
      <nav id="navbar-container__nav"> 
      {noEsMobile && 
        <ul id="navbar-desktop__menu">
            <li id="navdesktop-menu__productos">
              <span style={{cursor:"pointer"}} className="navdesktop-menu">Mis productos</span>
                    <ul id="navdesktop-productos__submenu">
                      <Link to='/adultxs' style={{textDecoration: 'none'}}>
                        <li>Adultxs</li>
                      </Link>
                      <Link to='/juveniles' style={{textDecoration: 'none'}}>
                        <li>Juveniles</li> 
                      </Link>
                      <Link to='/niñxs' style={{textDecoration: 'none'}}>
                        <li>Niñxs</li>
                      </Link>
                    </ul>
            </li>
          <Link to='/quiensoy' style={{textDecoration: 'none'}}>
            <li className="navdesktop-menu">¿Quién soy?</li>
          </Link>
        </ul>
        }
      {EsMobile && !menuToggle &&
        <span className="navmobile-icon__container" onClick={menuMobileToggle}>
          <img className="navmobile-icon" src={"/icons/menu-button.png"} alt="abrir menú desplegable"/>
        </span>
       }
       {EsMobile && menuToggle &&
          <span className="navmobile-icon__container" onClick={menuMobileToggle}>
            <img className="navmobile-icon" src={"/icons/close.png"} alt="cerrar menú desplegable" 
            style={{width:"40%", height:"40%"}}/>
          </span>
       }
      </nav>
    )
  }
  
  const NavbarRedes = () => {
    return(
      <div id="navbar-redes">
        <span id="redes-whatsapp" className="navbar-redes__items"> 
            <a href="https://wa.me/542234115451">
                <img src={"/icons/Whatsapp.ico"} id="whatsapp-icono" className="redes-iconos" alt="icono de Whatsapp"/>
            </a>
        </span>
        <span id="redes-facebook" className="navbar-redes__items">
            <a href="https://www.facebook.com/pg/cretonatienda-109876870363690/">
                <img src={"/icons/facebook.png"} id="facebook-icono" className="redes-iconos" alt="icono de Facebook"/>
            </a>
        </span>
        <span id="redes-instagram" className="navbar-redes__items"> 
            <a href="https://www.instagram.com/cretona.socks/">
                <img src={"/icons/instagram.svg"} id="instagram-icono" className="redes-iconos" alt="icono de Instagram"/>
            </a>
        </span>
      </div>
    )
  }
  
  
  
  const Navbar = () => {
    return(
        <section id="navbar">
            <div id="navbar-container">
                <NavbarMenu/>
                <NavbarRedes/>
                <CarritoLogo/>
            </div>
        </section>
    )
  }

  export default Navbar