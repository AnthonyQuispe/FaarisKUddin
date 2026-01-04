import "./Contact.scss";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Contact() {
  const firebaseFunctionURL =
    "https://us-central1-YOUR_PROJECT.cloudfunctions.net";

  return (
    <div className="contact" id="main-content">
      <Nav />
      <main className="contact__background">
        <section className="contact__info">
          <h2 className="contact__info-title">Contact Us</h2>
          <ul className="contact__info-list">
            <li>
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
          <div className="contact__socials">{/* Your social icons */}</div>
        </section>
        <ContactForm
          functionURL={firebaseFunctionURL}
          pageClass="contact-page-form"
        />
      </main>
      <Footer />
    </div>
  );
}
