import React, { useState } from "react";
import "./Fundamental.css";
import uncheckLogo from "../../assets/icons/24_24 px/Default-16.svg";
import checkLogo from "../../assets/icons/40_40 px/Default-1.svg";
import { useNavigate } from "react-router-dom";

interface Course {
  title: string;
  tag: string;
  banner: any;
  time: any;
  status:boolean;
  id: string;
}

interface FundamentalListCardProps {
  course: Course;
  courseType:string;
}

const FundamentalListCard: React.FC<FundamentalListCardProps> = ({
  course,
  courseType
}) => {
  const navigate = useNavigate();
  const time = Math.floor(parseInt(course.time) / 60);
  const cardClickHandler = () =>{
    navigate(`/learn/${course.id}`)
  }
  return (
    <div className="fund-list-card" onClick={cardClickHandler}>
      <div className="fund-list-card-top">
        <img src={course.banner.fundCardBanner} />
      </div>
      <div className="fund-list-card-bottom">
        <div>
          <h5>{courseType}</h5>
          <h3>{course.title}</h3>
          <p className="p-h4">{time} minutes</p>
        </div>
        <div>
          {course.status &&  <img src={checkLogo} alt="checkLogo" width={24}/> }
          {!course.status &&  <img src={uncheckLogo} alt="uncheckLogo" width={24} style={{opacity:'0.4'}}/>}
          
        </div>
      </div>
    </div>
  );
};

export default FundamentalListCard;
