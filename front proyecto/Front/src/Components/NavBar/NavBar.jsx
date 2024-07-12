import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/EcoEco_Logo_Blanco_Horizontal.png";
import "../NavBar/NavBar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const [Pages, setPages] = useState("inicio");

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className={menuOpen ? "menu-bar open" : "menu-bar"}></div>
          <div className={menuOpen ? "menu-bar open" : "menu-bar"}></div>
          <div className={menuOpen ? "menu-bar open" : "menu-bar"}></div>
        </div>
        <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
          <li onClick={() => setPages("inicio")}>
            <Link to={"/"}>
              HOME
              {Pages === "Inicio"}
            </Link>
            {/* <a href="#">HOME </a> */}
          </li>
          <li onClick={() => setPages("Catalogo")}>
            <Link to={"/catalogo"}>
              CATÁLOGO
              {Pages === "Catalogo"}
            </Link>
            {/* <a href="#">CATALOGO</a> */}
          </li>
          <li onClick={() => setPages("SobreNosotros")}>
            <Link to={"/sobreNosotros"}>
              SOBRE NOSOTRES
              {Pages === "SobreNosotros"}
            </Link>
            {/*  <a href="#">ABOUT US</a> */}
          </li>
          <li onClick={() => setPages("Contacto")}>
            <Link to={"/contacto"}>
              CONTACTO
              {Pages === "Contacto"}
            </Link>
            {/*  <a href="#">CONTACT</a> */}
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
}

export default Navbar;
