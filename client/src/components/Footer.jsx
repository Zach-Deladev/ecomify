import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col className="text-center text-md-left">
            <h5>About Us</h5>
            <p>
              We're passionate about offering the best quality t-shirts,
              featuring unique designs and unmatched comfort.
            </p>
          </Col>
          <Col className="text-center text-md-left">
            <h5>Contact Us</h5>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col className="text-center text-md-left">
            <h5>Follow Us</h5>
            <p>
              Stay updated with our latest collections and exclusive offers on
              social media.
              <br />
              [Social Media Links Here]
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            © 2024 Your Company Name. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
