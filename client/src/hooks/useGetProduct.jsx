import { useEffect, useState } from "react";

const useGetProduct = (productId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://ecomify-backend.onrender.com/api/products/${productId}`
      );
      const product = await response.json();
      setProduct(product);
    }

    try {
      setError(null);
      getProduct();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, product };
};

export default useGetProduct;
