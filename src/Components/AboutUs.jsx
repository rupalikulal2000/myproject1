import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Testimonials Component
const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const testimonials = [
    { name: "Rahul Sharma", role: "Restaurant Owner", img: "https://randomuser.me/api/portraits/men/32.jpg", review: "Foodie made billing and inventory so simple! We saved hours of manual work every day." },
    { name: "Priya Nair", role: "Cafe Manager", img: "https://randomuser.me/api/portraits/women/44.jpg", review: "The best restaurant management software! Customer support is excellent and features are easy to use." },
    { name: "Amit Patel", role: "Bistro Owner", img: "https://randomuser.me/api/portraits/men/55.jpg", review: "Our sales and efficiency improved drastically after using Foodie. Highly recommended!" },
  ];

  return (
    <Container className="text-center mb-5">
      <h2 className="text-danger mb-4">What Our Customers Say</h2>
      <Row className="g-4">
        {testimonials.map((c, idx) => (
          <Col xs={12} md={4} key={idx}>
            <Card
              className="review-card p-4 shadow-sm h-100 d-flex flex-column"
              style={{
                cursor: "pointer",
                borderRadius: "20px",
                backgroundColor: activeIdx === idx ? "#FFEDE5" : "#FFF6F1",
                border: "1px solid #FFD9CC",
                transition: "all 0.3s ease",
              }}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.08)")}
            >
              <p className="flex-grow-1" style={{ fontStyle: "italic", color: "#555", fontSize: "0.95rem" }}>{c.review}</p>
              <div className="text-warning mb-3">★★★★★</div>
              <div className="d-flex align-items-center gap-3 mt-auto">
                <img
                  src={c.img}
                  alt={c.name}
                  className="rounded-circle border"
                  style={{ width: "50px", height: "50px", objectFit: "cover", border: "2px solid #FFB6A0" }}
                />
                <div className="text-start">
                  <h6 className="mb-0 fw-bold" style={{ color: "#333" }}>{c.name}</h6>
                  <span className="text-muted" style={{ fontSize: "0.85rem" }}>{c.role}</span>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// AboutUs Component
export default function AboutUs() {
  useEffect(() => {
    const faders = document.querySelectorAll(".mv-card, .review-card");
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);

  return (
    <div style={{ backgroundColor: "#FFF6F1", color: "#333", padding: "4rem 1rem" }}>
      
      {/* Header */}
      <Container className="text-center mb-5">
        {/* About Us label bigger */}
        <div className="text-uppercase fw-bold text-danger mb-2" style={{ letterSpacing: "6px", fontSize: "40px" }}>
          About Us
        </div>

        {/* Main heading */}
        <h1 className="fw-bold mb-2" style={{ fontSize: "2.1rem", lineHeight: "1.1" }}>
          Foodie: Making restaurants smarter, one bill at a time.
        </h1>

        {/* Subtitle smaller */}
        <p className="text-muted mx-auto" style={{ maxWidth: "600px", fontSize: "0.9rem" }}>
          Started as a simple billing tool in 2020, Foodie now powers hundreds of eateries with smart solutions for billing, inventory, and online orders.
        </p>
      </Container>

      {/* Team Photo */}
      <Container className="text-center mb-5">
        <img
          src="https://img.freepik.com/premium-photo/social-media-post-image-pos_707898-349.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Team"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "100%" }}
        />
      </Container>

      {/* Story Section */}
      <Container className="mb-5">
        <Row className="align-items-center g-4">
          <Col xs={12} md={6}>
            <h2 className="fw-bold" style={{ fontSize: "1.5rem", color: "#222" }}>
              From a <span style={{ color: "#ff4d4d" }}>small idea</span> to becoming a trusted restaurant software partner 🚀
            </h2>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img
              src="https://www.shutterstock.com/image-photo/beautiful-latina-coffee-shop-owner-260nw-2212199313.jpg"
              alt="Evolution"
              className="img-fluid"
              style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
              Foodie started in 2020 as a simple billing tool for local restaurants.
              Soon, restaurants needed more than just billing — inventory, online ordering, and analytics became essential.
            </p>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
              Our founders built Foodie to be easy to use, affordable, and powerful.
              Today, Foodie helps hundreds of restaurants and cafes run smoothly and grow without hassle.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <Container className="d-flex flex-wrap justify-content-center gap-4 mb-5">
        <Card className="mv-card p-4 text-center shadow" style={{ maxWidth: "320px", background: "#FFF6F1", flex: "1 1 300px", borderRadius: "15px", border: "1px solid #FFD9CC" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png" alt="Mission" style={{ width: "60px", marginBottom: "15px" }} />
          <h3 className="text-danger mb-2">🎯 Our Mission</h3>
          <p style={{ color: "#555", fontSize: "1rem" }}>
            To empower restaurants with smart technology that saves time, reduces costs, and makes management effortless.
          </p>
        </Card>

        <Card className="mv-card p-4 text-center shadow" style={{ maxWidth: "320px", background: "#FFF6F1", flex: "1 1 300px", borderRadius: "15px", border: "1px solid #FFD9CC" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Vision" style={{ width: "60px", marginBottom: "15px" }} />
          <h3 className="text-danger mb-2">👁 Our Vision</h3>
          <p style={{ color: "#555", fontSize: "1rem" }}>
            To be the world’s most trusted restaurant management platform, helping food businesses scale and succeed globally.
          </p>
        </Card>
      </Container>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
