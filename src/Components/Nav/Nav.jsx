import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import MenuIcon from "../../Assets/Icon/Menu.svg";
import Logo from "../../Assets/Logo/Logo.png";
import closeIcon from "../../Assets/Icon/CloseIcon.png";

export default function Nav() {
  const ListOfNav = [
    { name: "Home", path: "/#home" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "FAQ", path: "/#faq" },
  ];
  const ListOfNavMobile = [
    { name: "Home", path: "/#home" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "FAQ", path: "/#faq" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="nav-background"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav">
        <a href="/" className="nav__link">
          <img
            src={Logo}
            alt="Faaris K. Uddin Law Logo"
            className="nav__logo"
          />
          <p className="nav__logo-text">
            FAARIS K. UDDIN <br />
            <hr />
            <span className="nav__logo-text--small">ATTORNEY AT LAW </span>
          </p>
        </a>
        <button
          className="nav__button"
          onClick={handleMenu}
          aria-label="Open menu"
        >
          <img src={MenuIcon} alt="Menu Icon" className="nav__button--menu" />
        </button>

        {isMenuOpen && (
          <ul className="nav__list-mobile">
            <button
              className="nav__list-mobile-button"
              onClick={handleMenu}
              aria-label="Close menu"
            >
              <img
                src={closeIcon}
                alt="Close Menu Icon"
                className="nav__button--menu"
              />
            </button>
            {ListOfNavMobile.map((item) => (
              <li key={item.path} className="nav__list-mobile-item-list">
                <a href={item.path} className="nav__list-mobile-item">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        <ul className="nav__list">
          {ListOfNav.map((item) => (
            <li key={item.path}>
              <a href={item.path} className="nav__list-item">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="nav__button-connect">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
