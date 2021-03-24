import Example from './ItemCount';
import React, {useState} from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) =>(//Acá vamos a recibir un array 
  <div id ="hero">
    <h1>ITEMLIST<span>CONTAINER</span></h1>
    <ItemList items = {props.items}/>   
  </div>
);
export default ItemListContainer;

