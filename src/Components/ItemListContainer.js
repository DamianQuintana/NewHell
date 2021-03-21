import Example from './ItemCount';
import React, {useState} from 'react';
import ItemList from './ItemList';


const ItemListContainer = (props) =>(//Acá vamos a recibir un array 
  <div>
    <h1>ITEMLISTCONTAINER</h1>
    <ItemList items = {props.items}/>   
  </div>
);
export default ItemListContainer;

