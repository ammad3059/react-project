import React from "react";
import "./menu.css";
import menu from "../images/menu.jpeg";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-wrapper">
        <div className="menuLeft">
          <div className="big-title">
            The Latest Online Platform, within your reach.
          </div>
          <div className="subtitle">
            For consumers, professionals, and the large category of people who
            are both, eCommerce websites represent an increasingly important
            part of the business and shopping landscape. Across industries
          </div>
          <div className="boxes">
            <div className="menu-box">E-Commerce</div>
            <div className="menu-box">BlockChain</div>
            <div className="menu-box">Artificial Intelligence</div>
          </div>
        </div>
        <div className="menuRight">
          <img src={menu} alt="" className="menu-img" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
