import {Link, NavLink} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from "./CartWidget";

const NavBar = (parametros) => {

      return (        
        <>
        <div class="navbar__main">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div class="navbar__title"> <NavLink to="/"><h1>Tienda </h1></NavLink></div>
              <div class="navbar__categories"><NavLink to="/category/mochilas">Mochilas</NavLink></div>
              <div class="navbar__categories"><NavLink to="/category/pantalones">Pantalones</NavLink></div>
              <div class="navbar__categories"><NavLink to="/category/pañuelos">Pañuelos</NavLink></div>
              </Typography>
              <Button color="inherit">          <NavLink to="/cart">
                <CartWidget/>
                {/*<span className="material-symbols-outlined">
                  shopping_cart
                </span>*/}
              </NavLink></Button>
            </Toolbar>
          </AppBar>
        </Box>
        </div>
   
 
        </>
      )
  }
  
  export default NavBar