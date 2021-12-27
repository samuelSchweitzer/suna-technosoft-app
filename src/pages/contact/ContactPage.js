import React from "react";
import {
  Header,
  Footer,
  Contact,
  CarouselSlideContent,
} from "../../components";
import { Map } from "../../components/common";
import "./styles/contactPage.scss";

const ContactPage = () => {
  const data = {
    id: "contact-banner-container",
    title: "Feel free to reach us",
    content: "",
    actionBtn: null,
  };

  return (
    <div className="contact-container">
      <Header />
      <div className="carousel-container">
        <CarouselSlideContent data={data} />
      </div>
      <div className="contact-section-container">
        <Contact />
      </div>
      <Map />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
