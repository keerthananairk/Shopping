import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,price}) {
  const [{basket}, dispatch]= useStateValue();
  const removeFromBasket=()=>{
     dispatch({
         type: "REMOVE_FROM_BASKET",
         id:id,
     })
  }

     
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>
            <div className="checkoutProduct_info">
             <p className="checkoutProduct_title">{title}</p>
             <p className="checkoutProduct_price"></p>
             <small>RS</small>
             <strong>{price}</strong>
             <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
