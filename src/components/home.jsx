import React, { useState } from "react";
import List from "./List";
import Checkout from '../checkout/checkout'
import Nav from './Nav'
import Products from './Products'
import Aside from './Aside'
import {BrowserRouter as Router , Switch ,Route,Link} from 'react-router-dom';


function Home({ products }) {
  var storedItems = JSON.parse(localStorage.getItem("items"));
  var storedPrice = JSON.parse(localStorage.getItem("price"));
  var storedCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storedCart ? storedCart : 0);
  const [items, setItems] = useState(storedItems ? storedItems : []);
  const [price, setPrice] = useState(storedPrice ? storedPrice : 0);



  function addCart(e) {
    const itemId = e.target.dataset.id;
    const productPrice = +e.target.dataset.price;

   
    console.log(e.target.classList);
    if(e.target.innerText === "add") {

      setItems((prev) => {
        if (!prev.includes(itemId)) return [...prev, {itemId,quantity : 1}];
      });
      e.target.innerText = "added";
      setPrice(price + productPrice);

      setCart(cart + 1);
      if( e.target.classList.contains("btn-home-page")){
        showAside(itemId);
      }
    

    }
    else {


      alert("Item already added");
    }
    
  } 

  function  showAside(id){
  
    const modal = document.querySelector("#modal-"+ id);
    modal.classList.add("show");
    
  }
  function remove_show_class(e){
    const id = e.target.id;
    // console.log(id);
    const modal = document.querySelector("#" + id);
    modal.classList.remove("show");
  }

  localStorage.setItem("items" , JSON.stringify(items));
  localStorage.setItem("price" , JSON.stringify(price));
  localStorage.setItem("cart" , JSON.stringify(cart));

  return (

    <Router>
      <>
      <Nav />
      <Switch>
        <Route path="/" exact>
      
      
      <div className="product-div">
        {products.map((product, index) => {
          return (
            <>
            <div className="modal-upper" id={"modal-" + product.id}  >
              <Aside name={product.name} price={product.price} id={product.id} remove_show_class={remove_show_class} imgURL ={product.imgURL} />
            </div> 
          <div className="product" key={index}>
            <Link to={`/products/${product.id}`}>
            
              <div>
              <img src={product.imgURL} height="100px" alt={product.name}/>
              </div>
             
              <h2>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h2>
              <p>
                <b>Rs.</b>
                {product.price}
              </p>
              </Link>
              
                {items.find(elem => elem.itemId === product.id) ? <button
                data-id={product.id}
                data-price={product.price}
                onClick={addCart}
                className="btn btn-success "
              >added</button>
              :
               <button
                data-id={product.id}
                data-price={product.price}
                onClick={addCart}
                className="btn btn-dark btn-home-page"
              >add</button>}
                
              
            
            
            </div>
          </>
          );
        })}
      </div>
      </Route>
     
      <Route path ="/cart">
      <List
        products={products}
        items={items}
        price={price}
        setPrice={setPrice}
        setItems={setItems}
        setCart={setCart}
        cart={cart}
      />
      </Route>
      <Route path="/checkout">
        <Checkout products={products} />
      </Route>
      <Route path="/products/:id" render={(props) => <Products {...props} products={products} 
      setItems={setItems} items={items} setCart={setCart} cart={cart} addCart={addCart}
      />} />
        {/* <Products products={products} />
      </Route> */}

      

      </Switch>
      </>
    </ Router>
  );
}

export default Home;
