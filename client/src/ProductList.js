import React, { useState, useEffect } from "react";

const Data = () => {
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result)
        }
      )
  }, [])

  return (
    <div>
      {item.map((item) => (
        <ul>
          <li>{item.title}</li>
          
          <li>{item.price}</li>
          <li>{item.image}</li>
        </ul>
      ))}

    </div>
  )
}

export default Data;