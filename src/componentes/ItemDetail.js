import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import ItemCount from "./ItemCount";
import {Route, Redirect, useState, useEffect, useContext} from "react"
import ItemDetailContainer from "./ItemDetailContainer";
import {Link} from "react-router-dom"
import { contexto } from "./CartContext"


function ItemDetail(item) {
  console.log(item)
 
  const { agregarProducto } = useContext(contexto)

  const onAdd=(contador)=>{

    console.log("reacciona al evento")
    item.item.cantidad = contador
    agregarProducto(item.item)
    console.log(item)
    console.log(item.item.cantidad)

    console.log(contexto)
  }

    return (
      <>
      
      <div className="producto-container">
        
            <div className="title-container" id= "titulo-item">{item.item.titulo}</div>
            <div className="id-container" id = "id-item">{item.item.id}</div>
            <div className="descripcion" id="descripcion-item">{item.item.descripcion}</div>
            <div className="price-container"id = "precio-item">Precio: {item.item.precio}</div>
            <Image className="image-container" src={item.item.foto} width="150" height="150" alt="foto producto"/>
            <br/>
            <div> 
              <ItemCount stock= {item.item.stock} initial={0} onAdd= {onAdd}/>
            </div>
            
        </div>
        <div  class="cart__button" >
          <Button variant="contained"> <div><Link to="/cart" onClick={onAdd}>Finalizar compra</Link></div></Button>
        </div>
       
      </> 
    );
  }
  
  export default ItemDetail;