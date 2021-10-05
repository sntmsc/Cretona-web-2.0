import React from 'react'

const PresentacionPersonal = () =>{
    return(
        <div id="quiensoy-quiensoy" className="quiensoy-contenedorseccion">
              <h2>¿Quién soy?</h2>
              <div className="quiensoy-contenedordeimg">
                  <img className="quiensoy-contenedor__img" src="img/quiensoy.jpg" alt="Imagen frontal de Pilar"/>
              </div>
              <span>Mara Wilson, nacida en la ciudad de Necochea, con un gran espíritu emprendedor desde pequeña.
                  Amante de la indumentaria y los animales. 
              </span>
        </div>
    )
}

const PresentacionCretona = () =>{
    return(
        <div id="quiensoy-miemprendimiento" className="quiensoy-contenedorseccion">
              <h2>Mi emprendimiento</h2>
              <div className="quiensoy-contenedordeimg">
                  <img className="quiensoy-contenedor__img" src="img/miemprendimiento.jpg" alt="Imagen frontal de Pilar"/>
              </div>
              <span>Cretona ofrece medias personalizadas
                  con diferentes diseños, abarcando gran cantidad de gustos y talles. La propuesta es clara: darle 
                  vida a tus calzados.
              </span>
              
        </div>
    )
}

const QuienSoy = () => {
    return(
      <section id="quiensoy">
        <div id="quiensoy-contenedortotal">
          <PresentacionPersonal/>
          <PresentacionCretona/>
      </div> 
      <span id="quiensoy-frasefinal">¡Complementá tu estilo de la mejor manera con Cretona Socks!
          </span>
      </section>
    )
  }
export default QuienSoy