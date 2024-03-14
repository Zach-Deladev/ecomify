import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Reviews = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Customer Reviews</h1>
      <Row xs={1} md={2} className="g-4">
        {/* Example Review 1 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                March 10, 2024
              </Card.Subtitle>
              <Card.Text>
                "Absolutely love these t-shirts! The material is fantastic, and
                the designs are so unique. Will definitely be buying more."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Example Review 2 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                March 15, 2024
              </Card.Subtitle>
              <Card.Text>
                "I was impressed with the quality of the shirts and the quick
                delivery. The customer service was also top-notch!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Add more reviews as needed */}
      </Row>
    </Container>
  );
};

export default Reviews;
