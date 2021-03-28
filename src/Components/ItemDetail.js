// //Muestra información nada más, es stateLess
// const ItemDetail = (props) =>{  
//     <li>
//        {props.detail} 
//     </li>
// }
// export default ItemDetail;


// import Counter from './Counter.'
// //Muestra información nada más, es stateLess
// const ItemDetail = (props) => <div></div> ;
// //Este llama a itemDetailContainer
// export default ItemDetail;


export default function ItemDetail(props){
    return(
        <div>
<li>DETALLE: {props.detail.detail}</li>
        </div>
    );
}