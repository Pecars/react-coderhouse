import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useParams, Link } from "react-router-dom";
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";


const productosCollection = collection(db, "productos")


function ItemListContainer(props) {
  const [itemes, setItemes] = useState([]);
  const [loading, setLoading] = useState(true)
  const {id} = useParams() 
  

    useEffect(() => {
      const consulta = getDocs(productosCollection);
      
      consulta.then(snapshot=>{
        const productos = snapshot.docs.map(doc=>{
          return{
            ...doc.data(), 
            id: doc.id
          }
        })
        setItemes(productos)

        if(id == undefined){
          setItemes(productos)
          setTimeout(() => {setLoading(false)}, 2000);

        }else{
          setItemes(productos.filter(item =>item.categoria==id))
          setTimeout(() => {setLoading(false)}, 2000);

        }
        

      })

  }, [id]);



  return (
    <>
        <div className='container'>  
        <p>hola {props.nombre}</p>
            <p>Añade productos</p>
            {loading ? <CircularProgress/> : <ItemList itemes={itemes}/> }
            
        </div>
        <div  class="cart__button" >
          <Button variant="contained"> <div><Link to="/cart">Finalizar compra</Link></div></Button>
        </div>
    </>
  );
}

export default ItemListContainer;