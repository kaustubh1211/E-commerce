import React from "react";
import Product from "../Product/Product";
import Signup from "../Signup/Signup";
import Card from "../card/Card";
import { Route, Switch } from "react-router-dom";

export default function Routes({ productItem , cartItem,handleAddProduct,handleRemoveProduct,handleClearCart}) {
 
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Product productItem={productItem} handleAddProduct={handleAddProduct} />
        </Route>
        <Route path="/signup" exact>
            <Signup/>
        </Route>
        <Route path="/card" exact>  
            <Card   
            cartItem={cartItem} 
             handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct} 
                handleClearCart={handleClearCart}
          />
        </Route>
      </Switch>
    </div>
  );
}
