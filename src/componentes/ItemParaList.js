import { Image, Button } from "react-bootstrap";
import { useState } from "react";
import {NavLink} from "react-router-dom"

const ItemParaList = ({item}) => {
  const [pulsado, setPulsado] = useState(false);

  const url = "/item/"+item.id;

    return (
      <>
      <div className="producto-container">
            <div className="title-container" id= "titulo-item">{item.titulo}</div>
            <div className="price-container"id = "precio-item">Precio: {item.precio}</div>
            <div className="image-container"> <Image className="imagen" src={item.foto} width="150" height="150" alt="foto producto"/></div>
           
            <br/>
            <Button onClick = {() => setPulsado(!pulsado)}> <NavLink to={url}>ver detalle</NavLink></Button>
            
        </div>
      </>
    );
  }
  
  export default ItemParaList;
  