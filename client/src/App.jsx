import React from "react";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import Shop from "./pages/Shop";
import Account from "./pages/CustomerDashboard"; // Your Account page component
import Dashboard from "./pages/AdminDashboard"; // Your Dashboard page component
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import { useAuth } from "./context/AuthContext.jsx";
import CategoryPage from "./pages/CategoryPage"; // Import the CategoryPage component

const App = () => {
  const { isAuthenticated, authUser, logoutUser } = useAuth();
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
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          {/* Route for category pages */}
          <Route path="/category/:category" element={<CategoryPage />} />

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
