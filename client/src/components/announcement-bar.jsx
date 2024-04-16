import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./announcement-bar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="">
        <Row>
          <Col xs={1} className="left-side-announcement-bar announcenent-bar-nunber">
            <p>01908 978978</p>
          </Col>
          <Col xs={1} className="left-side-announcement-bar ps-3 announcement-bar-email">
            <p>sayhello@ecomify.com</p>
          </Col>
          <Col lg={8} md={9} sm={12} xs={12} className="text-center">
            <p>
              50% Off Sitewide.{" "}
              <span className="announcement-bar-shop-now">
                Shop Now{" "}
                <span className="material-symbols-outlined">
                  arrow_outward
                </span>
              </span>
            </p>
          </Col>
          <Col xs={1} className="right-side-announcement-bar">
            <a href="">
              <p>
                <img src="uk-flag.png" width="17px" alt="UK Flag" /> GBP{" "}
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </p>
            </a>
          </Col>
          <Col xs={1} className="right-side-announcement-bar text-start">
            <a href="">
              <p>
                English{" "}
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </p>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AnnouncementBar;
