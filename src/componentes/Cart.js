import { contexto } from "./CartContext"
import { useContext, Page } from "react"
import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import { Button } from "@mui/material"


const Cart = () => {

    const {  vaciarCarrito, eliminarProducto, cantidad, carrito, precioTotal } = useContext(contexto)

    const [carroVacio, setCarroVacio]=useState(true)

    const valoresParaCheckout ={
        precioTotal:precioTotal, 
        cantidad: cantidad
    }

    useEffect(()=>{
        
        if(carrito.length>0){
            setCarroVacio(false)
        }
      },[carrito])

    return (
            <div className ="checkout-container">
                          <div class="producto checkout-container__son">
                {carrito.map((item, index) => {
                return  <>
                       

                            <div className="producto-container">
                                <div className="title-container" id= "titulo-item" key = {index}>{item.titulo}</div>
                                <div className="price-container"id = "precio-item" key = {index}>Precio: {item.precio}</div>
                                <div className="cantidad-container"id = "cantidad-item" key = {index}>Cantidad: {item?.cantidad}</div>
                                <Image className="image-container" src={item.foto} width="150" height="150" alt="foto producto" key = {index}/>
                                <Button variant="contained"  onClick={() => eliminarProducto(item.id)}>Eliminar producto</Button>
                            </div>
                         </>
              })
              
              }
              </div>
              {carroVacio? <>
                    <div>            
                        <h2>Carrito vacío</h2>                           
                    </div>
                </>:<>
                <div  className="checkout-container__son">
                    <div className="total checkout-container__secondary">{`Total a pagar: $ ${precioTotal()}`}</div>
                    <div  className="checkout-container__secondary">{<UserDetails value={valoresParaCheckout}/>}</div> 
                </div>
                <div className="checkout-container__tertiary">
                    <Button onClick={() => vaciarCarrito()} variant="contained" >Vaciar carrito</Button>
                </div>
                </>}
             

            </div>
    )
}

export default Cart