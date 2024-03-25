import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ticker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDropDown } from '@fortawesome/free-solid-svg-icons';

function Ticker() {
  return (
    <div className="ticker-container">
      <ul className="ticker-list">
        <li className="ticker-item">NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</li>
        <li className="ticker-item">
          <FontAwesomeIcon icon={faArrowDropDown} />
        </li>
        <li className="ticker-item">FREE SHIPPING AND RETURNS</li>
        <li className="ticker-item">
          <FontAwesomeIcon icon={faArrowDropDown} />
        </li>
        <li className="ticker-item">LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</li>
        <li className="ticker-item">
          <FontAwesomeIcon icon={faArrowDropDown} />
        </li>
      </ul>
    </div>
  );
}

export default Ticker;
