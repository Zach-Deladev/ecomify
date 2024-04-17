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
          <Col lg={6} md={6} sm={12} xs={12} className="benefits-left-side">
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
                Comfortable Fit
              </h3>
              <p>Loose front design ensures comfort, allowing easy movement all day.</p>
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
                Flattering Silhouette
              </h3>
              <p>Tapered bottom hides belly, providing slimming effect and confidence boost.</p>
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
                Versatile Style
              </h3>
              <p>T-shirts offer effortless style, pairing well with various outfits.</p>
            </div>

            <a href="/shop">
              <Button variant="primary">
                Shop Now{" "}
                <svg
                  width="20px"
                  height="20px"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  class="svg-inline--fa fa-arrow-right "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  ></path>
                </svg>
              </Button>
            </a>
            <p>
              <span className="free-shipping">Free Shipping Over £100</span>
            </p>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12} className="benefits-side">
            <img src={Pack} width="100%" alt="Benefits" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;
