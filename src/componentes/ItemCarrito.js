import { Image } from "react-bootstrap";


const ItemCarrito = (item) => {

    return (
            <>
            <div className="producto-container">
            <div className="title-container" id= "titulo-item">{item.titulo}</div>
            <div className="id-container" id = "id-item">{item.id}</div>
            <div className="price-container"id = "precio-item">Precio: {item.precio}</div>
            <div className="cantidad-container"id = "cantidad-item">Precio: {item.cantidad}</div>
            <Image className="image-container" src={item.foto} width="150" height="150" alt="foto producto"/>
            <br/>
            </div>
            </>
    )
}

export default ItemCarrito