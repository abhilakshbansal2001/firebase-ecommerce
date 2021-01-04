import { useEffect, useState } from "react";
import { fireDataBase } from "../config";



function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fireDataBase.collection("products").onSnapshot((snapshot) => {
      let document = [];
      snapshot.forEach((doc) => {
        document.push({ ...doc.data() });
    
      });
      setProducts(document);
    });
  }, []);
 
  return { products };
}



export default Items;
