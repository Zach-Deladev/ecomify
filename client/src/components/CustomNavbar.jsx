import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useData } from "../context/DataContext";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login"); // 'login' or 'signup'
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize isAuthenticated state
  const { userData, authUser, registerUser, logoutUser } = useData();

  const handleClose = () => setShowModal(false);
  const handleShow = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await authUser({ email, password });
      console.log("Login successful");
      setShowModal(false);
      setIsAuthenticated(true); // Set isAuthenticated to true after successful login
    } catch (error) {
      console.error("Login error:", error);
      console.log("Login failed");
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await registerUser({ name, email, password });
      setShowModal(false);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log("Logout successful");
      setIsAuthenticated(false); // Set isAuthenticated to false after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const LoginForm = () => (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );

  const SignupForm = () => (
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3" controlId="signupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="signupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="signupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="signupPasswordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
  );

  useEffect(() => {
    // Refresh navbar when userData changes
    if (userData) {
      setIsAuthenticated(true);
    }
  }, [userData]);

  // Log isAuthenticated, userData, and userData.role for debugging
  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("userData:", userData);
    if (userData) {
      console.log("userData.role:", userData.role);
    }
  }, [isAuthenticated, userData]);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              {!isAuthenticated && (
                <>
                  <Nav.Link onClick={() => handleShow("login")}>Login</Nav.Link>
                  <Nav.Link onClick={() => handleShow("signup")}>
                    Signup
                  </Nav.Link>
                </>
              )}
              {isAuthenticated && userData && userData.role === "customer" && (
                <Nav.Link as={Link} to="/my-account">
                  My Account
                </Nav.Link>
              )}

              {isAuthenticated && userData?.role === "admin" && (
                <Nav.Link as={Link} to="/admin/dashboard">
                  Dashboard
                </Nav.Link>
              )}
            </Nav>
            {isAuthenticated && (
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Login/Signup */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "login" ? "Login" : "Signup"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === "login" ? <LoginForm /> : <SignupForm />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
