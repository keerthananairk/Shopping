import React from 'react'
import './Addproduct.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
function Addproduct() {
    return (
        <div className="center" style={{backgroundImage:'url("https://media.cntraveler.com/photos/57f54a129142f05c17741c8c/16:9/w_2560%2Cc_limit/hero-shop-1-cr-courtesy.jpg")',height:"700px",backgroundSize:"cover",backgroundPosition:'center',backgroundRepeat:"no-repeat"}}  >
          <Link to="/sellerpage"><Button>Add product</Button></Link>
        </div>
    )
}

export default Addproduct
