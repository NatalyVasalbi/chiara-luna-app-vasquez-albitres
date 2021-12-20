import React, {Component} from "react";
import Common from "./Common";
import Item from "./Item"

class ItemList extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Productos",
            arr: [{id: 1, title: "Producto 1", description:"breve", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"}, {id: 2, title: "Producto 2", description:"desc", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"}]
        }
        this.auxText="Prueba"
    }

    promisedMethod=()=>{
        const aux = new Promise((resolve, reject)=>{
            //Proceso 1
            //Proceso 2
            setTimeout(()=>{
                resolve({id: 3, title: "Producto 3", description:"desc", price: 3.5, pictureUrl: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/09/03214848/Disen%CC%83o-sin-ti%CC%81tulo-101.jpg"})
            },2000)
        })

        aux.then((res)=>{
            this.setState({arr:[...this.state.arr, res]})
            console.log(res)
        })
    }

    handleClick=(params)=>{
        this.setState({click:2})
        this.promisedMethod()
        // console.log(this.promisedMethod())
        // console.log(this.state)
        // console.log(this.auxText)
    }

    render(){
        return(
            <>
                {this.state.arr.map((el)=>{
                    return <Item.Item id= {el.id} title={el.title} description={el.description} price={el.price} pictureUrl={el.pictureUrl}></Item.Item>
                })}
                {/* {this.state.arr.map((el)=>{
                    return <Item.Item2 titulo={el.titulo} imagen={el.img} descr={el.description}></Item.Item2>
                })} */}

                <Common.ButtonSubmit click={this.handleClick}></Common.ButtonSubmit>
            </>
        )
    }
}
export default ItemList;