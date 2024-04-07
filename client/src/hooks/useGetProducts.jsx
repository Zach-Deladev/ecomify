import { useState, useEffect } from "react";

const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        setError(null);
        const response = await fetch("http://localhost:3001/api/products");
        const products = await response.json();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return { loading, error, products };
};

export default useGetProducts;
