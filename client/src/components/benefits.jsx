import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./benefits.css";
import Pack from "../assets/6-pack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
  return (
    <div className="benefits">
      <h1>Why Ecomify</h1>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} className="benefits-left-side">
            <div className="benefit-list">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  style={{ marginRight: "2%" }}
                >
                  <path
                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                    fill="#1C9B19"
                  />
                </svg>
                Loose at the front
              </h3>
              <p>The t-shirt tapers off at the bottom to hide your belly</p>
            </div>

            <div className="benefit-list">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  style={{ marginRight: "2%" }}
                >
                  <path
                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                    fill="#1C9B19"
                  />
                </svg>
                Loose at the front
              </h3>
              <p>The t-shirt tapers off at the bottom to hide your belly</p>
            </div>

            <div className="benefit-list">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  style={{ marginRight: "2%" }}
                >
                  <path
                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                    fill="#1C9B19"
                  />
                </svg>
                Loose at the front
              </h3>
              <p>The t-shirt tapers off at the bottom to hide your belly</p>
            </div>

            <Button variant="primary">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            <p>
              <span className="free-shipping">Free Shipping Over £100</span>
            </p>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12} className="benefits-side">
            <img src={Pack} width="100%" alt="Benefits" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;
