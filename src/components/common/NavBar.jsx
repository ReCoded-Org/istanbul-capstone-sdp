import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">
          <img
            className="brand-spaces"
            src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
            alt="Suljak Logo"
          />
        </Navbar.Brand>

        <Nav className="collapse navbar-collapse justify-content-end spaces">
          <Nav.Item className="nav-spaces">
            <Nav.Link href="/Contact">CONTACT US</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-spaces">
            <Nav.Link href="/About">ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-spaces">
            <Nav.Link href="/Assessment">ASSESSMENT</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-spaces">
            <Nav.Link href="/Donation">DONATE</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-spaces">
            <Nav.Link href="/Blogs">BLOG</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="nav-spaces">
          <img
            className="login-spaces"
            src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
          />
        </div>
        <div className="right-margin">
          <img
            className="lang-spaces"
            src="https://i.ibb.co/jG2mkVJ/Language-icon.png"
          />
        </div>
      </Navbar>
    </div>
  );
};
