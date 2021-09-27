import React,{useState,useEffect} from 'react'
import Products from './components/Products/Products'
const Store = () => {
    
    const[products,setProducts]=useState([]);
    useEffect(() => {
      fetch("http://13.250.111.175:5000/product")
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result)
        }
      )
    }, [])
    
   


    return (
        <div>
           <Products products={products}/> 
        </div>
    )
}

export default Store
