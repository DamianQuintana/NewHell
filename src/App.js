import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import PropGreeting from './Components/ItemListContainer'
import Example from './Components/ItemCount'
import ItemListContainer from './Components/ItemListContainer'
import {useEffect, useState} from "react";
import CounterApp from './Components/CounterApp'
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  const[items, setItems] = useState([]); //Esto tiene que ser un objeo literal del producto 
  const[detalles, setDetalles] = useState([]);

  useEffect(() =>{
    new Promise((right, wrong) =>{
      setTimeout(()=>{
        right(["Remera", "Pantalon", "Buzo"]);
      }, 2000);
     
    }).then(resultado => setItems(resultado))

    new Promise((right, wrong) =>{
      setTimeout(()=>{
        right(["Linda", "Calurosa", "Copada"]);
      }, 2000);
     
    }).then(solved => setItems(solved))

  });
  return (
    <div className="App" id="hero">
 <NavBar/>
 <ItemListContainer items ={items}></ItemListContainer>
 <ItemDetailContainer detalles = {detalles}/>
    </div>
  );
}

export default App;

