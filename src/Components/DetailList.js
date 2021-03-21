const DetailList = (props)=>( //Lega un array de los items acá 
<div style ={{color: "red"}}>
    {props.details.map((a)=> 
        <ItemDetail detail= {a}/>
        )}
</div>
); 


export default DetailList;

//Le enviamos a item una prop que va a ser el item a mostra