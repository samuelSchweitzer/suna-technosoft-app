import React from "react";
import Slider from "react-slick";
import "./styles/CarouselComp.css";

const CarouselComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="slide-1">
        <div className="slider-content-wrapper">
          <h1>Real-World Training for IT Professionals</h1>
        </div>
      </div>
      <div className="slide-2">
        <div className="slider-content-wrapper">
          <h1>Real-World Training for IT Professionals</h1>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselComp;
