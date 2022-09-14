import{useEffect, useState} from "react";
import { CircularProgress, listItemTextClasses } from "@mui/material";
import { AuxiliarFetch } from "../AuxiliarFetch";
import {products} from "./productos";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

const [itemes, setItemes] = useState([]);
const {id} = useParams();

useEffect(()=>{
  AuxiliarFetch(products).then(data => setItemes(data.find(item =>item.id== id)))
},[id])
 

  return (
    <>
        <div className='container'> 
            <ItemDetail item={itemes}/>
        </div>
    </>
  );
}

export default ItemDetailContainer;