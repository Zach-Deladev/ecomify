
import React from 'react';
import Confetti from 'react-confetti';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Tos = () => {

  return (
    <div style={{ position: 'relative'}}>
      <Container className="mt-4 mb-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Ecomify Terms of Service</Card.Title>
              <Card.Text>
                Welcome to Ecomify! These Terms of Service ("Terms") govern
                your use of our website, including all features and services
                offered by Ecomify.
                <br />
                <br />
                By accessing or using our website, you agree to be bound by
                these Terms. If you disagree with any part of the Terms, then
                you may not access the website.
                <br />
                <br />
                1. Selling T-Shirts: Ecomify provides a platform for sellers
                to list and sell t-shirts. Sellers are responsible for
                accurately describing their products and fulfilling orders in
                a timely manner.
                <br />
                <br />
                2. Purchasing T-Shirts: Buyers can browse t-shirts listed on
                Ecomify and make purchases. Buyers are responsible for
                providing accurate shipping information and payment details.
                <br />
                <br />
                3. Intellectual Property: All content on Ecomify, including
                logos, images, and product descriptions, are the intellectual
                property of Ecomify or its licensors and may not be used
                without permission.
                <br />
                <br />
                4. Limitation of Liability: Ecomify is not liable for any
                damages or losses resulting from the use of our website or
                products purchased through our platform.
                <br />
                <br />
                These Terms may be updated from time to time. It is your
                responsibility to review the Terms periodically for changes.
                <br />
                <br />
                By continuing to use Ecomify after changes are posted, you
                accept the updated Terms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Tos;
