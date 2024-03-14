import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Categories = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Categories</h1>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Graphic Tees</Card.Title>
              <Card.Text>
                Unique designs that stand out. Perfect for expressing your
                personality.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Plain Tees</Card.Title>
              <Card.Text>
                Simplify your style with our collection of plain t-shirts.
                Versatile and timeless.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Vintage Tees</Card.Title>
              <Card.Text>
                Get that classic look with our selection of vintage t-shirts. A
                blast from the past.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
