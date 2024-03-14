import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Why Choose Us</h1>
      <Row xs={1} md={3} className="g-4">
        {/* Point 1 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Quality Products</Card.Title>
              <Card.Text>
                We ensure our t-shirts are made from the highest quality
                materials, offering comfort and durability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Point 2 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Unique Designs</Card.Title>
              <Card.Text>
                Stand out from the crowd with our unique and creative t-shirt
                designs that you won't find anywhere else.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Point 3 */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Exceptional Customer Service</Card.Title>
              <Card.Text>
                Our team is dedicated to providing you with the best possible
                service, from browsing to delivery.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
