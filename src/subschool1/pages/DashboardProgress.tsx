import React, { useState, useEffect } from "react";
import DashboardProgressBar from "./DashboardProgressBar";
import "./Dashboard.css";

interface Student {
  result: any;
}

interface DashboardProgressProps {
  student: Student;
  topic: string;
  setTopic: any;
}
const DashboardProgress: React.FC<DashboardProgressProps> = ({
  student,
  topic,
  setTopic,
}) => {
  const [pretestActive, setPretestActive] = useState(true);
  const postTestScore = student.result?.[topic]?.postTestScore;
  const preTestScore = student.result?.[topic]?.preTestScore;
  const tagScores = student.result?.[topic]?.tagScores;
  const fullName = 'John Doe';

  return (
    <div className="db-prog-list">
      <div className="db-prog-head">
        <h1>Skill evaluation - {fullName}</h1>
      </div>
      {postTestScore && preTestScore && tagScores && <>
          <div className="pre-post" >
            <div className={`pre-post-btn ${pretestActive? "pre-post-btn-active":""}`} onClick={()=>setPretestActive(true)}>
              <h2>Pre test </h2>
            </div>
            <div className={`pre-post-btn ${!pretestActive? "pre-post-btn-active":""}`} onClick={()=>setPretestActive(false)}>
              <h2>Post test </h2>
            </div>
          </div>
          <div className="db-prog-topic">
            <div style={{display:'flex', width:'200px'}}>
              <h1>
                {topic}
              </h1>
            </div>
            <div style={{display:'flex', width:'100%',backgroundColor:'white',height:'15px', borderRadius:'8px'}}>
            {preTestScore && pretestActive&&<div className="slide-left" style={{display:'flex', width:`${preTestScore}%`,backgroundColor:'#FF891C',height:'15px', borderRadius:'8px'}}> </div>}
            {!pretestActive&&postTestScore&&<div className="slide-left" style={{display:'flex', width:`${postTestScore}%`,backgroundColor:'#FF891C',height:'15px', borderRadius:'8px'}}> </div>}
                
            </div>
            <div style={{display:'flex', width:'100px',justifyContent:'flex-end'}}>
              <h1>{pretestActive? preTestScore:postTestScore}%</h1>
            </div>
          </div>
          <div>
            <DashboardProgressBar tagScores={tagScores} pretestActive = {pretestActive} />
          </div>

      </>}

      {(!postTestScore || !preTestScore || !tagScores) &&
      <div >
        <h1>You do not have a score record in this topic : {topic}</h1>
      </div>
      }
    </div>
  );
};

export default DashboardProgress;
