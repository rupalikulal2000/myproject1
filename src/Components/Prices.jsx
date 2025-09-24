import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUsers, FaShoppingCart, FaFileInvoice, FaPhoneAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Prices.css";

// Features
const features = [
  "Cloud billing",
  "Inventory module",
  "80+ reports",
  "200+ third-party integrations",
  "Unlimited-user rights",
  "Unlimited cash register",
  "Central kitchen module",
  "Multi-terminal billing",
  "24x7 support",
  "Free training",
];

// Plans
const plans = [
  {
    name: "Core",
    price: "₹10,000",
    yearly: "per year / per outlet",
    popular: false,
    bg: "white",
    textColor: "dark",
  },
  {
    name: "Growth",
    price: "₹20,000",
    yearly: "per year / per outlet",
    popular: true,
    bg: "danger",
    textColor: "white",
  },
  {
    name: "Scale",
    price: "₹40,000",
    yearly: "per year / per outlet",
    popular: false,
    bg: "white",
    textColor: "dark",
  },
];

// Stats
const stats = [
  {
    icon: <FaUsers size={40} className="text-dark" />,
    value: "90,000+",
    label: "Clients across globe.",
  },
  {
    icon: <FaShoppingCart size={40} className="text-dark" />,
    value: "40%",
    label: "Online order volume on Zomato & Swiggy orders processed by Petpooja",
  },
  {
    icon: <FaFileInvoice size={40} className="text-dark" />,
    value: "60L+",
    label: "Bills processed everyday hassle free with Petpooja POS",
  },
  {
    icon: <FaPhoneAlt size={40} className="text-dark" />,
    value: "24/7",
    label: "On-call and on-site support",
  },
];

const PricingPage = () => {
  return (
    <div style={{ backgroundColor: "#FFF6F1", minHeight: "100vh", padding: "3rem 1rem" }}>
      {/* Header */}
      <Container className="text-center mb-5 ">
        <h1 className="fw-bold mb-3">Value-packed features at Wallet-friendly cost</h1>
        <p className="text-muted">
          No hidden costs & no additional charges. Just transparent & affordable pricing.
        </p>
      </Container>

      {/* Pricing Table: 4 cards in one row */}
      <Container className="mb-5">
        <Row className="g-4">
          {/* Features Column (Card 1) */}
          <Col xs={12} md={3}>
            <Card className="card-hover  p-3 h-100 shadow-sm ">
              <Card.Body>
                <Card.Title>Key Features</Card.Title>
                <p className="text-muted">Here are the key features that highlight our three plans:</p>
                <ul className="list-unstyled">
                  {features.map((f, i) => (
                    <li key={i} className="mb-2">
                      ✅ {f}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Plan Cards (Cards 2-4) */}
          {plans.map((plan, idx) => (
            <Col xs={12} md={3} key={idx}>
              <Card
                bg={plan.bg === "white" ? "light" : plan.bg}
                text={plan.textColor}
                className="h-100 shadow-sm position-relative"
              >
                {plan.popular && (
                  <span className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 rounded m-2" style={{ fontSize: "0.8rem" }}>
                    🔥 Popular
                  </span>
                )}
                <Card.Body className="card-hover d-flex flex-column">
                  <Card.Title>{plan.name}</Card.Title>
                  <Card.Text className="fs-3 fw-bold">{plan.price}</Card.Text>
                  <Card.Text className="text-muted mb-3">{plan.yearly}</Card.Text>
                  <Button
                    variant={plan.bg === "white" ? "outline-danger" : "light"}
                    className="mb-3"
                  >
                    Book A Demo
                  </Button>
                  <ul className="list-unstyled mt-auto">
                    {features.map((f, i) => (
                      <li key={i} className="mb-1">
                        ✅ {f}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Show More Button */}
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <Button variant="outline-danger">Show More</Button>
          </Col>
        </Row>
      </Container>

      {/* Stats */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Simple and reliable POS for all your restaurant needs</h2>
        <Row className="g-4 text-center">
          {stats.map((s, idx) => (
            <Col xs={6} md={3} key={idx}>
              <div className="d-flex flex-column align-items-center">
                {s.icon}
                <p className="fs-4 fw-bold text-danger mt-2">{s.value}</p>
                <p className="text-muted">{s.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Trusted by some of the best restaurants</h2>
        <Row className="g-4">
          <Col xs={12} md={6}>
            <Card className="p-4 h-100 shadow-sm">
              <Card.Img variant="top" src="https://petpoojaweb.gumlet.io/images/testimonial/United-farmers-creamery.webp?w=576&dpr=1.5" className="h-10 object-contain mb-3" style={{height:"88px", width:"200px"}} />
              <Card.Body>
                <Card.Text>
                  Petpooja has been the POS solution for our 90+ outlets for over two years...
                </Card.Text>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <img src="/src/assets/Pravin.jpeg" alt="Praveen" className="rounded-circle" width="50" height="50" />
                  <div>
                    <h6 className="mb-0">Praveen Kore</h6>
                    <small className="text-muted">General Manager</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="p-4 h-100 shadow-sm">
              <Card.Img variant="top" src="https://petpoojaweb.gumlet.io/images/testimonial/Sam_s_Pizza.webp?w=576&dpr=1.5" className="h-10 object-contain mb-3" style={{height:"88px", width:"288px"}} />
              <Card.Body>
                <Card.Text>
                  Petpooja has helped me to manage inventory levels and food costs...
                </Card.Text>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <img src="/src/assets/Mangesh.jpeg" alt="Mangesh" className="rounded-circle" width="50" height="50" />
                  <div>
                    <h6 className="mb-0">Mangesh Lade</h6>
                    <small className="text-muted">Managing Director</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingPage;
