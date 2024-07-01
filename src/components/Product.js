import React, { useEffect } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../features/cartSlice';
import { getProducts } from '../features/productSlice';

const Product = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong!! Try again later
      </Alert>
    );
  }

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>
      <Card className="h-100">
        <Link to={`/product/${product.id}`}>
          <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
          </div>
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Product;
