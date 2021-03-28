import React, {useState} from 'react';
import {Component} from 'react';

const cloth=[
    "Remera",
]
const ItemCount = ({stock, initial ,onAdd, onLess}) =>{
    return(
        <div>
            <br/>
            <h1>assssssssssssssssssssssssssssssssssssss</h1>
                {cloth.map((a) => 
                <p id="span"><div id ="span">stock: {stock}</div>
                <span>{a}</span> <input id="cantidad" type="number" placeholder={initial}></input>
                <button class ="buy-a-tshirt"onClick = {() =>onAdd(1)}>Agregar al carrito</button>
                <button onClick = {() =>onLess(1)}>Sacar del carrito</button></p>)}
        </div>
    );
}
export default ItemCount;