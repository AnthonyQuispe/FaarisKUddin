import "./Contact.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

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
      <form onSubmit={handleSubmit} className="contact__form">
        {!formCompletion && (
          <div className="contact__form__container">
            <h1 className="contact__form__title">Schedule Free Consultation</h1>
            {fields.map((fields) => (
              <input
                key={fields.name}
                name={fields.name}
                value={form[fields.name]}
                onChange={handleChange}
                placeholder={fields.placeholder}
                className="contact__form__input"
              />
            ))}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe Your Case"
              className="contact__form__textarea"
            />
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
      <Footer />
    </div>
  );
}
