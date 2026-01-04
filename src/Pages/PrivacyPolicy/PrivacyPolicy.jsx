import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "../../Styles/LegalPage.scss";

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="legal" id="main-content">
        <div className="legal__container">
          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__updated">Last updated: January 2026</p>

          <section className="legal__section">
            <h2 className="legal__heading">Introduction</h2>
            <p className="legal__text">
              FULAW PLLC (“we,” “our,” or “us”) respects your privacy. This
              Privacy Policy explains how we collect, use, and protect your
              information when you visit our website.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Information We Collect</h2>
            <p className="legal__text">
              We may collect personal information you voluntarily provide,
              including:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any information submitted through our contact forms</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries or requests</li>
              <li>To provide legal services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Information Sharing</h2>
            <p className="legal__text">
              We do not sell or rent your personal information. Information may
              be shared only when required by law or to protect our legal
              rights.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Data Security</h2>
            <p className="legal__text">
              We take reasonable measures to protect your information, but no
              method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Contact Us</h2>
            <p className="legal__text">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:faaris@fkulaw.com">faaris@fkulaw.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
