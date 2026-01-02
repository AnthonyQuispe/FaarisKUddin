import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__main-container">
        <div className="hero__container">
          <h1 className="hero__title">Fair, Affordable, Effective.</h1>
          <p className="hero__text">
            We strive to provide a diverse range of legal services in areas such
            as family law, estate planning, personal injury, and business law,
            delivering effective and affordable legal solutions for clients
            across the State of Florida.
          </p>
          <Link
            to="/contact"
            className="hero__button"
            aria-label="Book your free legal consultation at FKU Law"
          >
            Book Your Consultation
          </Link>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
