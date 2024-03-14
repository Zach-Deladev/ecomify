import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BestSellers = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Best Sellers</h1>
      <Row xs={1} md={3} className="g-4">
        {/* Example Product 1 */}
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150/CDA776"
            />
            <Card.Body>
              <Card.Title>Classic White Tee</Card.Title>
              <Card.Text>
                Our classic white tee is a best seller for a reason.
                Comfortable, versatile, and timeless.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Example Product 2 */}
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150/FA8072"
            />
            <Card.Body>
              <Card.Title>Bold Graphic Tee</Card.Title>
              <Card.Text>
                Make a statement with our bold graphic tees. Featuring unique
                designs that catch the eye.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Example Product 3 */}
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150/8A2BE2"
            />
            <Card.Body>
              <Card.Title>Vintage Band Tee</Card.Title>
              <Card.Text>
                Channel retro vibes with our vintage band tees. A nod to classic
                rock and roll.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BestSellers;
