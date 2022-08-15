import './App.css';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter } from "react-router-dom";
import Main from "./componentes/Main"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>

    </>
  );
}

export default App;
