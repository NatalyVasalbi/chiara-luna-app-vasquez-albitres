import React from 'react'

const CounterButton=({initialValue=0, stock=5, restar, sumar})=>{
    return(
        <div className="buttons-container">
            <button className="button-add" onClick={()=>sumar(stock, initialValue)}>Sumar</button>
            <p className="value">{initialValue}</p>
            <button onClick={restar} className="button-sub">Restar</button>
        </div>
    )
};
export default CounterButton;