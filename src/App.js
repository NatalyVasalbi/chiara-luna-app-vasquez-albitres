// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
// import Shell from './components/Shell';
// import ClassButtons from './components/ClassButtons';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
// import Shell from './components/Shell';

function App() {  
  return (
    <React.Fragment className="App">
      <NavBarComponent>
      {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
      </NavBarComponent>
      {/* <Shell>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Shell> */}
      <ItemListContainer greeting="Ofertas del mes"></ItemListContainer>
      {/* <ClassButtons initialValue={3}></ClassButtons> */}
      {/* <ItemCount initialValue={1}></ItemCount> */}      
    </React.Fragment>
  );
}

export default App;
