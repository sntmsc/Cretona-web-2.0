import { useState, useEffect, useContext, useRef } from 'react'
import Carousel from './carousel'
import {readRemoteFile} from 'react-papaparse';
import { ContextCompras } from '../Context/Compras';
import { CartVisible } from '../Context/CarritoVisible'

const Productos = ({googSheet, category}) =>{
    const refProducts = useRef(null);
    const [imgs, setImgs] = useState([])
    const [sheetCarousel, setSheetCarousel] = useState('')
    const [mainImg, setMainImg] = useState('');
    const [toggleCarousel, setToggleCarousel] = useState(false)
    const {compras, setCompras} = useContext(ContextCompras)
    const {carritoToggle, setCarritoToggle} = useContext(CartVisible)
    useEffect(()=>{
      if(refProducts){
        window.scrollTo({
          top: refProducts.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    },[category])

    useEffect( () =>{
      setImgs(null);
        const sheet = googSheet
            readRemoteFile(sheet,
                            {
                            download: true,
                            header: true,
                            complete: (results) => {
                                let data =[...results.data];
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
                    setMainImg(x.URL)
                  }}/>
                  <span className="productos-galeria__descripcion">{x.DESCRIPCION}<br/>${x.PRECIO}</span>
                  <button className="productos-galeria__agregarCarrito"
                  onClick={()=> {setCompras([...compras,{imagen: x.URL,categoria: category, desc: x.DESCRIPCION, precio: x.PRECIO }]);
                                        if(!carritoToggle){setCarritoToggle(true)}}}>Agregar al carrito</button>
                </div>

        )

    return(
      <section id="productos" ref={refProducts}>
          <Carousel imgSheet={sheetCarousel} mainImg={mainImg} click={toggleCarousel} onClose = {()=>setToggleCarousel(false)}/>
      <div className="productos-contenedor">
          <h2 >Medias para {category}</h2>

          {imgs ? 
            <div className="productos-galeria">
              {productos()}
            </div> : 
            <div class="spinner"></div>
          }
      </div>
  </section>
    )
  }


  export default Productos