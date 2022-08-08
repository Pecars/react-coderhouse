import ItemCount from "./ItemCount";
import ItemList from "./ItemList"

function ItemListContainer(props) {
  return (
    <>
        <div className='container'>  
            <p>hola {props.nombre}</p>
            <p>Añade productos</p>
            <ItemCount stock={15} initial={4}/>
            <ItemList/>
        </div>
    </>
  );
}

export default ItemListContainer;
