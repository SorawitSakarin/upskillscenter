import React, { useState } from "react";
import "./Sidebar.css";

interface SideBarTopicProps {
  topics: Array<any>;
  setSelectedTopic : any;
  setTagCard:any;
}

const SidebarTopic: React.FC<SideBarTopicProps> = ({ topics,setSelectedTopic ,setTagCard}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number,topic:string) => {
    setActiveIndex(activeIndex === index ? -1 : index);
    setSelectedTopic(topic);
    setTagCard(true);

  };

  return (
    <div className="accordion-body">
      <ul>
        {topics.map((topic: string, index: number) => (
          <li
            key={index}
            className={`accordion-body-li ${
              activeIndex === index ? "accordion-li-active" : ""
            }`}
            onClick={() => toggleAccordion(index,topic)}
          >
            <h3>{topic}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarTopic;
