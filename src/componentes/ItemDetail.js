import { Button, Card } from "@mui/material";
import { Image } from "react-bootstrap";
import ItemCount from "./ItemCount";
import {useContext} from "react"
import {Link} from "react-router-dom"
import { contexto } from "./CartContext"


function ItemDetail(item) {

  item= item.item
 
  const { agregarProducto } = useContext(contexto)

  const onAdd=(contador)=>{

    item.cantidad = contador
    agregarProducto(item)

  }

    return (
      <>
      
      <div className="producto-container">
        <Card>
        <div className="title-container" id= "titulo-item">{item.titulo}</div>
            <div className="id-container" id = "id-item">{item.id}</div>
            <div className="descripcion" id="descripcion-item">{item.descripcion}</div>
            <div className="price-container"id = "precio-item">Precio: {item.precio}</div>
            <Image className="image-container" src={item.foto} width="150" height="150" alt="foto producto"/>
            <br/>
            <div> 
              <ItemCount stock= {item.stock} initial={0} onAdd= {onAdd}/>
            </div>
        </Card>
        

            
        </div>
        <div  class="cart__button" >
          <Button variant="contained"> <div><Link to="/cart">Finalizar compra</Link></div></Button>
        </div>
       
      </> 
    );
  }
  
  export default ItemDetail;