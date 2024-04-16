import React, { useState, } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/ecomify-logo.png"
import "./CustomNavbar.css";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login"); // 'login' or 'signup'
  // Because we are using a context, this component will
  // automatically refresh whenever any of those variables
  // change.
  const { isInitialising, user, signIn, signUp, logout } = useAuth();

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
      await signIn({ email, password });
      console.log("Login successful");
      setShowModal(false);
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
      await signUp({ name, email, password });
      setShowModal(false);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logout successful");
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

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} width="120px"></img>
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
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {!user && (
              <>
                <Button variant="success" onClick={() => handleShow("login")} type="button" className="navbar-buttons">
                  Login
                </Button>
                <Button variant="success" onClick={() => handleShow("signup")} type="button" className="navbar-buttons">
                  Signup
                </Button>
              </>
            )}
            {user && user.role === "customer" && (
              <Button variant="success" as={Link} to="/my-account" type="button" className="navbar-buttons">
                My Account
              </Button>
            )}
            {user && user?.role === "admin" && (
              <Button variant="success" as={Link} to="/admin/dashboard" type="button" className="navbar-buttons">
                Dashboard
              </Button>
            )}

            {user && (
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
