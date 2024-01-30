import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaEquals } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Dropdown from "./Dropdown";
function Navbar() {
  const [click, setclick] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setdropdown(false);
    } else {
      setdropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setdropdown(false);
    } else {
      setdropdown(false);
    }
  };
  const closeMobileMEnu = () => {};
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          EPIC
        </Link>
        <div onClick={handleClick}>
          {!click ? (
            <FaEquals style={{ color: "white", size: "20" }} />
          ) : (
            <IoClose style={{ color: "white", size: "20" }} />
          )}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMEnu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMEnu}
              >
                Services <i className="fas fa-caret-down" />
                {dropdown && <Dropdown />}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMEnu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMEnu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMEnu}
              >
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
