import React from "react";
import Header from "../components/header/Header";
import CarouselComp from "../components/carousel/CarouselComp";
import CardComp from "../components/card/CardComp";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselComp />
      <div className="main-body">
        <CardComp />
        <About />
      </div>
      <div className="services-container">
        <Services />
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

export default Home;
