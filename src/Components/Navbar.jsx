import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form, InputGroup } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as ScrollLink } from "react-scroll";

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const toggleForm = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  // Smooth scroll function
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" fixed="top" className="shadow-sm py-3"  style={{ backgroundColor: "#fff6f1" }}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-danger fs-3">
            Food<span className="text-warning">ie</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto fw-semibold">
              {["home","about" , "features", "pricing", "contact"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item}`}
                  style={{ color: "#000" }}
                  onMouseEnter={(e) => (e.target.style.color = "red")}
                  onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Nav.Link>
              ))}

              {/* Get Started button */}
<Button
  as={ScrollLink}
  to="contact"       // matches <section id="contact">
  smooth={true}
  duration={600}
  offset={-70}       // adjust for fixed navbar height
  className="rounded-pill px-4 ms-3"
  variant="outline-danger"
>
  Get Started
</Button>              {/* Login button */}
              <Button
                variant="outline-danger"
                className="rounded-pill px-4 ms-3"
                onClick={handleShow}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Login/SignUp */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">{isLogin ? "Login" : "Sign Up"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={togglePassword}
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputGroup>
            </Form.Group>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" placeholder="Enter contact number" required />
              </Form.Group>
            )}
            <Button variant="danger" className="w-100"  type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>
          <div className="text-center mt-3">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <Button variant="link" className="p-0" onClick={toggleForm}>
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Button variant="link" className="p-0" onClick={toggleForm}>
                  Login
                </Button>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavigationBar;
