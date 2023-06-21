import React, { useState } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";
import "./Dashboard.css";
import { Modal } from "react-bootstrap";
import DashboardGraphInfo from "./DashboardGraphInfo";

interface DataItem {
  score: number;
  studentId: any;
}

interface DashboardGraphProps {
  studentScores: DataItem[];
  totalStudent:number;
}

const DashboardGraph: React.FC<DashboardGraphProps> = ({ studentScores,totalStudent }) => {


  function countStudentsByScoreRange(students:any) {
    const scoreRanges = Array.from({ length: 100 }, (_, i) => ({
      score: (i + 1),
      studentCount: 0,
    }));
  
    for (const student of students) {
      const index = Math.floor(parseFloat(student.score));
      scoreRanges[index].studentCount++;
    }
  
    return scoreRanges;
  }

  const data = countStudentsByScoreRange(studentScores);
  console.log(data);

  const [showModal,setShowModal] = useState(false);
  const onHide = () =>{
    setShowModal(false);
  }



  return (
    <div className="db-graph shadow">
      <div className="db-graph-header">
        <h1>Statistics</h1>
        <div className="info-btn" onClick={()=>setShowModal(true)}>
          <h5>?</h5>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent:'center', textAlign:'center' }}>
        <p className="p-h3">Provides a concise overview of the scores achieved by participants, offering a comprehensive snapshot of their performance.</p>
      </div>
      <div className="shadow" style={{ backgroundColor: "white", borderRadius: "16px" ,width:'100%'}}>
        <AreaChart
          width={450}
          height={250}
          data={data}
          margin={{ top: 20, right:0, left: -10, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorstudentCount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF891C" stopOpacity={1} />
              <stop offset="95%" stopColor="#FF891C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="score" tickSize={1}>
            <Label value="Score" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Count" angle={270} position="left" offset={-30} />
          </YAxis>
          <CartesianGrid strokeDasharray="5" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="studentCount"
            stroke="#FF891C"
            fillOpacity={1}
            fill="url(#colorstudentCount)"
          />
          
        </AreaChart>
      </div>
     <DashboardGraphInfo data={studentScores} totalStudent = {totalStudent} />


        <Modal show={showModal} onHide={onHide} centered  dialogClassName="modal-body">
          <Modal.Body>
            <div style={{padding:'24px',flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'flex-start', gap:'12px'}}>
              <h1>Definition</h1>
              <h3> English version:</h3>
              <p className="p-h3">Total: The lenght of dataset<br/>Max (Maximum): The highest value in a dataset.<br/>Min (Minimum): The lowest value in a dataset.<br/>Range: The difference between the highest and lowest values in a dataset.
                <br/>Mean: The sum of all the values in a dataset divided by the number of values.<br/>Median: The middle value in a dataset when the values are sorted in ascending or descending order. If there is an even number of values, the median is the average of the two middle values.<br/>
                P25,75 (Percentiles 25 and 75): The value below which 25% or 75% of the data falls. It represents the 25th and 75th percentile of the dataset.<br/>
                SD (Standard Deviation): A measure of the dispersion or spread of a dataset. A higher standard deviation indicates greater variability in the data.<br/>
                Mode: The value that occurs most frequently in a dataset.
              </p>
              <hr></hr> 
              <h3>เวอร์ชั่นภาษาไทย</h3>
              <p className="p-h3">Total: จำนวนข้อมูลในชุดข้อมูล<br/>Max (Maximum): ค่าที่มากที่สุดในชุดข้อมูล<br/>Min (Minimum): ค่าที่น้อยที่สุดในชุดข้อมูล<br/>Range: ผลต่างของค่าที่มากที่สุดและน้อยที่สุดของชุดข้อมูล
                <br/>Mean (ค่าเฉลี่ย): ผมรวมของทุกค่าในชุดข้อมูลหารด้วยจำนวนในชุดข้อมูล<br/>Median (มัธยฐาน): ค่าที่อยู่จุดกึ่งกลางของข้อมูลเมื่อนำค่าของข้อมูลมาเรียงตามลำดับ<br/>
                P25,75 (ค่าเปอร์เซ็นต์ไทล์ที่ 25, 75): ค่าของข้อมูลที่อยู่เปอร์เซ็นที่ 25 หรือ 75 ของชุดข้อมูลเมื่อถูกนำมาเรียงตามลำดับ<br/>
                SD (ค่าเบี่ยงเบนมาตรฐาน): ค่าที่ใช้วัดความกระจายหรือการกระจายตัวของชุดข้อมูล<br/>
                Mode: ค่าที่ถูกพบบ่อยที่สุดในชุดข้อมูล
              </p>
              <hr></hr>
              <div style={{display:'flex',justifyContent:'center',gap:'24px'}}>
                <button style={{padding:'10px',borderRadius:'8px', border:'1.4px solid black'}} onClick={onHide}>Thank you, I got it!</button>
                {/* <button style={{padding:'10px',backgroundColor:"#F37103",borderRadius:'8px'}} onClick={onHide}>Sign Out</button> */}
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </div>
  );
};
export default DashboardGraph;

