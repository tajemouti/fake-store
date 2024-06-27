import React, { useEffect, useState } from 'react'

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result))

  }, []);

  return (
    <>
      <h1>Product</h1>
      {JSON.stringify(products)}
    </>
  )
}

export default Product