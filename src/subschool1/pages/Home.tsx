import React, { useContext, useEffect, useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HomeList from "./HomeList";
import cardBanner from "../assets/Cover.svg";
import HomeCarousel from "./HomeCarousel";

const Home: React.FC = () => {

  const navigate = useNavigate();
  const [suggestedActive, setSuggestedActive] = useState<boolean>(true);
  

  return (
    <div>
      <div className="home-body">
        <div className="home-banner">
          {/* <HomeBanner banners = {banners}/> */}
          <HomeCarousel banners={banners}/>
        </div>
        <div className="home-right appear">
          <h1>Welcome</h1>
          <hr className="separator" />
          <div className="home-right-tab">
            <button className={`tab-btn ${suggestedActive ? "buttonActive" : ""}`} onClick={() => { setSuggestedActive(true);}}>
              Suggested
            </button>
            <button className={`tab-btn ${!suggestedActive ? "buttonActive" : ""}`} onClick={() => {setSuggestedActive(false);  }} >
              Completed
            </button>
          </div>

          {suggestedActive && <HomeList courses = {courses.suggested}/>}
          {!suggestedActive && <HomeList courses = {courses.completed}/>}
          
        </div>
      </div>
    </div>
  );
};

export default Home;

const courses = {
  suggested: [
    {
      topic:'TOEFL',
      title:'Toeic12',
      tag:'Listening',
      type:'Fundamental',
      completedCourses:1,
      numberOfCourses:4,
      cardBanner,
    
    },
    {
      topic:'TOEIC',
      title:'Toeic21',
      tag:'Reading',
      type:'Fundamental',
      completedCourses:1,
      numberOfCourses:4,
      cardBanner
    
    },
    {
      topic:'TOEIC',
      title:'Toeic12',
      tag:'Tense',
      type:'Tips',
      completedCourses:2,
      numberOfCourses:7,
      cardBanner
    
    },
    {
      topic:'TOEIC',
      title:'Toeic21',
      tag:'Reading',
      type:'Fundamental',
      completedCourses:1,
      numberOfCourses:7,
      cardBanner
    
    },
    {
      topic:'TOEIC',
      title:'Toeic12',
      tag:'Tense',
      type:'Tips',
      completedCourses:3,
      numberOfCourses:4,
      cardBanner
    
    },
  ],
  completed: [
    
    {
      topic:'TOEIC',
      title:'Toeic12',
      tag:'Tense',
      type:'Tips',
      completedCourses:2,
      numberOfCourses:2,
      cardBanner
    },
    {
      topic:'TOEIC',
      title:'Toeic12',
      tag:'Tense',
      type:'Tips',
      completedCourses:4,
      numberOfCourses:4,
      cardBanner
    },
  ],
};



const banners = [
  'https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/05/31/09/57/skyscraper-8030987_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_960_720.jpg',
  'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_960_720.jpg',
  
];