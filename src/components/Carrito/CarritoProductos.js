import {useContext} from 'react'
import { CartVisible } from '../Context/CarritoVisible'
import { ContextCompras } from '../Context/Compras'

const CarritoProductos = () => {
    const {carritoToggle, setCarritoToggle} = useContext(CartVisible)
    const {compras, setCompras} = useContext(ContextCompras)

    const cerrarCarrito = () => {
        if(carritoToggle){
            setCarritoToggle(false);
        }
    }

    const estiloCondicionado = () => 
                carritoToggle ? 
            {visibility: 'visible',
            opacity: '1',
            top:'0%',
            transition: 'all 1s'} :
             {visibility: 'hidden',
            opacity: '0',
            top: '-100%',
            transition: 'all 1s'}

    
    const productosElegidos = () => compras.map( (x,i) => 
                     
                        <div key={i} className="carritoProductos-contenedor__capa3">
                            <span className="carritoProductos-contenedor__img">
                                <img src={x.imagen} className="carritoProductos-imgItem" alt="producto para comprar"/>
                            </span>
                            <span className="carritoProductos-contenedor__nombreItem">
                                <p className="carritoProductos-nombreItem">{x.desc}</p>
                            </span>
                            <span className="carritoProductos-contenedor__precioCancelacion">
                                <p className="carritoProductos-precioItem">{x.precio}</p>
                                <img className="carritoProductos-cancelacion" src="/icons/delete.png" alt="cancelación de compra"
                                    onClick={ () =>{
                                        let elementoFiltrado = [...compras].filter(z => z !== x);
                                        setCompras(elementoFiltrado);
                                        if(compras.length === 1){
                                            cerrarCarrito()
                                        }}}/>
                            </span>
                        </div>

    )
    const precioTotal = () => {
        return compras.reduce((acumulador, producto) => acumulador + parseInt(producto.precio),0) ;
    }

    const whatsapp = () => {
        let link = encodeURI(`https://api.whatsapp.com/send?phone=542262411545&text=*Pedido online*:
            `)
        let total = 0
        compras.forEach( (x) =>{ 
            let descripcion = x.desc.split(' ').join('%20')
            link += encodeURI(`*descripcion:* ${descripcion} *categoria:* ${x.categoria} *precio:* $${x.precio}
            `)
            total += parseInt(x.precio)
        })
        link+= encodeURI(`*Total:* $${total}`)
        return link
    }

    return (

                <div id="carritoProductos-contenedor__capa1" style={estiloCondicionado()}>
                    <span id="carritoProductos-close" onClick={cerrarCarrito}>x</span>
                    <div id="carritoProductos-contenedor__capa2">
                    {productosElegidos()}
                    </div>
                    <div id="carritoProductos-contenedor__total">
                        <p id="carritoProductos-total">Total: ${precioTotal()}</p>
                    </div>
                    <div id="carritoProductos-contenedor__comprar">
                        <a id="carritoProductos-link__comprar" href={whatsapp()} target="_blank" rel="noreferrer">
                            <button id="carritoProductos-comprar">comprar</button>
                        </a>
                    </div>
                </div>

    )
}

export default CarritoProductos