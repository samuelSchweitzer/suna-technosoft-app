import React from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ target }) => {
  const servicesMenus = () => {
    return (
      <>
        <NavLink to="/services/software-development">
          <li>Software development</li>
        </NavLink>
        <NavLink to="/services/software-training">
          <li>Software training</li>
        </NavLink>
        <NavLink to="/services/outsourcing">
          <li>Outsourcing</li>
        </NavLink>
      </>
    );
  };

  const trainingMenus = () => {
    return (
      <>
        <NavLink to="/training/frontend">
          <li>UI/UX</li>
        </NavLink>
        <NavLink to="/training/backend">
          <li>Java</li>
        </NavLink>
      </>
    );
  };

  const renderMenus = () => {
    if (target === "services") return servicesMenus();
    if (target === "training") return trainingMenus();
  };

  return <div className="sub-menu">{renderMenus()}</div>;
};

export default SubMenu;
