import React from "react";
import "./box.css";
const Box = ({ topColor, icon, heading, paragraph }) => {
  return (
    <div style={{ borderTop: `5px solid ${topColor}` }} className="box">
      <div style={{ color: `${topColor}` }} className="box-icon">
        {icon}
      </div>
      <div className="box-head">{heading}</div>
      <div className="box-parag">{paragraph}</div>
    </div>
  );
};

export default Box;
