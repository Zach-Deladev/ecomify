import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSellers.css"; // Import CSS file for styling
import useGetProducts from "../hooks/useGetProducts"; // Custom hook to fetch products
import { useNavigate } from "react-router-dom"; // Hook for navigation

function BestSellers() {
  const navigate = useNavigate(); // Initialize the useNavigate hook for navigation to product details page
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useGetProducts(); // Fetch products using the custom hook

  // If products are still loading, display a loading message
  if (productsLoading) {
    return <p>Loading products....</p>;
  }

  // If there's an error fetching products, display an error message
  if (productsError) {
    return <p>Error loading products</p>;
  }

  // Render the best sellers section
  return (
    <div className="best-sellers">
      {/* Title */}
      <h1>Best Sellers</h1>
      <Row>
        {/* Map through products array and render each product */}
        {products.map((product, index) => (
          <Col
            // Navigate to product details page when clicked
            onClick={() => navigate(`/product/${product.product.id}`)}
            key={index}
            lg={3}
            md={3}
            sm={6}
            xs={6}
            className="best-sellers-box"
          >
            {/* Product Image */}
            <img
              src={product.product.images[0]}
              width="100%"
              alt={`Beer Pack ${index + 1}`}
            />
            {/* Discount Badge */}
            <div className="discount-badge-box">
              <p>15% OFF</p>
            </div>
            {/* Product Details */}
            <div className="best-sellers-box-text">
              {/* Product Name */}
              <h3>{product.name}</h3>
              {/* Product Rating */}
              <p className="reviews">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
                    star
                  </span>
                ))}
                <span className="ps-1">163 Reviews</span>
              </p>
              {/* Product Price */}
              <div className="best-sellers-box-price">
                <p>
                  {/* Compare at price and sale price */}
                  <span className="compare-at-price price">
                    £{product.compare_at_amount}
                  </span>{" "}
                  <span className="sale-price price">£{product.amount}</span>
                </p>
              </div>
              {/* <div className="best-sellers-box-item-price">
                <p>
                  <small>Only £12.50 per item!</small>
                </p>
              </div> */}
            </div>
          </Col>
        ))}
      </Row>
      {/* Shop Now Button */}
      <Row className="text-center">
        <Col>
          <Button variant="primary">
            Shop Now{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default BestSellers;
