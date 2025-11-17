import React from "react";
import "./FAQ.scss";
import Faaris from "../../Assets/Images/FaarisUddin.png";

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Our Lawyer</h2>
          <p className="faq-description">
            Faaris Uddin was born in London and raised in Plantation, Florida.
            He earned his B.S. in Criminal Justice from Florida International
            University, graduating cum laude, and later returned to his former
            middle school to teach language arts and social studies. His passion
            for justice and mentorship continues to guide his work and inspire
            students to pursue higher education.
            <br /> <br />
            Mr. Uddin went on to earn his Juris Doctor from FIU College of Law
            while teaching full-time through the evening program. During law
            school, he served as a peer mentor, legal research assistant, and
            two-time member of the Carlos A. Costa Immigration & Human Rights
            Clinic, where he advocated for individuals seeking asylum under the
            guidance of Professor Juan Gomez.
            <br /> <br />
            He now practices at the Law Offices of Jibrael S. Hindi, where he
            focuses on consumer rights and has held major entities accountable
            through the TCPA, FDCPA, FCCPA, and FCRA. Mr. Uddin is admitted to
            practice in Florida state courts as well as the Southern and Middle
            Districts of Florida.
          </p>
        </div>
        <div className="faq-image-wrapper">
          <img
            className="faq-image"
            src={Faaris}
            alt="Image of Faaris K Uddin"
          />
        </div>
      </div>
    </section>
  );
}
