import React from "react";
import HomeCarousel from "./HomeCarousel";
import Pencil from "../../assets/pencil.png";
import { RiBookMarkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomeRow1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-row" style={{ marginBottom: "50px" }}>
      <div className="home-banner">
        <HomeCarousel banners={banners} />
      </div>
      <div className="content-banner"  style={{ backgroundImage: `url(${Pencil})` ,height:'510px'}}>
        <p className="content-banner-header-1"> Online learning</p>
        <h1>
          เรียนได้ทุกที่ ทำข้อสอบได้ทุกเวลา <br></br>
          วัดผลสอบได้ในทันที
        </h1>
        <p className="p-h2">
          บทเรียนใหม่ก่อนใคร เรียนซ้ำไม่จำกัดครั้ง <br></br>
          มีเอกสารประกอบการเรียนเพื่อทบทวนเนื้อหาหลังเรียน
        </p>
        <button className="content-btn-1" onClick={()=>navigate('/fundamental')}>
          <div style={{display:'flex'}}>
            <h2>ดูบทเรียน</h2> 
            <RiBookMarkFill size={18}/>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeRow1;

const banners = [
  "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/05/31/09/57/skyscraper-8030987_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_960_720.jpg",
  "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_960_720.jpg",
];
