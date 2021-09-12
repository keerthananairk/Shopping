import React from 'react'
import './Product.css'
import Axios from 'axios'
import { useStateValue } from './StateProvider'
function Product({id,title,image,price}) {
    const [{ basket },dispatch]=useStateValue();
    console.log('this is the basket >>> ', basket);

    const addToBasket=()=>{
       dispatch({
           type:'ADD_TO_BASKET',
           item:{
               id:id,
               title:title,
               image:image,
               price:price,
           }
       })
       
    }
    

    const list =()=>{
        Axios.post("http://localhost:8081/list", {id:id, title:title, price:price, image:image,
    }).then((response)=>{
        console.log(response)
    })
    }
  
     

    return (
        <div className='product'>
            <div className="product_info">
                 <p>{title}</p>
                
                <p  className="product_price">
                    <small>RS</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="" />
            
            <button onClick={()=>{
                addToBasket();
                list();
               
            }}>
                Add to Cart
                </button>
        </div>
    )
}

export default Product