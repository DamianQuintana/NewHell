import React from "react";
import {useEfect, useState} from "react";

const Counter = ({init, stock, onAdd}) =>{

    const [counter, setCounter] = useState(init);

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

    return(
        <div>
             Stock: 
            <p>{stock}</p>
            <button onClick ={handleApp}>+1</button>
            <button onClick ={handleSubtract}>-1</button>
            <form onSubmit ={ e=> onAdd(e, counter)}>
            <input value = {counter} onChange ={e =>handleChange(e)}></input>
            <button type = "submit">Agregar al carrito</button>
            </form>
        </div>
    );
}

export  default Counter;