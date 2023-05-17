import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./component/back/data/Data";
import Header from "./component/back/front/Header";
import Routes from "./component/back/front/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./component/back/front/Product/Product";

function App() {
  const { productItem } = data;
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    console.log("updated cart item", cartItem);
  }, [cartItem]);

  const handleAddProduct = (product) => {
    console.log("add ", product);
    const productExist = cartItem.find((item) => item.id === product.id);
    console.log("prod exist ", productExist);

    if (productExist != null) {
      console.log("yes, prod exist ");

      const updatedCartItem = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updatedCartItem);
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    console.log("add ", product);

    const ProductExist = cartItem.find((item) => item.id === product.id);
    console.log("prod exist ", ProductExist);

    if (ProductExist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItem([]);
  };




  return (
    <>
      <div>
        <Router>
          <div>
            <Header cartItem={cartItem} />
       
            <Routes
              productItem={productItem}
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleClearCart={handleClearCart}
            />
          
          </div>
        </Router>

      </div>
    </>
  );
}

export default App;
