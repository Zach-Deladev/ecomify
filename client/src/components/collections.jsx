import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./collections.css";

function Collections() {
  return (
    <div className="collections">
      <Row>
        <Col xs={4}>
          <a href="#">
            <div className="collections-box">
              <img src="t-shirts.png" width="100%" alt="T-Shirts" />
              <div className="collections-box-links">Shop T-Shirts</div>
            </div>
          </a>
        </Col>

        <Col xs={4}>
          <a href="#">
            <div className="collections-box">
              <img src="polos.png" width="100%" alt="Polos" />
              <div className="collections-box-links">Shop Polos</div>
            </div>
          </a>
        </Col>

        <Col xs={4}>
          <a href="#">
            <div className="collections-box">
              <img src="v-necks.png" width="100%" alt="V-Necks" />
              <div className="collections-box-links">Shop V-Necks</div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Collections;
