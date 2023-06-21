import React from "react";
import "./Dashboard.css";



interface DashboardProgressProps {
  tagScores:any;
  pretestActive:boolean;
  
}
const DashboardProgressBar: React.FC<DashboardProgressProps> = ({tagScores,pretestActive}) => {
  

  return (
    <div className="db-prog-list-bar">
      {tagScores.map((tagScore:any, index:number)=>{

        const score = pretestActive ? tagScore.preTestScore:tagScore.postTestScore;
        

        return(
          <div key={index} className="db-prog-list-bar-item">
            <div style={{display:'flex', width:'200px'}}>
              <p className="p-h2"> - {tagScore.tag}</p>
            </div>
            <div style={{display:'flex', width:'100%' , backgroundColor:'white', height:'10px', borderRadius:'8px'}}>
              {score && <div className="slide-left" style={{display:'flex', width:`${score}%` , backgroundColor:'orange', height:'10px', borderRadius:'8px'}}></div> }  
              {!score && <div className="slide-left" style={{display:'flex', width:`100%` , backgroundColor:'#dedede', height:'10px', borderRadius:'8px'}}></div> }      
            </div>
            <div style={{display:'flex', width:'100px',justifyContent:'flex-end'}}>
             {score && <p className="p-h2">{score}%</p>}
             {!score && <p className="p-h2"> -------</p>}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default DashboardProgressBar;
