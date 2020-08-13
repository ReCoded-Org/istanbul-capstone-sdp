import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LangDropdown from "./LangDropdown";

export const NavBar = () => {
  const { t } = useTranslation();

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
            <Link to="/contact" className="navLink">
              {t("navbar.0")}
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/about" className="navLink">
              {t("navbar.1")}
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/psycho-assess" className="navLink">
              {t("navbar.2")}
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/donation" className="navLink">
              {t("navbar.3")}
            </Link>
          </Nav.Item>

          <Nav.Item className="navSpaces">
            <Link to="/blogs" className="navLink">
              {t("navbar.4")}
            </Link>
          </Nav.Item>
        </Nav>
        <Link to="/signInUp">
          <div className="navSpaces">
            <img
              className="loginSpaces"
              src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
              alt="Login Icon"
            />
          </div>
        </Link>
        <>
          <LangDropdown />
        </>
      </Navbar>
    </>
  );
};
