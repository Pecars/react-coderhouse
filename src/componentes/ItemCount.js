import { useState } from "react"

function ItemCount(props) {  

    const [contador, setContador] = useState(props.initial)
    
    //aumentar contador
    const aumentarContador = () => {

        if(contador < props.stock){ 
            setContador(contador + 1)
        }
    } 

    // disminuir contador
    const disminuirContador =()=>{
        if(contador > 0){
            setContador(contador-1)
        } 
    }

    return (
        <>
        <div className="caja-contador-botones">
            <button className="button__carrito" onClick={aumentarContador}>+</button>
            <div className="caja-contador">{contador}</div>
            <button className="button__carrito" onClick={disminuirContador}>-</button>
        </div>
        <div className="boton-agregar-item">Agregar al carrito</div>
        </>
    )
}

export default ItemCount