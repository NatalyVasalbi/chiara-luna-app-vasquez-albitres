import React, { Component } from "react";
import Common from "./Common";

// import React from 'react';
function ItemListContainer(props){
    const {greeting: value}=props
    return (
        <div>{value}</div>
    )
}

export default ItemListContainer;