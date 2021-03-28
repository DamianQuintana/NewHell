import React from "react";
import {useEfect, useState} from "react";
import Item from "./Item";

const Counter = ({init, stock, onAdd} ) =>{

    const [counter, setCounter] = useState(init);
    const [compra, terminarCompra] = useState("No termino la compra todavia");

    
    
    const handleApp = () =>{
        if(counter <stock){
            setCounter(counter +1);
        }
        else{
            alert("No queda mas stock");
        }
    }

    const handleSubtract = () =>{
        if(counter>=1){
            setCounter(counter -1);
        }
        else{
            alert("No queda mas para restar");
        }
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setCounter(e.target.value);
    }
    const changeComponent = () =>{
        if(counter>0)
        terminarCompra("Terminar compra agregar:  " +counter + " items al carrito");
        else
        terminarCompra("No termino la compra todavia");

    }

    return(
        <div>
             Stock: 
            <p>STOCK {stock - counter}</p>
            <button onClick ={handleApp}>+1</button>
            <button onClick ={handleSubtract}>-1</button>
            {/* <button onSubmit ={ e=> onAdd(e, counter)}> */}
            <input value = {counter} onChange ={e =>handleChange(e)}></input>
            <button onClick= {e=> onAdd(e, counter), changeComponent}>AGREGAR AL CARRITO</button>
            <br/>
            <button>{compra}</button>
            {/* <button onClick={changeComponent}>CAMBIAR</button> */}
        </div>
    );
}

export  default Counter;









// import Counter from './Counter.'
// //Muestra información nada más, es stateLess
// export default function ItemDetail({props}){
    
// const onAdd = (e, counter) =>{
//     alert("Se agregaron al carrito " +counter +" elementos");
//   }
//     return(
//         <div>
//             <Counter  init = {1} stock ={10} onAdd = {onAdd}/>
//             <li>{props.detail}</li>
//         </div>
        
//     );
// } 
    
    
// //Este llama a itemDetailContainer