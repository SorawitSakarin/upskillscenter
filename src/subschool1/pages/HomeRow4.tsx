import React, {  useEffect,useRef } from "react";
import Dashboard from "../../assets/dashboard.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomeRow4: React.FC = () => {

  const navigate = useNavigate();
  const elementRef = useRef<any>();

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

  const scrollStyles = {
    opacity: '0',
    transform: 'translateX(50px)',
    transition: 'all 1s ease-out'
  };
  

  return (
   
        <div className="home-row" >
          <div className="content-banner-4" >
            <p className="p-h2" > 
            เรียนเอง ประเมินผลได้ 👍🏻
            </p>
            <h1> ระบบ Dashboard <br></br>แบบ Real time</h1>
            <p className="p-h2"> 
            สามารถวัดผลได้ทันทีหลังสอบเสร็จ <br></br>
            เทียบคะแนนกับเพื่อนในห้องหรือต่างได้ทันที <br></br>
            พร้อมบอกคะแนน Statistic แบบละเอียด
            </p>
            <button className="content-btn-4"  onClick={()=>navigate('/dashboard')}>
              <h2>ดู Dashboard ตอนนี้ !</h2>
            </button>
          </div>
          <div className="home-img"  ref={elementRef} style={scrollStyles}>
            <img src = {Dashboard} alt="upskillscenter-banner-home"/>
          </div>
        </div>
       
     
  );
};

export default HomeRow4;

