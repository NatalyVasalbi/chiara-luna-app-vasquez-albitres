import React from 'react';
// import React,{useState, useEffect} from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                    <NavBar.Brand>                        
                        <NavLink to={`/`}><img
                            src={logo}
                            width="300"
                            // height="30"
                            // className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></NavLink>
                    </NavBar.Brand>

                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">{panchita}</Nav.Link>
                            <Nav.Link href="#home2">{state}</Nav.Link> */}
                            {/* <Nav.Link href="#home"><button onClick={handleClick}>CLICK</button></Nav.Link> */}

                            <NavLink className="nav-link" to={`/nuevo`}>NEW IN</NavLink>
                            <NavLink className="nav-link" to={`/`}>HOME</NavLink>
                            <NavDropdown title="SHOP" id="basic-nav-dropdown">
                                <NavLink className="dropdown-item" to={`/basicos`}>BÁSICOS</NavLink>
                                <NavLink className="dropdown-item" to={`/blusas`}>BLUSAS Y TOPS</NavLink>
                                <NavLink className="dropdown-item" to={`/blazer`}>BLAZERS Y ABRIGOS</NavLink>
                                <NavDropdown.Divider />
                                <NavLink className="dropdown-item" to={`/comfy`}>COMFY SETS</NavLink>
                                <NavLink className="dropdown-item" to={`/pantalon`}>PANTALONES</NavLink>
                                <NavLink className="dropdown-item" to={`/falda`}>SHORTS Y FALDAS</NavLink>
                                <NavLink className="dropdown-item" to={`/vestido`}>CONJUNTOS Y VESTIDOS</NavLink>
                                <NavLink className="dropdown-item" to={`/bikini`}>TRAJES DE BAÑO</NavLink>
                                <NavLink className="dropdown-item" to={`/joyas`}>COMPLEMENTOS</NavLink>
                            </NavDropdown>
                            <NavLink className="nav-link" to={`/ultimas`}>ULTIMAS EN STOCK</NavLink>
                            <NavLink className="nav-link" to={`/sale`}>SALE</NavLink>
                            <Nav.Link to={`/cart`} className="shopping-cart"><CartWidget></CartWidget></Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </div>

    )
}

export default NavBarComponent;