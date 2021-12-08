import React, {Component} from "react";

class Shell extends Component{
    componentDidMount(){
        console.log("Hola")
    }
    render(){
        return(
            <nav>
                <div id="1">INICIO</div>
                <div>{this.props.propiedadEjemplo}</div>
            </nav>
        )
    }
}

export default Shell