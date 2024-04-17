import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import faArrowRight instead of faArrowForward
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <p>UP TO 40% OFF SITEWIDE.</p>
          <h2>Premium T-Shirts For Big Men</h2>
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
