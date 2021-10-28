import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
