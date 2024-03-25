import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './best-sellers.css';

function BestSellers() {
  return (
    <div className="best-sellers">
      <h1>Best Sellers</h1>
      <Row>
        {[...Array(4)].map((_, index) => (
          <Col key={index} lg={3} md={3} sm={6} xs={6} className="best-sellers-box">
            <img src="6-pack.png" width="100%" alt={`Beer Pack ${index + 1}`} />
            <div className="discount-badge-box"><p>15% OFF</p></div>
            <div className="best-sellers-box-text">
              <h3>Beer Belly 6 Pack</h3>
              <p className="reviews">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">star</span>
                ))}
                <span className="ps-1">163 Reviews</span>
              </p>
              <div className="best-sellers-box-price">
                <p>
                  <span className="compare-at-price price">£150.00</span>
                  <span className="sale-price price">£75.00</span>
                </p>
              </div>
              <div className="best-sellers-box-item-price">
                <p><small>Only £12.50 per item!</small></p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col>
          <Button variant="primary">Shop Now <span className="material-symbols-outlined">arrow_forward</span></Button>
        </Col>
      </Row>
    </div>
  );
}

export default BestSellers;
