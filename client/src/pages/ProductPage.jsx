import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../components/products.css";
import useGetProduct from "../hooks/useGetProduct";
import { Button, Card, Row, Carousel, Col } from "react-bootstrap";
import useCreateCheckoutSession from "../hooks/useCreateCheckoutSession";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Reviews from "../components/Reviews";
import Fabric from "../assets/fabric.png";
import { useAuth } from "../context/AuthContext";
const ProductPage = () => {
  const { productId } = useParams();
  const {
    loading: productLoading,
    error: productError,
    product,
  } = useGetProduct(productId);

  const {
    loading: createCheckoutSessionLoading,
    error: createCheckoutSessionError,
    createCheckoutSession,
  } = useCreateCheckoutSession();

  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const { user } = useAuth();

  if (productLoading) {
    return <p>Loading product..</p>;
  }

  if (productError || !product?.data) {
    return <p>Error getting product</p>;
  }

  const { product: productInfo, prices } = product.data;

  const priceOnly = prices[0]
    ? new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(prices[0].unit_amount / 100)
    : null;

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setSizeError(false); // Reset size error when a size is selected
  };

  const handleCreateCheckoutSession = async () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    // Find the price ID associated with the selected size
    const selectedPrice = prices.find(
      (price) => price.metadata.size === selectedSize
    );
    if (!selectedPrice) {
      // Handle error: selected size not found
      return;
    }
    // Call the custom hook to create a checkout session with the selected price ID
    await createCheckoutSession(selectedPrice.id);
  };

  return (
    <>
      <div className="main-product-section">
        <Row noGutters={true}>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="product-image-container"
          >
            <Carousel id="Indicators" controls={true}>
              {productInfo.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12} className="product-container">
            <h3>{productInfo.name}</h3>
            <br />
            <h3>Price: {priceOnly ? `${priceOnly}` : "Not available"}</h3>
            <br />
            <h4>Sizes:</h4>
            <Row>
              <Col
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className="text-lg-end text-xs-start"
              ></Col>
            </Row>
            <hr />
            <div className="product-main-sizes">
              <Row>
                {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                  <Col key={index} className="mt-1">
                    <input
                      type="radio"
                      className="btn-check"
                      name="size"
                      id={`size${size}`}
                      autoComplete="on"
                      onClick={() => handleSizeSelection(size)}
                    />
                    <label
                      className={`btn btn-outline-primary ${
                        selectedSize === size ? "selected" : ""
                      }`}
                      htmlFor={`size${size}`}
                    >
                      {size}
                    </label>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="buy-button mt-3">
              {sizeError && <p className="text-danger">Please choose a size</p>}
              {/* Render buy button only if the user is logged in */}
              {user ? (
                <Button
                  onClick={handleCreateCheckoutSession}
                  variant="primary"
                  disabled={!selectedSize}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="24"
                    style={{ marginRight: "5px" }}
                  >
                    <path
                      d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
                      fill="white"
                    />
                  </svg>
                  Buy Now
                </Button>
              ) : (
                <Button disabled>Buy Now</Button>
              )}

              {/* If user is not logged in, show a message or redirect to login page */}
              {!user && (
                <p>
                  Please{" "}
                  <span href="" className="text-primary">
                    login
                  </span>{" "}
                  or{" "}
                  <span href="" className="text-primary">
                    sign up
                  </span>{" "}
                  to purchase this product.
                </p>
              )}
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
                <h3>
                  "Absolutely obsessed with these! They fit like a dream and
                  make me feel confident!"
                </h3>
              </div>
              {/* Fabric details */}
              <div className="fabric-details-box-product-page mt-2">
                <p>Fabric Details</p>
                <img src={Fabric} alt="Fabric Features" width="100%" />
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
                      {productInfo.description}
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
                      <ul>
                        <li>
                          Machine Wash Cold: For best results, machine wash your
                          t-shirts in cold water.
                        </li>
                        <li>
                          Tumble Dry Low: After washing, tumble dry your
                          t-shirts on a low setting to prevent shrinkage.
                        </li>
                        <li>
                          Avoid Bleach: Do not use bleach or harsh chemicals, as
                          they may damage the fabric.
                        </li>
                        <li>
                          Iron Low: If needed, iron your t-shirts on a low
                          setting to remove wrinkles.
                        </li>
                        <li>
                          Avoid Direct Sunlight: Store your t-shirts away from
                          direct sunlight to prevent color fading.
                        </li>
                      </ul>
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
                      <p>
                        Shipping Times: Our standard shipping time is 5-7
                        business days within the continental US.
                      </p>
                      <p>
                        International Shipping: We offer international shipping
                        options. Please contact us for more information on
                        international shipping rates and delivery times.
                      </p>
                      <p>
                        Free Returns: We offer free returns within 30 days of
                        purchase. If you're not satisfied with your
                      </p>
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
                            <a href="/refund">free returns & exchanges</a>
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
      </div>

      <Benefits />
      <Testimonials />
      <Reviews />
    </>
  );
};

export default ProductPage;
