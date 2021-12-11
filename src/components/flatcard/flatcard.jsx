import React from "react";
import "./flatcard.css";
const FlatCard = ({
  topImg,
  title,
  parag,
  bottomImg,
  insideImg,
  insideText,
}) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <img src={topImg} alt="" className="top-card-img" />
        <div className="card-heading">{title}</div>
        <div className="card-para">{parag}</div>
        <div
          style={{ backgroundImage: `url(${bottomImg})` }}
          className="card-bottom"
        >
          <div className="card-bottom-left">{insideText}</div>
          <div className="card-bottom-right">
            <img src={insideImg} alt="" className="card-inside-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
