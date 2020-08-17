import React from "react";
// import "./index.css";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import LangDropdown from "./LangDropdown";
import LoggingMenu from "../../containers/auth/LoggingMenu";

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
        <Link to="/">
          <Navbar.Brand>
            <img
              className="suljakLogo"
              src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
              alt="Suljak Logo"
            />
          </Navbar.Brand>
        </Link>

        <Link to="/">
          <div
            className="animatedHumburgerIcon"
            onClick={() => handleHumburger()}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </Link>

        <div></div>

        <Nav
          className="collapse navbar-collapse justify-content-end navbarItems"
          style={{ left: navItemsPosition }}
        >
          <Nav.Item
            className="animatedHumburger"
            onClick={() => handleHumburger()}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
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
            <Link to="/assessment" className="navLink">
              Assessment
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/donation" className="navLink">
              Donate
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins samah">
            <Link to="/blogs" className="navLink">
              Blog
            </Link>
          </Nav.Item>

          <Nav.Item className="navItemsMargins">
            <Link to="/">
              <img
                width="150"
                className="suljakHumburgerLogo"
                src="https://i.ibb.co/bgTdQ3G/logo-responsive.png"
                alt="Suljak Logo"
              />
            </Link>
          </Nav.Item>
        </Nav>

        {/* <div className="">
          <img
            className="loginIcon"
            src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
            alt="Login Icon"
          />
        </div> */}

        <div>
          <LoggingMenu />
        </div>

        <div>
          <LangDropdown />
        </div>
      </Navbar>
    </div>
  );
};
