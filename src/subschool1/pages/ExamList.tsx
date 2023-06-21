import React from "react";
import "./Exam.css";
import ExamListItems from "./ExamListItems";

interface ExamListProps {
  data: Array<any>;
}

const ExamList: React.FC<ExamListProps> = ({ data }) => {
 
  if (!data) {
    return (
      <div className="no-exam-list">
        <h1>Exam is coming soon...</h1>
      </div>
    );
  }

  
  return (
    <div className="exam-list">
      {data.map((exam, index:number) => {
        return (
          <ExamListItems exam={exam} key = {index}/>
        );
      })}
    </div>
  );
};

export default ExamList;
