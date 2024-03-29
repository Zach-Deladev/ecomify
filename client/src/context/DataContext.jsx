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
  const [products, setProducts] = useState([]);
  const [isInitialising, setIsInitialising] = useState(true);

  // Sign in the user
  const signIn = async (credentials) => {
    const response = await fetch("http://localhost:3001/api/users/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      Cookies.set("jwt", data.token, { expires: 7 });
      setUser(data);
    } else {
      console.error("Authentication error");
      setUser(null)
    }
  };

  // Logout user
  const logout = () => {
    Cookies.remove("jwt");
    setUser(null);
  };

  // Sign up a new user
  const signUp = async (credentials) => {
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      Cookies.set("jwt", data.token, { expires: 7 });
      setUser(data);
    } else {
      console.error("Authentication error");
      setUser(null);
    }
  };

  // Function to fetch user
  const fetchUser = async () => {
    try {
      const jwt = Cookies.get("jwt");
      if (jwt) {
        console.log("Request Headers:", {
          Authorization: `Bearer ${jwt}`,
        });
        const response = await fetch(
          "http://localhost:3001/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Error fetching user data");
          setUser(null);
        }
      }
    } catch (error) {
      console.error(error)
      setUser(null)
    } finally {
      setIsInitialising(false);
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
    fetchUser();
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{
        isInitialising,
        user,
        products,
        signIn,
        signUp,
        logout,
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
