import {useState, useEffect, useContext} from 'react'
import Carousel from './carousel'
import {readRemoteFile} from 'react-papaparse';
import { ContextCompras } from '../Context/Compras';
import { CartVisible } from '../Context/CarritoVisible'

const Productos = ({googSheet, category}) =>{
    

    const [imgs, setImgs] = useState([])
    const [sheetCarousel, setSheetCarousel] = useState('')
    const [toggleCarousel, setToggleCarousel] = useState(false)
    const {compras, setCompras} = useContext(ContextCompras)
    const {carritoToggle, setCarritoToggle} = useContext(CartVisible)

    useEffect( () =>{
        const sheet = googSheet
            readRemoteFile(sheet, 
                            {
                            download: true,
                            header: true,
                            complete: (results) => {
                                var data =[...results.data]
                                setImgs(data)
                            }
                        })
                    },[googSheet])

    const productos = () => imgs.map( x => 
                <div key={x.ID} className="productos-galeria__contenedores">
                  <img className="productos-galeria__imgs" alt="medias" src={x.URL}
                  onClick={ () => {
                    setSheetCarousel(x.SHEET)
                    setToggleCarousel(true)
                  }}/>
                  <span className="productos-galeria__descripcion">{x.DESCRIPCION}<br/>${x.PRECIO}</span>
                  <button className="productos-galeria__agregarCarrito" onClick={()=> {setCompras([...compras,{imagen: x.URL,categoria: category, desc: x.DESCRIPCION, precio: x.PRECIO }]);
                                        if(!carritoToggle){setCarritoToggle(true)}}}>Agregar al carrito</button>
                </div>
            
        )
    
    return(
      <section id="productos">
          <Carousel imgSheet={sheetCarousel} click={toggleCarousel} onClose = {()=>setToggleCarousel(false)}/>
      <div className="productos-contenedor">
          <h2 >Medias para {category}</h2>
          <div className="productos-galeria">
              
        {productos()}

          </div>
      </div>
  </section>
    )
  }


  export default Productos