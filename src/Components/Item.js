import ItemDetailContainer from './ItemDetailContainer';
import {useEffect, useState} from "react";
//Muestra información nada más, es stateLess
const Item = (props) => <li>{props.item}</li> ;
//Este llama a itemDetailContainer
  export default Item;
