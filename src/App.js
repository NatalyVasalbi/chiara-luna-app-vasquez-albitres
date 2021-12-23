// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';
// import Shell from './components/Shell';

function App() {


  const getAPI = async () =>{
    const API = await  fetch("https://rickandmortyapi.com/api/character") //await siempre devuelve una promesa
    const res = await API.json()
    return res //res es una promesa
  }
  const [state, setState]=useState("pokemon")

  // useEffect - cuando mi componente este montado llamo al getAPI() para que el usuario vea algo mientras devuelve la data
  useEffect(() => {
    // mi promesa res la paso por el .then para que cuando este fullfilment me devuelve res.results
    getAPI().then((res)=>console.log(res.results))
  }, [])
  //2do parametro: 
  //vacio - se ejecuta siempre, toda la vida del componente
  //[] - se ejecuta una vez que el componente ya esta montado
  //[props] - una propiedad se ejecutara una vez cuando el componente esta montado y cuando cambia esa propiedad



  return (
    <React.Fragment className="App">
      <NavBarComponent>
      {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
      </NavBarComponent>
      <ItemListContainer greeting="Ofertas del mes"></ItemListContainer>
      {/* <ClassButtons initialValue={3}></ClassButtons> */}
      {/* <ItemCount initialValue={1}></ItemCount> */}      
    </React.Fragment>
  );
}

export default App;
