import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Cart from "./Cart"



const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main