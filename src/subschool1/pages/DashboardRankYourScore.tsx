import React from "react";

import { FiClock } from "react-icons/fi";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";

interface StudentScore {
  fullName: string;
  score: number;
  timeUsage: any;
  studentId : any;
}

interface DashboardRankYourScoreProps {
  studentScores: Array<StudentScore>;
}
const DashboardRankYourScore: React.FC<DashboardRankYourScoreProps> = ({
  studentScores,
}) => {

  studentScores = studentScores?.sort((a:any, b:any) => {
    if (a.score >= b.score) {
      return -1;
    }
    return 1;
  })
  const studentId = 1;

  const index = studentScores.findIndex((score)=>score.studentId ==studentId);
  if(index === -1){
    return <div><h1>No score</h1></div>
  }
  const fullName = studentScores[index].fullName;
  const timeUsage = Math.floor(studentScores[index].timeUsage/60);
  const score = studentScores[index].score;

  return (
    <div className="db-rank-your-score">
      <div className="db-rank-dot">
        <h2>..................</h2>
      </div>
      <div className="db-rank-card" style={{border:'7px solid  #F37103'}}>
          <div
            key={index}
            className="db-rank-card-row"
          >
            <div style={{ paddingLeft: "24px", display:'flex', gap:'16px' }}>
              <h3>{index + 1}</h3>
              <h3>{fullName}</h3>
            </div>
            <div className="db-rank-card-row-right">
              <FiClock size={24}/>
              <h3>{timeUsage} min.</h3>
              <div style={{width:'50px'}}>
                <CircularProgressbarWithChildren
                  value={score}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: "#F37103",
                    trailColor: "transparent",
                  })}
                >
                  <div style={{ width: "75%" }}>
                    <CircularProgressbar
                      value={score}
                      text={`${Math.ceil(score)}%`}
                      styles={buildStyles({
                        pathColor: '#57A458',
                        trailColor: "transparent",
                        textSize: '28px',
                        textColor:'black'
                      })}
                    />
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DashboardRankYourScore;
