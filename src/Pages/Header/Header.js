import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/Logo.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="whole">
      <div className="main">
        <div>
          <Image alt="logo1" src={logo} className="logo" />
        </div>

        <div style={{display:"flex",justifyContent:"flex-end",alignItems: "center"}}>
          <div>
            <ul className={click ?   "nav-menu active" : "nav-menu" }>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/insurances"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Insurances
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/specialities"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Specialities
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className="icons">{click ? <FaTimes /> : <FaBars />}</i>
          </div>
          <div className="btn-span">
            <Button variant="dark" className="btn-app">
              Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
