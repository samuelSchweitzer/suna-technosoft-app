import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/Header.scss";

const Header2 = () => {
  return (
    <div className="navbar2-wrapper">
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

export default Header2;
