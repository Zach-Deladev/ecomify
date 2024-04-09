import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Creating AuthContext with default values
const AuthContext = createContext();

// Custom hook for easy context consumption
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitialising, setIsInitialising] = useState(true);

  // Function to fetch user
  const fetchUser = async () => {
    try {
      const jwt = Cookies.get("jwt");
      if (jwt) {
      
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
      console.error(error);
      setUser(null);
    } finally {
      setIsInitialising(false);
    }
  };

  // Sign in the user
  const signIn = async (credentials) => {
    const response = await fetch("http://localhost:3001/api/users/sign-in/", {
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

  // Sign up a new user
  const signUp = async (credentials) => {
    const response = await fetch("http://localhost:3001/api/users/sign-up", {
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

  // Logout user
  const logout = () => {
    Cookies.remove("jwt");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isInitialising,
        user,
        signIn,
        signUp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
