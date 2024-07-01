import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add, decrement } from '../features/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const decrementQuantity = (id) => {
    dispatch(decrement(id));
  };

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <Col key={product.id} md={12} className="mb-3">
      <Card className="h-100 cart-card">
        <Row noGutters>
          <Col md={3} className="align-content-center">
            <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.image} className="cart-img" style={{ width: '50px' }} />
            </Link>
          </Col>
          <Col md={6} className="align-context-center">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Price:</strong>
                {product.price}
                <br />
                <strong>Quantity:</strong>
                {product.quantity}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md={3} className="align-content-center">
            <Card.Footer className="cart-footer" style={{ border: 'none', background: 'white' }}>
              <Button variant="primary" className="mx-1" onClick={() => addToCart(product)}>+</Button>
              <Button variant="warning" className="mx-1" onClick={() => decrementQuantity(product.id)}>-</Button>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Col>
  ));

  return (
    <div className="row">
      <h1>Cart</h1>
      {cards}
    </div>
  );
};

export default Cart;
