import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Creating DataContext with default values
const DataContext = createContext();

// Custom hook for easy context consumption
export function useData() {
  return useContext(DataContext);
}

// DataProvider component
export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);

  // Authenticate user
  const authUser = async (credentials) => {
    const response = await fetch("http://localhost:3001/api/users/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      Cookies.set("jwt", data.token, { expires: 7 });
      setUser(data);
      setIsAuthenticated(true);
    } else {
      console.error("Authentication error");
      setIsAuthenticated(false);
    }
  };

  // Logout user
  const logoutUser = () => {
    Cookies.remove("jwt");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Register a new user
  const registerUser = async (userData) => {
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      await authUser({ email: userData.email, password: userData.password });
    } else {
      console.error("Registration error");
    }
  };

  // Function to fetch user data
  const fetchUserData = async () => {
    const jwt = Cookies.get("jwt");
    if (jwt) {
      console.log("Request Headers:", {
        Authorization: `Bearer ${jwt}`,
      });
      const response = await fetch("http://localhost:3001/api/users/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setIsAuthenticated(true);
      } else {
        console.error("Error fetching user data");
        setUser(null);
        setIsAuthenticated(false);
      }
    }
  };

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
    fetchUserData();
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        isAuthenticated,
        products,
        authUser,
        logoutUser,
        registerUser,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
