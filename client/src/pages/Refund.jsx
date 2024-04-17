import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const RefundPolicy = () => {
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Ecomify Refund Policy</Card.Title>
              <Card.Text>
                Welcome to Ecomify! This Refund Policy ("Policy") outlines our guidelines for refunds and returns.
                <br />
                <br />
                Eligibility: To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                <br />
                <br />
                Refund Process: To request a refund, please contact us at refunds@ecomify.com within 30 days of receiving your order. We will review your request and notify you of the approval or rejection of your refund.
                <br />
                <br />
                Refund Amount: If your refund is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                <br />
                <br />
                Return Shipping: You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
                <br />
                <br />
                Damaged or Defective Items: If you receive a damaged or defective item, please contact us immediately at refunds@ecomify.com. We will work with you to resolve the issue and provide a replacement or refund.
                <br />
                <br />
                Contact Us: If you have any questions or concerns about this Policy, please contact us at refunds@ecomify.com.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RefundPolicy;
