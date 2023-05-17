import React from 'react'
import './Card.css' 

export default function Card({cartItem, handleAddProduct,handleRemoveProduct,handleClearCart}) {

     const shiping =100;
     const totalPrices = cartItem.reduce((price, item) => (price + item.quantity * item.price), 0)

      const totalPrice = totalPrices+100;
  return (
   
    <div className='cart-item'>
        <h2 className='cart-item-header'> 
        cart item
        </h2>
        <div  className='cart-item-clear'>
            {cartItem.length >= 1 && (
                 <button  className='cart-item-clear-button' onClick={handleClearCart}>
                    clear cart
                 </button>
            )}
           
        </div>
          
         
        {cartItem.length===0 && (<div className='cart-item-empty'> no item added</div>)}

        <div>
       
                    {cartItem.map((item)=>(
                        <div key={item.id} className="cart-item-list">
            <img className='cart-item-image'
            src={item.image}

            alt={item.name}
         
            />
            <div className='cart-item-name'>{item.name}</div>  
            <div className='cart-item-function'>
                    <button  className='cart-item-add' onClick={()=>handleAddProduct(item)}>
                        +
                    </button>
                    <button  className='cart-item-remove' onClick={()=>handleRemoveProduct(item)}> - </button>
                          </div>
                          <div className='cart-item-price'>
                            {item.quantity}* ₹{item.price}
                            
                          </div>
                          
                      </div>
                       
                    
                    ))}
        </div>
        <div className='cart-item-total-name'>
          Shipping charges 
          <div className='cart-item-total-price'>
            { shiping}
          </div>
        </div>
        <div className='cart-item-total-name'>
            Total price
            <div className='cart-item-total-price'>
            ₹{totalPrice}
            </div>
        </div>
       
        
          </div>
  )
}
