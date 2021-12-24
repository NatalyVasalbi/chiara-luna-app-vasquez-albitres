import React from "react";
import Common from "./Common";
import Item from "./Item"

function ItemList({estado, click}){

        return(
            <>
                {/* {estado.map((el)=>{
                    return <Item.Item key= {el.id} title={el.title} description={el.description} price={el.price} pictureUrl={el.pictureUrl}></Item.Item>
                })} */}
                {estado.map((el)=>{
                    return <Item.Item2 key= {el.id} title={el.title} price={el.price} picture={el.thumbnail}></Item.Item2>
                })}

                <Common.ButtonSubmit click={click}></Common.ButtonSubmit>
            </>
        )
}
export default ItemList;