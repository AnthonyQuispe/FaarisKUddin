import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__main-container">
        <div className="hero__container">
          <h1 className="hero__title">Justice, Guidance, Results.</h1>
          <p className="hero__text">
            At FKU Law, our experienced attorneys provide legal services in
            areas such as family law, criminal defense, personal injury, and
            business litigation. We’re dedicated to delivering the results you
            deserve across the Florida region.
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
