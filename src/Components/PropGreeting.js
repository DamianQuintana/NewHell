import React, {useState} from 'react';
import ItemCount from './ItemCount';
import CounterApp from './CounterApp'
import Counter from './Counter.';

function PropGreeting({greeting, buySome}){
    const [actualStock, setStock ] = useState(10);
    const restarStock = (newStock) => setStock((actualStock) => actualStock-newStock)
    const sumarStock = (newStock) => setStock((actualStock) => actualStock+newStock)
    return(
            <div>
              <h1>{greeting} <p><span>{buySome}</span></p></h1>
              {/* <ItemCount stock = {actualStock} initial ={1} onAdd ={restarStock} onLess ={sumarStock}/>  */}
             <CounterApp/>
              {/* //Aca ejecutamos ItemCOunt */}
            </div>
    );
}

export default PropGreeting;
