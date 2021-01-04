import React from "react";

function Cart({ price }) {
  return (
    <div>
      Total Amount: <br />
      Rs.{price}
    </div>
  );
}

export default Cart;
