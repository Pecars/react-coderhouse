import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { AuxiliarFetch } from "../AuxiliarFetch";
import {products} from "./productos"
import CircularProgress from '@mui/material/Button';
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  console.log(CircularProgress)
  const [itemes, setItemes] = useState([]);
  const [loading, setLoading] = useState(false)
  const {id} = useParams() 
  console.log(id)

    useEffect(() => {
      setLoading(true)
      if(id == undefined){
      AuxiliarFetch(products).then(data => setItemes(data))
      }else{
        AuxiliarFetch(products).then(data => setItemes(data.filter(item =>item.categoria== id)))

      }
    }, [id]);
console.log(itemes)
  return (
    <>
        <div className='container'>  
            <p>hola {props.nombre}</p>
            <p>Añade productos</p>
            <ItemCount stock={15} initial={4}/>
            {!loading && <CircularProgress/>}
            {loading && <ItemList itemes={itemes}/>}
        </div>
    </>
  );
}

export default ItemListContainer;