import React from "react";
import "./products.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

function Products() {
  return (
    <Container className="main-product">
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="product-image-container">
          <Carousel id="Indicators" controls={true}>
            <Carousel.Item>
              <img src="1.webp" className="d-block w-100" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="2.webp" className="d-block w-100" alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="3.webp" className="d-block w-100" alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="product-container">
          {/* Product details */}
          <h3>Product Title</h3>
          <Row>
            <Col lg={8} md={8} sm={12} xs={12} className="product-price-row">
              <p>
                <span className="compare-at-price price">£150.00</span>
                <span className="sale-price price">£75.00</span>
              </p>
            </Col>
            <Col
              lg={4}
              md={12}
              sm={12}
              xs={12}
              className="text-lg-end text-xs-start"
            >
              <p>
                <span className="price-breakdown-box">Only £XX.XX/Tee</span>
              </p>
            </Col>
          </Row>
          <hr />
          {/* Size chart */}
          <div className="product-main-sizes">
            <div className="tooltip-custom">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z" />
                </svg>{" "}
                What's my size?
              </p>
              <span className="tooltiptext-custom">
                <table
                  className="sizeChart"
                  border="0"
                  cellpadding="10"
                  cellspacing="0"
                >
                  <thead>
                    <tr style={{ backgroundColor: "black" }}>
                      <td>Mens</td>
                      <td>Small</td>
                      <td>Medium</td>
                      <td>Large</td>
                      <td>X-Large</td>
                      <td>XX-Large</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Neck</td>
                      <td className="table-size">14-14.5</td>
                      <td className="table-size">15-15.5</td>
                      <td className="table-size">16-16.5</td>
                      <td className="table-size">17-17.5</td>
                      <td className="table-size">18-18.5</td>
                    </tr>
                    <tr>
                      <td>Chest</td>
                      <td className="table-size">35-37</td>
                      <td className="table-size">38-40</td>
                      <td className="table-size">41-43</td>
                      <td className="table-size">44-46</td>
                      <td className="table-size">47-49</td>
                    </tr>
                    <tr>
                      <td>Sleeve</td>
                      <td className="table-size">32-33</td>
                      <td className="table-size">33-34</td>
                      <td className="table-size">34-35</td>
                      <td className="table-size">35-36</td>
                      <td className="table-size">36-36.5</td>
                    </tr>
                    <tr>
                      <td>Waist</td>
                      <td className="table-size">29-31</td>
                      <td className="table-size">32-34</td>
                      <td className="table-size">35-37</td>
                      <td className="table-size">38-40</td>
                      <td className="table-size">41-43</td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </div>
          </div>
          {/* Size options */}
          <Row>
            <Col className="mt-1">
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="sizeS"
                autoComplete="on"
              />
              <label className="btn btn-outline-primary" htmlFor="sizeS">
                S
              </label>
            </Col>
            <Col className="mt-1">
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="sizeM"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="sizeM">
                M
              </label>
            </Col>
            <Col className="mt-1">
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="sizeL"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="sizeL">
                L
              </label>
            </Col>
            <Col className="mt-1">
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="sizeXL"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="sizeXL">
                XL
              </label>
            </Col>
            <Col className="mt-1">
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="size2XL"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="size2XL">
                2XL
              </label>
            </Col>
          </Row>
          {/* Buy button */}
          <div className="buy-button mt-3">
            <Button variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
                  fill="white"
                />
              </svg>{" "}
              Buy Now • £XX.XX
            </Button>
          </div>
          {/* Additional product information */}
          <div className="under-atc mt-2">
            {/* Benefits */}
            <div className="benefits-box-product-page">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                  </svg>
                  180 Days to Try at Home (Wash & Wear)
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                  </svg>
                  Free Returns & Free Exchanges
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                  </svg>
                  Free Shipping Over £100
                </li>
              </ul>
            </div>
            {/* Satisfaction */}
            <div className="satisfaction-box-product-page mt-2">
              <p>Satisfaction Guaranteed</p>
              <h3>"These t-shirts fit me perfectly as a 2XL guy"</h3>
            </div>
            {/* Fabric details */}
            <div className="fabric-details-box-product-page mt-2">
              <p>Fabric Details</p>
              <img
                src="fabric-features.png"
                alt="Fabric Features"
                width="100%"
              />
            </div>
            {/* Accordion */}
            <div className="accordion mb-4" id="accordion">
              {/* Accordion items */}
              {/* Product Details */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Product Details
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusamus itaque dicta facilis repellendus ad aliquam
                    iusto tenetur unde quidem?
                  </div>
                </div>
              </div>
              {/* Care Instructions */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Care Instructions
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusamus itaque dicta facilis repellendus ad aliquam
                    iusto tenetur unde quidem?
                  </div>
                </div>
              </div>
              {/* Shipping & Returns */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Shipping & Returns
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos accusamus itaque dicta facilis repellendus ad aliquam
                    iusto tenetur unde quidem?
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                style={{ backgroundColor: "#F7F8F9" }}
              >
                <h2 className="accordion-header last-button" id="headingFour">
                  <button
                    className="collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <div className="row">
                      <div className="col-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" />
                        </svg>
                      </div>
                      <div className="col-9 text-start">
                        <p>
                          Unsure about size? Try a few on at home with{" "}
                          <a href="#">free returns & exchanges</a>
                        </p>
                      </div>
                    </div>
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
