import React, { useState, useEffect } from "react";

const Data = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/product")
      .then(res => res.json())
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