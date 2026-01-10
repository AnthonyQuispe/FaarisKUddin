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
              FULAW PLLC (“Company,” “we,” “us,” or “our”) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit or interact with our website and services (collectively, the
              “Service”).
            </p>
            <p className="legal__text">
              By accessing or using our Service, you consent to the collection
              and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Interpretation and Definitions</h2>
            <p className="legal__text">
              Capitalized terms used in this Privacy Policy have the meanings
              defined below, whether they appear in singular or plural form.
            </p>
            <ul>
              <li>
                <strong>You:</strong> The individual or legal entity accessing
                or using the Service.
              </li>
              <li>
                <strong>Company:</strong> FULAW PLLC.
              </li>
              <li>
                <strong>Affiliate:</strong> An entity that controls, is
                controlled by, or is under common control with the Company.
              </li>
              <li>
                <strong>Account:</strong> A unique account created for You to
                access our Service.
              </li>
              <li>
                <strong>Service:</strong> The website and related offerings
                provided by the Company.
              </li>
              <li>
                <strong>Service Provider:</strong> Any third party that
                processes data on behalf of the Company.
              </li>
              <li>
                <strong>Personal Data:</strong> Any information relating to an
                identifiable individual.
              </li>
              <li>
                <strong>Usage Data:</strong> Data collected automatically when
                using the Service.
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your device
                to enhance functionality and analytics.
              </li>
              <li>
                <strong>Device:</strong> Any device capable of accessing the
                Service.
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Information We Collect</h2>
            <p className="legal__text">
              We collect several types of information for various purposes to
              provide and improve our Service.
            </p>
            <h3>Personal Data</h3>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (including SMS communications)</li>
              <li>Information submitted through contact or intake forms</li>
              <li>
                Any details voluntarily provided regarding your legal inquiry
              </li>
            </ul>
            <h3>Usage Data</h3>
            <p className="legal__text">
              Usage Data may include your IP address, browser type and version,
              pages visited, time and date of visits, referring URLs, and
              diagnostic data.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">
              Cookies and Tracking Technologies
            </h2>
            <p className="legal__text">
              We use cookies, pixels, beacons, and similar tracking technologies
              to improve user experience, analyze website traffic, and support
              marketing efforts. You may control cookie usage through your
              browser settings. Disabling cookies may limit certain features of
              the Service.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">How We Use Your Information</h2>
            <ul>
              <li>To operate and maintain our Service</li>
              <li>To respond to inquiries and provide legal services</li>
              <li>To manage client relationships and accounts</li>
              <li>To communicate via email, phone, or SMS</li>
              <li>To improve website functionality and user experience</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
            <p className="legal__text">
              <strong>We do not sell your personal data.</strong>
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">SMS Communications</h2>
            <p className="legal__text">
              By providing your phone number, you consent to receive SMS
              messages from us related to your inquiry, case updates, or
              service-related notices. You may opt out at any time by replying
              “STOP” or contacting us directly. Message and data rates may
              apply.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Sharing of Information</h2>
            <p className="legal__text">
              We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With Service Providers performing services on our behalf</li>
              <li>With Affiliates under this Privacy Policy</li>
              <li>
                As part of a business transaction (merger, acquisition, sale)
              </li>
              <li>To comply with legal obligations or lawful requests</li>
              <li>
                To protect the rights, safety, or property of the Company or
                others
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Data Retention</h2>
            <p className="legal__text">
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this Privacy Policy or as required by
              law.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Data Transfers</h2>
            <p className="legal__text">
              Your information may be transferred to and processed in locations
              outside your jurisdiction. We take reasonable steps to ensure
              adequate data protection safeguards are in place.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Security</h2>
            <p className="legal__text">
              We use commercially reasonable security measures to protect your
              information. However, no method of transmission or storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Children’s Privacy</h2>
            <p className="legal__text">
              Our Service is not intended for children under the age of 13. We
              do not knowingly collect personal data from children under 13.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">California Privacy Rights</h2>
            <p className="legal__text">
              California residents may request information regarding the
              collection and disclosure of their personal data. Requests may be
              submitted using the contact information below.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Third-Party Links</h2>
            <p className="legal__text">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those
              websites.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Analytics and Advertising</h2>
            <p className="legal__text">
              We may use Google Analytics, Google Ads, Microsoft Ads,
              Facebook/Instagram Ads, remarketing services, and similar tools to
              analyze traffic and advertise our services. These third parties
              may use cookies and cross-device tracking technologies in
              accordance with their own privacy policies.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Call Tracking</h2>
            <p className="legal__text">
              We may use call tracking numbers to measure marketing performance.
              Caller ID and related metadata may be processed by third-party
              providers.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Testimonials and Reviews</h2>
            <p className="legal__text">
              Testimonials and reviews reflect individual experiences and are
              not guarantees of results. Outcomes may vary.
            </p>
          </section>

          <section className="legal__section">
            <h2 className="legal__heading">Changes to This Policy</h2>
            <p className="legal__text">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised effective date.
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
