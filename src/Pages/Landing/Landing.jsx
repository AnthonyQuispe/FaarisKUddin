import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Landing.scss";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import About from "../../Components/About/About";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";

export default function Landing() {
  return (
    <div className="landing" id="main-content">
      <Nav />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
