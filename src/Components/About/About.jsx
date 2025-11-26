import React from "react";
import "./About.scss";
import Faaris from "../../Assets/Images/FaarisUddin.jpeg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Our Lawyer</h2>
          <p className="about-description">
            Faaris Uddin was born in London and raised in Plantation, Florida.
            He earned his B.S. in Criminal Justice from Florida International
            University, graduating cum laude, before returning to his former
            middle school to teach language arts and social studies. His
            commitment to justice, mentorship, and community service continues
            to shape his work and leadership.
            <br />
            <br />
            Mr. Uddin later earned his Juris Doctor from FIU College of Law
            while teaching full-time in the evening program. During law school,
            he served as a peer mentor, legal research assistant, and two-time
            member of the Carlos A. Costa Immigration & Human Rights Clinic,
            where he advocated for individuals seeking asylum under the guidance
            of Professor Juan Gomez.
            <br />
            <br />
            Mr. Uddin founded FAU Law to create a practice grounded in
            accessibility, integrity, and meaningful advocacy. After years of
            serving his community as both an educator and an attorney, he
            recognized the need for a client-focused firm that offers clear
            guidance and strong representation for individuals facing
            overwhelming legal challenges. Through FAU Law, he brings together
            his passion for justice, his commitment to mentorship, and his
            experience holding powerful institutions accountable. His mission is
            to ensure every client is heard, protected, and empowered throughout
            their legal journey.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img
            className="about-image"
            src={Faaris}
            alt="Image of Faaris K Uddin"
          />
        </div>
      </div>
    </section>
  );
}
