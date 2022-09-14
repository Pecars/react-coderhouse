import{useEffect, useState} from "react";
import { CircularProgress, listItemTextClasses } from "@mui/material";
import { AuxiliarFetch } from "../AuxiliarFetch";
import {products} from "./productos";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";


const productosCollection = collection(db, "productos")

function ItemDetailContainer() {

const [itemes, setItemes] = useState([]);
const [loading, setLoading] = useState(true);
const {id} = useParams();


useEffect(()=>{

  const consulta = getDocs(productosCollection);
      
  consulta.then(snapshot=>{
    const productos = snapshot.docs.map(doc=>{
      return{
        ...doc.data(), 
        id: doc.id
      }
    })
    setItemes(productos.find(item=> item.id==id))
    setTimeout(() => {setLoading(false)}, 2000);
 

  })
  /*AuxiliarFetch(products).then(data => setItemes(data.find(item =>item.id== id)))*/
},[id])
 

  return (
    <>
        <div className='container'> 
            {loading?<CircularProgress/>:<ItemDetail item={itemes}/>}
        </div>
    </>
  );
}

export default ItemDetailContainer;