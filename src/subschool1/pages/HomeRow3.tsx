import React, {  useEffect,useRef } from "react";
import Document from "../../assets/document.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomeRow3: React.FC = () => {

  const navigate = useNavigate();
  const elementRef = useRef<any>();
  const elementRef2 = useRef<any>();
  
  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        elementRef.current.style.opacity = '1';
        elementRef.current.style.transform = 'translateX(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef2.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        elementRef2.current.style.opacity = '1';
        elementRef2.current.style.transform = 'translateX(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollStyles = {
    opacity: '0',
    transform: 'translateX(-50px)',
    transition: 'all 1s ease-in'
  };
  const scrollStyles2 = {
    opacity: '0',
    transform: 'translateX(50px)',
    transition: 'all 1s ease-in'
  };
  

  return (
   
        <div className="home-row" >
          <div className="home-img" ref={elementRef} style={scrollStyles}>
            <img src = {Document} alt="upskillscenter-banner-home"/>
          </div>
          <div className="content-banner-3"  ref={elementRef2} style={scrollStyles2}>
            <p className="p-h2" style={{marginBottom:'24px'}}> ทำไมต้องเรียนกับ Upskills?</p>
            <p className="content-banner-header-3"> เพราะเราใส่ใจ</p>
            <h1> ในบทเรียนและข้อสอบ</h1>
            <p className="p-h2"> 
            เนื้อหาไม่น่าเบื่อ <br></br> 
            ตั้งใจทำเพื่อความสนุกในการเรียน<br></br>
            โดยอาจารย์คุณภาพประสบการณ์สอนมากกว่า 10 ปี</p>
            <button className="content-btn-3"  onClick={()=>navigate('/tips')}>
              <h2>บทเรียนเทคนิคพิเศษ!</h2>
            </button>
          </div>
        </div>
       
     
  );
};

export default HomeRow3;

