import React, { useEffect, useState } from "react";
import Sidebar from "../navigation/SideBar";
import FundamentalList from "./FundamentalList";
import "./Fundamental.css";
import { useLocation } from "react-router-dom";
import fundCardBanner from "../assets/fundCardBanner.svg"
import language from "../../assets/icons/24_24 px/Default-3.svg";
import math from "../../assets/icons/24_24 px/Default-4.svg";
import biology from "../../assets/icons/24_24 px/Default-5.svg";
import chemistry from "../../assets/icons/24_24 px/Default-7.svg";
import science from "../../assets/icons/24_24 px/Default-8.svg";

const Fundamental: React.FC = () => {
  const location = useLocation();
  const [selectedTopic, setSelectedTopic] = useState("TOEIC");
  const [selectedTag, setSelectedTag] = useState('');
  const [tagCard,setTagCard] = useState(true);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const v = searchParams.get('v');
    const tag = searchParams.get('tag');
    const topic = searchParams.get('topic');
    setTagCard(v === "card" ? false : true)
    setSelectedTag(tag ? tag : "");
    setSelectedTopic(topic ? topic:"TOEIC");
    console.log(v,tag); // logs the value of 'myParam' query parameter
  }, [location]);

  // useEffect(()=>{
  //   setTagCard(true);
  // },[selectedTopic])
  return (
    
    <div>
      <div className="fundamental-body ">
        <Sidebar setSelectedTopic={setSelectedTopic} headerTitle = 'Fundamental' setTagCard = {setTagCard} subjects = {subjects}/>
        <div className="fundamental-body-right appear">
          <h1>{selectedTopic}</h1>
         <FundamentalList  courses={courses[selectedTopic]? courses[selectedTopic]: []} tagCard= {tagCard} setTagCard = {setTagCard}
         selectedTag ={selectedTag} setSelectedTag = {setSelectedTag} selectedTopic = {selectedTopic}/>
        </div>
      </div>
    </div>
  );
};

export default Fundamental;


const courses : any = {
  TOEIC: [
    { id:'13fafjhui21e',title: "Toeic 2018", tag: "Listening", time: "1200", status:true ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2019", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2020", tag: "Reading", time: "1200" , status:true,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2018", tag: "Listening", time: "1200", status:true ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2019", tag: "Reading", time: "1200" , status:true,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2020", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2018", tag: "Tense", time: "1200", status:true ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2019", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2020", tag: "Tense", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2018", tag: "Tense", time: "1200", status:true ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2019", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toeic 2020", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
  ],
  TOEFL: [
    { id:'13fafjhui21e',title: "Toefl 2018", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toefl 2019", tag: "Listening", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toefl 2020", tag: "Listening", time: "1200" , status:false,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "Toefl 2018", tag: "Reading", time: "1200" , status:false,banner:{fundCardBanner}},
  ],
  TCAST: [
    { id:'13fafjhui21e',title: "TCAST 2018", tag: "Reading", time: "1200", status:false ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "TCAST 2019", tag: "Tense", time: "1200", status:false ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "TCAST 2020", tag: "If- clause", time: "1200", status:false ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "TCAST 2018", tag: "Reading", time: "1200", status:false ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "TCAST 2019", tag: "Tense", time: "120 minutes", status:false ,banner:{fundCardBanner}},
    { id:'13fafjhui21e',title: "TCAST 2020", tag: "Tense", time: "120 minutes", status:false ,banner:{fundCardBanner}},
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
    name: "Physics",
    topics: ["Physics", "Earth Science", "Astronomy"],
  },
];