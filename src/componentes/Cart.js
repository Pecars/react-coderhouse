import { contexto } from "./CartContext"
import { useContext } from "react"
import { Image, Button } from "react-bootstrap";


const Cart = () => {

    const { agregarProducto, vaciarCarrito, eliminarProducto, cantidad, carrito, precioTotal, carritoVacio } = useContext(contexto)

    console.log("carrito: " + carrito)
    console.log("carrito vacío: " + carritoVacio(carrito))

    return (
            <>
             {carritoVacio && carrito.map((item, index) => {
                return  <div class="producto">

            <div className="producto-container">
            <div className="title-container" id= "titulo-item" key = {index}>{item.titulo}</div>
            <div className="id-container" id = "id-item" key = {index}>{item.id}</div>
            <div className="price-container"id = "precio-item" key = {index}>Precio: {item.precio}</div>
            <div className="cantidad-container"id = "cantidad-item" key = {index}>Precio: {item.cantidad}</div>
            <Image className="image-container" src={item.foto} width="150" height="150" alt="foto producto" key = {index}/>
            <br/>
            </div>
                    </div>
              })}
              {!carritoVacio &&
                <>
                    <div>            
                        <h2>Carrito vacío</h2>                           
                    </div>
                </>
}
            </>
    )
}

export default Cart