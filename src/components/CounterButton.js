import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const CounterButton=({initialValue=0, stockItem, restar, sumar, clickHandler})=>{


    return(
        <ButtonGroup>
            <Button onClick={restar} variant="light">-</Button>
            <p className="value" style={{margin: 10}}> {' '+initialValue+' '}</p>
            <Button onClick={()=>sumar(stockItem, initialValue)} variant="light">+</Button>
            {' '}
            <Button onClick={clickHandler} variant="outline-primary">Añadir al carrito</Button>
        </ButtonGroup>
    )
};
export default CounterButton;