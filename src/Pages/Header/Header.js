import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Logo.png";

import { NavLink } from "react-router-dom";
import "./Header.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

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
      <NavLink to="/Home" onClick={handleClick}>
        <img
          alt="logo1"
          src={logo}
          className="logo-icon"
          style={{ maxWidth: "164px", maxHeight: "121px" }}
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
              <NavLink to="/About" className="nav-link" onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Insurance"
                className="nav-link nav-insurance"
                onClick={handleClick}
              >
                Insurances
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={toggleDropdown} className="nav-links">
                Specialities
                <MdOutlineArrowDropDown className="dropdown-icon" />
              </NavLink>
              {isOpen && (
                <ul className="dropdown-ul">
                  <li>
                    <NavLink to="/Orthopaedics">Orthopaedics</NavLink>
                  </li>
                  <li>
                    <NavLink to="/opthalmology">Ophthalmology</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Neurology">Neuro Surgeon</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                to="/book_an_appointment"
                className="nav-link appointment"
                onClick={handleClick}
              >
                Appointment
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className="icons">{click ? <TfiClose /> : <RxHamburgerMenu />}</i>
          <button
            className="btn-app"
            onClick={() => {
              navigate("/book_an_appointment");
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
