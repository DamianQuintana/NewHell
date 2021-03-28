import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import PropGreeting from './Components/ItemListContainer'
import Example from './Components/ItemCount'
import ItemListContainer from './Components/ItemListContainer'
import {useEffect, useState} from "react";
import CounterApp from './Components/CounterApp'
import ItemDetailContainer from './Components/ItemDetailContainer';
import firstImage from './Components/Image/2.jpg'

function App() {
  const[items, setItems] = useState([]); //Esto tiene que ser un objeo literal del producto 
  // // const[detalles, setDetalles] = useState([]);
  const ItemsMockData = [
    {
      id: 1,
      title: "Remera",
      description: "XL",
      price: 20,
      image: firstImage,
      stock: 10
    // },   {
    //   id: 2,
    //   title: "Remera",
    //   description: "M",
    //   price: 20,
    //   image: firstImage,
    //   stock: 13


    // },   {
    //   id: 3,
    //   title: "Remera",
    //   description: "S",
    //   price: 20,
    //   image: firstImage,
    //   stock: 15


     },
  ]

  // const DetailMockData = [
  //   {
  //     id: 1,
  //     detail: "Skeletor",
    
  //   }, 
  // ]

  useEffect(() =>{
    new Promise((right, wrong) =>{
      setTimeout(()=>{        // right(["Linda", "Calurosa", "Copada"]);
        right(ItemsMockData);
      }, 2000);
     
    }).then(solved => setItems(solved)) 
    
    // new Promise2((right, wrong) =>{
    //   setTimeout(()=>{
    //     // right(["Linda", "Calurosa", "Copada"]);
    //     right(DetailMockData);
    //   }, 2000);
     
    // }).then(solved => setItems(solved))


  });
  return (
    <div className="App" id ="hero">
 <NavBar/>
 <ItemListContainer items ={items}></ItemListContainer>
  {/* <ItemDetailContainer detalles = {detalles}/>  */}
     </div>
  );
}

export default App;

