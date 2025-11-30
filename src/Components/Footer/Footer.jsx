import "./Footer.scss";
import LinkedinIcon from "../../Assets/Icon/linkedin.svg";
import InstagramIcon from "../../Assets/Icon/InstagramIcon.svg";
import XIcon from "../../Assets/Icon/XIcon.svg";
import FacebookIcon from "../../Assets/Icon/FacebookIcon.svg";
import Logo from "../../Assets/Logo/Logo.png";
import { Link } from "react-router-dom";
import PhoneIcon from "../../Assets/Icon/PhoneIcon.svg";
import MailIcon from "../../Assets/Icon/MailIcon.svg";
import LocationIcon from "../../Assets/Icon/LocationIcon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <div className="footer__logo">
            <img className="footer__logo-icon" src={Logo} alt="Logo" />
            <span className="footer__logo-text">Faaris K. Uddin</span>
          </div>
          <p className="footer__description">
            Providing legal guidance and strong advocacy across South Florida,
            serving individuals and businesses with integrity, clarity, and
            results.
          </p>

          <div className="footer__socials">
            <a href="#" className="footer__social">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="footer__social">
              <img src={XIcon} alt="Twitter/X" />
            </a>
            <a href="#" className="footer__social">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/faaris-uddin-1a101b325/"
              className="footer__social"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          <div className="footer__hours">
            <h4 className="footer__hours-title">Hours of Operation</h4>
            <p className="footer__hours-text">
              Monday - Friday : 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div className="footer__contact">
          <h3 className="footer__title">Contact Us</h3>
          <div className="footer__contact-item">
            <img className="footer__icon" src={PhoneIcon} alt="Phone Icon" />
            <div>
              <a href="tel:+19548265019">+954-826-5019</a>
            </div>
          </div>
          <div className="footer__contact-item">
            <img className="footer__icon" src={MailIcon} alt="Mail Icon" />
            <div>
              <a href="mailto:faaris@fkulaw.com">faaris@fkulaw.com</a>
            </div>
          </div>

          <div className="footer__contact-item">
            <img
              className="footer__icon"
              src={LocationIcon}
              alt="Location Icon"
            />
            <div>
              <p>South Florida</p>
            </div>
          </div>
        </div>

        <div className="footer__services">
          <h3 className="footer__title">Services</h3>

          <ul className="footer__service-list">
            <li>
              <Link to="/services/litigation">
                Litigation & Dispute Resolution
              </Link>
            </li>
            <li>
              <Link to="/services/litigation">Corporate and Business Law</Link>
            </li>
            <li>
              <Link to="/services/litigation">
                Family Law and Real Estate Law
              </Link>
            </li>
            <li>
              <Link to="/services/litigation">Employment and Labor Law</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>©2025 F.K.U All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> &{" "}
          <Link to="/terms">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
}
