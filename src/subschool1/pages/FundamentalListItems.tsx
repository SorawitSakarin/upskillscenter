import React, { useState } from "react";
import CourseBanner from "../assets/LoginBackground.svg";
import backIcon from "../../assets/icons/24_24 px/Default-10.svg";
import FundamentalBannerProgress from "./FundamentalBannerProgress";
import "./Fundamental.css";
import Logo from "/upskillscenter.png";
import FundamentalListCard from "./FundamentalListCard";
import { useNavigate } from "react-router-dom";

interface FundamentalListItemsProps {
  groupedCourses: any;
  selectedTag: any;
  setTagCard: any;
  tagCard: any;
  selectedTopic:any;
  courseType:string;
}

const FundamentalListItems: React.FC<FundamentalListItemsProps> = ({
  groupedCourses,
  selectedTag,
  setTagCard,
  tagCard,
  selectedTopic,
  courseType
}) => {
  const navigate = useNavigate();
  const groupedCourse = groupedCourses.find(
    (course: any) => course[0].tag === selectedTag
  );
  const numberOfCourse = groupedCourse.length;
  const completedCourse = groupedCourse.filter((course:any) => course.status === true).length;
  const totalTimeInSeconds = groupedCourse.reduce((accumulator:any, currentItem:any) => {
    return accumulator + parseInt(currentItem.time);
  }, 0);
  const totalTimeInMinutes = Math.floor(totalTimeInSeconds / 60);

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${CourseBanner})`
};

const backButtonClickHandler = () => {
 
    // navigate(`/fundamental?v=card&topic=${topic}&tag=${tag}`);
    setTagCard(true);
};

  return (
    <div className="fund-list-item">
      <div className="fund-list-item-banner" style={bannerStyle}>
        <div className="fund-list-item-banner-top">
          <div
            className="back-button-circle"
            onClick={() => {
              backButtonClickHandler();
            }}
          >
            <img src={backIcon} alt="back button" width={16} />
          </div>
        </div>
        <div className="fund-list-item-banner-body">
        <div className="logo-circle">
          <img src={Logo} alt="Logo" width={48}/>
        </div>
        <h3>{courseType}</h3>
        <h1 style={{marginTop:'16px'}}>{groupedCourse[0].tag}</h1>
        <div style={{margin:'8px'}}>
            <FundamentalBannerProgress completedCourse={completedCourse} numberOfCourse = {numberOfCourse}/>
        </div>
        <p className="p-h3"> {totalTimeInMinutes} minutes | {completedCourse}/{numberOfCourse} lessons complete</p>
        </div>
      </div>
      <div className="fund-list">
        {groupedCourse &&
          groupedCourse.map((course: any, index: number) => {
            return (
              <div  key={index}>
                <FundamentalListCard course = {course} courseType = {courseType}/>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FundamentalListItems;
