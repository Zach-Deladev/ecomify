import React from "react";
import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import { Button, Card, Row, Col } from "react-bootstrap";
import useCreateCheckoutSession from "../hooks/useCreateCheckoutSession";


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

  if (productLoading) {
    return <p>Loading product..</p>;
  }

  if (productError || !product?.data) {
    return <p>Error getting product</p>;
  }

  // Destructure for easier access
  const { product: productInfo, price: productPrice } = product.data;

  // Format price to a readable format
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(productPrice.unit_amount / 100);

  const handleCreateCheckoutSession = async () => {

    await createCheckoutSession(productPrice.id);
    // console.log(`${JSON.stringify(data)}`);
  };

  return (
    <div className="container my-5">
      <Card>
        <Row noGutters={true}>
          <Col md={6}>
            <Card.Img
              src={productInfo.images[0]}
              alt={productInfo.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{productInfo.name}</Card.Title>
              <Card.Text>{productInfo.description}</Card.Text>
              <Card.Text>Price: {formattedPrice}</Card.Text>
              <Button
                onClick={handleCreateCheckoutSession}
                variant="primary"
              >{`${
                createCheckoutSessionLoading ? "Loading.." : "Buy Now"
              }`}</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductPage;
