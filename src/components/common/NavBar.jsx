import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import LangDropdown from "./LangDropdown";

export const NavBar = () => {
  const [navItemsPosition, setNavItemsPosition] = React.useState("-100%");

  const handleHumburger = () => {
    if (navItemsPosition === "-100%") {
      setNavItemsPosition("0");
    } else {
      setNavItemsPosition("-100%");
    }
  };

  return (
    <div>
      <Navbar className="navBar">
        <div>
          <Nav.Item>
            <Link to="/">
              <img
                className="suljakLogo"
                src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
                alt="Suljak Logo"
              />
            </Link>
          </Nav.Item>
        </div>

        <Nav.Item>
          <Link to="/">
            <img
              onClick={() => handleHumburger()}
              className="humburgerIcon"
              src="https://i.ibb.co/PQgDXbj/LLogo-4.png"
              alt="Humburger Icon"
            />
          </Link>
        </Nav.Item>

        <Nav
          className="collapse navbar-collapse justify-content-end navbarItems"
          style={{ left: navItemsPosition }}
        >
          <Nav.Item className="navItemsMargins">
            <Link to="/" className="navLink">
              Home
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/contact" className="navLink">
              Contact Us
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/about" className="navLink">
              About
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/psycho-assess" className="navLink">
              Assessment
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/donation" className="navLink">
              Donate
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/blogs" className="navLink">
              Blog
            </Link>
          </Nav.Item>
        </Nav>

        <div>
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
