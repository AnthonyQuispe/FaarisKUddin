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
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__about">
          <div class="footer__logo">
            <img class="footer__logo-icon" src={Logo} alt="Logo" />
            <span class="footer__logo-text">Faaris K. Uddin</span>
          </div>

          <p class="footer__description">
            We stand by your side, providing expert legal guidance and
            unwavering support to protect your rights and ensure justice is
            served
          </p>

          <div class="footer__socials">
            <a href="#" class="footer__social">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#" class="footer__social">
              <img src={XIcon} alt="Twitter/X" />
            </a>
            <a href="#" class="footer__social">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" class="footer__social">
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          <div class="footer__hours">
            <h4 class="footer__hours-title">Open hour</h4>
            <p class="footer__hours-text">
              Monday - Friday : 9:00 AM - 4:00 PM
            </p>
          </div>
        </div>

        <div class="footer__contact">
          <h3 class="footer__title">Contact Us</h3>
          <div class="footer__contact-item">
            <img class="footer__icon" src={PhoneIcon} alt="Phone Icon" />
            <div>
              <p>+021 000309</p>
              <p>+021 000309</p>
            </div>
          </div>

          <div class="footer__contact-item">
            <img class="footer__icon" src={MailIcon} alt="Mail Icon" />
            <div>
              <p>yourlawyer@gmail.com</p>
              <p>support@gmail.com</p>
            </div>
          </div>

          <div class="footer__contact-item">
            <img class="footer__icon" src={LocationIcon} alt="Location Icon" />
            <div>
              <p>Jl. Medan Merdeka Selatan</p>
              <p>No.8-9 Jakarta, DKI Jakarta</p>
            </div>
          </div>
        </div>

        <div class="footer__services">
          <h3 class="footer__title">Services</h3>

          <ul class="footer__service-list">
            <li>Litigation and Dispute Resolution</li>
            <li>Real Estate and Property Law</li>
            <li>Human Rights and Advocacy</li>
            <li>Taxation and Financial Law</li>
            <li>Immigration Law</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>©2025 F.K.U All rights reserved.</p>
        <p>Privacy Policy & Terms of Use</p>
      </div>
    </footer>
  );
}
