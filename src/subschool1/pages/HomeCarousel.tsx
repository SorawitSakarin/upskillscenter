import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

interface HomeCarouselProps {
  banners: any;
}

const HomeCarousel: React.FC<HomeCarouselProps> = ({ banners }) => {

  return (
    <div >
      <Carousel>
        {banners.map((banner: any, index: number) => {
          return (
            <Carousel.Item key={index}>
              <div className="carousel-card">
                <img className="d-block w-100" src={banner} alt="Banner" loading="lazy"/>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
