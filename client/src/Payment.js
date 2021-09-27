import React from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom'
import '@material-ui/icons/Search'
import { useStateValue } from './StateProvider'

import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
function Payment() {
    const[{basket},dispatch]=useStateValue();
  

    
   return (
        <div className="payment">
           <div className="payment_container">
               <h1>Checkout(<Link to="/checkout">{basket?.length} items</Link>)</h1>
                {/*payment_section -delivery address*/}
               <div className="payment_section">
                   <div className="payment_title">
                       <h3>Delivery Address</h3>
                  </div>
                    <div className="payment_address">
                       <p>test123@gmail.com</p>
                        <p>123 Line</p>
                        <p>Los Angles,CA</p>
                   </div>
                </div>
                {/*payment section - Review Item */}
                <div className="payment_section">
                  <div className="payment_title">
                      <h3>Review items and delivery</h3>
                  </div>
                  <div className="payment_items">
                   {basket.map(item=>(
                         <CheckoutProduct
                        id={item.id}
                         title={item.title}
                       image={item.image}
                         price={item.price}
                        />

                  ))}
                  </div>
                   </div>
                {/*payment section -payment method*/}
                <div className="payment_section">
                <div className="payment_title">
                  <h3>Payment Method</h3>
                     </div>
                     <div>
                         <CurrencyFormat 
                            renderText={(value)=>(
                                <h3>Order total:{value}</h3>
                         )}
                         decimalScale={2}
                           value={getBasketTotal(basket)}
                            displayType={"text"}
                           thousandSeparator={true}
                           prefix={'RS'}/>
                           
                        <Link to="" ><img src="data:image/png;base64,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" height="70px" alt=""/></Link>
                          <Link to=""> <img src="data:image/png;base64,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" height="70px" alt=""/></Link>
                 </div>
                     
                        
                    
            </div>
            </div>
        </div>
 )
}

export default Payment
