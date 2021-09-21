import React, { useState, useEffect } from "react";

const Data = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      //.then(res =>(console.log(res))
      
      .then(
        (result) => {
          setItem(result);
        }
      )
  }, [])
  return (
    <div>
    {item.map((item)=>(
      <p>
      {item.title}
      {item.price}
      </p>
    ))}
      
    </div>
  )
}

export default Data;