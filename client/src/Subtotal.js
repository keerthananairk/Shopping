import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'



function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal({basket?.length} items):<strong>{value}</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                
                displayType={"text"}
                thousandSeparator={true}
                prefix={"RS"}
            />

            <Link to="/login"><Button>Proceed to Checkout</Button></Link>
        </div>
    )
}

export default Subtotal
