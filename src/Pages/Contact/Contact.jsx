import "./Contact.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import LinkedinIcon from "../../Assets/Icon/linkedin.svg";
import InstagramIcon from "../../Assets/Icon/InstagramIcon.svg";
import XIcon from "../../Assets/Icon/XIcon.svg";
import FacebookIcon from "../../Assets/Icon/FacebookIcon.svg";

export default function Contact() {
  const [formCompletion, setformCompletion] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformCompletion(true);
  };

  const fields = [
    { name: "name", placeholder: "Name" },
    { name: "email", placeholder: "Email" },
    { name: "phone", placeholder: "Phone" },
  ];
  return (
    <div className="contact">
      <Nav />
      <main className="contact__background">
        <section className="contact__info">
          <h2 className="contact__info-title">Contact Us</h2>
          <ul className="contact__info-list">
            <li className="contact__info-list-item">
              <h3 className="contact__info-subheader">Via Phone</h3>
              <a href="tel:+19548265019" className="contact__info-text">
                +1 (954) 826-5019
              </a>
            </li>
            <li>
              <h3 className="contact__info-subheader">Via Email</h3>
              <a href="mailto:faaris@fkulaw.com" className="contact__info-text">
                faaris@fkulaw.com
              </a>
            </li>
          </ul>
          <div className="contact__socials">
            <a href="javascript:void(0)" className="contact__social">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="javascript:void(0)" className="contact__social">
              <img src={XIcon} alt="Twitter/X" />
            </a>
            <a href="javascript:void(0)" className="contact__social">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/faaris-uddin-1a101b325/"
              className="contact__social"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="contact__form">
          {!formCompletion && (
            <div className="contact__form__container">
              <h1 className="contact__form__title">
                Schedule Free Consultation
              </h1>
              {fields.map((fields) => (
                <label key={fields.name} className="contact__form__label">
                  <span className="sr-only">{fields.placeholder}</span>
                  <input
                    name={fields.name}
                    value={form[fields.name]}
                    onChange={handleChange}
                    placeholder={fields.placeholder}
                    className="contact__form__input"
                  />
                </label>
              ))}
              <label className="contact__form__label">
                <span className="sr-only">Describe Your Case</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe Your Case"
                  className="contact__form__textarea"
                />
              </label>
              <button type="submit" className="contact__form__button">
                Submit
              </button>
            </div>
          )}

          {formCompletion && (
            <div className="contact__form__container contact__form__container--alt ">
              <h2 className="contact__form__title">
                Thank you for your message.
                <br /> Our team will review it and follow up promptly.
              </h2>
            </div>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
