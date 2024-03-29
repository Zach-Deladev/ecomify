import React from "react";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import Shop from "./pages/Shop";
import Account from "./pages/CustomerDashboard"; // Your Account page component
import Dashboard from "./pages/AdminDashboard"; // Your Dashboard page component
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useData } from "./context/DataContext";
import Login from "./pages/Login";
const App = () => {
  const { isAuthenticated, isInitialising, user } = useData();
  console.log(isInitialising)

  if (isInitialising) {
    return <p>Loading...</p>
  }

  const handleLogout = () => {
    logoutUser();
  };

  // Define a ProtectedRoute component for routes that require authentication
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" />; // Navigate to home if not authenticated
  };

  return (
    <>
      <BrowserRouter>
        <CustomNavbar
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <Login onLoginSuccess={(credentials) => authUser(credentials)} />
            }
          />

          <Route path="/shop" element={<Shop />} />

          {/* Protect the Account route */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          {/* Protect the Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
