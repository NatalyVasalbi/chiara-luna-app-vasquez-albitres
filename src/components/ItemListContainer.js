import React, { Component, useState } from "react";
import Common from "./Common";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

// import React from 'react';
function ItemListContainer({greeting}){

    const[value, setValue]=useState(0);

    return (
        <div>
            <p>{greeting}</p>
            {/* <ItemCount stock="5" initial="0"></ItemCount> */}
            <ItemList></ItemList>
        </div>
        
    )
}

export default ItemListContainer;