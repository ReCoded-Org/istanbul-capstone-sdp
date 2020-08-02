import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar className="navBar">
      <Link to="/">
        <Navbar.Brand>
          <img
            className="brandSpaces"
            src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
            alt="Suljak Logo"
          />
        </Navbar.Brand>
        </Link>

        <Nav className="collapse navbar-collapse justify-content-end">
          <Nav.Item className="navSpaces">
          <Link to="/Contact" className="navLink">
              CONTACT US
          </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
          <Link to="/About" className="navLink">
              ABOUT
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
          <Link to="/Assessment" className="navLink">
              ASSESSMENT
          </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
          <Link to="/Donation" className="navLink">
              DONATE
          </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
          <Link to="/Blogs" className="navLink">
              BLOG
          </Link>
          </Nav.Item>
        </Nav>

        <div className="navSpaces">
          <img
            className="loginSpaces"
            src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
            alt="Login Icon"
          />
        </div>
        <div className="rightMargin">
          <img
            className="langSpaces"
            src="https://i.ibb.co/jG2mkVJ/Language-icon.png"
            alt="Change Language"
          />
        </div>
      </Navbar>
    </div>
  );
};
