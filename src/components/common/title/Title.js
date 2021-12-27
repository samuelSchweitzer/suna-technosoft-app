import React from "react";
import "./styles/title.scss";

const Title = ({ title, subTitle, accent = true }) => {
  return (
    <div>
      <h1 className="main-title">{title}</h1>
      <h3 className="sub-title">{subTitle}</h3>
      {accent && <div className="accent"></div>}
    </div>
  );
};

export default Title;
