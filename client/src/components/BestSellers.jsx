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
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -930 930 930" width="20">
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" fill="gold"/>
                  </svg>
                ))}
                <span className="ps-1">2 Reviews</span>
              </p>
              <div className="best-sellers-box-price">
                <p>
                  {/* Displaying the price */}
                  <span className="price">
                    £{product.price.unit_amount / 100}
                  </span>
                  <Button
                    variant="success"
                    onClick={() => navigate(`/product/${product.id}`)} // Navigate to product page on button click
                  >
                    Buy Now
                  </Button>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col>
        <a href="/shop">
          <Button variant="primary">
            Shop More{" "}
            <svg
            width="20px"
            height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              ></path>
            </svg>
          </Button>
        </a>
        </Col>
      </Row>
    </div>
  );
}

export default BestSellers;
