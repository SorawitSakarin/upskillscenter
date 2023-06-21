import React, { useState } from "react";
import Sidebar from "../navigation/SideBar";
import ExamList from "./ExamList";
import language from "../../assets/icons/24_24 px/Default-3.svg";
import math from "../../assets/icons/24_24 px/Default-4.svg";
import biology from "../../assets/icons/24_24 px/Default-5.svg";
import chemistry from "../../assets/icons/24_24 px/Default-7.svg";
import science from "../../assets/icons/24_24 px/Default-8.svg";
import "./Exam.css";

const Exam: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState("TOEIC");
  const [tagCard,setTagCard] = useState(true);
  return (
    <div className="exam-body " >
      <Sidebar setSelectedTopic={setSelectedTopic} headerTitle="Exam" setTagCard = {setTagCard} subjects ={subjects}/>
      <div className="exam-body-right appear">
        <h1>{selectedTopic}</h1>
        <ExamList data={MockExam[selectedTopic]} />
      </div>
    </div>
  );
};

export default Exam;

const MockExam: any = {
  TOEIC: [
    { id:'13fafjhui21e',title: "Toeic 2018", tag: "Listening,Reading,Reading,Reading", time: "120 minutes", status:true },
    { id:'13fafjhui21e',title: "Toeic 2019", tag: "Listening,Reading", time: "120 minutes" , status:false},
    { id:'13fafjhui21e',title: "Toeic 2020", tag: "Listening,Reading", time: "120 minutes" , status:false},
  ],
  TOEFL: [
    { id:'13fafjhui21e',title: "Toefl 2018", tag: "Listening,Reading", time: "120 minutes" , status:false},
    { id:'13fafjhui21e',title: "Toefl 2019", tag: "Listening,Reading", time: "120 minutes" , status:false},
    { id:'13fafjhui21e',title: "Toefl 2020", tag: "Listening,Reading", time: "120 minutes" , status:false},
    { id:'13fafjhui21e',title: "Toefl 2018", tag: "Listening,Reading", time: "120 minutes" , status:false},
  ],
  TCAST: [
    { id:'13fafjhui21e',title: "TCAST 2018", tag: "Listening,Reading", time: "120 minutes", status:false },
    { id:'13fafjhui21e',title: "TCAST 2019", tag: "Listening,Reading", time: "120 minutes", status:false },
    { id:'13fafjhui21e',title: "TCAST 2020", tag: "Listening,Reading", time: "120 minutes", status:false },
    { id:'13fafjhui21e',title: "TCAST 2018", tag: "Listening,Reading", time: "120 minutes", status:false },
    { id:'13fafjhui21e',title: "TCAST 2019", tag: "Listening,Reading", time: "120 minutes", status:false },
    { id:'13fafjhui21e',title: "TCAST 2020", tag: "Listening,Reading", time: "120 minutes", status:false },
  ],
};

const subjects = [
  {
    icon: language,
    name: "English",
    topics: ["TOEIC", "TOEFL", "TCAST"],
  },
  {
    icon:math,
    name: "Math",
    topics: ["Algebra", "Geometry", "Calculus"],
  },
  {
    icon:biology,
    name: "Biology",
    topics: ["Genetics", "Ecology", "Evolution"],
  },
  {
    icon:chemistry,
    name: "Chemistry",
    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  },
  {
    icon:science,
    name: "Science",
    topics: ["Physics", "Earth Science", "Astronomy"],
  },
];