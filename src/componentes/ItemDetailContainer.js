
import{useEffect, useState} from "react";
import { CircularProgress } from "@mui/material";
import { AuxiliarFetch } from "../AuxiliarFetch";
import {products} from "./productos";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer(item) {
item = item.props
console.log(item)

  return (
    <>
        <div className='container'> 
            <ItemDetail item={item}/>
        </div>
    </>
  );
}

export default ItemDetailContainer;
