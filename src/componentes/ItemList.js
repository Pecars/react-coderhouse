import Item from "./Item"
import { useState, useEffect } from "react"

function ItemList() {
  const [itemes, setItemes] = useState("cargando");

    useEffect(() => {
      
      const asyncMock = new Promise((resolve, reject) => {
        setTimeout(() => {
          setItemes({
            id: 1,
            titulo: "linterna",
            precio: 100,
            foto: "acá va la imagen del producto"
          })
          resolve(itemes);
        }, 5000);
      });
      asyncMock.then(itemes)
    }, []);

    return (
      <>
        <Item props={itemes}/>
      </>
    );
  }
  
  export default ItemList;
  