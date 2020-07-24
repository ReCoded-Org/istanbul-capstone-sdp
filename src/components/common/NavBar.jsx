import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">
          <img
            src="https://i.ibb.co/L9GcrMY/LLogo-2.png"
            alt= "Suljak Logo"
            style={{ width: "80%", marginLeft: "50%" }}
          />
        </Navbar.Brand>
        <Nav className="collapse navbar-collapse justify-content-end" style={{marginRight: "15px",}}>
          <Nav.Item style={{marginRight: "15px",}}>
            <Nav.Link href="/Contact">CONTACT US</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginRight: "15px",}}>
            <Nav.Link href="/About">ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginRight: "15px",}}>
            <Nav.Link href="/Assessment">ASSESSMENT</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginRight: "15px",}}>
            <Nav.Link href="/Donation" className="special-color">
              DONATE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Blogs">BLOG</Nav.Link>
          </Nav.Item>
        </Nav>
        <div style={{marginRight: "15px",}}>
          
            <img
              src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
              style={{ width: "60%", marginTop : "-10px", marginLeft: "10px", display: "inline-block",  }}
            />
        </div>  
        <div style={{marginRight: "40px",}}>
            <img
              src="https://i.ibb.co/jG2mkVJ/Language-icon.png"
              style={{ width: "65%", marginTop : "-9px", marginLeft: "10px", display: "inline-block" }}
            />
          
        </div>
      </Navbar>
    </div>
  );
};

// <img src="https://i.ibb.co/k0k2K2K/New-Header-for-Home-Page-2.png" alt="Header" style = {{ width: "100%", textAlign: "center", marginTop: "-32px" }}/>

// <img src="https://i.ibb.co/BZmwbJY/New-Header-for-Home-Page-3.png" alt="Header" style = {{ width: "100%", textAlign: "center", marginTop: "-32px" }}/>
