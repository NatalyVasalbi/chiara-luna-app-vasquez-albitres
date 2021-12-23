import React, { Component, useState } from "react";
import Common from "./Common";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

// import React from 'react';
function ItemListContainer({greeting}){

    const products=[
        {id: 1, title: "Producto 1", description:"breve", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"},
        {id: 2, title: "Producto 2", description:"desc", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"}
    ]

    const[state, setState]=useState(products);


    const promisedMethod=()=>{
        const aux = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({id: 3, title: "Producto 3", description:"desc", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"})
            },2000)
        })

        aux.then((res)=>{
            setState({...state, res})
            console.log(state)
        })
    }

    const handleClick=(params)=>{
        promisedMethod()
    }

    return (
        <div>
            <p>{greeting}</p>
            {/* <ItemCount stock="5" initial="0"></ItemCount> */}
            <ItemList estado={state} click={handleClick}></ItemList>
        </div>
        
    )
}

export default ItemListContainer;