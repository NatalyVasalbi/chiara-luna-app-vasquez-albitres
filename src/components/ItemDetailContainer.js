import React, {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer=()=>{

    const {id}=useParams()

    const [item, setItem]=useState({})
    const [value, setValue]=useState(0);
    const [showMessageStock, setShowMessageStock]=useState(false);


    // CONTEXT
    const [state, setState]= useState([{name: "test"}])
    const productAdded=useContext(CartContext)
    console.log(productAdded.checkItem())
    //

    const resta=()=> setValue((prev)=>prev-1);
    const suma=(stockItem, value)=>{
        if(value<stockItem) setValue((prev)=>prev+1);
        else setShowMessageStock((prev)=> !prev);
    }

    const onAdd=(productoToAdd)=>{
        if(value>0) alert('Se ha añadido a tu carrito :p (En proceso...)')
        else alert('La cantidad debe ser mayor a 0')
    }

    useEffect(()=>{
        db()
    },[id])


    const db = async()=>{
        const call= await fetch(
            `https://api.mercadolibre.com/items/${id}`
        );

        if(call.ok){
            const response=await call.json();
            console.log(response.results)
            setItem(response);
            // setItem(response.results.find(item => item.id = id));
            console.log(response)
        }else{
            call.catch((err)=>{
                throw new Error("Algo salió mal", err);
            });
        }
    }


    return(
        <ItemDetail item={item} initialValue={value} restar={resta} sumar={suma} message={showMessageStock}></ItemDetail>
    )
}

export default ItemDetailContainer;