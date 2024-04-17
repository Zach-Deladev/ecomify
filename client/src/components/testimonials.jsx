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
              "Absolutely obsessed with these! They fit like a dream and make me feel confident!"
              </p>
              <li>Paul S. Verified Buyer</li>
              <a href="/shop">SHOP THE COLLECTION</a>
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
              "I can't get enough of these! The fit is impeccable! plus they always garner compliments."
              </p>
              <li>Robert D. Verified Buyer</li>
              <a href="/shop">SHOP THE COLLECTION</a>
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
              "These are a game-changer! They hug in all the right places and the quality is unreal."
              </p>
              <li>Zach D. Verified Buyer</li>
              <a href="/shop">SHOP THE COLLECTION</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
