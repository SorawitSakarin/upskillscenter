import React, { useContext, useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import DashboardRank from "./DashboardRank";
import DashboardProgress from "./DashboardProgress";
import DashboardGraph from "./DashboardGraph";
import "./Dashboard.css";
import DashboardRankYourScore from "./DashboardRankYourScore";
import CardHoverDB from "../../components/card/CardHoverDB";

const Dashboard: React.FC = () => {
  const [topic, setTopic] = useState("TOEIC");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownClickHandler = (pretestTopic:string) =>{
    setTopic(pretestTopic);
    setIsOpenDropdown(false);
  }

  return (
    <div className="db-background">
      <div className="db-background-row">
        <div className="db-lb-background shadow">
          <div className="db-graph-header">
          <h1> Leader board</h1>
          </div>
          <div className="db-lb-dropdown">
            <div>
              <h2> Top 10 Ranking</h2>
              <p className="p-h5"> Ranking by the subject selected from right corner</p>
            </div>
            <div className="db-lb-dropdown-topic">
              <h2>{topic}</h2>
              <div className="dropdown-btn" onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
               <FiChevronDown size={16} color="white"/>
              </div>
              {isOpenDropdown && (
                <div className={`dropdown-items-dashboard`}>
                  {pretests.map((postTest:any, index:number)=>{
                    return <div onClick={()=>dropdownClickHandler(postTest)} key={index}><h3>{postTest}</h3></div>
                  })}
                </div>
              )}
            </div>
          </div>
          {topic && existingResults[topic] &&<DashboardRank studentScores={existingResults![topic]} />}
          {existingResults[topic] && <DashboardRankYourScore studentScores={existingResults![topic]} />}
          {!existingResults[topic] && <CardHoverDB topic = {topic}/>}
        </div>
       {existingResults[topic]&& <DashboardGraph studentScores={existingResults![topic]}  totalStudent = {totalStudents![topic]}/>}
      </div>
      <div className="db-prog-background">
        <DashboardProgress
          student={student}
          topic={topic}
          setTopic={setTopic}
        />
      </div>
    </div>
  );
};

export default Dashboard;

const student = {
  result: {
    TOEIC: {
      postTestScore: 33,
      preTestScore: 15,
      tagScores: [
        { tag: "Listening", postTestScore: 35, preTestScore: 10 },
        { tag: "Reading", postTestScore: 25, preTestScore: 15 },
        { tag: "Tesnse", postTestScore: 40, preTestScore: 20 },
        { tag: "Grammar", postTestScore: 30, preTestScore: 16 },
        { tag: "Vocabulary", postTestScore: null, preTestScore:15 },
      ]
    },
    TOELF: {
      postTestScore: 93,
      preTestScore: 45,
      tagScores: [
        { tag: "Listening", postTestScore: 95, preTestScore: 40 },
        { tag: "Reading", postTestScore: null, preTestScore: 45 },
        { tag: "Tesnse", postTestScore: 60, preTestScore: 30 },
        { tag: "Grammar", postTestScore: 80, preTestScore: 60 },
        { tag: "Vocabulary", postTestScore: 91, preTestScore: 25 },
      ]
    },
    TCAS: {
      postTestScore: 83,
      preTestScore: 15,
      tagScores: [
        { tag: "Listening", postTestScore: 85, preTestScore: 10 },
        { tag: "Reading", postTestScore: 90, preTestScore: 4 },
        { tag: "Tesnse", postTestScore: 90, preTestScore: 20 },
        { tag: "Grammar", postTestScore: 40, preTestScore: 26 },
        { tag: "Vocabulary", postTestScore: 81, preTestScore: 22 },
      ]
    },
  },
};

const pretests:any = ["TOEIC","TOELF","TCAS","GATPAT"];

const existingResults:any = 
{
  "TOEIC":[
  {
    "id": 1,
    "timeUsage": "525.768",
    "score": "32.95",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 1,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "35.36,41.27,31.84,28.92",
    "fullName": "John Doe"
  },
  {
    "id": 2,
    "timeUsage": "274.329",
    "score": "13.25",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 2,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "57.42,68.93,24.71,39.81",
    "fullName": "Bob Johnson"
  },
  {
    "id": 3,
    "timeUsage": "725.115",
    "score": "91.70",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 3,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "98.12,82.57,72.46,88.79",
    "fullName": "Emily Davis"
  },
  {
    "id": 4,
    "timeUsage": "182.596",
    "score": "42.15",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 4,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "65.81,17.49,48.29,55.97",
    "fullName": "David Wilson"
  },
  {
    "id": 5,
    "timeUsage": "477.932",
    "score": "87.60",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 5,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "79.25,91.07,56.83,73.42",
    "fullName": "Sophia Brown"
  },
  {
    "id": 6,
    "timeUsage": "301.571",
    "score": "65.40",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 6,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "78.20,54.35,68.90,72.80",
    "fullName": "Olivia Johnson"
  },
  {
    "id": 7,
    "timeUsage": "532.480",
    "score": "89.15",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 7,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "92.75,87.60,81.45,94.20",
    "fullName": "Ethan Wilson"
  },
  {
    "id": 8,
    "timeUsage": "75.874",
    "score": "29.80",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 8,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "32.70,41.60,23.45,27.80",
    "fullName": "Liam Davis"
  },
  {
    "id": 9,
    "timeUsage": "950.617",
    "score": "17.90",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 9,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "48.10,15.80,26.50,32.45",
    "fullName": "Mia Thompson"
  },
  {
    "id": 10,
    "timeUsage": "168.256",
    "score": "93.75",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 10,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "86.20,97.30,92.40,88.70",
    "fullName": "Noah Anderson"
  },
  {
    "id": 11,
    "timeUsage": "178.923",
    "score": "80.20",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 15,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "74.30,82.40,79.10,77.90",
    "fullName": "Ava Taylor"
  },
  {
    "id": 12,
    "timeUsage": "427.639",
    "score": "40.60",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "56.80,38.90,41.10,45.70",
    "fullName": "Jackson Brown"
  },
  {
    "id": 13,
    "timeUsage": "631.992",
    "score": "95.80",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 12,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "89.50,97.80,92.10,96.40",
    "fullName": "Isabella Clark"
  },
  {
    "id": 14,
    "timeUsage": "97.512",
    "score": "27.35",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 13,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "36.80,18.90,25.70,32.50",
    "fullName": "Liam Garcia"
  },
  {
    "id": 15,
    "timeUsage": "855.287",
    "score": "60.90",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 14,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "65.20,53.80,67.60,61.50",
    "fullName": "Sophia Hernandez"
  },
  {
    "id": 16,
    "timeUsage": "478.315",
    "score": "72.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 5,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "68.50,76.20,74.80,71.90",
    "fullName": "Emma Martinez"
  },
  {
    "id": 17,
    "timeUsage": "652.124",
    "score": "88.45",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 6,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "92.30,85.70,89.10,91.50",
    "fullName": "William Lee"
  },
  {
    "id": 18,
    "timeUsage": "285.761",
    "score": "32.10",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 7,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "45.80,38.90,36.50,41.70",
    "fullName": "Charlotte Scott"
  },
  {
    "id": 19,
    "timeUsage": "793.415",
    "score": "19.75",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 8,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "27.60,14.20,19.40,23.80",
    "fullName": "Daniel Reed"
  },
  {
    "id": 20,
    "timeUsage": "136.522",
    "score": "59.20",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 9,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "56.40,62.80,61.50,57.90",
    "fullName": "Aiden Brooks"
  },
  {
    "id": 21,
    "timeUsage": "598.923",
    "score": "86.50",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 10,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "82.10,88.40,87.20,84.90",
    "fullName": "Sophie Turner"
  },
  {
    "id": 22,
    "timeUsage": "211.874",
    "score": "39.25",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "42.30,38.40,35.80,40.70",
    "fullName": "James Collins"
  },
  {
    "id": 23,
    "timeUsage": "457.617",
    "score": "27.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 12,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "32.10,24.70,29.60,26.90",
    "fullName": "Grace Parker"
  },
  {
    "id": 24,
    "timeUsage": "978.562",
    "score": "16.90",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 13,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "22.50,14.80,18.90,20.10",
    "fullName": "Henry Mitchell"
  },
  {
    "id": 25,
    "timeUsage": "123.456",
    "score": "65.75",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 14,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "62.80,68.20,67.10,64.50",
    "fullName": "Scarlett Davis"
  },
  {
    "id": 26,
    "timeUsage": "345.128",
    "score": "77.20",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 15,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "73.40,79.80,76.50,74.90",
    "fullName": "Benjamin Green"
  },
  {
    "id": 27,
    "timeUsage": "678.493",
    "score": "92.35",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 16,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "89.20,95.40,94.10,91.50",
    "fullName": "Ella Powell"
  },
  {
    "id": 28,
    "timeUsage": "189.764",
    "score": "43.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 17,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "48.60,42.80,41.20,46.10",
    "fullName": "Lucas Carter"
  },
  {
    "id": 29,
    "timeUsage": "526.319",
    "score": "21.95",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 18,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "29.10,17.80,23.40,25.80",
    "fullName": "Chloe Murphy"
  },
  {
    "id": 30,
    "timeUsage": "876.542",
    "score": "57.60",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "52.80,63.20,61.10,56.90",
    "fullName": "Johnson Doe"
  }
],
"TOELF":[
  {
    "id": 1,
    "timeUsage": "525.768",
    "score": "92.95",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 1,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "95.36,91.27,61.84,78.92",
    "fullName": "John Doe"
  },
  {
    "id": 2,
    "timeUsage": "274.329",
    "score": "13.25",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 2,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "57.42,68.93,24.71,39.81",
    "fullName": "Bob Johnson"
  },
  {
    "id": 3,
    "timeUsage": "725.115",
    "score": "81.70",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 3,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "98.12,82.57,72.46,88.79",
    "fullName": "Emily Davis"
  },
  {
    "id": 4,
    "timeUsage": "182.596",
    "score": "42.15",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 4,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "65.81,17.49,48.29,55.97",
    "fullName": "David Wilson"
  },
  {
    "id": 5,
    "timeUsage": "477.932",
    "score": "77.60",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 5,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "79.25,91.07,56.83,73.42",
    "fullName": "Sophia Brown"
  },
  {
    "id": 6,
    "timeUsage": "301.571",
    "score": "75.40",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 6,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "78.20,54.35,68.90,72.80",
    "fullName": "Olivia Johnson"
  },
  {
    "id": 7,
    "timeUsage": "532.480",
    "score": "79.15",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 7,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "92.75,87.60,81.45,94.20",
    "fullName": "Ethan Wilson"
  },
  {
    "id": 8,
    "timeUsage": "75.874",
    "score": "89.80",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 8,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "32.70,41.60,23.45,27.80",
    "fullName": "Liam Davis"
  },
  {
    "id": 9,
    "timeUsage": "950.617",
    "score": "47.90",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 9,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "48.10,15.80,26.50,32.45",
    "fullName": "Mia Thompson"
  },
  {
    "id": 10,
    "timeUsage": "168.256",
    "score": "83.75",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 10,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "86.20,97.30,92.40,88.70",
    "fullName": "Noah Anderson"
  },
  {
    "id": 11,
    "timeUsage": "178.923",
    "score": "82.20",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 15,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "74.30,82.40,79.10,77.90",
    "fullName": "Ava Taylor"
  },
  {
    "id": 12,
    "timeUsage": "427.639",
    "score": "40.60",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "56.80,38.90,41.10,45.70",
    "fullName": "Jackson Brown"
  },
  {
    "id": 13,
    "timeUsage": "631.992",
    "score": "94.80",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 12,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "89.50,97.80,92.10,96.40",
    "fullName": "Isabella Clark"
  },
  {
    "id": 14,
    "timeUsage": "97.512",
    "score": "37.35",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 13,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "36.80,18.90,25.70,32.50",
    "fullName": "Liam Garcia"
  },
  {
    "id": 15,
    "timeUsage": "855.287",
    "score": "64.90",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 14,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "65.20,53.80,67.60,61.50",
    "fullName": "Sophia Hernandez"
  },
  {
    "id": 16,
    "timeUsage": "478.315",
    "score": "22.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 5,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "68.50,76.20,74.80,71.90",
    "fullName": "Emma Martinez"
  },
  {
    "id": 17,
    "timeUsage": "652.124",
    "score": "78.45",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 6,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "92.30,85.70,89.10,91.50",
    "fullName": "William Lee"
  },
  {
    "id": 18,
    "timeUsage": "285.761",
    "score": "52.10",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 7,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "45.80,38.90,36.50,41.70",
    "fullName": "Charlotte Scott"
  },
  {
    "id": 19,
    "timeUsage": "793.415",
    "score": "89.75",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 8,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "27.60,14.20,19.40,23.80",
    "fullName": "Daniel Reed"
  },
  {
    "id": 20,
    "timeUsage": "136.522",
    "score": "39.20",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 9,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "56.40,62.80,61.50,57.90",
    "fullName": "Aiden Brooks"
  },
  {
    "id": 21,
    "timeUsage": "598.923",
    "score": "89.50",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 10,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "82.10,88.40,87.20,84.90",
    "fullName": "Sophie Turner"
  },
  {
    "id": 22,
    "timeUsage": "211.874",
    "score": "69.25",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "42.30,38.40,35.80,40.70",
    "fullName": "James Collins"
  },
  {
    "id": 23,
    "timeUsage": "457.617",
    "score": "37.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 12,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "32.10,24.70,29.60,26.90",
    "fullName": "Grace Parker"
  },
  {
    "id": 24,
    "timeUsage": "978.562",
    "score": "16.90",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 13,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "22.50,14.80,18.90,20.10",
    "fullName": "Henry Mitchell"
  },
  {
    "id": 25,
    "timeUsage": "123.456",
    "score": "65.75",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 14,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "62.80,68.20,67.10,64.50",
    "fullName": "Scarlett Davis"
  },
  {
    "id": 26,
    "timeUsage": "345.128",
    "score": "77.20",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 15,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "73.40,79.80,76.50,74.90",
    "fullName": "Benjamin Green"
  },
  {
    "id": 27,
    "timeUsage": "678.493",
    "score": "82.35",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 16,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "89.20,95.40,94.10,91.50",
    "fullName": "Ella Powell"
  },
  {
    "id": 28,
    "timeUsage": "189.764",
    "score": "43.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 17,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "48.60,42.80,41.20,46.10",
    "fullName": "Lucas Carter"
  },
  {
    "id": 29,
    "timeUsage": "526.319",
    "score": "21.95",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 18,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "29.10,17.80,23.40,25.80",
    "fullName": "Chloe Murphy"
  },
  {
    "id": 30,
    "timeUsage": "876.542",
    "score": "57.60",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "52.80,63.20,61.10,56.90",
    "fullName": "Johnson Doe"
  }
],
"TCAS":[
  {
    "id": 1,
    "timeUsage": "525.768",
    "score": "82.95",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 1,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "75.36,51.27,71.84,88.92",
    "fullName": "John Doe"
  },
  {
    "id": 2,
    "timeUsage": "274.329",
    "score": "73.25",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 2,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "57.42,68.93,24.71,39.81",
    "fullName": "Bob Johnson"
  },
  {
    "id": 3,
    "timeUsage": "725.115",
    "score": "81.70",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 3,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "98.12,82.57,72.46,88.79",
    "fullName": "Emily Davis"
  },
  {
    "id": 4,
    "timeUsage": "182.596",
    "score": "92.15",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 4,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "65.81,17.49,48.29,55.97",
    "fullName": "David Wilson"
  },
  {
    "id": 5,
    "timeUsage": "477.932",
    "score": "97.60",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 5,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "79.25,91.07,56.83,73.42",
    "fullName": "Sophia Brown"
  },
  {
    "id": 6,
    "timeUsage": "301.571",
    "score": "25.40",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 6,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "78.20,54.35,68.90,72.80",
    "fullName": "Olivia Johnson"
  },
  {
    "id": 7,
    "timeUsage": "532.480",
    "score": "89.15",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 7,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "92.75,87.60,81.45,94.20",
    "fullName": "Ethan Wilson"
  },
  {
    "id": 8,
    "timeUsage": "75.874",
    "score": "89.80",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 8,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "32.70,41.60,23.45,27.80",
    "fullName": "Liam Davis"
  },
  {
    "id": 9,
    "timeUsage": "950.617",
    "score": "77.90",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 9,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "48.10,15.80,26.50,32.45",
    "fullName": "Mia Thompson"
  },
  {
    "id": 10,
    "timeUsage": "168.256",
    "score": "83.75",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 10,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "86.20,97.30,92.40,88.70",
    "fullName": "Noah Anderson"
  },
  {
    "id": 11,
    "timeUsage": "178.923",
    "score": "80.20",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 15,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "74.30,82.40,79.10,77.90",
    "fullName": "Ava Taylor"
  },
  {
    "id": 12,
    "timeUsage": "427.639",
    "score": "50.60",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "56.80,38.90,41.10,45.70",
    "fullName": "Jackson Brown"
  },
  {
    "id": 13,
    "timeUsage": "631.992",
    "score": "35.80",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 12,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "89.50,97.80,92.10,96.40",
    "fullName": "Isabella Clark"
  },
  {
    "id": 14,
    "timeUsage": "87.512",
    "score": "27.35",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 13,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "36.80,18.90,25.70,32.50",
    "fullName": "Liam Garcia"
  },
  {
    "id": 15,
    "timeUsage": "855.287",
    "score": "80.90",
    "preTestId": 5,
    "postTestId": 6,
    "studentId": 14,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "65.20,53.80,67.60,61.50",
    "fullName": "Sophia Hernandez"
  },
  {
    "id": 16,
    "timeUsage": "478.315",
    "score": "92.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 5,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "68.50,76.20,74.80,71.90",
    "fullName": "Emma Martinez"
  },
  {
    "id": 17,
    "timeUsage": "652.124",
    "score": "58.45",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 6,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "92.30,85.70,89.10,91.50",
    "fullName": "William Lee"
  },
  {
    "id": 18,
    "timeUsage": "285.761",
    "score": "22.10",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 7,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "45.80,38.90,36.50,41.70",
    "fullName": "Charlotte Scott"
  },
  {
    "id": 19,
    "timeUsage": "793.415",
    "score": "79.75",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 8,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "27.60,14.20,19.40,23.80",
    "fullName": "Daniel Reed"
  },
  {
    "id": 20,
    "timeUsage": "136.522",
    "score": "69.20",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 9,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "56.40,62.80,61.50,57.90",
    "fullName": "Aiden Brooks"
  },
  {
    "id": 21,
    "timeUsage": "598.923",
    "score": "96.50",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 10,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "82.10,88.40,87.20,84.90",
    "fullName": "Sophie Turner"
  },
  {
    "id": 22,
    "timeUsage": "211.874",
    "score": "39.25",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "42.30,38.40,35.80,40.70",
    "fullName": "James Collins"
  },
  {
    "id": 23,
    "timeUsage": "457.617",
    "score": "27.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 12,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "32.10,24.70,29.60,26.90",
    "fullName": "Grace Parker"
  },
  {
    "id": 24,
    "timeUsage": "978.562",
    "score": "16.90",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 13,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "22.50,14.80,18.90,20.10",
    "fullName": "Henry Mitchell"
  },
  {
    "id": 25,
    "timeUsage": "123.456",
    "score": "65.75",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 14,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "62.80,68.20,67.10,64.50",
    "fullName": "Scarlett Davis"
  },
  {
    "id": 26,
    "timeUsage": "345.128",
    "score": "77.20",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 15,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "73.40,79.80,76.50,74.90",
    "fullName": "Benjamin Green"
  },
  {
    "id": 27,
    "timeUsage": "678.493",
    "score": "94.35",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 16,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "89.20,95.40,94.10,91.50",
    "fullName": "Ella Powell"
  },
  {
    "id": 28,
    "timeUsage": "189.764",
    "score": "43.80",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 17,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "48.60,42.80,41.20,46.10",
    "fullName": "Lucas Carter"
  },
  {
    "id": 29,
    "timeUsage": "526.319",
    "score": "21.95",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 18,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "29.10,17.80,23.40,25.80",
    "fullName": "Chloe Murphy"
  },
  {
    "id": 30,
    "timeUsage": "876.542",
    "score": "37.60",
    "preTestId": 5,
    "postTestId": null,
    "studentId": 11,
    "type": "posttest",
    "tag": "listening,grammar,vocabulary,reading",
    "tagScore": "52.80,63.20,61.10,56.90",
    "fullName": "Johnson Doe"
  }
],

}

const totalStudents:any = {
  "TOEIC":35,
  "TOELF": 100,
  "TCAS":50
}