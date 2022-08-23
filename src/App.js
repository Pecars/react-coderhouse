import './App.css';
import Header from './componentes/Header';
import { BrowserRouter } from "react-router-dom";
import Main from "./componentes/Main"
import CartContext from './componentes/CartContext';



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
