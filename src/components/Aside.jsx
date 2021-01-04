import React from 'react'
import '../modal.css';
import {Link} from 'react-router-dom';
function Aside({name ,price,imgURL,id,remove_show_class}) {
    
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <h1>{name}</h1>
                <h5>Price: Rs.{price}</h5>
                <img src={imgURL} height="300" alt={name}/>
                <div>
                    Item Added !
                </div>
                <Link to="/" onClick={remove_show_class} id={"modal-"  + id} className="btn btn-primary" >
                    Continue Shopping
                </Link>
                <Link to="/cart" className="btn btn-success" >
                    go to Cart
                </Link>
            </div>
            
        </div>
    )
}

export default Aside
