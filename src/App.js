// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
// import Shell from './components/Shell';
import CartContext from './context/CartContext';
import { useState } from 'react';
import CustomContext from './context/CustomContext';

function App() {

  const [state, setState] = useState("dark")

  window.addEventListener('evento', (e) => console.log(e))
  return (
    // <CartContext.Provider value={state}>
    //   <ItemListContainer></ItemListContainer>
    // </CartContext.Provider>

    //  <CustomContext>
    //   <ItemListContainer></ItemListContainer>
    // </CustomContext>
    <CustomContext>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/:category" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      </CustomContext>
  );
}

export default App;
