import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import PaginationBar from "../navigation/Pagination";
import QuestionList from "./QuestionList";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import "./AnswerSheet.css";
import { AuthContext } from "../../context/auth-context";
import LoadingSpinnerGrid from "../LoadingSpinnerGrid";

interface AnswerSheetProps {
  totalQuestions: number;
  running: boolean;
  startTime: number;
  type: string;
  preTestId: any;
  postTestId: any;
  randomAns: boolean;
  mock: boolean;
}

interface AnswerMap {
  [key: number]: string;
}

const AnswerSheet: React.FC<AnswerSheetProps> = ({
  totalQuestions,
  running,
  startTime,
  type,
  preTestId,
  postTestId,
  randomAns,
  mock,
}) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [activePage, setActivePage] = React.useState<number>(1);

  const questionsPerPage = 10;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const [answers, setAnswers] = useState<AnswerMap>({});

  ///////////////////////  Modal Handler////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [showModalUnCompleted, setShowModalUnCompleted] = useState(false);
  const [showModalCompleted, setShowModalCompleted] = useState(false);
  const onHide = () => {
    setShowModalUnCompleted(false);
    setShowModalCompleted(false);
  };

  const clickHandler = () => {
    const selectedAnswers = Object.values(answers);
    const totalAnswers = selectedAnswers.length;
    if (totalAnswers !== totalQuestions) {
      setShowModalUnCompleted(true);
    } else {
      setShowModalCompleted(true);
    }
  };
  function createObject() {
    let obj: any = {};
    let letters = ["A", "B", "C", "D"];

    for (let i = 1; i <= 200; i++) {
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      obj[i] = randomLetter;
    }

    return obj;
  }
  const testClickHandler = () => {
    setAnswers(createObject());
  };

  ////////เหลือส่วนที่ยังไม่ได้//////////////////////////////////////////

  const answersSubmitHandler = async () => {
    if (mock) navigate("/result/1");
    else {
      const timeUsage = (new Date().getTime() - startTime) / 1000;
      const studentId = auth.userId;
      const answer = Object.values(answers).join(",");
      const subDomain = window.location.hostname.split(".")[0];

      const answersResult = {
        timeUsage,
        preTestId,
        postTestId,
        studentId,
        answer,
        type, // Posttest จะต้องมี pretest ด้วย เข้าใจบ่
        subDomain,
      };

      try {
        const responseData = await sendRequest(
          import.meta.env.VITE_APP_BACKEND_URL + "/result/submit",
          "POST",
          JSON.stringify(answersResult),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(responseData);
        navigate(
          `/result?type=${type}&testId=${
            postTestId ? postTestId : preTestId
          }&answer=${encodeURIComponent(answer)}&score=${
            responseData.data.score
          }&time=${timeUsage}`
        );
      } catch (err) {
        console.log(err);
        alert(err);
      }
      console.log(answersResult);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="loading-position">
          <LoadingSpinnerGrid color="#F37103" />
        </div>
      )}
      {!isLoading && (
        <div className="ans-card">
          <button
            onClick={testClickHandler}
            style={{ display: `${randomAns ? "" : "none"}` }}
          >
            Random Ans!
          </button>
          <div>
            <h2>Answer Sheet</h2>
            <hr className="separator"></hr>
            <Timer running={running} />
          </div>
          <div>
            <QuestionList
              totalQuestions={totalQuestions}
              totalPages={totalPages}
              activePage={activePage}
              answers={answers}
              setAnswers={setAnswers}
            />
          </div>
          <div className="ans-pagination">
            <PaginationBar
              totalPages={totalPages}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
          <button className="ans-btn-submit" onClick={clickHandler}>
            <h2>Submit Answer</h2>
          </button>
          <Modal
            show={showModalUnCompleted}
            onHide={onHide}
            centered
            dialogClassName="modal-body"
          >
            <Modal.Body>
              <div
                style={{
                  padding: "24px",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h1>Warning</h1>
                <p className="p-h2">
                  You have not completed the exam. Return to the exam.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                  }}
                >
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "#F37103",
                      borderRadius: "8px",
                    }}
                    onClick={onHide}
                  >
                    Back to test!!
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            show={showModalCompleted}
            onHide={onHide}
            centered
            dialogClassName="modal-body"
          >
            <Modal.Body>
              <div
                style={{
                  padding: "24px",
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h1>Notice</h1>
                <p className="p-h2">
                  Are you sure you want to complete the exam?
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                  }}
                >
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      border: "1px solid black",
                    }}
                    onClick={onHide}
                  >
                    I'd like to double-check.
                  </button>
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "#F37103",
                      borderRadius: "8px",
                    }}
                    onClick={answersSubmitHandler}
                  >
                    Complete!
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};
export default AnswerSheet;
