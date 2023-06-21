import React, { useState, useEffect } from "react";
import { BsLightbulb } from "react-icons/bs";
import "./loadingspinnerpencil.css";

interface LoadingSpinnerPencilProps {
  url: string;
}

const LoadingSpinnerPencil: React.FC<LoadingSpinnerPencilProps> = ({ url }) => {
  const ads = [
    "วิชาอื่นนอกหลักสูตรเราก็มี ไม่ว่าจะ Finance หรือ Computer Programming ",
    "ข้อสอบสามารถทำได้หลายครั้ง แต่คะแนนจะถูกบันทึกแค่ครั้งแรกเท่านั้น",
    "สมัยนี้รู้วิชาในหลักสูตรไม่พอ ต้องรู้นอกหลักสูตรด้วยที่ Upskill Center มีให้เรียนเพียบ !",
    "การทำข้อสอบในบทเรียนต่างๆ จะต้องทำครบทุกข้อเท่านั้นจึงจะสามารถประเมินผลสอบได้",
    "ก่อนจะเข้าไปเรียนหรือทำข้อสอบเพื่อวัดระดับ จะต้องทำข้อสอบ Pre-Test ในเรื่องนั้นๆก่อน",
    "คะแนนผลสอบจะถูกบันทึกแค่ครั้งแรกครั้งเดียวเท่านั้น",
  ];
  // const ads = ['text1', 'text2', 'text3'];
  const [currentAd, setCurrentAd] = useState(
    Math.floor(Math.random() * ads.length)
  );
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="200px"
          width="200px"
          viewBox="0 0 200 200"
          className="pencil"
        >
          <defs>
            <clipPath id="pencil-eraser">
              <rect height="30" width="30" ry="5" rx="5"></rect>
            </clipPath>
          </defs>
          <circle
            transform="rotate(-113,100,100)"
            stroke-linecap="round"
            stroke-dashoffset="439.82"
            stroke-dasharray="439.82 439.82"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            r="70"
            className="pencil__stroke"
          ></circle>
          <g transform="translate(100,100)" className="pencil__rotate">
            <g fill="none">
              <circle
                transform="rotate(-90)"
                stroke-dashoffset="402"
                stroke-dasharray="402.12 402.12"
                stroke-width="30"
                stroke="hsl(223,90%,50%)"
                r="64"
                className="pencil__body1"
              ></circle>
              <circle
                transform="rotate(-90)"
                stroke-dashoffset="465"
                stroke-dasharray="464.96 464.96"
                stroke-width="10"
                stroke="hsl(223,90%,60%)"
                r="74"
                className="pencil__body2"
              ></circle>
              <circle
                transform="rotate(-90)"
                stroke-dashoffset="339"
                stroke-dasharray="339.29 339.29"
                stroke-width="10"
                stroke="hsl(223,90%,40%)"
                r="54"
                className="pencil__body3"
              ></circle>
            </g>
            <g
              transform="rotate(-90) translate(49,0)"
              className="pencil__eraser"
            >
              <g className="pencil__eraser-skew">
                <rect
                  height="30"
                  width="30"
                  ry="5"
                  rx="5"
                  fill="hsl(223,90%,70%)"
                ></rect>
                <rect
                  clip-path="url(#pencil-eraser)"
                  height="30"
                  width="5"
                  fill="hsl(223,90%,60%)"
                ></rect>
                <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
                <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
                <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
                <rect
                  height="2"
                  width="30"
                  y="6"
                  fill="hsla(223,10%,10%,0.2)"
                ></rect>
                <rect
                  height="2"
                  width="30"
                  y="13"
                  fill="hsla(223,10%,10%,0.2)"
                ></rect>
              </g>
            </g>
            <g
              transform="rotate(-90) translate(49,-30)"
              className="pencil__point"
            >
              <polygon
                points="15 0,30 30,0 30"
                fill="hsl(33,90%,70%)"
              ></polygon>
              <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
              <polygon
                points="15 0,20 10,10 10"
                fill="hsl(223,10%,10%)"
              ></polygon>
            </g>
          </g>
        </svg>
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

export default LoadingSpinnerPencil;
