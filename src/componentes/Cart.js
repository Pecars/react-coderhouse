import { contexto } from "./CartContext"
import { useContext } from "react"
import { Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";


const Cart = () => {

    const { agregarProducto, vaciarCarrito, eliminarProducto, cantidad, carrito, precioTotal } = useContext(contexto)

    //poner al usuario para confirmar la orden

    console.log(carrito[0].cantidad)
    return (
            <>
            
            
             {!carrito.length>0? <>
                    <div>            
                        <h2>Carrito vacío</h2>                           
                    </div>
                </>:carrito.map((item, index) => {
                return  <div class="producto">

            <div className="producto-container">
            <div className="title-container" id= "titulo-item" key = {index}>{item.titulo}</div>
            <div className="id-container" id = "id-item" key = {index}>{item.id}</div>
            <div className="price-container"id = "precio-item" key = {index}>Precio: {item.precio}</div>
            <div className="cantidad-container"id = "cantidad-item" key = {index}>Cantidad: {item.cantidad}</div>
            <Image className="image-container" src={item.foto} width="150" height="150" alt="foto producto" key = {index}/>
            
            <br/>
            </div>
                    </div>
              })}

            </>
    )
}

export default Cart