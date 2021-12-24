import React from "react";
import CounterButton from "./CounterButton"


function ItemDetail({item, initialValue, restar, sumar, stock}){


    const Modal=()=>{
        return(
            <div>
                <h1>Se alcanzó el límite permitido</h1>
            </div>
        )
    }

    return(
        <div>
            {item.length?? (
                <div>
                    <p>{item.title}</p>
                    <img src={item.thumbnail} style={{width:250}}></img>
                </div>
            )}
            <CounterButton initialValue={initialValue} restar={restar} sumar={sumar}></CounterButton>
            {stock && <Modal/>}
        </div>
    );
}
export default ItemDetail;