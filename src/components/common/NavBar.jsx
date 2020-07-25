import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar className="navBar">
        <Navbar.Brand href="/">
          <img
            className="brandSpaces"
            src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
            alt="Suljak Logo"
          />
        </Navbar.Brand>

        <Nav className="collapse navbar-collapse justify-content-end">
          <Nav.Item className="navSpaces">
            <Nav.Link className="navLink" href="/Contact">
              CONTACT US
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navSpaces">
            <Nav.Link className="navLink" href="/About">
              ABOUT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navSpaces">
            <Nav.Link className="navLink" href="/Assessment">
              ASSESSMENT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navSpaces">
            <Nav.Link className="navLink" href="/Donation">
              DONATE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navSpaces">
            <Nav.Link className="navLink" href="/Blogs">
              BLOG
            </Nav.Link>
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
