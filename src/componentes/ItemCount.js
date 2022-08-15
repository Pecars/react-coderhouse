import { useState } from "react"

function ItemCount({stock, initial, customMethod}) {  

    const [contador, setContador] = useState(initial)
    
    //aumentar contador
    const aumentarContador = () => {

        if(contador < stock){ 
            setContador(contador + 1)
        }

    } 

    // disminuir contador
    const disminuirContador =()=>{
        if(contador > 0){
            setContador(contador-1)
           
        } 
    }

    const onAdd =(e)=>{

        customMethod(contador);
        console.log(contador)
    }

  

    return (
        <>
        <div className="caja-contador-botones">
            <button className="button__carrito elementos-contador" onClick={aumentarContador}>+</button>
            <div className="caja-contador elementos-contador">{contador}</div>
            <button className="button__carrito elementos-contador" onClick={disminuirContador}>-</button>
        </div>
        <div className="boton-agregar-item" onClick={onAdd}>Agregar al carrito</div>
        </>
    )
}

export default ItemCount