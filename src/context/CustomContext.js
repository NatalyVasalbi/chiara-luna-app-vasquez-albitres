import CartContext from "../context/CartContext";
import React from "react";

function CustomContext({children}){
    let arr=[1,2]
    let productosAgregados=[{name: 'Camisa', price: 8, quantity: 3}]

    function addItem(item){
        productosAgregados.push(item)
        alert('Se ha añadido al carrito')
    }

    function checkItem(params){
        return productosAgregados
    }

    function removeItem(itemId){

    }

    function clear(){

    }
    function isInCart(id){

    }
    return(
        <CartContext.Provider value={{addItem, checkItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CustomContext