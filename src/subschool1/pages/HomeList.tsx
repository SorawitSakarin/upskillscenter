import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

interface HomeListProps {
  courses: any;
}

interface CourseTypeProps {
  title: string;
  tag: string;
  type: string;
  topic: string;
  completedCourses: number;
  numberOfCourses: number;
  cardBanner:any
}

const HomeList: React.FC<HomeListProps> = ({ courses }) => {
  const navigate = useNavigate();

  const cardClickHandler = (tag: string, type: string, topic: string) => {
    if (type.toLowerCase() === "fundamental") {
      navigate(`/fundamental?v=card&topic=${topic}&tag=${tag}`);
    } else if (type.toLowerCase() === "tips") {
      navigate(`/tips?v=card&topic=${topic}&tag=${tag}`);
    }
  };

  return (
    <div className="home-list">
      {courses.map((course: CourseTypeProps, index: number) => {
        return (
          <div
            key={index}
            className="home-card"
            onClick={() =>
              cardClickHandler(course.tag, course.type, course.topic)
            }
          >
             <div className="home-card-body">
            <div >
              <img src={course.cardBanner} alt="card-banner" className="home-card-banner" />
            </div>
           
            <div className="home-card-left">
              <div className="home-card-left-top">
                <p className="p-h3">{course.title}</p>
                <h2>{course.tag}</h2>
              </div>
              <div>
                <p className="p-h5">{course.type}</p>
              </div>
            </div>
            </div>
            <div className="home-card-right">
             {course.completedCourses !== course.numberOfCourses&& <CircularProgressbar
                value={(course.completedCourses / course.numberOfCourses) * 100}
                strokeWidth={14}
                styles={buildStyles({
                  pathColor: "#F37103",
                  trailColor: "#dedede",
                })}
              />}
              {course.completedCourses === course.numberOfCourses&&
              <FiCheckCircle size={20} color="#F37103"/>}
              <h2>
                {course.completedCourses}/{course.numberOfCourses}
              </h2>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default HomeList;
