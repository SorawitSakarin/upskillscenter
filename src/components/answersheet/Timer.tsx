import React, { useState, useEffect } from "react";
import "./AnswerSheet.css";

interface timerProps{
  running: boolean
}

const Timer: React.FC<timerProps> = ({running}) => {
  const [time, setTime] = useState(0);   //seconds

  // const clickHandler = () => {
  //   setRunning(!running);
  //   console.log(time);
  // };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [running]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `\u00A0\u00A0${String(minutes).padStart(2, "0")}  \u00A0\u00A0\u00A0${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="timer">
      <div>
        <h1>{formatTime(time)}</h1>
        <p className="p-h3" style={{opacity:'0.5'}}> minutes  seconds</p>
      </div>
      {/* <button onClick = {clickHandler}> Click me!</button> */}
    </div>
  );
};

export default Timer;
