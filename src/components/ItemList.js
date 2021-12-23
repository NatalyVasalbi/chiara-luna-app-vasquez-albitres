import React from "react";
import Common from "./Common";
import Item from "./Item"

function ItemList({estado, click}){

        return(
            <>
                {estado.map((el)=>{
                    return <Item.Item key= {el.id} title={el.title} description={el.description} price={el.price} pictureUrl={el.pictureUrl}></Item.Item>
                })}
                {/* {this.state.arr.map((el)=>{
                    return <Item.Item2 titulo={el.titulo} imagen={el.img} descr={el.description}></Item.Item2>
                })} */}

                <Common.ButtonSubmit click={click}></Common.ButtonSubmit>
            </>
        )
}
export default ItemList;