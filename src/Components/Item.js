import ItemDetailContainer from './ItemDetailContainer';
import {useEffect, useState} from "react";
import Counter from './Counter.';

const onAdd = (e, counter) =>{
  alert("Se agregaron al carrito " +counter +" elementos");
}
function Item(props){
  const[detalle, setDetail] = useState([]);

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
<li>Detalle: <ItemDetailContainer detalle = {detalle}/></li>
{/* NO SE ESTA MOSTRANDO EL DETALLE */}
<li>{props.item.price}</li>
<li><Counter init = {1} stock ={10} onAdd = {onAdd}/></li>
</ul>
    </div>
  );
}

export default Item;