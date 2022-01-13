import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import CartContext from "../context/CartContext";

// import React from 'react';
function ItemListContainer({props}){

    const {category} = useParams() || ""
    const[items, setItems]=useState([]);

    // CONTEXT
    //  const [state, setState]= useState([{name: "test"}])
    //  const value=useContext(CartContext)
    //  console.log(value.checkItem())

    useEffect(() => {
        console.log("me monté")
        db()
    }, [category])

    const db = async()=>{
        const call= await fetch(
            `https://api.mercadolibre.com/sites/MLA/search?q=${category}`
        );

        if(call.ok){
            const response=await call.json();
            setItems(response.results);
            // setItems(response.results.filter(item => item.price > 5000));
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
        <div className="row" style={{ marginLeft: '8rem' }}>
            {/* <p>{greeting}</p> */}
            {/* <ItemCount stock="5" initial="0"></ItemCount> */}
            {items?
            <ItemList estado={items}></ItemList>
            :
            <p>Cargando...</p>
            }
            {/* <p className={value} ></p> */}
        </div>
        
    )
}

export default ItemListContainer;