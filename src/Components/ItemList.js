// //Es agrupador de set de componentes item.js
 import ItemListContainer from './ItemListContainer.js'
import Item from './Item'
const ItemList = (props)=>( //Lega un array de los items acá 
<div style ={{color: "red"}}>
    {props.items.map((x)=> 
        <Item item= {x}/>
        )}
</div>
); 


export default ItemList;

//Le enviamos a item una prop que va a ser el item a mostra