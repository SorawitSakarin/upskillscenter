import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import detectNavigation from "../../hooks/reloadDetection";
import AnswerSheet from "../../components/answersheet/AnswerSheet";
import BookLogo from "../../assets/icons/40_40 px/menu_book.svg";
import TimeLogo from "../../assets/icons/40_40 px/Default.svg";
import "./Test.css";

const PreTest: React.FC = () => {
  const { testId } = useParams<string>();
  const navigate = useNavigate();
  detectNavigation();
  const [running, setRunning] = useState(false);
  const [startTime,setStartTime] = useState<number>(0);
  const [showModal, setShowModal] = useState(true);
  const onHide = () => {
    setShowModal(false);
    navigate("/home");
  };
  const startHandler = () => {
    setShowModal(false);
    setRunning(true);
    setStartTime(new Date().getTime());
  };

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
            <h1>PreTest {exam.title}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <p className="p-h4"> {exam.time} minutes</p>
              <p className="p-h4"> {exam.tag.split(',').splice(0,3).join(',')} </p>
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
        </div>
        <div style={{ minWidth: "242px" }}></div>
        <div className="sticky-wrapper">
          <AnswerSheet totalQuestions={201} running={running} startTime={startTime} type = 'pretest'
            randomAns = {false}
            mock = {true}
            postTestId = {null}
            preTestId={testId}
            />
        </div>
      </div>
      <Modal show={showModal} centered dialogClassName="modal-body">
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
            <h1>Welcome to {exam.title}</h1>
            <p
              className="p-h2"
              dangerouslySetInnerHTML={{
                __html: exam.description.replace(/\n/g, "<br />"),
              }}
            />
            <p className="p-h2">
              Just to confirm, are you ready to start the test? If not, please
              let us know how we can assist you
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "8px",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" , flexWrap:'nowrap', width:'300px'}}
              >
                <img src={BookLogo} alt="BookLogo" width={24} />
                <h2>{exam.tag.split(',').splice(0,3).join(',')}</h2>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img src={TimeLogo} alt="BookLogo" width={24} />
                <h2>Time {exam.time} minutes</h2>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                marginTop: "16px",
              }}
            >
              <button
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1.4px solid black",
                }}
                onClick={onHide}
              >
                <h3>Go back</h3>
              </button>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#F37103",
                  borderRadius: "8px",
                  color: "white",
                }}
                onClick={startHandler}
              >
                <h3>Start!</h3>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PreTest;

const exam: any = {
  id: "13fafjhui21e",
  title: "Toeic 2018",
  tag: "Listening,Reading,Listening,Reading,Listening,Reading,Listening,Reading,Listening,Reading",
  time: "120",
  status: true,
  description:
    "The TOEIC 2018 exam is designed to evaluate the English language skills of candidates at the intermediate to advanced levels. The test consists of two sections: Listening and Reading. The Listening section evaluates the candidate's ability to understand spoken English in a business context, while the Reading section evaluates their ability to understand written English in the same context.",
};
