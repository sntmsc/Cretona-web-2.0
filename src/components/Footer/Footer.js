import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {FooterPagosMobile, FooterProductos, FooterQuienSoy} from './MenuIzquierda'
import { FooterContacto, FooterRedesSociales } from './MenuDerecha'

const FooterPagosDesktop = () =>{
    const NoEsMobile = useMediaQuery({ query: '(min-width:750px)' })
    return( 
      <div id="footer-contenedor__pagos-desktop" className="footer-subcontenedor">
        {NoEsMobile &&
            <div id="pago-desktop">
                <div className="pago-subcontenedor">
                    <img  className="pago__img" src="/icons/pago-efectivo.png" alt="icono de pago en efectivo"/>
                    <span className="pago-span">Efectivo</span>
                </div>
                <div className="pago-subcontenedor">
                    <img className="pago__img" src="icons/pago-tarjeta.png" alt="icono de pago por tarjeta de débito/crédito"/>
                    <span className="pago-span">Transferencia</span>
                </div>
                <div className="pago-subcontenedor">
                    <img className="pago__img" src="icons/pago-mp.png" alt="icono de pago por Mercadopago"/>
                    <span className="pago-span">Mercado<br/>Pago</span>
                </div>
            </div>
        }
      </div>
    )
  }

 
  
  const FooterMenuIzquierda = () => {
    return(
      <div className="footer-subcontenedor footer-contenedor__izqder" id="footer-contenedor__izquierda">
        <FooterProductos/>
        <FooterPagosMobile/>
        <FooterQuienSoy/>
  </div>
    )
  }


  const FooterMenuDerecha = () => {
    return(
            <div className="footer-subcontenedor footer-contenedor__izqder" id="footer-contenedor__derecha">
            <FooterContacto/>
            <FooterRedesSociales/>
        </div>
    )
  }

  const FooterInfoFinal = () =>{
    
    return(
      <div id="footer-contenedor__webpage">
        <span id="footer-webpage__creador-span">© Cretona Socks web page by Hamber Santiago </span>
      </div>
    )
  }
  
  const Footer = () => {
    const EsDesktop = useMediaQuery({ query: '(min-width:1250px)' })
    return(
      
      <footer>
          <div id="footer-contenedor"> 
              <div id="footer-contenedor__menu">

                <FooterPagosDesktop/>
                  <div id="footer-contenedor__izqder">
                  {EsDesktop && 
                    <div id="footer-webpage__logo-contenedor">
                      <img id="footer-webpage__logo-img" src="/img/logo002.png" alt="logo de cretona socks"/>
                    </div>
                  }
                     <FooterMenuIzquierda/>
                     <FooterMenuDerecha/>
                  </div>
              </div>
              <FooterInfoFinal/>
          </div>
      </footer>
    )
  }





  export default Footer 