import React, { useState } from "react";
import { Card } from "react-bootstrap";

interface questionlistprops {
  totalQuestions: number;
  totalPages: number;
  activePage: number;
  items: any;
}

const QuestionList: React.FC<questionlistprops> = ({
  totalQuestions,
  totalPages,
  activePage,
  items,
}) => {
  const startQuestion = (activePage - 1) * 10 + 1;

  const lastQuestion =
    activePage * 10 > totalQuestions ? totalQuestions : activePage * 10;



  return (
    <div>
      {startQuestion}
      to
      {lastQuestion}
       {}
    </div>
  );
};
export default QuestionList;
