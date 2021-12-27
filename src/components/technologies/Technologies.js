import React from "react";
import { Title } from "../common";
import { javascript, html, css, react, java } from "../../assets/logos";
import "./styles/technologies.scss";

const Technologies = () => {
  const languages = [html, css, javascript, react, java];

  return (
    <div className="technologies-wrapper">
      <Title title="" subTitle="Technologies we use" />

      <div className="languages-container">
        {languages.map((language, index) => (
          <div className="languages-wrapper" key={index}>
            <img src={language} alt={language} className="language-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
