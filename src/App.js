import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./componentes/Main"
import CartContext from './componentes/CartContext';
import Cart from './componentes/Cart';
import NavBar from './componentes/NavBar';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
            <NavBar />
            <Main />
        </CartContext>
      </BrowserRouter>

    </>
  );
}

export default App;
