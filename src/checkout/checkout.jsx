

import React from 'react'
import Price from './price'

function Checkout({products}) {

    const {price} = Price(products) ;



    return (
        <div>
            <h1>Total Price :</h1>
           <h1>{price}</h1> 
        </div>
    )
}

export default Checkout;
