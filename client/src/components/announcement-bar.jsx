import React, { useEffect } from "react";
import "./announcement-bar.css";
import Flag from "../assets/ukflag.png";

function AnnouncementBar() {
  useEffect(() => {
    // Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(menu => {
        if (menu.classList.contains('show') && !menu.parentNode.contains(e.target)) {
          menu.classList.remove('show');
        }
      });
    });
  }, []);

  const toggleDropdown = (id) => {
    const dropdownMenu = document.getElementById(id);
    dropdownMenu.classList.toggle('show');
  };

  return (
    <div className="announcement-bar">
      <div className="">
        <div className="row">
          <div className="col-1 left-side-announcement-bar announcenent-bar-nunber">
            <p>01908 978978</p>
          </div>
          <div className="col-1 left-side-announcement-bar ps-3 announcement-bar-email">
            <p>sayhello@ecomify.com</p>
          </div>
          <div className="col-lg-8 col-md-9 col-sm-12 col-12 text-center">
            <p>
              50% Off Sitewide.{" "}
              <span className="announcement-bar-shop-now">
                <span style={{ textDecoration: 'underline' }}>Shop Now</span>
                {' '}
                <span style={{ textDecoration: 'underline' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" fill="#4191F5"></path>
                  </svg>
                </span>
              </span>
            </p>
          </div>
          <div className="col-1 right-side-announcement-bar">
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" onClick={() => toggleDropdown('currency-dropdown')}>
                <img src={Flag} width="17px" alt="UK Flag" /> GBP
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff">
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                </svg>
              </button>
              <ul id="currency-dropdown" className="dropdown-menu">
                <li><a href="#">United Kingdom (GBP £)</a></li>
                {/* Add more currency options as needed */}
              </ul>
            </div>
          </div>
          <div className="col-1 right-side-announcement-bar text-start">
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" onClick={() => toggleDropdown('language-dropdown')}>
                English
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff">
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                </svg>
              </button>
              <ul id="language-dropdown" className="dropdown-menu">
                <li><a href="#">English</a></li>
                {/* Add more language options as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
