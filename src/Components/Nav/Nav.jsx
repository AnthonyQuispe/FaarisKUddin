import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import MenuIcon from "../../Assets/Icon/Menu.svg";
import Logo from "../../Assets/Logo/Logo1.png";
import closeIcon from "../../Assets/Icon/CloseIcon.png";

export default function Nav() {
  const ListOfNav = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "FAQ", path: "#faq" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-background">
      <div className="nav">
        <Link to="/" className="nav__link">
          <img src={Logo} className="nav__logo" />
          <p>Faaris K. Uddin</p>
        </Link>
        <button className="nav__button" onClick={handleMenu}>
          <img src={MenuIcon} alt="Menu Icon" className="nav__button--menu" />
        </button>

        {isMenuOpen && (
          <ul className="nav__list-mobile">
            <button className="nav__list-mobile-button" onClick={handleMenu}>
              <img
                src={closeIcon}
                alt="Close Menu Icon"
                className="nav__button--menu"
              />
            </button>
            {ListOfNav.map((item) => (
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
        <button className="nav__button-connect">Contact Us</button>
      </div>
    </nav>
  );
}
