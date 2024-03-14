import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; // Assuming you'll create a custom CSS file for additional styling

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h1>Welcome to Our Website</h1>
            <p>
              This is a hero section where you can highlight your key messages
              or features.
            </p>
          </Col>
          <Col xs={12} md={6}>
            {/* Optional: Insert an image or any additional content here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
