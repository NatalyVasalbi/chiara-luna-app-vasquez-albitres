// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import Shell from './components/Shell';

function App() {
  const Home = () => <div>HOME</div>

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}></Route>
        <Route exact path="/:category" element={<ItemListContainer/>}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    // <React.Fragment>
    //   <NavBarComponent/>
    //   {/* <ItemListContainer greeting="Ofertas del mes"></ItemListContainer> */}
    //   <ItemDetailContainer></ItemDetailContainer>
    //   {/* <ClassButtons initialValue={3}></ClassButtons> */}
    //   {/* <ItemCount initialValue={1}></ItemCount> */}      
    // </React.Fragment>
  );
}

export default App;
