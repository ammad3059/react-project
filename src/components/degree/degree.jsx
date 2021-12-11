import React from "react";
import cardImg from "../images/card.jpeg";
import FlatCard from "../flatcard/flatcard";
import "./degree.css";
const DegreeProgram = () => {
  return (
    <div className="degree">
      <div className="degree-heading">OUR DEGREE PROGRAMS</div>
      <div className="cards">
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
      </div>
    </div>
  );
};

export default DegreeProgram;
