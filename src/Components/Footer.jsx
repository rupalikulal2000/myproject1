// Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="mt-5" style={{ background: "linear-gradient(to right, #fbeedc, #fffdf8, #ffffff)" }}>
      
      {/* Top Footer */}
      <Container className="py-5">
        <Row className="text-center text-md-start justify-content-center">
          <Col md={4} className="mb-4">
            <h5 className="mb-3" style={{ color: "#000", cursor: "pointer" }}>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="text-dark text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={e => e.target.style.color = "orange"}
                  onMouseLeave={e => e.target.style.color = "#000"}
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="text-dark text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={e => e.target.style.color = "orange"}
                  onMouseLeave={e => e.target.style.color = "#000"}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="Feature"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="text-dark text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={e => e.target.style.color = "orange"}
                  onMouseLeave={e => e.target.style.color = "#000"}
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="text-dark text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={e => e.target.style.color = "orange"}
                  onMouseLeave={e => e.target.style.color = "#000"}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="mb-3" style={{ color: "#000" }}>Contact</h5>
            <p style={{ color: "#444", lineHeight: 1.6, fontSize: "0.9rem" }}>
              Foodie Pvt. Ltd..<br/>
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
          <Col xs="auto" className="d-flex align-items-center">
            {/* Removed logo image - only styled text */}
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              <span style={{ color: "#e63946" }}>Food</span>
              <span style={{ color: "#f9b233" }}>ie</span>
            </span>
          </Col>
          <Col xs="auto">
            <a href="#"><FaLinkedin size={18} className="mx-2 text-dark" /></a>
            <a href="#"><FaInstagram size={18} className="mx-2 text-dark" /></a>
            <a href="#"><FaYoutube size={18} className="mx-2 text-dark" /></a>
            <a href="#"><FaFacebook size={18} className="mx-2 text-dark" /></a>
            <a href="tel:+911234567890" className="mx-2 text-dark"><FaPhone /> +91 1234567890</a>
            <a href="mailto:contact@foodie.com" className="mx-2 text-dark"><FaEnvelope /> contact@foodie.com</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: "0.8rem", color: "#555" }}>
              COPYRIGHT © 2025 – Foodie Pvt. Ltd., India • 
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

export default Footer;
