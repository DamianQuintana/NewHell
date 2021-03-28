import ItemDetailContainer from './ItemDetailContainer';
import {useEffect, useState} from "react";
import Counter from './Counter.';


function Item(props){
  const[details, setDetail] = useState([]);
  const onAdd = (e, counter) =>{
    alert("Se agregaron al carrito " +counter +" elementos");
    {props.item.stock = props.item.stock - counter}
  }
  const DetailMockData = [
    {
      id: 1,
      detail: "Skeletor",
    
    }, 
  ]
  
  useEffect(() =>{

    new Promise((right, wrong) =>{
      setTimeout(()=>{
        right(DetailMockData);
      }, 2000);
     
    }).then(solved => setDetail(solved))

  });
  return(

<div style = {{color: "#d9ba85", fontWeight: "30px", fontSize: "20px", paddingRight: "1000px"}}>
<ul><li>ID: {props.item.id}</li>
<li><image src = {props.item.image}></image></li>
<li>Producto: {props.item.title}</li>
<li>Descripcion: {props.item.description}</li>
{/* <li><ItemDetailContainer detalle = {detalle}/></li> */}
<ItemDetailContainer details = {details}></ItemDetailContainer>
{/* NO SE ESTA MOSTRANDO EL DETALLE */}
<li>PRECIO: {props.item.price}´</li>
<li><Counter init = {0} stock ={props.item.stock} onAdd = {onAdd}/></li>
</ul>
    </div>
  );
}

export default Item;