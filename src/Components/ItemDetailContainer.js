import Example from './ItemCount';
import React, {useState} from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import DetailList from './DetailList';


const ItemDetailContainer = (props) =>(//Acá vamos a recibir un array 
  <div >

    <DetailList details = {props.details}/>   
  </div>
);
export default ItemDetailContainer;

