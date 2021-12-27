import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const SliderArrow = ({ sliderRef }) => {
  return (
    <div className="carousel-arrows">
      <div className="prev-arrow" onClick={() => sliderRef.current.slickPrev()}>
        <FontAwesomeIcon icon={faChevronLeft} className="left-icon" />
      </div>

      <div className="next-arrow" onClick={() => sliderRef.current.slickNext()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default SliderArrow;
