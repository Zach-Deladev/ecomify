import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowForward } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="hero">	
      <div className="hero-overlay">
        <div className="hero-text">
          <p>UP TO 40% OFF SITEWIDE.</p>
          <h2>Premium T-Shirts For Big Men</h2>
          <Button variant="primary">Shop Now <FontAwesomeIcon icon={faArrowForward} /></Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
