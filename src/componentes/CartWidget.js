import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

  const { cantidad } = useContext(contexto);
  
 console.log(cantidad)
    return (
        <>
        <p>
         {/**<img src="/carrito.jpg" alt="carrito"/> */}
         <span className="material-symbols-outlined header__image"> shopping_cart</span>
         {cantidad}
         </p>
        </>
    );
  }
  
export default CartWidget;

