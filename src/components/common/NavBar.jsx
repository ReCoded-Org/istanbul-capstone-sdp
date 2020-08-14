import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import LangDropdown from "./LangDropdown";

export const NavBar = () => {
  return (
    <div className="three">
      <Navbar className="navBar">
        <Link to="/">
          <Navbar.Brand>
            <img
              className="suljakLogo"
              src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
              alt="Suljak Logo"
            />
          </Navbar.Brand>

          <Navbar.Brand>
            <img
              className="suljakBigLogo"
              src="https://i.ibb.co/bgTdQ3G/logo-responsive.png"
              alt="Suljak Logo"
            />
          </Navbar.Brand>
        </Link>

        <Nav className="collapse navbar-collapse justify-content-end navbarItems">
          <Nav.Item className="navMargins">
            <Link to="/contact" className="navLink">
              Contact Us
            </Link>
          </Nav.Item>

          <Nav.Item className="navMargins">
            <Link to="/about" className="navLink">
              About
            </Link>
          </Nav.Item>

          <Nav.Item className="navMargins">
            <Link to="/psycho-assess" className="navLink">
              Assessment
            </Link>
          </Nav.Item>

          <Nav.Item className="navMargins">
            <Link to="/donation" className="navLink">
              Donate
            </Link>
          </Nav.Item>

          <Nav.Item className="navMargins">
            <Link to="/blogs" className="navLink">
              Blog
            </Link>
          </Nav.Item>
        </Nav>

        <div className="">
          <img
            className="loginIcon"
            src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
            alt="Login Icon"
          />
        </div>
        <div>
          <LangDropdown />
        </div>
      </Navbar>
    </div>
  );
};
