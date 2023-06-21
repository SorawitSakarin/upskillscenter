// Sidebar.tsx
import React, { useState } from "react";
import "./Sidebar.css";
import SidebarTopic from "./SideBarTopic";
import arrowUp from "../../assets/icons/24_24 px/Default-25.svg";




interface SideBarProps{
    setSelectedTopic:any;
    headerTitle: string;
    setTagCard:any;
    subjects:any;
}
const Sidebar: React.FC<SideBarProps> = ({setSelectedTopic, headerTitle,setTagCard, subjects}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="sidebar">
      <h2>{headerTitle}</h2>
      <hr className="separator"></hr>
      {subjects.map((subject:any, index:number) => (
        <div key={index} className="accordion">
          <div
            className={`accordion-header ${activeIndex===index ? 'accordion-header-active':''}`}
            onClick={() => toggleAccordion(index)}
          >
          <img src = {subject.icon} alt={`${subject.name} icon`} style={{ height:'20px'}}/>
           <h3> {subject.name}</h3>

           {activeIndex === index && <div><img src={arrowUp} alt='arrow up'/> </div>}  
          </div>
          <div>
          {activeIndex === index && (
            <SidebarTopic topics = {subject.topics} setSelectedTopic = {setSelectedTopic} setTagCard = {setTagCard} />
          )}
          </div>
        </div>
      ))}
    </div>
  );
};



export default Sidebar;
