import React, { useState } from 'react';
import { mobilePhones } from "./product.data";
import { Container, Card, Button } from 'react-bootstrap';

const Products = () => {
  const [items, setItems] = useState(mobilePhones);
  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id  ? { ...item,qty: item.qty + 1} : item
    );
    setItems(newItem);
  };
  const minQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1? { ...item,qty: item.qty - 1} : item
    );
    setItems(newItem);
  };

  return (
    <div>
    <Container>
      <h1>Products</h1>
      {items.map((item) => (
        <div className='d-inline-flex' key={item.id}>
        
          <Card className="shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <Card.Img style={{ height: '30rem', objectFit: 'cover' }} src={require(`./asstes/${item.image}.png`)} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Some quick example text
              </Card.Text>
              <h4>Price: {item.price}</h4>
              <div>
                <p>
                  QTY : 
                  <Button onClick={()=>decQty(item.id)}>+</Button> {item.qty}
                  <Button onClick={() => minQty(item.id)}>-</Button>
                </p>
              </div>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          </div>
        
      ))}
    </Container>
    </div>
  );
};

export default Products;
