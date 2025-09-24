import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs() {
  useEffect(() => {
    // Scroll animation
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
        <div className="text-uppercase fw-bold text-danger mb-2" style={{ letterSpacing: "2px", fontSize: "14px" }}>About Us</div>
        <h1 className="fw-bold mb-3" style={{ fontSize: "2rem", lineHeight: "1.2" }}>Hey! We’re Foodie and we help restaurants</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px", fontSize: "1rem" }}>
          We deliver smart software that ensures revenue growth and gives the best customer experience for all types of restaurant partners.
        </p>
      </Container>

      {/* Team Photo */}
      <Container className="text-center mb-5">
        <img
          src="https://petpoojaweb.gumlet.io/images/about/about-us-hero-new_xl.webp?w=1300&dpr=1.5"
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
              src="https://petpoojaweb.gumlet.io/images/about/B2B-food-delivery.webp?w=576&dpr=1.5"
              alt="Evolution"
              className="img-fluid"
              style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
              When Foodie started back in 2020, it was a simple billing tool for local restaurants. But soon we realized that restaurants needed a complete solution — from billing to inventory, online ordering, and analytics.
            </p>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
              Our founders built Foodie to be user-friendly, cost-effective, and powerful enough to help restaurants grow without hassle. Today, Foodie powers hundreds of restaurants and cafes across the country.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <Container className="d-flex flex-wrap justify-content-center gap-4 mb-5">
        <Card className="mv-card p-4 text-center shadow" style={{ maxWidth: "320px", background: "#fff6f6", flex: "1 1 300px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png" alt="Mission" style={{ width: "60px", marginBottom: "15px" }} />
          <h3 className="text-danger mb-2">🎯 Our Mission</h3>
          <p style={{ color: "#555", fontSize: "1rem" }}>
            To empower restaurants with smart technology that saves time, reduces costs, and makes management effortless.
          </p>
        </Card>

        <Card className="mv-card p-4 text-center shadow" style={{ maxWidth: "320px", background: "#fff6f6", flex: "1 1 300px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Vision" style={{ width: "60px", marginBottom: "15px" }} />
          <h3 className="text-danger mb-2">👁 Our Vision</h3>
          <p style={{ color: "#555", fontSize: "1rem" }}>
            To be the world’s most trusted restaurant management platform, helping food businesses scale and succeed globally.
          </p>
        </Card>
      </Container>

      {/* Testimonials */}
      <Container className="text-center mb-5">
        <h2 className="text-danger mb-4">What Our Customers Say</h2>
        <Row className="g-4">
          {[
            { name: "Rahul Sharma", role: "Restaurant Owner", img: "https://randomuser.me/api/portraits/men/32.jpg", review: "Foodie made billing and inventory so simple! We saved hours of manual work every day." },
            { name: "Priya Nair", role: "Cafe Manager", img: "https://randomuser.me/api/portraits/women/44.jpg", review: "The best restaurant management software! Customer support is excellent and features are easy to use." },
            { name: "Amit Patel", role: "Bistro Owner", img: "https://randomuser.me/api/portraits/men/55.jpg", review: "Our sales and efficiency improved drastically after using Foodie. Highly recommended!" },
          ].map((c, idx) => (
            <Col xs={12} md={4} key={idx}>
              <Card className="review-card p-3 shadow">
                <p>{c.review}</p>
                <div className="text-warning mb-2">★★★★★</div>
                <div className="d-flex align-items-center gap-2">
                  <img src={c.img} alt={c.name} className="rounded-circle" style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                  <div>
                    <h6 className="mb-0">{c.name}</h6>
                    <span className="text-muted" style={{ fontSize: "0.85rem" }}>{c.role}</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
