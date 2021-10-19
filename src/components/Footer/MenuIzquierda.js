import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom'



 export const FooterPagosMobile = () =>{
    const EsMobile = useMediaQuery({ query: '(max-width:750px)' })
    return(
        <>
            {EsMobile && 
                <div className="footer-subcontenedor" id="footer-contenedor__pagos-mobile">
                
                    <span className="footer-titulo" id="footer-mobile_mediosDePago">
                        Medios de <br/>pago</span>
                    <a className="footer-links" href="/#">
                    <span className="footer-items">Efectivo</span>
                    </a>
                    <a className="footer-links" href="/#">
                    <span className="footer-items">Transferencia</span>
                    </a>
                    <a className="footer-links" href="/#">
                    <span className="footer-items">Mercado Pago</span>
                    </a>
                </div>
                }
        </>    
    )
  }

  export const FooterProductos = () => {
      return(
        <div className="footer-subcontenedor" id="footer-contenedor__productos">
            <span className="footer-titulo" id="footer-productos__titulo">Productos</span>
            <Link className="footer-links" to='/adultxs'>
            <span className="footer-items" id="footer-productos__adultxs">Adultxs</span>
            </Link>
            <Link className="footer-links" to='/juveniles'>
            <span className="footer-items" id="footer-productos__juveniles">Juveniles</span>
            </Link>
            <Link className="footer-links" to='/ninxs'>
            <span className="footer-items" id="footer-productos__niñxs">Niñxs</span>
            </Link>
        </div>
      )
  }

  export const FooterQuienSoy = () =>{
    return(
      <div className="footer-subcontenedor" id="footer-contenedor__quiensoy">
          <span className="footer-titulo">Cretona</span>
          <a className="footer-links" href="/quiensoy">
              <span className="footer-items">¿Quien soy?</span>
          </a>
      </div> 
    )
}