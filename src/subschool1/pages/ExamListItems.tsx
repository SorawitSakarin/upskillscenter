import React, { useState } from "react";
import "./Exam.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import checkLogo from "../../assets/icons/24_24 px/Default-16.svg";
import yesLogo from "../../assets/icons/40_40 px/Default-1.svg";
import banner from "../assets/Cover.svg";

interface ExamListProps {
  exam: any;
}

const ExamListItems: React.FC<ExamListProps> = ({ exam }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const examClickHandler = (status:boolean,testId: any) => {
    if(!status) navigate(`/posttest/${testId}`)
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className="exam-card" onClick={() => examClickHandler(exam.status,exam.id)}>
        <div >
          <img src={banner} alt="topic banner" style={{borderTopLeftRadius:'16px',borderBottomLeftRadius:'16px'}} />
        </div>
        <div className="exam-card-left">
          <div>
          <p className="p-h5">{exam.tag.split(",").splice(0, 2).join(", ")}</p>
          <h2>{exam.title}</h2>
          </div>
          <p className="p-h4">{exam.time}</p>
        </div>

        <div className="exam-card-right">
          {!exam.status && (
            <img
              src={checkLogo}
              alt="check logo"
              width={24}
              style={{ opacity: "0.4" }}
            />
          )}
          {exam.status && <img src={yesLogo} alt="check logo" width={24} />}
        </div>
      </div>
      {exam.status&&<Modal show={showModal} onHide={closeHandler} centered>
        <Modal.Body>
          <div
            style={{
              padding: "24px",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <h1>Notice</h1>
            <p className="p-h2">Congratulation! You have already done this exam.<br></br>You can retake the exam as many times as you want, but the score is only collected the first time.   </p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "24px" }}
            >
              <button
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1.4px solid black",
                }}
                onClick={closeHandler}
              >
                Back
              </button>
              <button
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#244d11",
                  color:'white',
                  border: "1.4px solid black",
                }}
                onClick={() => navigate(`/posttest/${exam.id}`)}
              >
                Do it again!
              </button>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#F37103",
                  color:'white',
                  borderRadius: "8px",
                }}
                onClick={() => navigate(`/result/${exam.id}`)}
              >
                Answer Sheet
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>}
      
    </>
  );
};

export default ExamListItems;
