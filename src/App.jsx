// App.js
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavigationBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Prices from "./Components/Prices";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div>
      <NavigationBar />
       <section id="home"><Hero/></section>
      {/* <section id="hero"><Hero /></section> */}
      <section id="about"><AboutUs /></section>
      <section id="features"><Features /></section>
      <section id="pricing"><Prices /></section>
      <section id="contact"><Contact /></section>
      {/* <section id="contact"><GetStarted /></section> */}
      <Footer />
    </div>
  );
}

export default App;
