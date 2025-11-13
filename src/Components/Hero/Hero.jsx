import React from "react";
import "./Hero.scss";
import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__main-container">
        <div className="hero__container">
          <h1 className="hero__title">Your Partner on the Path to Justice.</h1>
          <p className="hero__text">
            We stand by your side, providing expert legal guidance and
            unwavering support to protect your rights and ensure justice is
            served
          </p>
          <button className="hero__button">Schedule a Consultation</button>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
