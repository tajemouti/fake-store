import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  }

  const cards = products.map(product => [
    <div key={product.id} className="col-md-12" style={{marginBottom: '10px'}}>
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ])

  return (
      <div className="row">
        {cards}
      </div>
  )
}

export default Cart