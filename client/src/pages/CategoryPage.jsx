import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGetProductsByCategory from "../hooks/useGetProductsByCategory";
import { useNavigate } from "react-router-dom";
import "..components/BestSellers.css";

const CategoryPage = () => {
  const { category } = useParams();
  const { loading, error, products } = useGetProductsByCategory(category);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products</p>;
  }

  return (
    <div className="category-page">
      <h1 className="text-center mb-4">{category.toUpperCase()} Collection</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((product, index) => (
          <Col
            key={index}
            lg={4}
            md={4}
            sm={6}
            xs={6}
            className="best-sellers-box"
          >
            <img
                src={product.images[0]}
                className="img-fluid"
                alt={`Product ${index + 1}`}
                style={{ maxHeight: "500px" }}
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
                  £{product.price}
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
    </div>
  );
};

export default CategoryPage;
