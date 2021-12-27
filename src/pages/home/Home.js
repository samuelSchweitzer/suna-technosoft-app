import React from "react";
import {
  Header,
  CarouselComponent,
  About,
  Services,
  Training,
  Testimonials,
  Contact,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <div className="main-body">
        <About />
        <Services />
      </div>
      <div className="training-container">
        <Training />
      </div>
      <div className="testimonials-container">
        <Testimonials />
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
