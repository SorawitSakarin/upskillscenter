import React  from "react";
import YouTube from "react-youtube";
import DownloadButton from "../../components/buttons/DownloadButton";
import backIcon from "../../assets/icons/24_24 px/Default-10.svg";
import { useNavigate } from "react-router-dom";
import backgroundLogin from "../assets/LoginBackground.svg";

import "./Learn.css";

const Learn: React.FC = () => {
  const navigate = useNavigate();
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${backgroundLogin})`,
  };
  const videoId = course.videoUrl.split("?v=")[1];
  const opts = {
    height: "390",
    width: "940",
    playerVars: {
      autoplay: 1,
    },
  };

  const backClickHandler = (tag: string, type: string, pretestId: any) => {
    if (type.toLowerCase() === "fundamental") {
      navigate(`/fundamental?v=card&topic=${pretestId}&tag=${tag}`);
    } else if (type.toLowerCase() === "tips") {
      navigate(`/tips?v=card&topic=${pretestId}&tag=${tag}`);
    }
  };

  return (
    <div className="learn-background">
      <div className="learn-body">
        <div className="learn-header" style={bannerStyle}>
          <div
            className="back-button-circle"
            onClick={() =>
              backClickHandler(course.tag, course.courseType, course.preTestId)
            }
          >
            <img src={backIcon} alt="back button" width={24} />
          </div>
          <h1>
            {course.topic} - {course.tag}
          </h1>
        </div>

        <div className="youtube-video">
          <YouTube videoId={videoId} opts={opts} />
        </div>

        <div className="download-pdf-btn">
          <DownloadButton
            title={"Download Studies Material PDF"}
            topic={course.topic}
            backgroundColor="#f37103"
            color="white"
            file="hi"
            studentId='1'
            studentList="1,2"
            courseId= '1'
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;

const course = {
  preTestId: "TOEIC",
  courseType: "fundamental",
  topic: "TOEIC",
  title: "Toeic2022",
  tag: "Listening",
  description: `The TOEIC 2018 exam is designed to evaluate the English language
  skills of candidates at the intermediate to advanced levels. The
  test consists of two sections: Listening and Reading. The
  Listening section evaluates the candidate's ability to understand
  spoken English in a business context, while the Reading section
  evaluates their ability to understand written English in the same
  context.`,
  videoUrl: "https://www.youtube.com/watch?v=gVw1yQKIgfg",
};
