import React, {useState, useEffect} from "react"
import CounterButton from "./CounterButton"

const ItemDetailContainer=()=>{

    const [item, setItem]=useState({})
    const [value, setValue]=useState(0);
    const [showMessageStock, setShowMessageStock]=useState(false);


    const resta=()=> setValue((prev)=>prev-1);
    const suma=(stock, value)=>{
        if(value<stock) setValue((prev)=>prev+1);
        else setShowMessageStock((prev)=> !prev);
    }


    const Modal=()=>{
        return(
            <div>
                <h1>Se alcanzó el límite permitido</h1>
            </div>
        )
    }

    useEffect(()=>{
        db()
    },[])

    const db = async()=>{
        const call= await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
        );

        if(call.ok){
            const response=await call.json();
            setItem(response.results.find(item => item.price > 5000));
        }else{
            call.catch((err)=>{
                throw new Error("Algo salió mal", err);
            });
        }
    }

    return(
        <div>
            {item.length?? (
                <div>
                    <p>{item.title}</p>
                    <img src={item.thumbnail} style={{width:250}}></img>
                </div>
            )}
            <CounterButton initialValue={value} restar={resta} sumar={suma}></CounterButton>
            {showMessageStock && <Modal/>}
        </div>
    );
}

export default ItemDetailContainer;