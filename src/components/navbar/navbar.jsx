import React from "react";
import { Layers, AccountCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navLeft">
          <span className="logo-img">
            <Layers />
          </span>
          <span className="logo-name">Ozen</span>
        </div>
        <div className="navRight">
          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact Us
          </NavLink>
          <NavLink className="link" to="/services">
            Services
          </NavLink>
          <NavLink className="link" to="/careers">
            Careers
          </NavLink>
          <div className="login">
            <span>Sign In</span>
            <AccountCircle />
          </div>
          <button className="btn-profile">My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
