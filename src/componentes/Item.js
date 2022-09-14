import { Image, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import {NavLink} from "react-router-dom"

const Item = ({item}) => {
  const [pulsado, setPulsado] = useState(false);

  const url = "/item/"+item.id;

  console.log(item)
  console.log(item.descripcion)
    return (
      <>
      <div className="producto-container">
            <div className="title-container" id= "titulo-item">{item.titulo}</div>
            <div className="id-container" id = "id-item">{item.id}</div>
            <div className="price-container"id = "precio-item">Precio: {item.precio}</div>
            <Image className="image-container" src={item.foto} width="150" height="150" alt="foto producto"/>
            <br/>
            <ItemCount stock={item.stock} initial={0}/>
            <Button onClick = {() => setPulsado(!pulsado)}> <NavLink to={url}>ver detalle</NavLink></Button>
            
        </div>
      </>
    );
  }
  
  export default Item;
  