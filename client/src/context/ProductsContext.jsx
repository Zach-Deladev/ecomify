import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Creating ProductsContext with default values
const ProductsContext = createContext();

// Custom hook for easy context consumption
export function useProducts() {
  return useContext(ProductsContext);
}

// ProductsProvider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/api/products");
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      console.error("Fetch products error");
    }
  };

  // Create a new product
  const createProduct = async (productData) => {
    const response = await fetch("http://localhost:3001/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
    } else {
      console.error("Create product error");
    }
  };

  // Update a product by ID
  const updateProduct = async (id, productData) => {
    const response = await fetch(`http://localhost:3001/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      const updatedProduct = await response.json();
      setProducts(
        products.map((product) =>
          product._id === id ? updatedProduct : product
        )
      );
    } else {
      console.error("Update product error");
    }
  };

  // Delete a product by ID
  const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3001/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    });

    if (response.ok) {
      setProducts(products.filter((product) => product._id !== id));
    } else {
      console.error("Delete product error");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
