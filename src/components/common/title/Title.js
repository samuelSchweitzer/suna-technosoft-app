import React from "react";
import "./styles/Title.scss";

const Title = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="main-title">{title}</h1>
      <h3 className="sub-title">{subTitle}</h3>
      <div className="accent"></div>
    </div>
  );
};

export default Title;
