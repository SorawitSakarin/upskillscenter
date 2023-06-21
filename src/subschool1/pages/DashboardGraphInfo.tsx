import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./Dashboard.css";

interface DataItem {
  score: any;
  studentId: any;
}

interface DashboardGraphInfoProps {
  data: DataItem[];
  totalStudent:number;
}

const DashboardGraphInfo: React.FC<DashboardGraphInfoProps> = ({ data,totalStudent }) => {
  const scores = data.map((student) => parseFloat(student.score));
  const studentId = 1;
  const currentScore = parseFloat(
    data.find((score) => score.studentId == studentId)?.score
  );


  const percentile: any = (
    (data.filter((studentScore) => studentScore.score <= currentScore).length /
      scores.length) *
    100
  ).toFixed(0);

  const totalSubmit:any = ((scores.length)/totalStudent*100).toFixed(0);

  //Max
  const max: any = Math.max(...scores).toFixed(1);

  //Min
  const min: any = Math.min(...scores).toFixed(1);

  // Mean
  const mean: any = (scores.reduce((a, b) => a + b) / scores.length).toFixed(1);

  // Median
  const sortedScores = [...scores].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedScores.length / 2);
  const median =
    sortedScores.length % 2 === 0
      ? (sortedScores[middleIndex - 1] + sortedScores[middleIndex]) / 2
      : sortedScores[middleIndex];

  // Mode
  const frequencies:any = {};
  for(let score of scores){
    if(frequencies[Math.floor(score)]){
      frequencies[Math.floor(score)] += 1;
    } else {
      frequencies[Math.floor(score)] = 1;
    }
  }
  const sortedFrequencies = Object.entries(frequencies).sort((a:any,b:any) => b[1] - a[1]);

// get the scores with the top 3 frequencies
const top3 = sortedFrequencies.slice(0, 3).map(freq => Number(freq[0]));

  // Range
  const range = (max - min).toFixed(1);
  // Standard Deviation
  const squaredDifferences = scores.map((score) => Math.pow(score - mean, 2));
  const variance = squaredDifferences.reduce((a, b) => a + b) / scores.length;
  const stdDeviation = Math.sqrt(variance).toFixed(1);

  return (
    <div className="dashboard-info-grid">
      <div className="dashboard-info-grid-content no-test shadow">
        <h2>Number of test</h2>

        <div className="no-test-row">
          <div className="no-test-row-left">
            <CircularProgressbar
              value={totalSubmit}
              strokeWidth={16}
              styles={buildStyles({
                pathColor: "#F37103",
                trailColor: "#57A458",
                strokeLinecap: "butt",
              })}
            />
          </div>
          <div className="no-test-row-right">
            <div
              className="dashboard-dot"
              style={{ backgroundColor: "#F37103", borderRadius: "50%" }}
            ></div>
            <h3>{totalSubmit}%</h3>
            <p className="p-h5">Submitted</p>
            <br></br>
            <div
              className="dashboard-dot"
              style={{ backgroundColor: "#57A458", borderRadius: "50%" }}
            ></div>
            <h3>{100-totalSubmit}%</h3>
            <p className="p-h5">No Submitted</p>
          </div>
        </div>
      </div>
      <div className="dashboard-info-grid-content avg-score shadow">
        <h2>Average score</h2>

        <div className="avg-score-row">
          <div className="avg-score-row-left">
            <div
              className="avg-score-bar slide-up"
              style={{
                backgroundColor: "#F37103",
                height: `${currentScore.toFixed(1)}%`,
              }}
            ></div>
            <div
              className="avg-score-bar slide-up"
              style={{ backgroundColor: "#57A458", height: `${mean}%` }}
            ></div>
            <div
              className="avg-score-bar slide-up"
              style={{
                backgroundColor: "#4285F4",
                height: `${median.toFixed(1)}%`,
              }}
            ></div>
          </div>
          <div className="avg-score-row-right">
            <div
              className="dashboard-dot"
              style={{ backgroundColor: "#F37103" }}
            ></div>
            <h3>{currentScore.toFixed(1)}%</h3>
            <p className="p-h5">Your score</p>
            <div
              className="dashboard-dot"
              style={{ backgroundColor: "#57A458" }}
            ></div>
            <h3>{mean}%</h3>
            <p className="p-h5">Mean</p>
            <div
              className="dashboard-dot"
              style={{ backgroundColor: "#4285F4" }}
            ></div>
            <h3>{median.toFixed(1)}%</h3>
            <p className="p-h5">Median</p>
          </div>
        </div>
      </div>

      <div className="dashboard-info-grid-content sd-stat shadow">
        <h2>SD Stat</h2>
        <div className="sd-stat-row">
          <div className="sd-stat-box shadow" >
            <h2>{stdDeviation}</h2>
          </div>
          <p className="p-h5">
          Show spread of data points around the mean
          </p>
        </div>
      </div>

      <div className="dashboard-info-grid-content mode-score shadow">
        <h2>Top 3 Most Scores</h2>
        <p className="p-h5">Representing the most common or recurring 3 values</p>

        <div className="mode-score-row">
          {top3.map((mode:any, index:number)=> {
            return(
              <div className="mode-score-box shadow" key={index}>
                <h2>{mode}</h2>
               </div> 
            )
          })}
        </div>
      </div>

      <div className="dashboard-info-grid-content range-score shadow">
        <h2>Range score</h2>
        <div className="range-score-grid">
          <div
            className="range-score-content"
            style={{ backgroundColor: "#57A458", color: "white" }}
          >
            <h3>{min}%</h3>
          </div>
          <div
            className="range-score-content slide-left"
            style={{ backgroundColor: "#F37103", color: "white" }}
          >
            <h3>{range}%</h3>
          </div>
          <div
            className="range-score-content"
            style={{ backgroundColor: "#4285F4", color: "white" }}
          >
            <h3>{max}%</h3>
          </div>
          <div className="range-score-content">
            <h4>Min</h4>
          </div>
          <div className="range-score-content">
            <h4>Range</h4>
          </div>
          <div className="range-score-content">
            <h4>Max</h4>
          </div>
        </div>
      </div>
      <div className="dashboard-info-grid-content p-score shadow">
        <h2>Your percentile with a score of</h2>
        <div className="p-score-box">
          <h2>{currentScore}%</h2>
        </div>
        <div className="p-score-bar">
          <div
            className="p-score-progress slide-left"
            style={{ width: `${percentile}%` }}
          >
            {percentile > 35 && (
              <p className="p-h3">Beat {percentile}% of students </p>
            )}
          </div>
        </div>
        {percentile <= 35 && (
          <p className="p-h3 ml-1">Beat {percentile}% of students </p>
        )}
      </div>

     
    </div>
  );
};
export default DashboardGraphInfo;
