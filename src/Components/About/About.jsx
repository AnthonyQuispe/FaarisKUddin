import React from "react";
import "./About.scss";
import Faaris from "../../Assets/Images/FaarisUddin.jpeg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About Faaris Uddin <br /> Florida Attorney
          </h2>
          <p className="about-description">
            Faaris Uddin is a dedicated Florida attorney with roots in both
            London and Plantation, Florida. After earning his B.S. in Criminal
            Justice from Florida International University with cum laude honors,
            he returned to his former middle school to teach language arts and
            social studies—an experience that strengthened his commitment to
            mentorship, community service, and advocacy.
            <br />
            <br />
            He later earned his Juris Doctor from FIU College of Law through the
            evening program while continuing to teach full‑time. During his time
            in law school, he served as a peer mentor, legal research assistant,
            and two‑time member of the Carlos A. Costa Immigration & Human
            Rights Clinic. Under the guidance of Professor Juan Gomez, he
            represented individuals seeking asylum and gained hands‑on
            experience navigating complex immigration matters.
            <br />
            <br />
            Faaris founded FAU Law to provide clear guidance, accessible
            representation, and strong advocacy for Florida clients facing legal
            challenges. His practice reflects years of service as both an
            educator and an attorney, bringing together his dedication to
            justice, his commitment to empowering individuals, and his focus on
            holding powerful institutions accountable. Through FAU Law, he works
            to ensure every client is heard, supported, and equipped to move
            confidently through their legal journey.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img
            className="about-image"
            src={Faaris}
            alt="Attorney Faaris Uddin, founder of FAU Law"
          />
        </div>
      </div>
    </section>
  );
}
