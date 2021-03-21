import Example from './ItemCount';
import React, {useState} from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = (props) =>(//Acá vamos a recibir un array 
  <div>
    <ItemDetail details = {props.details}/>   
  </div>
);
export default ItemDetailContainer;

