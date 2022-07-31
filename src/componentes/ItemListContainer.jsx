import ItemCount from "./ItemCount";

function ItemListContainer(props) {
  return (
    <>
        <div className='container'>  
            <p>hola {props.nombre}</p>
            <p>Añade productos</p>
            <ItemCount stock={15} initial={4}/>
        </div>
    </>
  );
}

export default ItemListContainer;
