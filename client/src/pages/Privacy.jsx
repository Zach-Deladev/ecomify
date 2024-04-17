import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Ecomify Privacy Policy</Card.Title>
              <Card.Text>
                Welcome to Ecomify! This Privacy Policy ("Policy") describes how we collect, use, and disclose your personal information when you use our website.
                <br />
                <br />
                Personal Information: We may collect certain personal information from you, such as your name, email address, and shipping address, when you register on our website or make a purchase.
                <br />
                <br />
                Use of Information: We may use your personal information to process your orders, communicate with you about your orders, and provide you with updates about our products and promotions.
                <br />
                <br />
                Data Security: We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                <br />
                <br />
                Cookies: We may use cookies and similar tracking technologies to improve your browsing experience on our website and analyze how you interact with our website.
                <br />
                <br />
                Third-party Services: We may use third-party services for analytics, payment processing, and other functions. These third-party services may collect and use your personal information in accordance with their own privacy policies.
                <br />
                <br />
                Changes to this Policy: We may update this Policy from time to time. We will notify you of any changes by posting the new Policy on this page.
                <br />
                <br />
                Contact Us: If you have any questions or concerns about this Policy, please contact us at privacy@ecomify.com.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
