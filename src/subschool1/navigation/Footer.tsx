import React, { useState } from "react";
import Logo from "/upskillscenter.png";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { AiOutlineCopy } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";



import "./Footer.css";

const Footer = () => {

    const[isCopied,setIsCopied] = useState(false);

    const handleCopyClick = async (text:string) => {
        try {
          await navigator.clipboard.writeText(text);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }; 

  return (
    <div className="footer-background">
      <div className="footer-left">
        <h1>บริษัท ศูนย์ส่งเสริมทักษะทางวิชาการญาณวิทย์ จำกัด</h1>
        <p className="p-h2">
          179/65 ถ.นาวงประชาพัฒนา ซ.นาวงประชาพัฒนา 15 แขวงสีกัน <br></br>
          เขตดอนเมือง กทม 10210, Bangkok, Thailand, 10210
        </p>
        <div style={{display:'flex' ,gap:'12px',alignItems:'center'}}>
          <button onClick={()=>handleCopyClick('0824833332')}
            className="footer-btn"><FiPhone size={24} color="black"/>
            082 483 3332
          </button>
          <button onClick={()=>handleCopyClick('Upskillcenter@hotmail.co.th')}
            className="footer-btn"><FiMail size={24} color="black"/>
            Upskillcenter@hotmail.co.th
          </button>
          {isCopied && <div className="copied-appear">
            <AiOutlineCopy size={24}/>
            <p>Copied!</p>
          </div>}
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-logo-ups" >
          <img src={Logo} alt="Upskillscenter-logo" width={60} className="ups-icon" />
        </div>
        <div style={{display:'flex' ,gap:'12px'}}>
          <div className="footer-logo-facebook"  onClick={()=>window.open('https://www.facebook.com/Upskillscenter','_blank')}>
            <FiFacebook size={30} color='white' className="facebook-icon"/>
          </div>
          <div className="footer-logo-youtube "   onClick={()=>window.open('https://www.youtube.com/@upskillscenter9198','_blank')}>
            <FiYoutube size={30} color='white' className="youtube-icon"/>
          </div>
          <div className="footer-logo-line" >
            <h2 className="line-icon">Line</h2>
          </div>
        </div>
        <p className="p-h2">
          Copyright © 2023 yanawit promotion academic <br></br>skills center
          co.,ltd. All rights reserved
        </p>
       
      </div>
    </div>
  );
};

export default Footer;
