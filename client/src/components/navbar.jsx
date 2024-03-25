import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <div className="navbar-desk">
        <Container>
          <Row>
            <Col xs={3}>
              <img src="logo.png" alt="Logo" width="60%" />
            </Col>
            <Col xs={6} className="text-center nav-links-desk">
              <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Col>
            <Col xs={3} className="text-end">
              <a href="">
                <span className="material-symbols-outlined">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <nav className="navbar navbar-expand-lg bg-light mobile-nav">
        <Container fluid>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src="logo.png" alt="Logo" width="120px" />
          <a href="">
            <span className="material-symbols-outlined">
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
          </a>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav" style={{ "--bs-scroll-height": "100px" }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
