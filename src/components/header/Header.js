import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
import "./styles/header.css";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showTrainingMenu, setShowTrainingMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  const changeBackgroundColor = () => {
    if (Math.round(window.scrollY) >= 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  return (
    <div className={navbarBg ? "navbar-wrapper active" : "navbar-wrapper"}>
      <Navbar expand="md" className="mx-auto navbar">
        <NavLink to="/" className="brand-name">
          Suna Technosoft
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            // className="mx-auto my-2 my-lg-0"
            className="menu-list"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <li
              className="main-menu"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <span className="main-menu-title">Services</span>
              {showServicesMenu && <SubMenu target="services" />}
            </li>

            <li
              className="main-menu"
              onMouseEnter={() => setShowTrainingMenu(true)}
              onMouseLeave={() => setShowTrainingMenu(false)}
            >
              <span className="main-menu-title">Training</span>
              {showTrainingMenu && <SubMenu target="training" />}
            </li>
            {/* <li>
              <NavLink to="/">Blog</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/">Company</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
