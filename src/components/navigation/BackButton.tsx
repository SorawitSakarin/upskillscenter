import React from "react";
import backArrow from "../../assets/icons/24_24 px/Default-10.svg";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const btnStyle: React.CSSProperties = {
    borderRadius: "8px",
    gap: "12px",
    padding: "10px 8px 10px 8px",
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
    transition:'transform 0.3s ease'
  };
  const clickHandler = () =>{
    navigate(-1);
  }

  return (
    <div >
      <button style={btnStyle} onClick={clickHandler} className="back-btn">
        <img src={backArrow} alt="back arrow" style={{ width: "18px" }} />
        <h2>Back</h2>
      </button>
    </div>
  );
};

export default BackButton;
