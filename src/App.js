import './App.css';
import Header from './componentes/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./componentes/Main"
import CartContext from './componentes/CartContext';
import Cart from './componentes/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
            <Header />
            <Main />
      
        </CartContext>
      </BrowserRouter>

    </>
  );
}

export default App;
