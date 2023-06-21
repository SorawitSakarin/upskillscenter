import React, { useState, useEffect } from "react";
import "./loadingspinnerpen.css";
import { BsLightbulb } from "react-icons/bs";

interface LoadingSpinnerPenProps {
  url: string;
}

const LoadingSpinnerPen: React.FC<LoadingSpinnerPenProps> = ({ url }) => {
  const ads = [
    "วิชาอื่นนอกหลักสูตรเราก็มี ไม่ว่าจะ Finance หรือ Computer Programming ",
    "ข้อสอบสามารถทำได้หลายครั้ง แต่คะแนนจะถูกบันทึกแค่ครั้งแรกเท่านั้น",
    "สมัยนี้รู้วิชาในหลักสูตรไม่พอ ต้องรู้นอกหลักสูตรด้วยที่ Upskill Center มีให้เรียนเพียบ !",
    "การทำข้อสอบในบทเรียนต่างๆ จะต้องทำครบทุกข้อเท่านั้นจึงจะสามารถประเมินผลสอบได้",
    "ก่อนจะเข้าไปเรียนหรือทำข้อสอบเพื่อวัดระดับ จะต้องทำข้อสอบ Pre-Test ในเรื่องนั้นๆก่อน",
    "คะแนนผลสอบจะถูกบันทึกแค่ครั้งแรกครั้งเดียวเท่านั้น",
  ];
  // const ads = ['text1', 'text2', 'text3'];
  const [currentAd, setCurrentAd] = useState(Math.floor(Math.random() * ads.length));
  const [animationOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateOut(true);
      setTimeout(() => {
        setCurrentAd((prevIndex) => (prevIndex + 1) % ads.length);
        setAnimateOut(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pencil-background ">
      <div className="pencil-card">
      <div className="loader"></div>
        <div className="pencil-row">
          <div className="pencil-light">
            <BsLightbulb size={24} />
          </div>
        <div className={`${animationOut ? "slideOut" : "slideIn"}`}>
          <p className="p-h2">{ads[currentAd]}</p>
        </div>
        </div>
          <a href={`${url}`} target="_blank" style={{ color: "#57A458" }}>
            <p className="p-h2">(เพิ่มข้อเสนอแนะได้ที่ Inbox Facebook)</p>
          </a>
      </div>
    </div>
  );
};

export default LoadingSpinnerPen;
