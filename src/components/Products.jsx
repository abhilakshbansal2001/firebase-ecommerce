import React,{useEffect,useState} from 'react'
import "../product.css";

function Products({match,products,items,addCart}) {


    const itemId = match.params.id;
    let name = '',desc='',price=0;


    const foundItem = products.find(item => item.id === itemId)

    if(foundItem){
        name = foundItem.name;
        price = foundItem.price;
        desc = foundItem.description;
    }



    

    return (
        <div className="product-detail">
           {name} <br/>
           Rs.{price} <br/>
           {desc}
           {items.find(elem => elem.itemId === itemId) ? <button className="btn btn-success" disabled>
                item has been added
           </button> : <button  data-id={itemId}
                data-price={price}
           onClick={addCart} className="btn btn-primary">
           add
           </button>}
           
        </div>
    )
}

export default Products
