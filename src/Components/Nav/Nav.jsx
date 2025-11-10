import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import MenuIcon from "../../Assets/Icon/Menu.svg";
import Logo from "../../Assets/Logo/Logo1.png";

export default function Nav() {
  const ListOfNav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">
        <img src={Logo} className="nav__logo" />
        <p>Faaris K. Uddin</p>
      </Link>
      <button className="nav__button">
        <img src={MenuIcon} alt="Menu Icon" className="nav__button--menu" />
      </button>
      <ul className="nav__list">
        {ListOfNav.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="nav__list-item">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="nav__button-connect">Contact Us</button>
    </nav>
  );
}
