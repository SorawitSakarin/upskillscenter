import React, { useState } from "react";
import PaginationBar from "../navigation/Pagination";
import { useNavigate } from "react-router-dom";
import "./AnswerSheet.css";
import DownloadButton from "../buttons/DownloadButton";
import ResultList from "./ResultList";

interface AnswerSheetProps {
  answers: any;
  results:any;
  score:number;
  timer:number;
}



const ResultSheet: React.FC<AnswerSheetProps> = ({ answers,results, score,timer }) => {
  const [activePage, setActivePage] = React.useState<number>(1);

  const totalQuestions = Object.keys(answers).length;
  const questionsPerPage = 10;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  // const [answers, setAnswers] = useState<AnswerMap>({});

  // const clickHandler = () => {
  //   console.log(answers, Object.keys(answers).length);
  // };
  timer = Math.floor(timer/60);

  return (
    <div className="ans-card">
      <div>
        <h2>Result</h2>
        <hr className="separator"></hr>
      </div>
      <div className="result-score">
        <h2>Score: {score} %</h2>
        <h2>Timer: {timer} minutes</h2>
      </div>
      <div>
        <ResultList
          totalQuestions={totalQuestions}
          totalPages={totalPages}
          activePage={activePage}
          answers={answers}
          results = {results}
          // setAnswers={setAnswers}
        />
      </div>
      <div className="ans-pagination">
        <PaginationBar
          totalPages={totalPages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
      
      {/* <DownloadButton  title="Download PDF"/> */}
    </div>
  );
};
export default ResultSheet;

