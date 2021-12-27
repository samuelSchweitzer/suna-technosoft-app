import React from "react";
import { Title } from "../common";
import aboutPic from "../../assets/images/about-us-img.jpg";
import "./styles/about.scss";

const About = () => {
  return (
    <div className="about-wrapper">
      <Title title="// About" subTitle="Who we are" />

      <div className="content-wrapper">
        <div className="left-content">
          <img src={aboutPic} alt="about-us-pic" />
        </div>

        <div className="right-content">
          <p>
            Suna Technosoft is a software development and training company based
            in Bangalore, that delivers software solutions and services to
            businesses and individuals. We help businesses elevate their value
            through software design, development, and consultancy services.
            Having been active in the business for years, and our experience
            with clients has enhanced us to implement and deliver sophisticated,
            scalable, and quality products.
          </p>

          <p>
            Besides software development, one of the core services of Suna
            Technosoft is providing real-time software training for those
            aspiring to build a career in software development by our highly
            skilled working IT professionals and also providing placement
            assistance upon completion of the program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
