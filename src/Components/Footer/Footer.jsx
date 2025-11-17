import "./Footer.scss";
import LinkedinIcon from "../../Assets/Icon/linkedin.svg";
import InstagramIcon from "../../Assets/Icon/InstagramIcon.svg";
import XIcon from "../../Assets/Icon/XIcon.svg";
import FacebookIcon from "../../Assets/Icon/FacebookIcon.svg";
import Logo from "../../Assets/Logo/Logo1.png";

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
            We stand by your side, providing expert legal guidance and
            unwavering support to protect your rights and ensure justice is
            served
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
            <h4 className="footer__hours-title">Open hour</h4>
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
              <p>+954-826-5019</p>
            </div>
          </div>

          <div className="footer__contact-item">
            <img className="footer__icon" src={MailIcon} alt="Mail Icon" />
            <div>
              <p>faaris@fkulaw.com</p>
            </div>
          </div>

          <div className="footer__contact-item">
            <img
              className="footer__icon"
              src={LocationIcon}
              alt="Location Icon"
            />
            <div>
              <p>Jl. Medan Merdeka Selatan</p>
              <p>No.8-9 Jakarta, DKI Jakarta</p>
            </div>
          </div>
        </div>

        <div className="footer__services">
          <h3 className="footer__title">Services</h3>

          <ul className="footer__service-list">
            <li>Litigation and Dispute Resolution</li>
            <li>Real Estate and Property Law</li>
            <li>Human Rights and Advocacy</li>
            <li>Taxation and Financial Law</li>
            <li>Immigration Law</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>©2025 F.K.U All rights reserved.</p>
        <p>Privacy Policy & Terms of Use</p>
      </div>
    </footer>
  );
}
