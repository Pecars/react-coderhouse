import { useState } from "react"
import {Button} from "@mui/material"
import Swal from "sweetalert2";

function ItemCount({stock, initial, onAdd}) {  

    const [contador, setContador] = useState(initial);
    
    const aumentarContador = () => {

        if(contador < stock){ 
            setContador(contador + 1)
        }

    } 

    const disminuirContador =()=>{
        if(contador > 0){
            setContador(contador-1)
           
        } 
    }

    const confirm =()=>{
        if(contador>0){
        onAdd(contador)
        Swal.fire({
            icon: 'success',
            title: `Se agregaron ${contador} productos al carrito`,
            showConfirmButton: true,
          })  

        }else{

            Swal.fire({
                icon: 'fail',
                title: `Debes seleccionar la cantidad de productos para agregar`,
                showConfirmButton: true,
              })  
        }

    }

    return (
        <>
        <div className="caja-contador-botones">
            <Button color="secondary" className="button__carrito elementos-contador" onClick={disminuirContador}>-</Button>
            <div className="caja-contador elementos-contador">{contador}</div>
            <Button className="button__carrito elementos-contador" onClick={aumentarContador}>+</Button>
        </div>

        <Button variant="filled" color ="success" className="boton-agregar-item" onClick={confirm}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount