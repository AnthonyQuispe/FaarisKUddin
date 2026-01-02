import React, { useState } from "react";
import "./FAQ.scss";
import FAQImage from "../../Assets/Images/FAQ.png";

const FAQ_DATA = [
  {
    id: 1,
    question: "What types of legal services do you provide?",
    answer:
      "We offer services in various legal areas, including family law, business law, property law, intellectual property, and litigation.",
  },
  {
    id: 2,
    question: "How can I schedule a consultation with your legal team?",
    answer:
      "You can schedule a consultation by calling our office, emailing us, or using the contact form on our website.",
  },
  {
    id: 3,
    question: "Do you offer free initial consultations?",
    answer:
      "Yes, we provide free initial consultations to help evaluate your legal needs and determine the best approach.",
  },
  {
    id: 4,
    question: "What are your typical fees for legal services?",
    answer:
      "Fees vary depending on the type and complexity of the case. We provide transparent pricing and discuss all costs upfront.",
  },
  {
    id: 5,
    question: "Do you handle cases outside the city or internationally?",
    answer:
      "Yes, we handle cases across different regions and can support international clients depending on the legal matter.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <div className="faq__left">
          <h2 className="faq__title">FAQs</h2>
          <p className="faq__subtitle">
            We’ve compiled responses to the questions we hear most often to help
            you better understand our approach and offerings.
          </p>

          <div className="faq__list">
            {FAQ_DATA.map((item) => (
              <div
                key={item.id}
                className={`faq__item ${active === item.id ? "active" : ""}`}
              >
                <div
                  className="faq__question"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span className="faq__number">{item.id}.</span>
                  <p>{item.question}</p>
                  <button
                    className="faq__toggle"
                    aria-label={
                      active === item.id ? "Collapse answer" : "Expand answer"
                    }
                  >
                    {active === item.id ? "▲" : "▼"}
                  </button>
                </div>

                {active === item.id && (
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="faq__right">
          <img src={FAQImage} alt="Attorney consulting with a client" />
        </div>
      </div>
    </section>
  );
}
