import React from 'react';
// import React,{useState, useEffect} from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { NavDropdown } from 'react-bootstrap';

import logo from '../logo.png';
// import Common from './Common';
// const Componentes = {
//     Circulo1: (props) => (<h1>{props.id}</h1>),
//     Circulo2: (props) => (<h1>{props.id}</h1>),
//     Circulo3: (props) => (<h1>{props.id}</h1>)
// }

// const FuncionFlecha = () => {
//     return (
//         <h1>HOLA</h1>
//     )
// }
function NavBarComponent(props) {
    // console.log(props.children[1])
    // console.log(props)
    // const { id: value, ejemplo: titulo } = props
    // const centerText = { textAlign: 'center' }
    // const brand = "chiara luna"

    // state function based
    // const[panchita, setPanchita]=useState("ESTADO")
    // const handleClick=()=>{
    //     setPanchita("CAMBIÉ")
    // }
    // const[state, setState]=useState("NATALY")
    // useEffect(()=>{
    //     setState("useEffect")
    // },[])
    return (
        // <nav>
        //     <FuncionFlecha/>
        //     <Componentes.Circulo1 id="ejemplo"/>
        //     <Componentes.Circulo2 id="ejemplo2"/>
        //     <Componentes.Circulo3 id="ejemplo3"/>
        //     <div>{titulo}</div>
        //     <div>{value}</div>
        // </nav>
        <div>
            <NavBar variant="light">
                <Container>
                    <NavBar.Brand href="#home">
                        <img
                            src={logo}
                            width="300"
                            // height="30"
                            // className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">{panchita}</Nav.Link>
                            <Nav.Link href="#home2">{state}</Nav.Link> */}
                            {/* <Nav.Link href="#home"><button onClick={handleClick}>CLICK</button></Nav.Link> */}
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#newin">NEW IN</Nav.Link>
                            <NavDropdown title="SHOP" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">BÁSICOS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">BLUSAS Y TOPS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">BLAZERS Y ABRIGOS</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">COMFY SETS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">PANTALONES</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">SHORTS Y FALDAS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">CONJUNTOS Y VESTIDOS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">TRAJES DE BAÑO</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">COMPLEMENTOS</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#ultimas">ULTIMAS EN STOCK</Nav.Link>
                            <Nav.Link href="#sale">SALE</Nav.Link>
                            <Nav.Link href="#cart" className="shopping-cart"><CartWidget></CartWidget></Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </div>

    )
}

export default NavBarComponent;