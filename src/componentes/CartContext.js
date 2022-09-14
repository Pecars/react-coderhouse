import { createContext, useState } from "react";

export const contexto = createContext(); 
const { Provider } = contexto;


const CartContext = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item) => {

        //const nuevoItem = [...item, cantidad]

        setCantidad(cantidad + item.cantidad)

        console.log(carrito)
        console.log(item)

        if (estaAgregado(item.id)) {
            const findProduct = carrito.find(x => x.id === item.id)
            
            const productIndex = carrito.indexOf(findProduct)
            const auxArray = [...carrito]
            auxArray[productIndex].cantidad += cantidad
            setCarrito(auxArray)
        } else {
            let carritoAuxiliar =  [...carrito, item]
            console.log(carritoAuxiliar)
            setCarrito([carritoAuxiliar])
            console.log(item)
            console.log(carrito)

        }
    }

    const estaAgregado = (id) => {

        return carrito.some(x => x.id === id)
    }

    const eliminarProducto = (item) => {

        const index = carrito.findIndex(producto => producto.id === item.id)
        setCarrito(carrito.splice(index, index+1))
        
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const precioTotal =() => {
        return carrito.reduce((acc, x) => acc += x.cantidad * x.precio, 0)
        
    }
     const carritoVacio = (carrito) => {

        if (carrito !== []){
            return false
        }
     }
  
    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito, 
        precioTotal, 
        carritoVacio
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CartContext;