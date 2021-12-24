import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

// import React from 'react';
function ItemListContainer({greeting}){

    // const products=[
    //     {id: 1, title: "Producto 1", description:"breve", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"},
    //     {id: 2, title: "Producto 2", description:"desc", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"}
    // ]

    const[items, setItems]=useState([]);


    useEffect(() => {
        console.log("me monté")
        db()
    }, [])

    const db = async()=>{
        const call= await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
        );

        if(call.ok){
            const response=await call.json();
            setItems(response.results.filter(item => item.price > 5000));
        }else{
            call.catch((err)=>{
                throw new Error("Algo salió mal", err);
            });
        }
    }

    // const promisedMethod=()=>{
    //     const aux = new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             resolve({id: 3, title: "Producto 3", description:"desc", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"})
    //         },2000)
    //     })

    //     aux.then((res)=>{
    //         setItems({...items, res})
    //         console.log(items)
    //     })
    // }

    // const handleClick=(params)=>{
    //     promisedMethod()
    // }

    return (
        <div>
            <p>{greeting}</p>
            {/* <ItemCount stock="5" initial="0"></ItemCount> */}
            <ItemList estado={items}></ItemList>
        </div>
        
    )
}

export default ItemListContainer;