import React from "react";
import Cart from "./cart";
import { Link } from "react-router-dom";

function List({ products, setItems,items, setPrice, price, setCart, cart }) {
  // const product = ['pencil', 'scissor', 'paper'] ;
  var storedItems = JSON.parse(localStorage.getItem("items"))? JSON.parse(localStorage.getItem("items")) : [] ;

  // const storedQuantity = JSON.parse(localStorage.getItem("quantity")) ? JSON.parse(localStorage.getItem("quantity")) : [];
  // const [quantity , setQuantity] = useState(storedQuantity); 
  // let quantity = storedQuantity ? storedQuantity : [];
  let previous = 0;
  let selectedValue  = 1;

  function removeAllElements() {
    setItems([]);
    setCart(0);
    setPrice(0);
  }

  function display(el, index) {


    // useEffect(() => {
    //   return () => {
    //     effect
    //   };
    // }, [input])
    let foundQ = items.find( no => no.itemId === el.id );
    
    if(foundQ){
      
     
      selectedValue = foundQ.quantity;
      

      
    }

  function quantityFunction(e){
    console.log(e.target.id);
    const pre = previous;
    setPrice(price +  ((e.target.value * el.price) - (pre * el.price)))
    previous = e.target.value;
    setCart(cart +  (e.target.value  - pre))
    // const objQuantity = { 
    //   id:  el.id,
    //   quantity : e.target.value
    // }
    const selectId = e.target.id;
    
    let found = items.find( no => no.itemId === selectId );
    
    if(found){
      console.log("yes");
      found.quantity = e.target.value;
      selectedValue = e.target.value;
      // console.log(found.quantity +" this is acytual");

      
    }
    // else{
    //   console.log("no");
    //   found.quantity = objQuantity.quantity
    // }

  }


  function priceSet(e){
    previous = e.target.value;
  }



    function remove(e) {
      e.preventDefault();
      // const btn = document.querySelector(`[data-id='${el.id}']`);
      // btn.innerText = "add";
      // console.log('".' + el.id + '"');
      const select = document.querySelector(`.select-${el.id}`);

      // let index = quantity.findIndex(elem => elem.id === el.id );
      // quantity.splice(index,1);



      const quantityTotal = select.value;
       
      setPrice(price - (el.price*quantityTotal ));
      setCart(cart - quantityTotal);
      setItems((prev) => {
        return prev.filter((elem) => {
          return elem.itemId !== el.id;
        });
      });
      

    }
    
    const founded = storedItems.find(elem => elem.itemId === el.id);

    if (founded) {
      console.log(el.imgURL + "hi there");
      return (
        <div key={index} className="cart-div">
          <img src={el.imgURL} height="100px" alt={el.name}/>
          {el.name} <br /> <br />
          <b>Price:</b> Rs.{el.price}
          <br />
         
          <div>
          <h4>Quantity</h4>
          <select name="quantity" defaultValue={selectedValue} onChange={quantityFunction} id={el.id} onClick={priceSet} className={"select-" +  el.id}>
            {/* {selectedValue == 1 ? <option value="1" selected>1</option> : <option value="1" >1</option>}
            {selectedValue == 2 ? <option value="2" selected>2</option> : <option value="2" >2</option>}
            {selectedValue == 3 ? <option value="3" selected>3</option> : <option value="3" >3</option>}
            {selectedValue == 4 ? <option value="4" selected>4</option> : <option value="4" >4</option>}
            {selectedValue == 5 ? <option value="5" selected>5</option> : <option value="5" >5</option>} */}
            <option value="1">1</option>
             <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          </div>
          <br />
          <br/>
          <br/>
          <button onClick={remove} className="btn btn-outline-danger" >remove</button>
        </div>
      );
    }
  }
  return (
    <div>
      {items.length !== 0 ?'' : <h1 className="text-center">Cart is Empty</h1>}
      <ul>{products.map(display)}</ul>
      {items.length !== 0 ? <Cart price={price} /> : ''}
    {items.length !== 0 ? 
    <button onClick={removeAllElements} className="btn btn-light">
      clear cart
    </button>
  :
  ''  
  }
    <br/>

      <Link to='/'>
      {items.length !== 0 ?"Go Back" : "Find something to buy"}
      </Link> <br/>
      <Link to="/checkout">
        {price ? "checkout" : ''}
      </Link>
    </div>
  );
}
export default List;
