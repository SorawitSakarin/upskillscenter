import React from "react";
import "./cardhover.css";

interface CardHoverDBProps{
  topic:string;
}

const CardHoverDB : React.FC<CardHoverDBProps> = ({topic}) => {
  return (
    <div className="card-hover">
      <h1>{topic} - no score result</h1>
      <p className="p-h2"> The dashboard only displays the results of exams completed by student.</p>
    </div>
  );
};

export default CardHoverDB;
