import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "../../Styles/LegalPage.scss";

export default function Terms() {
  return (
    <>
      <Nav />

      <main className="legal" id="main-content">
        <div className="legal__container">
          <h1 className="legal__title">Terms of Use</h1>
          <p className="legal__updated">Last updated: January 2026</p>

          <section className="legal__section">
            <h2 className="legal__heading">Acceptance of Terms</h2>
            <p className="legal__text">
              By accessing this website, you agree to be bound by these Terms of
              Use and all applicable laws and regulations.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">No Legal Advice</h2>
            <p className="legal__text">
              The information on this website is provided for general
              informational purposes only and does not constitute legal advice.
              Viewing this site does not create an attorney-client relationship.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Use Restrictions</h2>
            <ul>
              <li>You may not misuse or interfere with the website</li>
              <li>You may not attempt unauthorized access</li>
              <li>You may not copy or distribute content without permission</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Limitation of Liability</h2>
            <p className="legal__text">
              FULAW PLLC shall not be liable for any damages arising from the
              use or inability to use this website.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Governing Law</h2>
            <p className="legal__text">
              These Terms are governed by the laws of the State of Florida.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Contact Information</h2>
            <p className="legal__text">
              For questions regarding these Terms, contact us at{" "}
              <a href="mailto:faaris@fkulaw.com">faaris@fkulaw.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
