import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import colored_logo from "../../public/stephen-logo-colored.svg";
import { navLinks } from "./../utilities/DataStore";

const Navbar = ({ path }) => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav className="navbar">
      <div className="nav-section">
        <Link to="/" className="logo">
          <img className="logo-img" src={colored_logo} alt="" />
        </Link>
        <div
          className={navToggle ? "hamburger active" : "hamburger"}
          onClick={handleNavToggle}
        >
          <div className="bar"></div>
        </div>
      </div>
      <div className={navToggle ? "nav-section active" : "nav-section"}>
        <div className="nav-lists">
          {navLinks.map((link, index) => (
            <div className="nav-list" key={index}>
              <NavLink className="nav-link" to={link.path}>
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="nav-actions">
          <Link to="/resume" className="btn highlight">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
