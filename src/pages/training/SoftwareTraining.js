import React from "react";
import {
  Header,
  Contact,
  Footer,
  CarouselSlideContent,
} from "../../components";
import "./styles/softwareTraining.scss";

const SoftwareTraining = () => {
  const data = {
    id: "training-banner-container",
    title: "Software Training",
    content: "",
    actionBtn: null,
    targetId: "training",
  };

  return (
    <div className="software-training-container">
      <Header />
      <div className="carousel-container">
        <CarouselSlideContent data={data} />
      </div>
      <div className="contact-section-container">
        <Contact />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default SoftwareTraining;
