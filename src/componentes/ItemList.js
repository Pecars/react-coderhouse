import Item from "./Item"


const ItemList =({itemes})=> {
  //console.log(itemes)
    return (
      <>
      <div className="item-list-container">
      {itemes.map(item => <Item key ={item.id} item={item}/>)}
      </div>
      
      </>
    );
  }
  
  export default ItemList;
  