import React from 'react'
import { Link } from "react-router-dom";


function Nav() {


    const cart = JSON.parse(localStorage.getItem("cart"));



    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">CartShip</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link to='/' class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Search</a>
                </li>
                
                <li class="nav-item">
                    <Link to="/cart" class="nav-link " >
                    Cart
                    <sup className="cart-sup">{cart}</sup>
                    </Link>
                </li>
                <li class="nav-item">
                    <a class=" btn btn-success" href="#">LogIn</a>
                </li>
                
                
                </ul>
                
            </div>
            </nav>
    )
}

export default Nav
