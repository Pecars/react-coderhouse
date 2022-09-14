import { useContext } from "react"
import { contexto} from "./CartContext"
import {Badge} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

function CartWidget() {

 const { cantidad } = useContext(contexto);

  
 console.log(cantidad)
    return (
        <>
        <p>
         <Badge badgeContent = {cantidad}>
          <ShoppingCartIcon/>
         </Badge>
         </p>
        </>
    );
  }
  
export default CartWidget;

