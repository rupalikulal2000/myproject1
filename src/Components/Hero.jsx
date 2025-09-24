// FoodHeroSection.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTruck, FaMapMarkerAlt, FaStar, FaHeart } from "react-icons/fa";


export default function FoodHeroSection() {
  const styles = {
    section: {
      background: "#FFF6F1",
      padding: "5rem 0",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "800",
      lineHeight: "1.2",
      color: "#222",
    },
    highlightYellow: {
      background: "#FFD600",
      color: "#000",
      padding: "4px 12px",
      borderRadius: "8px",
      fontSize: "2.2rem",
      fontWeight: "700",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#444",
      marginTop: "1.2rem",
      maxWidth: "90%",
      lineHeight: "1.6",
    },
    imageWrapper: {
      position: "relative",
      display: "inline-block",
    },
    heroImage: {
      borderRadius: "20px",
      maxWidth: "100%",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
    box: {
      position: "absolute",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      borderRadius: "14px",
      padding: "12px 18px",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#222",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    deliveryBox: { top: "20px", left: "20px", display: "flex", alignItems: "center", gap: "6px" },
    locationBox: { bottom: "25px", right: "25px", fontSize: "0.9rem", padding: "8px 14px", display: "flex", alignItems: "center", gap: "6px" },
    userBox: { bottom: "-25px", left: "25px", display: "flex", alignItems: "center", gap: "12px", padding: "12px 18px" },
    userAvatar: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" },
  };

  return (
    <section style={styles.section}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6} className="text-start">
            <h1 style={styles.title}>
              Restaurant <span style={styles.highlightYellow}>POS</span> <br />
              software made simple!
            </h1>
            <p style={styles.subtitle}>
              Manages all your restaurant operations efficiently so that you can focus on growing your brand, like a real boss!
            </p>
            <Button variant="danger" size="lg" className="rounded-2 mt-3">
              Order Now
            </Button>
          </Col>

          {/* Right Image with Overlays */}
          <Col md={6} className="text-center">
            <div style={styles.imageWrapper}>
              <img src="hero-image.avif" alt="Image"  style={styles.heroImage} className="img-fluid" />

              {/* Floating Boxes with icons */}
              <div style={{ ...styles.box, ...styles.deliveryBox }}>
                <FaTruck /> Delivery in 30 min
              </div>
              <div style={{ ...styles.box, ...styles.locationBox }}>
                <FaMapMarkerAlt /> Location at destination
              </div>
              <div style={{ ...styles.box, ...styles.userBox }}>
                {/* <img
                  src="/avatar.png"
                  alt="User Avatar"/> */}
                <div>
                  <strong>Praveen Kore</strong>
                  <div style={{ color: "#666", fontSize: "0.9rem" }}>
                    <FaStar color="#FFD700" /> 4.5 · <FaHeart color="red" /> 1k Likes
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
