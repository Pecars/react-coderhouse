import { createContext, useState } from "react";

export const contexto = createContext(); 
const { Provider } = contexto;


const CartContext = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item) => {


        setCantidad(cantidad + item.cantidad)


        if (estaAgregado(item.id)) {
            const findProduct = carrito.find(x => x.id === item.id)
            
            const productIndex = carrito.indexOf(findProduct)
            const auxArray = [...carrito]
            auxArray[productIndex].cantidad += cantidad
            setCarrito(auxArray)
        } else {
            let carritoAuxiliar =  [...carrito, item]
            setCarrito(carritoAuxiliar)

        }
    }

    const estaAgregado = (id) => {

        return carrito.some(x => x.id === id)
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const precioTotal =() => {
        return carrito.reduce((acc, x) => acc += x.cantidad * x.precio, 0)
        
    }

    const eliminarProducto = (id) => {
        return setCarrito(carrito.filter(x => x.id !== id))
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito, 
        precioTotal, 
        
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CartContext;