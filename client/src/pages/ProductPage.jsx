import React from "react";
import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import { Button, Card, Row, Col } from "react-bootstrap";
import useCreateCheckoutSession from "../hooks/useCreateCheckoutSession";
// import Products from "../components/Products";

const ProductPage = () => {
  // Get the productId from the URL params
  const { productId } = useParams();

  // Fetch product details using a custom hook
  const {
    loading: productLoading,
    error: productError,
    product,
  } = useGetProduct(productId);

  // Create a checkout session for purchasing the product
  const {
    loading: createCheckoutSessionLoading,
    error: createCheckoutSessionError,
    createCheckoutSession,
  } = useCreateCheckoutSession();

  // If product is still loading, show a loading message
  if (productLoading) {
    return <p>Loading product..</p>;
  }

  // If there's an error fetching the product or product data is missing, show an error message
  if (productError || !product?.data) {
    return <p>Error getting product</p>;
  }

  // Destructure product data for easier access
  const { product: productInfo, price: productPrice } = product.data;

  // Format price to a readable format
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(productPrice.unit_amount / 100);

  // Function to handle creating a checkout session for the product
  const handleCreateCheckoutSession = async () => {
    // Call the custom hook to create a checkout session
    await createCheckoutSession(productPrice.id);
  };

  // Render the product details and purchase button
  return (
    <div className="container my-5">
      <Card>
        <Row noGutters={true}>
          <Col md={6}>
            {/* Render product image */}
            <Card.Img
              src={productInfo.images[0]}
              alt={productInfo.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              {/* Render product name, description, and price */}
              <Card.Title>{productInfo.name}</Card.Title>
              <Card.Text>{productInfo.description}</Card.Text>
              <Card.Text>Price: {formattedPrice}</Card.Text>
              {/* Render Buy Now button */}
              <Button
                onClick={handleCreateCheckoutSession}
                variant="primary"
              >{`${
                createCheckoutSessionLoading ? "Loading.." : "Buy Now"
              }`}</Button>
              {/* Render other components if needed */}
              {/* <Products/> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductPage;
