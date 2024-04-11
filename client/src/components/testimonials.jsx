import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Test1 from "../assets/test1.png";
import Test2 from "../assets/test2.png";
import Test3 from "../assets/test3.png";

function Testimonials() {
  return (
    <div className="testimonials">
      <Container>
        <Row>
          <Col md={4}>
            <img src={Test1} width="100%" alt="Testimonial 1" />
            <div className="testimonials-text">
              <p className="testimonials-reviews">
                {[...Array(5)].map((_, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -930 930 930"
                    width="24"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      fill="gold"
                    />
                  </svg>
                ))}
              </p>
              <p className="testimonial-body">
                "These are by far the best t-shirts I have ever purchased or
                worn; they are so flattering"
              </p>
              <li>Rover S. Verified Buyer</li>
              <a href="#">SHOP THE COLLECTION</a>
            </div>
          </Col>
          <Col md={4}>
            <img src={Test2} width="100%" alt="Testimonial 2" />
            <div className="testimonials-text">
              <p className="testimonials-reviews">
                {[...Array(5)].map((_, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -930 930 930"
                    width="24"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      fill="gold"
                    />
                  </svg>
                ))}
              </p>
              <p className="testimonial-body">
                “Delighted with these, a proper fit without feeling I’m wearing
                a potato sack.”
              </p>
              <li>David B. Verified Buyer</li>
              <a href="#">SHOP THE COLLECTION</a>
            </div>
          </Col>
          <Col md={4}>
            <img src={Test3} width="100%" alt="Testimonial 3" />
            <div className="testimonials-text">
              <p className="testimonials-reviews">
                {[...Array(5)].map((_, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -930 930 930"
                    width="24"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      fill="gold"
                    />
                  </svg>
                ))}
              </p>
              <p className="testimonial-body">
                “Not only are the shirts great quality & great fit but awesome
                customer service.”
              </p>
              <li>Lee W. Verified Buyer</li>
              <a href="#">SHOP THE COLLECTION</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
