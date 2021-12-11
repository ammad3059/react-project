import React from "react";
import "./rated.css";
const RatedCard = ({ img, icon, title, subtitle, amount, discount }) => {
  return (
    <div className="rated-card">
      <div className="rated-card-wrapper">
        <div className="rated-top">
          <img src={img} alt="" className="rated-img" />
        </div>
        <div className="rated-bottom">
          <img src={icon} alt="" className="rated-icon" />
          <div className="rated-discount">{discount}</div>
          <div className="content">
            <div className="rated-title">{title}</div>
            <div className="rated-subtitle">{subtitle}</div>
            <div className="rated-amount">{amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatedCard;
