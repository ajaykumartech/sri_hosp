import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Logo.png";

import { NavLink } from "react-router-dom";
import "./Header.css";
import ddlogo from "../../Assets/Images/ddlogo.png"
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // dropdown

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main">
      <NavLink to="/home" onClick={handleClick}>
        <img
          alt="logo1"
          src={logo}
          className="logo"
          style={{ width: "200px" }}
        />
      </NavLink>

      <div
        className="main-div"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div className="nav-link-group">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Insurance"
                className="nav-links"
                onClick={handleClick}
              >
                Insurances
              </NavLink>
            </li>
            <li className="nav-item dropdown-li">
              <div className="dropdown">
                <button onClick={toggleDropdown} className="special">Specialities<img className="dropdown-icon" src={ddlogo} alt="dropdown"/></button>
                {isOpen && (
                  <ul>
                    <li>
                      <NavLink to="/orthopaedics">Orthopaedics</NavLink>
                    </li>
                    <li>
                      <NavLink to="/opthalmology">Ophthalmology</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Neuro">Neuro Surgeon</NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/book_an_appointment"
                className="nav-links appointment"
                onClick={handleClick}
              >
                Appointment
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className="icons">{click ? <FaTimes /> : <FaBars />}</i>
          <button
            variant="dark"
            className="btn-app"
            onClick={() => {
              navigate("/Appointment");
            }}
          >
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;