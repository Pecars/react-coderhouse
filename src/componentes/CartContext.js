import { createContext, useState } from "react";

export const contexto = createContext(); 
const { Provider } = contexto;


const CartContext = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item) => {

        setCantidad(cantidad + item.item.cantidad)

        console.log(carrito.length)
        console.log(item.item)
        if(carrito.length===0){
            setCarrito(carrito.push(item.item))
            console.log("entra")
            console.log(carrito)
        }else{
            const index = carrito.findIndex(producto => producto.id === item.item.id)
            if(index>= 0){
                setCarrito(carrito.push(item.item))
            }else{
                let producto = carrito.find(producto => producto.id === item.item.id)
                console.log(producto)

                producto.cantidad = producto.cantidad+ cantidad; 
                setCarrito(carrito.splice(index, index+1))
                setCarrito(carrito.push(producto))
            }
        }
        console.log(carrito)

    }

    const eliminarProducto = (item) => {

        const index = carrito.findIndex(producto => producto.id === item.item.id)
        setCarrito(carrito.splice(index, index+1))
        
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


  
    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CartContext;