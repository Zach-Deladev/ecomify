import { useState, useEffect } from "react";

const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const productsResponse = await fetch(
          "https://ecomify-backend.onrender.com/api/products"
        );
        const productsData = await productsResponse.json();

        // Fetch prices for each product
        const pricesResponse = await fetch("https://ecomify-backend.onrender.com/api/products/prices");
        const pricesData = await pricesResponse.json();

        // Combine products and prices
        const productsWithPrices = productsData.map((product) => {
          const price = pricesData.find(
            (price) => price.id === product.default_price
          );
          return { ...product, price };
        });

        setProducts(productsWithPrices);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { loading, error, products };
};

export default useGetProducts;
