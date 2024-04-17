import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer pb-4">
      <Container>
        <Row>
          <Col lg={3} sm={12}>
            <h1>Subscribe for Updates</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="button-addon2"
              />
              <Button variant="secondary" id="button-addon2">
                Subscribe
              </Button>
            </div>
          </Col>
          <Col lg={5} sm={12}></Col>
          <Col lg={2} sm={6} xs={6}>
            <ul>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/tos">Terms of service</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} sm={6} xs={6}>
            <ul>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
              </li>
              <li>
                <a href="/refund">Refund policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyright border-top pt-4">
        <Container>
          <Row>
            <Col lg={6} sm={6} xs={12} className="social-icons">
              <a href="#">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </Col>
            <Col lg={6} sm={6} xs={12} className="all-rights">
              © 2024, Ecomify (UK) All Rights Reserved.
            </Col>
            <Col lg={12} sm={12} xs={12} className="text-center pt-3">
              <Dropdown>
                <Dropdown.Toggle variant="info">
                  United Kingdom (GBP £)
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    United Kingdom (GBP £)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
