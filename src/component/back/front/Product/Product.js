import React from "react";
import "./Product.css";

export default function ({ productItem ,handleAddProduct}) {
  

  return (
    <div className="Product">
      {productItem &&
        productItem.map((productItems) => (
          <div className="card"  >
            <div >
            
              <img className="product-image" src={productItems.image} alt={productItems.name} />
            </div>
            <div>
                <h3 className="product-name">{productItems.name}</h3>
            </div>
            <div>
                <h3 className="product-price"> ₹{productItems.price}</h3>
            </div>
            <div>
                <button className="product-button" onClick={()=>handleAddProduct(productItems)}>add to card</button>
            </div>
          </div>
        ))}
    </div>
  );
}
