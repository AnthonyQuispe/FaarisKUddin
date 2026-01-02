import "./ContactForm.scss";
import { useState } from "react";

export default function ContactForm({ pageClass }) {
  const functionURL = "https://us-central1-faariskuddin.cloudfunctions.net";

  const [formCompletion, setFormCompletion] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out Name, Email, and Message.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${functionURL}/sendContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Show server error message if failed
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to send");
      }

      setFormCompletion(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      alert(`Something went wrong: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "name", placeholder: "Name" },
    { name: "email", placeholder: "Email" },
    { name: "phone", placeholder: "Phone (optional)" },
  ];

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${pageClass || ""}`}>
      {!formCompletion && (
        <div className="contact-form__container">
          <h2 className="contact-form__title">Schedule Free Consultation</h2>

          {fields.map((field) => (
            <div className="contact-form__container--second">
              <label htmlFor={field.name} className="sr-only">
                {field.name}
              </label>
              <input
                key={field.name}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="contact-form__input"
              />
            </div>
          ))}

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your case"
            className="contact-form__textarea"
          />

          <button
            type="submit"
            className="contact-form__button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      )}

      {formCompletion && (
        <div className="contact-form__container contact-form__container--alt">
          <h2 className="contact-form__title">
            Thank you for your message.
            <br /> Our team will review it and follow up promptly.
          </h2>
        </div>
      )}
    </form>
  );
}
