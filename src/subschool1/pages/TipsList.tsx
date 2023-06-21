import React from "react";
import "./Fundamental.css";
import FundamentalListItems from "./FundamentalListItems";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import checkLogo from "../../assets/icons/40_40 px/Default-1.svg";
import banner from "../assets/Cover.svg";

interface FundamentalListProps {
  courses: any;
  tagCard: boolean;
  setTagCard: any;
  selectedTag:string;
  setSelectedTag:any;
  selectedTopic:any;
}

const TipsList: React.FC<FundamentalListProps> = ({
  courses,
  tagCard,
  setTagCard,
  setSelectedTag,
  selectedTag,
  selectedTopic
}) => {
  
  if (courses.length === 0) {
    return (
      <div className="fund-no-list">
        <h1>Coming soon....</h1>
      </div>
    );
  }

  const groupedCourses = courses.reduce(
    (accumulator: any, currentItem: any) => {
      const tag = currentItem.tag;
      const index = accumulator.findIndex(
        (group: any) => group[0]?.tag === tag
      );

      if (index === -1) {
        accumulator.push([currentItem]);
      } else {
        accumulator[index].push(currentItem);
      }
      return accumulator;
    },
    []
  );

  const cardClikHandler = (tag: any) => {
    setSelectedTag(tag);
    setTagCard(!tagCard);
  };

  return (
    <div className="fund-list">
      {!tagCard && selectedTag && (
        <FundamentalListItems
          groupedCourses={groupedCourses}
          selectedTag={selectedTag}
          tagCard={tagCard}
          setTagCard={setTagCard}
          selectedTopic = {selectedTopic}
          courseType = 'Tips & Technique'
        />
      )}
      {tagCard &&
        groupedCourses.map((groupedCourse: any, index: any) => {
          const completedCourse = groupedCourse.filter(
            (course: any) => course.status === true
          ).length;
          const numberOfCourse = groupedCourse.length;
          const totalTimeInSeconds = groupedCourse.reduce(
            (accumulator: any, currentItem: any) => {
              return accumulator + parseInt(currentItem.time);
            },
            0
          );
          const totalTimeInMinutes = Math.floor(totalTimeInSeconds / 60);

          return (
            <div
              className="fund-card "
              onClick={() => cardClikHandler(groupedCourse[0].tag)}
              key={index}
            >
              <div >
                <img src={banner} alt="topic banner" style={{borderTopLeftRadius:'16px',borderBottomLeftRadius:'16px'}} />
              </div>
              <div className="fund-card-left">
                <div>
                <p className="p-h5">Tips & Technique</p>
                <h2>{groupedCourse[0].tag}</h2>
                </div>
                <p className="p-h4">Total {totalTimeInMinutes} minutes</p>
              </div>
              <div className="fund-card-right">
                <div style={{ width: "24px" }}>
                  {completedCourse !== numberOfCourse && (
                    <CircularProgressbar
                      value={(completedCourse / numberOfCourse) * 100}
                      strokeWidth={14}
                      styles={buildStyles({
                        pathColor: "#F37103",
                        trailColor: "#dedede",
                      })}
                    />
                  )}
                  {completedCourse === numberOfCourse && (
                    <img src={checkLogo} alt="checkLogo" width={24} />
                  )}
                </div>
                <h2>
                  {completedCourse} / {numberOfCourse}
                </h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TipsList;
