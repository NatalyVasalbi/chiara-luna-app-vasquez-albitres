import React, {useState} from "react";

const ItemCount=({stock, initialValue=0})=>{
    const [value, setValue] = useState(initialValue);
    const handlerAdd=()=>{
        if(value<stock) setValue((prev)=> prev+1);
        else alert('Se alcanzó el maximo')
    };
    const handlerSub=()=>{
        if(value>0) setValue((prev)=> prev-1);
    };
    const onAdd=()=>{
        if(value>0) alert('Se ha añadido a tu carrito :p (En proceso...)')
        else alert('La cantidad debe ser mayor a 0')
    };
    return(
        <div>
            <button onClick={handlerSub}>-</button>
            {/* <p>{value}</p> */}
            <input value={value}></input>            
            <button onClick={handlerAdd}>+</button>
            <button onClick={onAdd}>Añadir al carrito</button>
        </div>
    );
};
export default ItemCount;