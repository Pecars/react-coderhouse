function Item(item) {
    return (
      <>
      <div>
            <div id= "titulo-item">{item.props.titulo}</div>
            <div id = "id-item">{item.props.id}</div>
            <div id = "precio-item">{item.props.precio}</div>
            <div id= "foto-item">{item.props.foto}</div>
        </div>
      </>
    );
  }
  
  export default Item;
  