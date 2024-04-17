import { useState, useEffect } from "react";

const useGetProductsByCategory = (category) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        // Make the API call to fetch products by category
        const response = await fetch(
          `https://ecomify-backend.onrender.com/api/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products by category");
        }
        const data = await response.json();
        console.log("Response data:", data); // Log the response data
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductsByCategory();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [category]); // Trigger the effect whenever the category changes

  return { loading, error, products };
};

export default useGetProductsByCategory;
