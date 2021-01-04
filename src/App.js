import React from "react";
import "./styles.css";
import Home from "./components/home";

import Items from "./product/product";
import Nav from './components/Nav'

export default function App() {

  const { products } = Items();


  return (

      <div className="App">
        {/* <Nav /> */}
      
       <Home products={products} />
      
      </div>

  );
}
