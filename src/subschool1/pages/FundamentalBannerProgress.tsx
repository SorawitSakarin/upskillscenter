import React from "react";
import "./Fundamental.css";
import uncheckLogo from "../../assets/icons/24_24 px/Default-16.svg";
import checkLogo from "../../assets/icons/40_40 px/Default-1.svg";

interface FundamentalBannerProgressProps {
  numberOfCourse: number;
  completedCourse: number;
}

const FundamentalBannerProgress: React.FC<FundamentalBannerProgressProps> = ({
  completedCourse,
  numberOfCourse,
}) => {
  const unCompletedCourse = numberOfCourse - completedCourse;
  return (
    <div className="fund-banner-prog">
      {Array.from({ length: completedCourse }).map(
        (key: any, index: number) => {
          return (
            <div key = {index} style={{ display: "flex", alignItems: "center" }}>
              {index > 0 && <div className="fund-banner-prog-space"></div>}
              <div className="fund-banner-prog-logo">
                <img src={checkLogo} alt="complete" width={24} />
              </div>
            </div>
          );
        }
      )}

      {Array.from({ length: unCompletedCourse }).map(
        (key: any, index: number) => {
          return (
            <div key = {index} style={{ display: "flex", alignItems: "center" }}>
              {(index > 0 || completedCourse !== 0) && (
                <div className="fund-banner-prog-space-white"></div>
              )}
              <div className="fund-banner-prog-logo">
                <img
                  src={uncheckLogo}
                  alt="uncomplete"
                  width={24}
                  style={{ opacity: 0.4 }}
                />
              </div>
            </div>
          );
        }
      )}

      {/* {unCompletedCourse === 0 && (
        <div>
          <img src={complete} alt="complete" width={24} />
        </div>
      )} */}
    </div>
  );
};

export default FundamentalBannerProgress;
