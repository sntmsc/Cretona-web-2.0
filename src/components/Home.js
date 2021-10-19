import React, {useRef, useEffect, useState} from 'react' 
import { useMediaQuery } from 'react-responsive'
import {readRemoteFile} from 'react-papaparse'
import {Link} from 'react-router-dom'

const VisorAutomaticoImgs = ({imgs}) => {

    const muestraSlider = useRef(null);
    
    function siguiente(){ 
            if(muestraSlider.current !==null){
                if( muestraSlider.current.children.length > 0){
                    const primera=muestraSlider.current.children[0];
                    muestraSlider.current.style.marginLeft="-200%"
                    muestraSlider.current.style.transition = "all 1s";

                    setTimeout ( () =>{
                    if(muestraSlider.current !==null){
                        muestraSlider.current.style.transition="none";
                        muestraSlider.current.appendChild(primera);
                        muestraSlider.current.style.marginLeft="-100%";
                    }
                    },1000)
                }
            }
    }

    useEffect( () => {
        setInterval( () => {
            siguiente()
        },3000)

    },[])

    
    const dropImgs = () => imgs.map( (x) => 
        <div className="muestra-slider__section" key={x.ID}>
            <img src={x.URL} className="slider-section__img" alt="muestra de medias en visor deslizante"/>
        </div>
        )
        


    return(
        <section id="muestra">
        <div className="muestra-contenedor">
            <div id="muestra-slider" ref={muestraSlider} style={{width: '300%'}} >

                {dropImgs()}
            </div>
        </div>
    </section>
    )
}

const HomeCategorias = () => {
    return(
        <section id="categorias">
            <div id="categorias-contenedor">
                <Link to='/adultxs' className="categorias-contenedor__a"> 
                    <span className="categorias-contenedor__span" id="categorias__adultxs">Adultxs</span> 
                </Link>
                <Link to='/juveniles' className="categorias-contenedor__a"> 
                    <span className="categorias-contenedor__span" id="categorias__juveniles">Juveniles</span>
                </Link> 
                <Link to='/ninxs' className="categorias-contenedor__a"> 
                    <span className="categorias-contenedor__span" id="categorias__niñxs">Niñxs</span>
                </Link>
            </div>
        </section>
    )
}

const HomeEnvio = () =>{
    return(
        <section id="envio">
            <div id="envio-contenedor">
                <img id="envio-contenedor__coche" src="icons/car.svg" alt="icono de coche para envios"/>
                <div id="envio-contenedor__calle"></div>
                <span id="envio-contenedor__texto-envio">Si compras dos pares o más <br/>¡Envío gratis!</span>
            </div>
        </section>
    )
}

const HomePago = () => {
    return(
        <section id="pago-mobile">
            <div className="pago-contenedor">
                <div className="pago-subcontenedor">
                    <img  className="pago__img" src="icons/pago-efectivo.png" alt="icono de pago en efectivo"/>
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
        </section>
    )
}

const Home = () => {
    const EsMobile = useMediaQuery({ query: '(max-width:750px)' })

    
    const [imgs, setImgs] = useState([])
    useEffect( () =>{
      const sheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vROPC3WatFLC6ri4ZqLZtgN84TSVe6HuQ0_0k26YfP9UMtef40TvpvtgAFcJTkjUCTWa6QvUY_dTzKO/pub?gid=0&single=true&output=csv'
          readRemoteFile(sheet, 
                          {
                          download: true,
                          header: true,
                          complete: (results) => {
                              var data =[...results.data]
                              data.unshift(data.pop())
                              setImgs(data)
                          }
                      })
                  },[])
                  
    return(
      <>
    <HomeCategorias/>
    <VisorAutomaticoImgs imgs={imgs} />
    <HomeEnvio/>
    {EsMobile && 
        <HomePago/>
    }
    </>
    )
}

  export default Home