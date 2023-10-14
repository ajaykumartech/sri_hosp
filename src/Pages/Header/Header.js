import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Logo.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const navigate= useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="main">
      <Image onClick={()=>navigate("/home")} alt="logo1" src={logo} className="logo" style={{ width: "200px" }} />

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
                active ClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/insurance"
                active ClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Insurance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/specialities"
                active ClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Specialities
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                to="/book_an_appointment"
                active ClassName="active"
                className="nav-links appointment"
                onClick={handleClick}
              >
                Appointment
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className="icons">{click ? <FaTimes size={24} /> : <FaBars size={24} />}</i>
          <div>
          <Button onClick={() =>navigate("/book_an_appointment")} variant="dark" className="btn-app">
            Appointment
          </Button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
