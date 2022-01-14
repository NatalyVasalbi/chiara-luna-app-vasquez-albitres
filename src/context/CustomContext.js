import CartContext from "../context/CartContext";
import React from "react";

function CustomContext({children}){
    let arr=[1,2]
    let productosAgregados=[{id: 0, name: 'Camisa', price: 8, quantity: 3}]



    function addItem(item, quantity){
        if(isInCart(item.id)){
            // existe
            const index = isInCart()
            productosAgregados.filter(p=>p.id===item.id).map( x => x.quantity +=quantity)

            console.log('filtered')
            alert('Producto modificado')

        }else{
            productosAgregados.push({id: item.id, name: item.title, price: item.price, quantity: quantity})
            alert('Se ha añadido al carrito')
        }
    }

    function checkItem(params){
        return productosAgregados
    }

    function removeItem(itemId){
        const index = productosAgregados.findIndex(p=>p.id===itemId);
        productosAgregados.splice(index,1)
        alert('Producto eliminado')
    }

    function clear(){
        productosAgregados=[]
    }

    function isInCart(id){
        if(productosAgregados.findIndex(product=>product.id===id)!==-1) return true;
        else return false
    }


    return(
        <CartContext.Provider value={{addItem, checkItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CustomContext