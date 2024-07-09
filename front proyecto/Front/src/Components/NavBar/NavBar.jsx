import React, { useState } from "react";
import logo from "../assets/ecochancho_blanco.png";
import "../NavBar/NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
          <p>ECO ECO</p>
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className={menuOpen ? "menu-bar open" : "menu-bar"}></div>
          <div className={menuOpen ? "menu-bar open" : "menu-bar"}></div>
          <div className={menuOpen ? "menu-bar open" : "menu-bar"}></div>
        </div>
        <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
          <li>
            <a href="#">HOME </a>
          </li>
          <li>
            <a href="#">CATALOGUE</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <div>
              <input
                className="search-input"
                type="text"
                placeholder="SEARCH PRODUCT"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
