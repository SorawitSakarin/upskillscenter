import React, { useCallback, useState } from "react";
import "./AnswerSheet.css";

interface questionlistprops {
  totalQuestions: number;
  totalPages: number;
  activePage: number;
  answers: any;
  results:any;
}
interface Question {
  id: number;
}

const ResultList: React.FC<questionlistprops> = ({
  totalQuestions,
  totalPages,
  activePage,
  answers,
  results
}) => {
  const startQuestion = (activePage - 1) * 10 + 1;

  const lastQuestion =
    activePage * 10 > totalQuestions ? totalQuestions : activePage * 10;

  // const createArrayOfObjects = (
  //   startQuestion: number,
  //   lastQuestion: number
  // ): Question[] => {
  //   const questions: Question[] = [];
  //   for (let i = startQuestion; i < lastQuestion + 1; i++) {
  //     questions.push({ id: i});
  //   }
  //   return questions;
  // };
  const createArrayOfObjects = useCallback((startQuestion: number, lastQuestion: number): Question[] => {
    const questions: Question[] = [];
    for (let i = startQuestion; i < lastQuestion + 1; i++) {
      questions.push({ id: i });
    }
    return questions;
  }, []);
  const questionInThePage = createArrayOfObjects(startQuestion, lastQuestion);

  // const questionInThePage = Array.from({ length: lastQuestion-startQuestion+1 }, (_, i) => ({
  //   id: startQuestion+i,
  // }));


  // const selectAnswerHandler: any = (id: number, answer: string) => {
  //   setAnswers((prevAnswers: any) => {
  //      return {...prevAnswers, [id]:answer}
  //   });
  //   console.log(answer, id);
  // };

  // console.log(questionInThePage);
  // console.log(arrayOfObjects);
  

  return (
    <div style={{minHeight:'305px'}}>
      {questionInThePage.map((questionNumber, index:number) => {
        // console.log(answers)
        // console.log(results[questionNumber.id]);

        return (
          <div className="ans-row" key = {index}>
            <div className="ans-row-left">
              <p className="p-h2">{questionNumber.id}.</p>
            </div>
            <div className="ans-row-right">
              <button
                className={`ans-btn ${results[questionNumber.id] ==='A' ? 'result-btn':''}
                ${answers[questionNumber.id] ==='A' ? 'ans-btn-select':''}` } 
                // onClick={() => selectAnswerHandler(questionNumber.id, "A")}
              >
                <p className="p-h3">A</p>
              </button>
              <button
                className={`ans-btn ${results[questionNumber.id] ==="B" ? 'result-btn':''}
                ${answers[questionNumber.id] ==='B' ? 'ans-btn-select':''}` } 
                // onClick={() => selectAnswerHandler(questionNumber.id, "B")}
              >
                <p className="p-h3">B</p>
              </button>
              <button
                className={`ans-btn ${results[questionNumber.id] ==="C" ? 'result-btn':''}
                ${answers[questionNumber.id] ==='C' ? 'ans-btn-select':''}` } 
                // onClick={() => selectAnswerHandler(questionNumber.id, "C")}
              >
                <p className="p-h3">C</p>
              </button>
              <button
                className={`ans-btn ${results[questionNumber.id] ==="D" ? 'result-btn':''}
                ${answers[questionNumber.id] ==='D' ? 'ans-btn-select':''}` } 
                // onClick={() => selectAnswerHandler(questionNumber.id, "D")}
              >
                <p className="p-h3">D</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ResultList;
