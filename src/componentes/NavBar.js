import {NavLink} from "react-router-dom"
import{useEffect, useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from "./CartWidget";
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";



const productosCollection = collection(db, "productos")

const NavBar = (parametros) => {

  const [navLinks, setNavLinks] = useState([]);

  useEffect(
    ()=>{

      const consulta = getDocs(productosCollection);
      
      consulta.then(snapshot=>{
        const productos = snapshot.docs.map(doc=>{
          return{
            ...doc.data(), 
            id: doc.id
          }
        })
        const arrayCategorias = productos.map(x => x.categoria)
        setNavLinks([...new Set(arrayCategorias)])
      })


    },[]
  )



  
      return (        
        <>


          <div class="navbar__main">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <div className="navbar-title"> <NavLink className= "titulo-tienda" to="/">Tienda </NavLink></div>

                {navLinks.map((element, index) => {
                  return  <div class="navbar__categories"><NavLink to= {`/category/${element}`} key = {index}>{element}</NavLink></div>
                })}
                </Typography>
                <Button color="inherit">          <NavLink to="/cart">
                  <CartWidget/>
                </NavLink></Button>
              </Toolbar>
            </AppBar>
          </Box>
          </div>
   
 
        </>
      )
  }
  
  export default NavBar