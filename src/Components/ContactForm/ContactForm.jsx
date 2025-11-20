import "./ContactForm.scss";
import react, { useState } from "react";

export default function ContactForm() {
  const [formCompletion, setformCompletion] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
    { name: "Subject", placeholder: "Subject" },
  ];

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {!formCompletion && (
        <div className="contact-form__container">
          <h2 className="contact-form__title">Schedule Free Consultation</h2>
          {fields.map((fields) => (
            <input
              key={fields.name}
              name={fields.name}
              value={form[fields.name]}
              onChange={handleChange}
              placeholder={fields.placeholder}
              className="contact-form__input"
            />
          ))}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="contact-form__textarea"
          />
          <button type="submit" className="contact-form__button">
            Submit
          </button>
        </div>
      )}

      {formCompletion && (
        <div className="contact-form__container contact-form__container--alt ">
          <h2 className="contact-form__title">
            Thank you for your message.
            <br /> Our team will review it and follow up promptly.
          </h2>
        </div>
      )}
    </form>
  );
}
