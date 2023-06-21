import React from "react";
import detectNavigation from "../../hooks/reloadDetection";
import ResultSheet from "../../components/answersheet/ResultSheet";
import TestDocumentImages from "./TestDocumentImages";
import ans1 from "../assets/answer/Answer Listening test ( Pre-Post Test)-01.jpg";
import ans2 from "../assets/answer/Answer Listening test ( Pre-Post Test)-02.jpg";
import ans3 from "../assets/answer/Answer Listening test ( Pre-Post Test)-03.jpg";
import ans4 from "../assets/answer/Answer Listening test ( Pre-Post Test)-04.jpg";
import "./Test.css";

const TestResult: React.FC = () => {
  detectNavigation();

  return (
    <div className="test-body">
      <div className="test-body-row">
        <div className="test-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>Result {exam.title}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <p className="p-h4"> {exam.time} minutes</p>
              <p className="p-h4">
                {" "}
                {exam.tag.split(",").splice(0, 3).join(",")}{" "}
              </p>
            </div>
          </div>
          <div className="test-description">
          <p
              className="p-h2"
              dangerouslySetInnerHTML={{
                __html: exam.description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
          <TestDocumentImages documentImages={exam.questionFile} />
        </div>
        <div style={{ minWidth: "242px" }}></div>
        <div className="sticky-wrapper">
          <ResultSheet answers={answers} results={results} score={score} timer = {timer} />
        </div>
      </div>
    </div>
  );
};

export default TestResult;

const exam: any = {
  id: "13fafjhui21e",
  title: "Toeic 2018",
  tag: "Listening,Reading,Listening,Reading,Listening,Reading,Listening,Reading,Listening,Reading",
  time: "120",
  status: true,
  description:
    "The TOEIC 2018 exam is designed to evaluate the English language skills of candidates at the intermediate to advanced levels. The test consists of two sections: Listening and Reading. The Listening section evaluates the candidate's ability to understand spoken English in a business context, while the Reading section evaluates their ability to understand written English in the same context.",
    questionFile:[
      ans1,ans2,ans3,ans4
    ]

  };

const answers = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "A",
  6: "B",
  7: "C",
  8: "D",
  9: "A",
  10: "B",
  11: "C",
  12: "D",
  13: "A",
  14: "B",
  15: "C",
  16: "D",
  17: "A",
  18: "B",
  19: "C",
  20: "D",
  21: "A",
  22: "B",
  23: "C",
  24: "D",
  25: "A",
};

const results = {
  1: "C",
  2: "B",
  3: "A",
  4: "B",
  5: "D",
  6: "A",
  7: "B",
  8: "C",
  9: "B",
  10: "A",
  11: "C",
  12: "D",
  13: "B",
  14: "C",
  15: "A",
  16: "B",
  17: "C",
  18: "D",
  19: "B",
  20: "C",
  21: "A",
  22: "B",
  23: "D",
  24: "A",
  25: "B",
};

const score = 5;
const timer = 24*60;