import { MenuItemOption } from "@chakra-ui/react";
import { Image, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import {Route, Redirect, useState} from "react"
import ItemDetailContainer from "./ItemDetailContainer";

function ItemDetail(item) {
  console.log(item)
  console.log(item.item.id)

    return (
      <>
      <div className="producto-container">
            <div className="title-container" id= "titulo-item">{item.item.titulo}</div>
            <div className="id-container" id = "id-item">{item.item.id}</div>
            <div className="descripcion" id="descripcion-item">{item.item.descripcion}</div>
            <div className="price-container"id = "precio-item">Precio: {item.item.precio}</div>
            <Image className="image-container" src={item.item.foto} width="150" height="150" alt="foto producto"/>
            <br/>
            <ItemCount stock={item.item.stock} initial={0}/>
            
        </div>
      </> 
    );
  }
  
  export default ItemDetail;
  