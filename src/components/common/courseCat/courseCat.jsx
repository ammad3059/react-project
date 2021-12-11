import React from "react";
import "./courseCat.css";
const CourseCat = ({ img, title, subtitle }) => {
  return (
    <div className="course-cat">
      <div className="course-cat-wrapper">
        <div className="course-cat-left">
          <img src={img} alt="" className="course-cat-img" />
        </div>
        <div className="course-cat-right">
          <span className="course-cat-title">{title}</span>
          <span className="course-cat-subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCat;
