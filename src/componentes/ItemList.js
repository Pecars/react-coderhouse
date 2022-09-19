import ItemParaList from "./ItemParaList"


const ItemList =({itemes})=> {
    return (
      <>
      <div className="item-list-container">
      {itemes.map(item => <ItemParaList key ={item.id} item={item}/>)}
      </div>
      
      </>
    );
  }
  
  export default ItemList;
  