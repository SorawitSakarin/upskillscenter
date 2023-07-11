import React from "react";
import HomeRow2 from "./HomeRow2";
import HomeRow1 from "./HomeRow1";
import HomeRowCourse from "./HomeRowCourse";
import HomeRow3 from "./HomeRow3";
import HomeRow4 from "./HomeRow4";
import Footer from "../navigation/Footer";

const Home: React.FC = () => {


  return (
    <div>
      <div className="home-body">
        <HomeRow1 />
        <HomeRowCourse />
        <HomeRow2 />
        <HomeRow3 />
        <HomeRow4 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

