import React from "react";
import "./studentSuccess.css";
import student from "../images/student.png";
import StudentBox from "./../common/studentBox/studentBox";
const StudentSuccess = () => {
  return (
    <div className="student-success">
      <div className="student-success-title">STUDENT SUCCESS</div>
      <div className="student-success-boxes">
        <StudentBox
          img={student}
          name="John Wick"
          desc="Fresh graduated in the year of 2021 from NED university"
          city="New York"
          skills={["JS", "React", "Node JS"]}
        />
        <StudentBox
          img={student}
          name="Micahel Clark"
          desc="Fresh graduated in the year of 2021 from NED university"
          city="Chicago"
          skills={["ML", "Data Science", "Node JS"]}
        />
        <StudentBox
          img={student}
          name="John Wick"
          desc="Fresh graduated in the year of 2021 from NED university"
          city="New York"
          skills={["Python", "React", "Node JS"]}
        />
      </div>
      <button className="student-success-btn">View More</button>
    </div>
  );
};

export default StudentSuccess;
