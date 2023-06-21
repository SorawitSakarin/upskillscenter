import React  from "react";
import "./Dashboard.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface StudentScore {
  fullName: string;
  score: number;
  timeUsage:any;
}

interface DashboardRankProps {
  studentScores: Array<StudentScore>;
}
const DashboardRank: React.FC<DashboardRankProps> = ({ studentScores }) => {
  studentScores = studentScores?.sort((a:any, b:any) => {
    if (a.score >= b.score) {
      return -1;
    }
    return 1;
  }).slice(0,10);
  return (
    <div className="db-rank-card">
      {studentScores.map((student, index: number) => {
        const timeUsage = Math.floor(student.timeUsage / 60);
        return (
          <div
            key={index}
            className="db-rank-card-row"
            style={
              index === 9
                ? {}
                : { borderBottom: "1.4px solid #DFE0DF" }
            }
          >
            <div style={{ paddingLeft: "24px", display:'flex', gap:'16px' }}>
              <h3>{index + 1}</h3>
              <h3>{student.fullName}</h3>
            </div>
            <div className="db-rank-card-row-right">
              <h3>{timeUsage} min.</h3>
              <div style={{width:'50px'}}>
                <CircularProgressbarWithChildren
                  value={student.score}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: "#F37103",
                    trailColor: "transparent",
                  })}
                >
                  <div style={{ width: "75%" }}>
                    <CircularProgressbar
                      value={student.score}
                      text={`${Math.ceil(student.score)}%`}
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
        );
      })}
    </div>
  );
};

export default DashboardRank;
