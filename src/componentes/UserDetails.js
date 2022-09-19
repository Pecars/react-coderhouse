import { TextField, Button } from "@mui/material";
import {db} from "../firebase"
import { collection, addDoc } from "firebase/firestore";
import { contexto } from "./CartContext"
import { useContext } from "react"
import { useState } from "react";
import Swal from 'sweetalert2'
 

function UserDetails() {

    const [nombre, setNombre]= useState()
    const [apellido, setApellido] = useState()
    const { cantidad, precioTotal } = useContext(contexto)


    const handleChangeNombre =(e)=>{
        e.preventDefault()
        const input = e.target
        const value = input.value
        setNombre(value)

    }

    const handleChangeApellido =(e)=>{
        e.preventDefault()
        const input = e.target
        const value = input.value
        setApellido(value)

    }

    const handleConfirm =(e)=>{

        const orden={

            nombre: nombre, 
            apellido: apellido, 
            cantidad: cantidad,
            total:precioTotal(), 
            fecha: Date.now()

        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection, orden)

        consulta.then((res)=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${nombre} Tu pedido se ha efectuado, pronto recibirás información. Código de pedido:  ${res.id}`,
                showConfirmButton: true,
              })            
            
        } )
    }
    

    return (
        <div className="form-page">
            <div className="form-page__element">Por favor ingresa tus datos para proceder con la compra</div>
            <TextField className="textfield form-page__element" required value={nombre} onChange={handleChangeNombre} label = "Nombre" placeholder="Pepito" variant ="filled"> </TextField>
            <TextField className="textfield form-page__element"required value={apellido} onChange={handleChangeApellido} label = "Apellido" placeholder="Pérez" variant ="filled" > </TextField>
            <Button variant="contained" color="success" onClick={handleConfirm}> Enviar </Button>
        </div>

    )
}

export default UserDetails