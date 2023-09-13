import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import Logo from "../../assets/images/Og_only_icon-svg.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src={Logo} alt="Logo" className="logo" />
            <span> Ratham </span>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/chatbot"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                ChatBot
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FiX /> : <FiAlignJustify />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
