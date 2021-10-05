import { useContext } from 'react'
import { CartVisible } from '../Context/CarritoVisible'
import { ContextCompras} from '../Context/Compras'


const CarritoLogo = () => {
    const {compras} = useContext(ContextCompras)
    const {carritoToggle, setCarritoToggle} = useContext(CartVisible)

    const abrirCarrito = () => {
        if (!carritoToggle){
                setCarritoToggle(true);

        }
    }
    
    return(
        
        <span id="carritoItem-all" onClick={abrirCarrito}>
            <img src="/icons/carrito.png" id="carritoItem-icono" alt="carrito de compras"/>
            <p id="carritoItem-contador"> {compras.length}</p>
        </span>
        
    
    )
}






export default CarritoLogo