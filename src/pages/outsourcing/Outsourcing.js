import React from "react";
import {
  Header,
  Contact,
  Footer,
  CarouselSlideContent,
} from "../../components";
import "./styles/outsourcing.scss";

const Outsourcing = () => {
  const data = {
    id: "outsourcing-banner-container",
    title: "Outsourcing",
    content: "",
    actionBtn: null,
    targetId: "training",
  };

  return (
    <div className="outsourcing-container">
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

export default Outsourcing;
