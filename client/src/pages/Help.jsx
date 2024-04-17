
import React from 'react';
import Confetti from 'react-confetti';
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Help = () => {

  return (
    <div style={{ position: 'relative'}}>
      <div className="container mx-auto mt-4">
      <div className="accordion mb-4 mx-auto" id="accordion" style={{width: '50%'}}>
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
              Our products are made with high-quality materials and crafted
              with attention to detail for maximum comfort and style.
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
              Machine wash cold, gentle cycle. Tumble dry low. Do not bleach.
              Iron low heat if needed. Do not dry clean.
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
              We offer free standard shipping on all orders within the United
              States. International shipping rates vary depending on the
              destination. Returns and exchanges are accepted within 30 days of
              purchase, with free return shipping.
            </div>
          </div>
        </div>
        {/* Shipping Time */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Shipping Time
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Our standard shipping time is 3-5 business days within the United
              States. International shipping may take longer depending on the
              destination.
            </div>
          </div>
        </div>
        {/* Product Origin */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Product Origin
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Our products are designed in-house and manufactured in
              eco-friendly facilities worldwide, ensuring ethical and
              sustainable practices.
            </div>
          </div>
        </div>
        {/* Additional FAQ */}
        {/* FAQ: Size Guide */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Size Guide
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Our size guide can be found on each product page to help you
              choose the perfect fit. If you need further assistance, feel free
              to contact our customer support team.
            </div>
          </div>
        </div>
        {/* FAQ: Payment Methods */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Payment Methods
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              We accept all major credit cards, PayPal, and Apple Pay for
              secure and convenient payments.
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
    </div>
  );
};

export default Help;
