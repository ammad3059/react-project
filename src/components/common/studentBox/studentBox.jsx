import React from "react";
import "./studentBox.css";
const StudentBox = ({ img, name, desc, city, skills }) => {
  return (
    <div style={{ borderTop: `5px solid blue` }} className="student-box">
      <div className="student-box-icon">
        <img src={img} alt="" className="student-box-img" />
      </div>
      <div className="student-box-name">{name}</div>
      <p className="student-box-description">{desc}</p>
      <div className="student-box-city">{city}</div>
      <div className="student-box-skills">
        {skills.map((el, indx) => {
          if (indx === 0) return el;
          return " | " + el;
        })}
      </div>
    </div>
  );
};

export default StudentBox;
