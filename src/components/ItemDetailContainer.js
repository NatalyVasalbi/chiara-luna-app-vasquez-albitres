import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer=()=>{

    const {id}=useParams()
    const category=""

    const [item, setItem]=useState({})
    const [value, setValue]=useState(0);
    const [showMessageStock, setShowMessageStock]=useState(false);


    const resta=()=> setValue((prev)=>prev-1);
    const suma=(stock, value)=>{
        if(value<stock) setValue((prev)=>prev+1);
        else setShowMessageStock((prev)=> !prev);
    }


    useEffect(()=>{
        db()
        console.log("El id es: "+id)
    },[id])


    const db = async()=>{
        const call= await fetch(
            `https://api.mercadolibre.com/sites/MLA/search?q=blusas`
        );

        if(call.ok){
            const response=await call.json();
            console.log(response.results)
            setItem(response.results.find(item => item.id = id));
            console.log(item)
        }else{
            call.catch((err)=>{
                throw new Error("Algo salió mal", err);
            });
        }
    }


    return(
        <ItemDetail item={item} initialValue={value} restar={resta} sumar={suma} stock={showMessageStock}></ItemDetail>
    )
}

export default ItemDetailContainer;