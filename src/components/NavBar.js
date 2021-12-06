import React from 'react';

function NavBar() {
    // const styleNav = {
    //     backgroundColor: '#e3f2fd'
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CHIARA LUNA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">NEW IN</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SHOP
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">BÁSICOS</a></li>
                                <li><a className="dropdown-item" href="/">BLUSAS Y TOPS</a></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                                <li><a className="dropdown-item" href="/">BLAZERS Y ABRIGOS</a></li>
                                <li><a className="dropdown-item" href="/">COMFY SETS</a></li>
                                <li><a className="dropdown-item" href="/">PANTALONES</a></li>
                                <li><a className="dropdown-item" href="/">SHORTS Y FALDAS</a></li>
                                <li><a className="dropdown-item" href="/">CONJUNTOS Y VESTIDOS</a></li>
                                <li><a className="dropdown-item" href="/">TRAJES DE BAÑO</a></li>
                                <li><a className="dropdown-item" href="/">COMPLEMENTOS</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">ULTIMAS EN STOCK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">SALE</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">CHIARA LUNA</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class ="btn btn-outline-success" type ="submit">Search</button>
                    </form>
                    <div>
                        <button className ="btn btn-dark" type ="button">LOGIN</button>
                    </div>
                    
                </div>
            </div>
        </nav>

    )
}

export default NavBar;