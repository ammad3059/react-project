import React, { useState } from "react";
import "./question.css";
import Item from "./../../services/collapse";
const Question = () => {
  let myitem = [
    { id: 1, name: "Oracle", description: "Made by oracle corporation" },
    { id: 2, name: "Microsoft", description: "Made by Bill gates" },
    {
      id: 3,
      name: "Amazon",
      description: "Largest E-Commerce Company by revenue",
    },
    { id: 4, name: "Google", description: "Biggest IT Company of the world" },
  ];
  return (
    <div className="question">
      <div className="question-wrapper">
        <div className="question-left">
          <div className="question-head">QUESTIONS</div>
          <p>Frequently Asked Questions</p>
        </div>
        <div className="question-right">
          {myitem.map((elem) => {
            return <Item item={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
