import React from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ticker.css";

function Ticker() {
  useEffect(() => {
  }, []);

  return (
    <div className="ticker-container">
      <ul className="ticker-list">
        <li className="ticker-item">NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS </li>
        <li className="ticker-item">
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </li>
        <li className="ticker-item">FREE SHIPPING AND RETURNS</li>
        <li className="ticker-item">
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </li>
        <li className="ticker-item">LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</li>
        <li className="ticker-item">
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </li>
      </ul>
    </div>
  );
}

export default Ticker;
