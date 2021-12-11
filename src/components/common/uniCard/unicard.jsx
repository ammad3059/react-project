import React from "react";
import "./unicard.css";
const UniCard = ({ img, icon, title, subtitle, amount }) => {
  return (
    <div className="uni-card">
      <div className="uni-card-wrapper">
        <div className="uni-top">
          <img src={img} alt="" className="uni-img" />
        </div>
        <div className="uni-bottom">
          <img src={icon} alt="" className="uni-icon" />
          <div className="content">
            <div className="uni-title">{title}</div>
            <div className="uni-amount">{amount}</div>
            <div className="uni-subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniCard;
