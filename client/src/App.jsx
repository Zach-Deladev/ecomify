import React from "react";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import Shop from "./pages/Shop";
import Account from "./pages/CustomerDashboard"; // Your Account page component
import Dashboard from "./pages/AdminDashboard"; // Your Dashboard page component
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Tos from "./pages/Tos"
import Help from "./pages/Help"
import About from "./pages/About"
import Privacy from "./pages/Privacy"
import Refund from "./pages/Refund"
import Contact from "./pages/Contact"
import ProductPage from "./pages/ProductPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import { useAuth } from "./context/AuthContext.jsx";
import CategoryPage from "./pages/CategoryPage"; // Import the CategoryPage component
import AnnouncementBar from "./components/announcement-bar";
import Footer from "./components/Footer.jsx";
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
        <AnnouncementBar />
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

          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/help" element={<Help />} />
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
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
