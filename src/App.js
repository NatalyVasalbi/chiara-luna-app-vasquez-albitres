// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const brand="chiara luna"
  const centerText={ textAlign:'center'}
  return <>
        <h2 style={centerText}>{brand}</h2>
        <NavBar/>
        <br></br>
        <p style={centerText}>Las ofertas de la semana</p>
  </>;
}

export default App;
