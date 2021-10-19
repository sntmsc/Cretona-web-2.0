import {useState,useEffect, useContext} from 'react'
import { MenuVisibleContext } from './Context/MenuVisible';
import {Link} from 'react-router-dom'

export const MenuMobile = () => {
    const {menuToggle, setMenuToggle} = useContext(MenuVisibleContext);
    const [visibility, setVisibility] = useState(false);
    
    useEffect( () =>{
        if(!menuToggle){
            setVisibility(false)
        }
    },[menuToggle])

    const toggleVisibility = () =>{
        setVisibility(!visibility);
    }

    const close = () =>{
        setMenuToggle(false)
    }

    const estiloCondicionado = () => 
                menuToggle ? 
            {visibility: 'visible',
            opacity: '1',
            top:'7.5%',
            transition: 'all .7s'} :
             {visibility: 'hidden',
            opacity: '0',
            top: '-100%',
            transition: 'all .7s'}
    

    return(
            <div id="menuMobile" style={estiloCondicionado()}>
                <Link id="menuMobile-inicio__link" to="/">
                    <div className="menuMobile-submenu">Inicio</div>
                </Link>
                <div className="menuMobile-submenu" id="menuMobile-productos">
                    <div onClick={toggleVisibility}>Productos
                        {!visibility && (
                            <img className="menuMobile-productos__flecha" src={"/icons/desplegar.png"} alt="desplegar submenú"/>
                        )}
                        {visibility && (
                            <img className="menuMobile-productos__flecha" src={"/icons/contraer.png"} alt="contraer submenú"/>
                        )}
                    </div>
                    {visibility && (
                           
                            <div id="menuMobile-productos__categorias">
                                <Link className="menuMobile-productos__link" to="/adultxs" onClick={close}>
                                    <span className="menuMobile-productos__categorias" id="menuMobile-productos__adultxs">Adultxs</span>
                                </Link>
                                <Link className="menuMobile-productos__link" to="/juveniles" onClick={close}>
                                    <span className="menuMobile-productos__categorias" id="menuMobile-productos__juveniles">Juveniles</span>
                                </Link>
                                <Link className="menuMobile-productos__link" to="/ninxs" onClick={close}>
                                    <span className="menuMobile-productos__categorias" id="menuMobile-productos__niñxs">Niñxs</span>
                                </Link>
                            </div>
                    )}
                    
                </div>
                <Link id="menuMobile-quiensoy__link" to="/quiensoy" onClick={close}>
                    <div className="menuMobile-submenu" id="menuMobile-quiensoy">¿Quién soy?</div>
                </Link>
            </div>
    )
}