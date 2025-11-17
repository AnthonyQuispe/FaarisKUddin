import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Landing.scss";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";

export default function Landing() {
  return (
    <div className="landing">
      <Nav />
      <Hero />
      <Services />
    </div>
  );
}
