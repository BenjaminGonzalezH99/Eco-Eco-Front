import React, { useState } from "react";
import logo from "../assets/EcoEco_Chancho.png";
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
            <a href="#">SOBRE NOSOTROS</a>
          </li>
          <li>
            <a href="./Components/Catalogo">CATALOGO</a>
          </li>
          <li>
            <div className="search-input">
              <input type="text" placeholder="BUSCAR PRODUCTO" />
            </div>
          </li>
          <li>
            <a href="#">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
