import React from 'react'


 export const FooterContacto = () => {
    return(
            <div className="footer-subcontenedor" id="footer-contenedor__derecha-contacto">
                <span className="footer-titulo" id="footer-contacto__titulo">Contacto</span>
                <a className="footer-links" href="mailto:pilar.etchetto@hotmail.com">
                  <span className="footer-items" id="footer-contacto__mail">E-mail</span>
                </a>
                <a className="footer-links" href="https://wa.me/542234115451">
                  <span className="footer-items" id="footer-contacto__Whatsapp">Whatsapp</span>
                </a>
                <a className="footer-links" href="/#">
                  <span className="footer-items" id="footer-contacto__celular">(2262) 411545</span>
                </a>
            </div>
    )
  }




  export const FooterRedesSociales = () => {
      return(
        <div className="footer-subcontenedor" id="footer-contacto__redes">
            <span className="footer-titulo" id="footer-redes__titulo">Redes <br/>sociales</span>
            <a className="footer-links" href="https://www.instagram.com/cretona.socks/">
            <span className="footer-items" id="footer-redes__instagram">Instagram</span>
            </a>
            <a className="footer-links" href="https://www.facebook.com/pg/cretonatienda-109876870363690/">
                <span className="footer-items" id="footer-redes__facebook">Facebook</span>
            </a>
        </div>
      )
  }



  