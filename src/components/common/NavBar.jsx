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
    <div className="three">
      <Navbar className="navBar">
        <Link to="/">
          <Image
            width="50"
            className="humButton"
            src="https://i.ibb.co/0tZpqgT/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724c3cb0f7-1188475115301637882486.png"
            alt=""
            onClick={() => handleHumburger()}
          />

          <Navbar.Brand>
            <img
              className="suljakLogo"
              src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
              alt="Suljak Logo"
            />
          </Navbar.Brand>

          {/* <Navbar.Brand>
            <img
              className="suljakBigLogo"
              src="https://i.ibb.co/bgTdQ3G/logo-responsive.png"
              alt="Suljak Logo"
            />
  </Navbar.Brand> */}
        </Link>

        <Nav
          className="collapse navbar-collapse justify-content-end navbarItems"
          style={{ left: navItemsPosition }}
        >
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
