import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import Tshirts from "../assets/t-shirts.png";
import Polos from "../assets/polos.png";
import Vnecks from "../assets/v-necks.png";

function Collections() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="collections">
      <Row>
        <Col xs={4}>
          <div
            className="collections-box"
            onClick={() => navigate("/category/tshirt")} // Navigate to tshirt category page on click
          >
            <img src={Tshirts} width="100%" alt="T-Shirts" />
            <div className="collections-box-links">Shop T-Shirts</div>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className="collections-box"
            onClick={() => navigate("/category/polo")} // Navigate to polo category page on click
          >
            <img src={Polos} width="100%" alt="Polos" />
            <div className="collections-box-links">Shop Polos</div>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className="collections-box"
            onClick={() => navigate("/category/vneck")} // Navigate to vneck category page on click
          >
            <img src={Vnecks} width="100%" alt="V-Necks" />
            <div className="collections-box-links">Shop V-Necks</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Collections;
