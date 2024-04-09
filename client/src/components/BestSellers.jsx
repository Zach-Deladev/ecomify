import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSellers.css";
import Pack from "../assets/6pack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import faArrowRight instead of faArrowForward
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function BestSellers() {
  return (
    <div className="best-sellers">
      <h1>Best Sellers</h1>
      <Row>
        {[...Array(4)].map((_, index) => (
          <Col
            key={index}
            lg={3}
            md={3}
            sm={6}
            xs={12}
            col={12}
            className="best-sellers-box"
            style={{ position: 'relative' }}
          >
            <a href="/product-page"> 
            <img src={Pack} width="100%" alt={`Beer Pack ${index + 1}`} />
            <div className="discount-badge-box" style={{ position: 'absolute', top: '0px', right: '12px', color: 'white', borderRadius: '5px' }}>
              <p>15% OFF</p>
            </div>
            <div className="best-sellers-box-text">
            <p className="reviews">
                {[...Array(5)].map((_, i) => (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -930 930 930" width="20">
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" fill="gold"/>
                  </svg>
                ))}
                <span className="ps-1">163 Reviews</span>
              </p>
              <h3>Beer Belly 6 Pack</h3>
              <div className="best-sellers-box-price">
                <p>
                  <span className="compare-at-price price">£150.00</span>
                  <span className="sale-price price">£75.00</span>
                </p>
              </div>
              <div className="best-sellers-box-item-price">
                <p>
                  <small>Only £12.50 per item!</small>
                </p>
              </div>
            </div>
            </a>
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col>
        <Button variant="primary">
            Shop Now <FontAwesomeIcon icon={faArrowRight} /> {/* Use faArrowRight here */}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default BestSellers;
