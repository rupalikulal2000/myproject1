// App.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5" style={{ background: "linear-gradient(to right, #fbeedc, #fffdf8, #ffffff)" }}>
      {/* Top Footer */}
      <Container className="py-5 " style={{ borderColor: "#ff9800" }}>
        <Row className="text-center text-md-start justify-content-center">
          <Col md={4} className="mb-4">
            <h5 className="mb-3" style={{ color: "#000", cursor: "pointer" }}>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#pricing" className="text-decoration-none text-dark">Pricing</a></li>
              <li><a href="#about" className="text-decoration-none text-dark">About</a></li>
              <li><a href="#Feature" className="text-decoration-none text-dark">Features</a></li>
              <li><a href="#Contact" className="text-decoration-none text-dark">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="mb-3" style={{ color: "#000" }}>Contact</h5>
            <p style={{ color: "#444", lineHeight: 1.6, fontSize: "0.9rem" }}>
              Formonex Solutions Pvt Ltd.<br/>
              Office no 812,<br/>
              Global Business Hub, EON Free Zone,<br/>
              Kharadi, Pune,<br/>
              Maharashtra – 411014
            </p>
          </Col>
        </Row>
      </Container>

      {/* Bottom Footer */}
      <Container className="py-3 border-top border-1 text-center">
        <Row className="justify-content-center align-items-center mb-2">
          <Col xs="auto">
            {/* <img src="#" alt="Logo" style={{ height: "30px" }} /> */}
          </Col>
          <Col xs="auto">
            <a href="#"><FaLinkedin size={18} className="mx-2 text-dark" /></a>
            <a href="#"><FaInstagram size={18} className="mx-2 text-dark" /></a>
            <a href="#"><FaYoutube size={18} className="mx-2 text-dark" /></a>
            <a href="#"><FaFacebook size={18} className="mx-2 text-dark" /></a>
            <a href="tel:+916677889955" className="mx-2 text-dark"><FaPhone /> +91 6677889955</a>
            <a href="mailto:mohiniwadikar4@gmail.com" className="mx-2 text-dark"><FaEnvelope /> mohiniwadikar@gmail.com</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
              COPYRIGHT © 2025 – Formonex Solutions Pvt. Ltd., India • 
              <a href="#" className="text-dark text-decoration-none mx-1">Privacy</a> • 
              <a href="#" className="text-dark text-decoration-none mx-1">Compliance</a> • 
              <a href="#" className="text-dark text-decoration-none mx-1">Terms</a> • 
              <a href="#" className="text-dark text-decoration-none mx-1">EULA</a> • 
              <a href="#" className="text-dark text-decoration-none mx-1">Cancellation & Refund</a> • 
              <a href="#" className="text-dark text-decoration-none mx-1">Corporate Info</a> • 
              <a href="#" className="text-dark text-decoration-none mx-1">Escalation Matrix</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      {/* Your page content can go here */}
      <div style={{ minHeight: "0vh" }}> {/* Placeholder content */} </div>

      <Footer />
    </div>
  );
};

export default App;
