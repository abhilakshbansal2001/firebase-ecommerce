import React from "react";



function Price(products) {

    let price = 0;




    const localData = JSON.parse(localStorage.getItem("items"));




        products.forEach(el => {
            localData.forEach(quant => {
              
                if(el.id == quant.itemId){
                    price += el.price * quant.quantity;
                }
            })
        })


    


        



    return { price };
  }
  
  
  
  export default Price;
  