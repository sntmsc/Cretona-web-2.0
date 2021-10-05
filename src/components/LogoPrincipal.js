import React from 'react'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const LogoPrincipal = () => {
  const NoEsMobile = useMediaQuery({ query: '(min-width:850px)' })
    return(
      <section id="presentacion">
        <div id="presentacion-contenedor">
          {NoEsMobile && 
        <Link id="presentacion-link" to='/'/>
          }
          <img id="presentacion-contenedor__img" src={"/img/cretona-logo.png"} alt="logo de Cretona"/>
        </div> 
        <span id="presentacion-frase">Complementando tu estilo.</span>
      </section>
    )
  }



  export default LogoPrincipal