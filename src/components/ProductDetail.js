import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card, Button, Container, Row, Col,
} from 'react-bootstrap';
import { add } from '../features/cartSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector(
    (state) => state.products.data.find((item) => item.id === parseInt(productId, 10)),
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '300px', height: '400px' }} />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <strong>Price:</strong>
              {' '}
              {product.price}
              <br />
              <strong>Description:</strong>
              {' '}
              {product.description}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
