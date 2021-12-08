// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import Shell from './components/Shell';

function App() {  
  return (
    <React.Fragment className="App">
      <NavBarComponent/>
      <ItemListContainer greeting="mensaje"></ItemListContainer>
    </React.Fragment>
  );
}

export default App;
