import React, { useState } from "react";
import { ModalComponent } from "../common";

const CarouselSlideContent = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={data.id}>
      <div className="slider-content-wrapper">
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          {data.actionBtn && (
            <button
              className="carousel-action-btn"
              onClick={() => setShowModal(true)}
            >
              {data.actionBtn}
            </button>
          )}

          <ModalComponent
            show={showModal}
            onHide={() => setShowModal(false)}
            target={data.targetId}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlideContent;
