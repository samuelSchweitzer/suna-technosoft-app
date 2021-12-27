import React, { useRef } from "react";
import Slider from "react-slick";
import { SliderArrow } from "../common";
import CarouselSlideContent from "./CarouselSlideContent";
import "./styles/carousel.scss";

const CarouselComponent = () => {
  const sliderRef = useRef(null);

  const contents = [
    {
      id: "slide-1",
      title: "Web application development",
      content:
        "Elevate your business through rich user experience, app development with cutting edge technology, mobile responsive & cross platform, and consultancy services.",
      actionBtn: "let's talk",
      targetId: "development",
    },

    {
      id: "slide-2",
      title: "Software Training",
      content:
        "We help build your career in software development by providing real-time training, assignments, and everything that you need to land your dream job.",
      actionBtn: "Get started",
      targetId: "training",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <SliderArrow sliderRef={sliderRef} />

      <Slider {...settings} ref={sliderRef}>
        {contents.map((content) => (
          <CarouselSlideContent data={content} key={content.id} />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
