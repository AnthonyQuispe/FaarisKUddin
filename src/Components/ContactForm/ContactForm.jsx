import "./ContactForm.scss";
import react, { useState } from "react";

export default function ContactForm() {
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
    console.log("Form submitted:", form);
  };

  const fields = [
    { name: "name", placeholder: "Name" },
    { name: "email", placeholder: "Email" },
    { name: "phone", placeholder: "Phone" },
    { name: "Subject", placeholder: "Subject" },
  ];

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="contact-form__title">Get In Touch</h2>
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
    </form>
  );
}
