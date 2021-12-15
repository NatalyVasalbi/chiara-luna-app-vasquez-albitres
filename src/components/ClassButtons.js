import React, {Component} from 'react'

class ClassButtons extends Component{
    constructor(props){
        super(props);
        this.state={
            value: props.initialValue ?? 0
        }
        this.suma=this.add.bind()
    }
    add=()=>{
        return this.setState({value: this.state.value + 1});
    }

    render(){
        return(
            <div>
                <button onClick={this.suma}>Sumar</button>
                <p>{this.state.value}</p>
                <button>Restar</button>
            </div>
        )
    }
}
export default ClassButtons;