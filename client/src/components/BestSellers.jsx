import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSellers.css";
import useGetProducts from "../hooks/useGetProducts";

function BestSellers() {
  const navigate = useNavigate();
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useGetProducts();

  if (productsLoading) {
    return <p>Loading products....</p>;
  }

  if (productsError) {
    return <p>Error loading products</p>;
  }

  return (
    <div className="best-sellers">
      <h1>Best Sellers</h1>
      <Row>
        {products.map((product, index) => (
          <Col
            key={index}
            lg={3}
            md={3}
            sm={6}
            xs={6}
            className="best-sellers-box"
          >
            <img
              src={product.images[0]}
              width="100%"
              alt={`Product ${index + 1}`}
            />
            <div className="discount-badge-box">
              {/* Assuming you have some logic here to determine if the product is on sale */}
              {product.onSale && <p>15% OFF</p>}
            </div>
            <div className="best-sellers-box-text">
              <h3>{product.name}</h3>
              <p className="reviews">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
                    star
                  </span>
                ))}
                <span className="ps-1">{product.reviews} Reviews</span>
              </p>
              <div className="best-sellers-box-price">
                <p>
                  {/* Displaying the price */}
                  <span className="price">
                    £{product.price.unit_amount / 100}
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/product/${product.id}`)} // Navigate to product page on button click
                  >
                    View Details
                  </Button>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
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
