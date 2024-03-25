import React from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ticker.css";

import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0';
import 'https://unpkg.com/css.gg/icons/all.css';
import 'https://cdn.jsdelivr.net/npm/css.gg/icons/all.css';
import 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,200;1,300;1,400&display=swap';

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
