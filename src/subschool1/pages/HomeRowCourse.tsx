import React, { useCallback, useState} from "react";
import Ruler from "../../assets/ruler1.png";
import Ruler1 from "../../assets/ruler2.png";
import banner from '../assets/fundCardBanner.svg'
import CardSlideUp from "../../components/card/CardSlideUp";
import "./HomeRowCourse.css";

const HomeRowCourse: React.FC = () => {
  const [mouseEnter,setMouseEnter] = useState(false);
  const adjustLength = useCallback((arr:any, n: number) =>{
    if(arr.length > n){
      return arr.slice(0,n);
    } else{
      let result:any = [];
      while(result.length<n){
        result = result.concat(arr);
      }
      return result.slice(0,n)
    }
  },[])
  let suggestedCourses = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5','Card 6','Card 7'];
  let completedCourses = ['Card 1', 'Card 2', 'Card 3'];
  let unCompletedCourses = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];
  suggestedCourses = adjustLength(suggestedCourses,15); 
  completedCourses = adjustLength(completedCourses,15); 
  unCompletedCourses = adjustLength(unCompletedCourses,15); 

  return (
    <div className="home-row-course">
      <div className="home-row-course-header">
        <p style={{ fontSize: "60px", fontWeight: "bold" }}>
          Course มากมายมีพร้อมที่ Upskills
        </p>
        <p className="p-h2">
          พร้อม
          <span className="font-highlight">ระบบแนะนำ</span>คอร์ส<br></br>
          ให้เหมาะกับนักเรียนแต่ละคน
          <span className="font-highlight">เพื่อเพิ่มทักษะ</span>ที่ขาดไป<br></br>
          โดยประเมินจากคะแนนสอบที่นักเรียนได้ทำการสอบไป
        </p>
        <div className="ruler-right">
          <img src={Ruler} alt="ruler-banner" />
        </div>
        <div className="ruler-left">
          <img src={Ruler1} alt="ruler-banner" />
        </div>
      </div>

      <div className="home-row-course-suggest" style={{backgroundColor:'#ADD994', color:'black'}}>
        <h1>คอร์สเรียนแนะนำ</h1>
      </div>

      <div className="carousel-outer">
        <div className={`carousel-inner-to-left ${mouseEnter? 'carousel-inner-enter':""}`} onMouseEnter={()=>setMouseEnter(true)} onMouseLeave={()=>setMouseEnter(false)} >
          {suggestedCourses.map((card:any, index:number) => (
            <div style={{marginRight:'24px'}} key={index}>
              <CardSlideUp id = {1}  tag='listening'image = {banner} title={card} timeUsage = {1200} courseType='fundamental' subject = 'English'/>
            </div>
          ))}
           
          
        </div>
      </div>
      <hr></hr>
      <div className="carousel-outer" style={{marginBottom:'50px'}}>
        <div className={`carousel-inner-to-right ${mouseEnter? 'carousel-inner-enter':""}`} onMouseEnter={()=>setMouseEnter(true)} onMouseLeave={()=>setMouseEnter(false)} >
        {suggestedCourses.map((card:any, index:number) => (
            <div style={{marginRight:'24px'}} key={index}>
              <CardSlideUp id = {1}  tag='listening'image = {banner} title={card} timeUsage = {1200} courseType='fundamental' subject = 'English'/>
            </div>
          ))}
           
          
          
        </div>
      </div>

      <div className="home-row-course-suggest" style={{backgroundColor:'#FFAE69', color:'black',marginTop:'50px'}}>
        <h1>คอร์สที่เรียนจบแล้ว</h1>
      </div>

      <div className="home-row-course-uncomplete" style={{marginBottom:'50px'}}>
        {completedCourses.map((card:any, index:number) => (
          <div style={{marginRight:'24px'}} key={index}>
            <CardSlideUp id =  {1} tag='listening' image = {banner} title={card} timeUsage = {1200} courseType='fundamental' subject = 'English'/>
          </div>
          ))}
          
      </div>

      <div className="home-row-course-suggest" style={{backgroundColor:'black', color:'white',marginTop:'50px'}}>
        <h1>คอร์สที่ยังไม่เรียน</h1>
      </div>
      
      <div className="home-row-course-uncomplete" style={{marginBottom:'50px'}}>
        {unCompletedCourses.map((card:any, index:number) => (
          <div style={{marginRight:'24px'}} key={index}>
            <CardSlideUp id =  {1} tag='listening' image = {banner} title={card} timeUsage = {1200} courseType='fundamental' subject = 'English'/>
          </div>
          ))}
          
      </div>
      
      
    </div>
  );
};

export default HomeRowCourse;
