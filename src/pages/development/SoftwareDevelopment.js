import React from "react";
import {
  Header,
  Contact,
  Footer,
  CarouselSlideContent,
  AppsWeBuild,
  Technologies,
  DevProcess,
} from "../../components";
import "./styles/softwareDevelopment.scss";

const SoftwareDevelopment = () => {
  const data = {
    id: "development-banner-container",
    title: "Web application development",
    content:
      "Elevate your business through rich user experience, app development with cutting edge technology, mobile responsive & cross platform.",
    actionBtn: "Get in touch",
    targetId: "development",
  };

  return (
    <div className="development-container">
      <Header />
      <div className="carousel-container">
        <CarouselSlideContent data={data} />
      </div>
      <div className="appsWeBuild-container">
        <AppsWeBuild />
      </div>
      <div className="devProcess-container">
        <DevProcess />
      </div>
      <div className="technologies-container">
        <Technologies />
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

export default SoftwareDevelopment;
