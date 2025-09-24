import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Correct paths to src/assets
import device1 from "../assets/device1.png";
import device2 from "../assets/device2.png";
import logo from "../assets/logo.png";
import simplicityLogo from "../assets/simplicityLogo.png";
import simplicity1 from "../assets/simplicity1.png";
import simplicity2 from "../assets/simplicity2.png";
import supportLogo from "../assets/supportLogo.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import pricingLogo from "../assets/pricingLogo.png";
import pricing1 from "../assets/pricing1.png";

export default function InnovationPage() {
  const sectionStyle = { marginBottom: "5rem" };
  const cardStyle = {
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div style={{ backgroundColor: "#FFF6F1", color: "#333", padding: "4rem 2rem" }}>
    
      {/* Header Section */}
      <Container className="text-center mb-5">
        <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
          Empowering restaurant ecosystem
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Streamline unorganized sector of the food industry
        </p>
        {/* Innovation Title & Logo */}
        <Row className="align-items-center mt-4 mb-4 justify-content-center">
          <Col md={8}>
            <h2 className="fw-semibold">Innovation</h2>
            <p style={{ color: "#666" }}>
              The major force behind our success has always been constant research & innovation.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <img src={logo} alt="Innovation Logo" style={{ width: "140px", height: "140px" }} />
          </Col>
        </Row>
      </Container>

      {/* Innovation Images Section */}
      <Container style={sectionStyle}>
        <Row className="g-4">
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={device1} alt="Device 1" />
            </Card>
          </Col>
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={device2} alt="Device 2" />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Simplicity Section */}
      <Container style={sectionStyle}>
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <h2 className="fw-semibold">Simplicity</h2>
            <p style={{ color: "#666" }}>
              We believe in creating solutions that come without any confusing instruction manuals.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <img src={simplicityLogo} alt="Simplicity Logo" style={{ width: "140px", height: "140px" }} />
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={simplicity1} alt="Simplicity 1" />
            </Card>
          </Col>
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={simplicity2} alt="Simplicity 2" />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Customer Support Section */}
      <Container style={sectionStyle}>
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <h2 className="fw-semibold">Customer Support</h2>
            <p style={{ color: "#666" }}>
              We always ensure that our restaurant partners are heard & their problems resolved.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <img src={supportLogo} alt="Support Logo" style={{ width: "140px", height: "140px" }} />
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={image1} alt="Support 1" />
            </Card>
          </Col>
          <Col md={6}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={image2} alt="Support 2" />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section */}
      <Container style={sectionStyle}>
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <h2 className="fw-semibold">Pricing</h2>
            <p style={{ color: "#666" }}>
              We are a strong believer in transparent & cost-effective pricing of technology.
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <img src={pricingLogo} alt="Pricing Logo" style={{ width: "140px", height: "140px" }} />
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={12}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={pricing1} alt="Pricing" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
// ...existing code...