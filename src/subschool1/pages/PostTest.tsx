import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import useLeavePageWarning from "../../hooks/useLeavePageWarning";
import AnswerSheet from "../../components/answersheet/AnswerSheet";
import BookLogo from "../../assets/icons/40_40 px/menu_book.svg";
import TimeLogo from "../../assets/icons/40_40 px/Default.svg";
import YouTube from "react-youtube";
import "./Test.css";
import TestDocumentImages from "./TestDocumentImages";
import test1 from "../assets/exam/Listening  Pre-test-01.webp"
import test2 from "../assets/exam/Listening  Pre-test-02.webp"
import test3 from "../assets/exam/Listening  Pre-test-05.webp"
import test4 from "../assets/exam/Listening  Pre-test-12.webp"

const PostTest: React.FC = () => {
  const navigate = useNavigate();
  const { testId } = useParams<string>();
  useLeavePageWarning(true);
  const [startTime, setStartTime] = useState<number>(0);
  const [running, setRunning] = useState(false);
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
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const videoUrl =  `https://www.youtube.com/watch?v=KFxT6AboNwc`;
  const videoId = videoUrl.split("v=")[1];

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
            <h1>PostTest {exam.title}</h1>
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
          {/* <p className="p-h2"> {exam.description} </p> */}
          <div className="test-description">
            <p
              className="p-h2"
              dangerouslySetInnerHTML={{
                __html: exam.description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
          {videoId && <YouTube videoId={videoId} opts={opts} />}
          <TestDocumentImages documentImages={exam.documentImages} />
        </div>
        <div style={{ minWidth: "242px" }}></div>
        <div className="sticky-wrapper">
          <AnswerSheet
            totalQuestions={5}
            running={running}
            startTime={startTime}
            type = 'posttest'
            postTestId={testId}
            preTestId={exam.preTestId}
            randomAns = {false}
            mock = {true}
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
            {/* <p className="p-h2">{exam.description}</p> */}
            <p className="p-h2">
              การสอบ Post-Test สามารถสอบได้กี่ครั้งก็ได้ แต่คะแนนจะถูกบันทึกแค่ครั้งแรกครั้งเดียวเท่านั้น ต้องการจะเริ่มทำข้อสอบเลยหรือไม่
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "nowrap",
                  width: "300px",
                }}
              >
                <img src={BookLogo} alt="BookLogo" width={24} />
                <h2>{exam.tag.split(",").splice(0, 3).join(",")}</h2>
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

export default PostTest;

const exam: any = {
  id: "13fafjhui21e",
  title: "Toeic 2018",
  tag: "Listening,Reading,Listening,Reading,Listening,Reading,Listening,Reading,Listening,Reading",
  time: "120",
  status: true,
  description:
    "การสอบ TOEIC (Test of English for International Communication) เป็นการทดสอบที่ใช้ประเมินความสามารถในการใช้ภาษาอังกฤษในการสื่อสารในสถานการณ์ทางธุรกิจ สอบ TOEIC ประกอบด้วยสองส่วนหลัก คือ ส่วนการฟัง (Listening Section) และส่วนการอ่าน (Reading Section) โดยมีจำนวนคำถามที่ต่างกันและใช้เวลาในการทำสอบตามแต่ละส่วน\n\nส่วนการฟัง (Listening Section) จะประกอบด้วยบทสนทนาที่ถูกบันทึกไว้ในรูปแบบเสียง ซึ่งผู้เข้าสอบจะต้องฟังและตอบคำถามตามเนื้อหาที่ได้ยิน โดยมีจำนวนคำถามประมาณ 100 ข้อ และใช้เวลาในการทำสอบประมาณ 45-75 นาที\n\nส่วนการอ่าน (Reading Section) จะประกอบด้วยข้อความที่เขียนเป็นภาษาอังกฤษ ซึ่งผู้เข้าสอบจะต้องอ่านและตอบคำถามตามเนื้อหาที่ได้อ่าน โดยมีจำนวนคำถามประมาณ 100 ข้อ และใช้เวลาในการทำสอบประมาณ 75-90 นาที",
  documentImages: [
    test1,
    test2,
    test3,
    test4
  ],
};
