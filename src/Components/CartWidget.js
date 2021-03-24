import { useState } from 'react';
import logo from './Image/BuyOne.jpg'
import PropGreeting from './PropGreeting';

function CartWidget(){
   
    return(
        <div id ="hero">
            <br/>
            <h1 style ={{marginTop: '150px'}}>COMPONENTE <span>CART WIDGET</span></h1>
            <img id="cartImage" src = {logo} style = {{maxWidth: '30%'}}></img>
<PropGreeting greeting ="Bienvenido a la sección del ItemListContainer" buySome="Dentro de poco vamos a tener los productos cargados"/> 
        </div>
    );
}

export default CartWidget;