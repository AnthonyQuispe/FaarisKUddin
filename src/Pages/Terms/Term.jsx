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
              By accessing or using this website (the “Site”), you agree to be
              bound by these Terms of Use, all applicable laws and regulations,
              and agree that you are responsible for compliance with any
              applicable local laws. If you do not agree with these Terms, you
              must not use this Site.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">
              No Legal Advice or Attorney–Client Relationship
            </h2>
            <p className="legal__text">
              The information provided on this Site is for general informational
              purposes only and does not constitute legal advice. Use of this
              Site or communication through this Site does not create an
              attorney–client relationship between you and FULAW PLLC.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Intellectual Property Rights</h2>
            <p className="legal__text">
              All content on this Site, including but not limited to text,
              graphics, logos, images, audio, video, software, and design
              elements, is the property of FULAW PLLC or its licensors and is
              protected by applicable copyright, trademark, and intellectual
              property laws.
            </p>
            <p className="legal__text">
              You may not use, reproduce, distribute, modify, create derivative
              works of, or exploit any content from this Site without prior
              written consent.
            </p>
            <ul>
              <li>Republish material from this Site</li>
              <li>Sell, rent, or sublicense material from this Site</li>
              <li>
                Copy, duplicate, or exploit Site material for commercial
                purposes
              </li>
              <li>
                Redistribute content from this Site on another website or
                platform
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Acceptable Use</h2>
            <p className="legal__text">
              You agree to use this Site only for lawful purposes and in a
              manner that does not infringe the rights of others or restrict
              their use of the Site.
            </p>
            <ul>
              <li>Harassing, abusive, or harmful behavior</li>
              <li>Transmission of obscene or offensive content</li>
              <li>Attempting to disrupt or compromise Site security</li>
              <li>Sending unsolicited or unauthorized advertising or spam</li>
              <li>Using Site content for marketing without written consent</li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Restricted Access</h2>
            <p className="legal__text">
              We reserve the right to restrict access to certain areas of the
              Site or the entire Site at our discretion. If you are provided
              login credentials, you are responsible for maintaining their
              confidentiality.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Third-Party Links</h2>
            <p className="legal__text">
              This Site may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of any
              third-party sites. Accessing third-party sites is at your own
              risk.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Disclaimers</h2>
            <p className="legal__text">
              The materials on this Site are provided on an “AS IS” and “AS
              AVAILABLE” basis without warranties of any kind, express or
              implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Limitation of Liability</h2>
            <p className="legal__text">
              To the fullest extent permitted by law, FULAW PLLC shall not be
              liable for any damages arising out of or related to your use or
              inability to use this Site, including but not limited to indirect,
              incidental, consequential, or punitive damages, loss of profits,
              loss of data, or business interruption.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Indemnification</h2>
            <p className="legal__text">
              You agree to indemnify and hold harmless FULAW PLLC and its
              officers, employees, and agents from any claims, damages,
              liabilities, or expenses arising from your violation of these
              Terms or misuse of the Site.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Revisions and Updates</h2>
            <p className="legal__text">
              We may revise these Terms of Use at any time without prior notice.
              Continued use of the Site constitutes acceptance of the updated
              Terms.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Severability</h2>
            <p className="legal__text">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall remain in full force
              and effect.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Governing Law</h2>
            <p className="legal__text">
              These Terms are governed by and construed in accordance with the
              laws of the State of Florida, without regard to conflict of law
              principles.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Contact Information</h2>
            <p className="legal__text">
              If you have any questions about these Terms of Use, contact us at{" "}
              <a href="mailto:faaris@fkulaw.com">faaris@fkulaw.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
