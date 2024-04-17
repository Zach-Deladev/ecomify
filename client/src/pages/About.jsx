import React from 'react';
import Confetti from 'react-confetti';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  return (
    <div style={{ position: 'relative'}}>
      <Container className="mt-4 mb-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>About Ecomify</Card.Title>
              <Card.Text>
                Welcome to Ecomify! We are a passionate team dedicated to providing high-quality t-shirts and exceptional shopping experiences for our customers.
                <br />
                <br />
                Founded in 2024, Ecomify has quickly become a leading online destination for trendy and stylish apparel. Our mission is to offer a diverse selection of designs that cater to every individual's unique taste and preference.
                <br />
                <br />
                At Ecomify, we prioritize customer satisfaction above all else. Whether you're a seller looking to showcase your designs or a buyer seeking the perfect t-shirt, we strive to ensure that your experience with us is seamless and enjoyable.
                <br />
                <br />
                Our team is committed to upholding the highest standards of integrity and professionalism in all aspects of our business. From ethical manufacturing practices to transparent communication, we believe in building trust and fostering long-lasting relationships with our customers.
                <br />
                <br />
                Thank you for choosing Ecomify. We look forward to serving you and helping you express your individuality through our stylish collection of t-shirts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AboutUs;
