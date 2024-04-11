import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGetProductsByCategory from "../hooks/useGetProductsByCategory";
import { useNavigate } from "react-router-dom";

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
          <Col key={index}>
            <div
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.images[0]}
                className="img-fluid"
                alt={`Product ${index + 1}`}
                style={{ maxHeight: "500px" }}
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                  <span className="compare-price">
                    £{product.compare_at_price}
                  </span>{" "}
                  <span className="sale-price">£{product.price}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryPage;
