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
            Faaris is of Bengali and Guyanese descent and was originally born in
            North London. Faaris has spent a majority of his life in South
            Florida and has grown to become a dedicated Florida Attorney. After
            earning his B.S. in Criminal Justice from Florida International
            University with honors, he returned to his former middle school to
            teach language arts and social studies—an experience that
            strengthened his commitment to mentorship, community service, and
            advocacy.
            <br />
            <br />
            He later earned his Juris Doctor from FIU College of Law through the
            evening program. During his time in law school, he served as a peer
            mentor, legal research assistant, and two‑time member of the Carlos
            A. Costa Immigration & Human Rights Clinic. Under the guidance of
            Professor Juan Gomez, he represented individuals seeking asylum and
            gained hands-on experience navigating complex immigration matters.
            <br />
            <br />
            Faaris founded his own practice to provide clear guidance,
            accessible representation, and strong advocacy for those that are
            facing legal challenges. His practice reflects years of service as
            both an educator and an attorney, bringing together his dedication
            to justice, his commitment to empowering individuals, and his focus
            on holding powerful institutions accountable. He works to ensure
            every client is heard, supported, and equipped to move confidently
            through their legal journey.
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
