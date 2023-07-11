import React, {  useEffect,useRef } from "react";
import KruChe from "../../assets/KruChe.svg";
import Pencil from "../../assets/pencil.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomeRow2: React.FC = () => {

  const elementRef = useRef<any>();

  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        elementRef.current.style.opacity = '1';
        elementRef.current.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollStyles = {
    opacity: '0',
    transform: 'translateY(50px)',
    transition: 'all 1s ease-out'
  };
  const navigate = useNavigate();

  return (
   
        <div className="home-row" >
          <div className="content-banner" style={{ backgroundImage: `url(${Pencil})` ,height:'510px'}}>
            <p className="content-banner-header-2"> Upskills Center</p>
            <h1> มุ่งเน้นพัฒนาความสามารถของนักเรียนให้มากกว่าที่เคยเป็น</h1>
            <p className="p-h2"> เรียนออนไลน์กับ Upkills มีพร้อมเนื้อหาดี มีข้อสอบ <br></br>พร้อมเฉลยละเอียด อธิบายจนกระจ่าง</p>
            <button className="content-btn-2" onClick={()=>navigate('/fundamental')} >
              <h2>เริ่มเรียนเลย!</h2>
            </button>
          </div>
          <div className="home-img"  ref={elementRef} style={scrollStyles}>
            <div className="gradient-overlay"  ></div>
            <img src = {KruChe} alt="upskillscenter-banner-home"/>
          </div>
        </div>
       
     
  );
};

export default HomeRow2;

