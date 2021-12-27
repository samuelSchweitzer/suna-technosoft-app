import React from "react";
import { Title } from "../common";
import "./styles/appsWeBuild.scss";

const AppsWeBuild = () => {
  return (
    <div className="appsWeBuild-wrapper">
      <Title title="" subTitle="What we build" />

      <div className="apps-container">
        <div className="app-wrapper">
          <h1 className="app-title">
            Web <br />
            Application
          </h1>
        </div>

        <div className="app-wrapper even">
          <h1 className="app-title">
            E-Commerce <br /> Application
          </h1>
        </div>

        <div className="app-wrapper">
          <h1 className="app-title">
            Custom <br /> Websites
          </h1>
        </div>

        <div className="app-wrapper even">
          <h1 className="app-title">
            Content <br /> Management <br /> System
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AppsWeBuild;
