import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import LangDropdown from "./LangDropdown";

export const NavBar = () => {
  return (
    <>
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
              Contact Us
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/About" className="navLink">
              About
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/Assessment" className="navLink">
              Assessment
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/Donation" className="navLink">
              Donate
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/Blogs" className="navLink">
              Blog
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
        <>
          <LangDropdown />
        </>
      </Navbar>
    </>
  );
};
