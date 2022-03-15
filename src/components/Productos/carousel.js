import {useState,useEffect} from "react";
import {readRemoteFile} from 'react-papaparse';



export default function Carousel({imgSheet,click, onClose, mainImg}){

    const [visible, setVisible] = useState(false)

    const carouselOff = () => {
        setVisible(false);
        onClose();
        setImgs([]);
        setLoaded(false);
        setSelectedIndex(0);
    }

    useEffect( () =>{
        setVisible(click)
    },[click])
    
    if(visible){
        document.body.classList.add('no-scroll');
    }
    else{
        document.body.classList.remove('no-scroll');
    }
    
    const [imgs, setImgs] = useState([])

    useEffect( () =>{
        const sheet = imgSheet
        if(sheet !== ''){
            readRemoteFile(sheet, 
                            {
                            download: true,
                            header: true,
                            complete: (results) => {
                                var data =[...results.data]
                                setImgs(data)
                            }
                        })
                    }
                    },[imgSheet])

    const images = imgs.map( (x) => x.URL);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect( () =>{
        setSelectedImage(mainImg)
    },[mainImg])
    
    const [loaded, setLoaded] = useState(false);
  
    const selectNewImage = ( index, images, next) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next === true ? index < images.length - 1 : index > 0;
            const nextIndex = next === true ? (condition ? index+ 1 : 0) : condition ? index - 1 : images.length - 1; 
            setSelectedIndex(nextIndex);
        }, 300);
    };

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images, true)
    }
    return( 
    <>
    {visible && (
            <>
                <div id="carousel-container">
                <img src={selectedImage}
                    alt="imagenes de producto" id="carousel-img" className={loaded ? "carousel-img__loaded" : "carousel-img__noloaded"} onLoad={() => setLoaded(true)}/>
             {imgs.length>1 && (  
                 <>
                    <button className="carousel__btn" id="carousel-btn__izq" onClick={previous}>{"<"}</button>
                    <button className="carousel__btn" id="carousel-btn__der" onClick={next}>{">"}</button>
                </>
                )}
                <span id="carousel__x" onClick={carouselOff}>{"x"}</span>
            
                </div>
                <div id="carousel-outBackground" onClick={carouselOff}>
                </div>
            </>
    )}

    </>
    )
}