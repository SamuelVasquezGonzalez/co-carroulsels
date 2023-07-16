import { useEffect, useState } from 'react'
import './Carrousels.css'

function CoImage({src}) {
    return (
        <div>{src}</div>
    )
}
// ---------------------------------------------------------- //
function FullCarrousel({ children, controls,}) {
    const [actualImg, setActualImg] = useState([])
    const [actualIndex, setActualIndex] = useState(0)
    const imagesArray = []

        children.forEach((image) => {
            let src = image.props.src;
            if (!src) {
                src = "https://res.cloudinary.com/lm-galery/image/upload/v1689534785/co-carousels/nada_j21s0j.png";
            }
            imagesArray.push(src);
        });
    
        const CambiarImagen = (indice) => {
            setActualIndex(indice)
        }
    
        useEffect(() => {
            setActualImg(imagesArray)
            let interval = setInterval(()=>{
                setActualIndex(prevIndice => (prevIndice + 1) % imagesArray.length);
            }, 3000)
            return () => {
                clearInterval(interval);
            };
        }, [])

        return(
            <div className="Carrousel" style={{backgroundImage: `url(${actualImg[actualIndex]})`}}>
                <div className={controls === "true" ? "controls": "controls oculto"}>
                    {imagesArray.map((button, index) => (
                        <button key={index} className={index === actualIndex ? 'Carrousel__Button-active': 'Carrousel__Button' } onClick={() => CambiarImagen(index)}></button>
                    ))}
                </div>
            </div>
        )
}
// ----------------------------------------------------------- //
function SmallCarrousel({ children, controls, borderRadius}) {
    const [actualImg, setActualImg] = useState([])
    const [actualIndex, setActualIndex] = useState(0)
    const imagesArray = []

        children.forEach((image) => {
            let src = image.props.src;
            if (!src) {
                src = "https://res.cloudinary.com/lm-galery/image/upload/v1689534785/co-carousels/nada_j21s0j.png";
            }
            imagesArray.push(src);
        });
    
        const CambiarImagen = (indice) => {
            setActualIndex(indice)
        }
    
        useEffect(() => {
            setActualImg(imagesArray)
            let interval = setInterval(()=>{
                setActualIndex(prevIndice => (prevIndice + 1) % imagesArray.length);
            }, 3000)
            return () => {
                clearInterval(interval);
            };
        }, [])

        if(!borderRadius){
            borderRadius = "0px"
        }

        return(
            <div className="small__carrousel" style={{backgroundImage: `url(${actualImg[actualIndex]})`, borderRadius: borderRadius}}>
                <div className={controls === "true" ? "controls": "controls oculto"}>
                    {imagesArray.map((button, index) => (
                        <button key={index} className={index === actualIndex ? 'Carrousel__Button-active': 'Carrousel__Button' } onClick={() => CambiarImagen(index)}></button>
                    ))}
                </div>
            </div>
        )
}
// ------------------------ //
export {
    CoImage,
    FullCarrousel,
    SmallCarrousel
}