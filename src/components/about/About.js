import React from "react";
import Title from "../common/title/Title";
import aboutPic from "../../assets/images/about-us-img.jpg";
import "./styles/About.scss";

const About = () => {
  return (
    <div className="about-wrapper">
      <Title title="// About" subTitle="Who we really are" />

      <div className="content-wrapper">
        <div className="left-content">
          <img src={aboutPic} alt="about-us-pic" />
        </div>

        <div className="right-content">
          <p>
            Suna Technosoft ullam consectetur quis sem sit amet fermentum. Nunc
            pellentesque pretium cursus. Cras in nibh iaculis, consectetur
            adipiscing elit imperdiet ipsum ut, congue nulla.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vehicula dignissim arcu. Nullam consectetur quis sem sit amet
            fermentum. Nunc pellentesque pretium cursus. Cras in nibh iaculis,
            imperdiet ipsum ut, congue nulla. Donec cursus egestas ante, sed
            faucibus felis congue quis.
          </p>

          <p>
            Proin ligula odio, tempus ut nulla eu, tincidunt fringilla justo.
            Etiam eu eros sagittis, gravida ex et, cursus ipsum. Nam tempus arcu
            quis ipsum venenatis aliquet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
