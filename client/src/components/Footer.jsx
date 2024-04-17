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
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/tos">Terms of service</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} sm={6} xs={6}>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/refund">Refund policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyright border-top pt-4">
        <Container>
          <Row>
            <Col lg={6} sm={6} xs={12} className="social-icons">
              <Link to="#">
                <i className="fab fa-facebook fa-lg"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram fa-lg"></i>
              </Link>
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
