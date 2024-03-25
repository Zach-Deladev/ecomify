import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
  return (
    <div className="testimonials">
      <Container>
        <Row>
          <Col md={4}>
            <img src="test1.png" width="100%" alt="Testimonial 1" />
            <div className="testimonials-text">
              <p className="testimonials-reviews">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                ))}
              </p>
              <p className="testimonial-body">
                "These are by far the best t-shirts I have ever purchased or worn; they are so flattering"
              </p>
              <li>Rover S. Verified Buyer</li>
              <a>SHOP THE COLLECTION</a>
            </div>
          </Col>
          <Col md={4}>
            <img src="test2.png" width="100%" alt="Testimonial 2" />
            <div className="testimonials-text">
              <p className="testimonials-reviews">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                ))}
              </p>
              <p className="testimonial-body">
                “Delighted with these, a proper fit without feeling I’m wearing a potato sack.”
              </p>
              <li>David B. Verified Buyer</li>
              <a>SHOP THE COLLECTION</a>
            </div>
          </Col>
          <Col md={4}>
            <img src="test3.png" width="100%" alt="Testimonial 3" />
            <div className="testimonials-text">
              <p className="testimonials-reviews">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                ))}
              </p>
              <p className="testimonial-body">
                “Not only are the shirts great quality & great fit but awesome customer service.”
              </p>
              <li>Lee W. Verified Buyer</li>
              <a>SHOP THE COLLECTION</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
