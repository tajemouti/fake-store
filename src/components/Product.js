import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProducts(result))

  }, []);

  const cards = products.map(product => [
    <div key={product.id} className="col-md-3" style={{marginBottom: '10px'}}>
      <Card className="h-100">
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white'}}>
          <Button variant="primary">Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>

  ])

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product