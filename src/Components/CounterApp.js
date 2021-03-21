import Counter from './Counter.';
 const CounterApp = () =>{
    const onAdd = (e, counter) =>{
        alert("Se agregaron al carrito " +counter +" elementos");
    }

    return(
        <dv>
            <h1>COUNTERAPP</h1>
            <Counter init = {1} stock ={10} onAdd = {onAdd}/>
        </dv>

    );
    }

    export default CounterApp;

