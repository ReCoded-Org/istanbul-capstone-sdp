import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AboutParagraph from "./sections/AboutPageParags";
import WhoAreWe from "./sections/WhoAreWe";
import PeopleDisplay from "./sections/PeopleDisplay";
import aboutHeader from "./sections/images/About-us-header-3.png";
import Footer from "../common/Footer";

function About() {
  return (
    <>
      <img width="100%" src={aboutHeader} alt="" />
      <Container style={{ marginTop: "10rem" }}>
        <WhoAreWe />
        <AboutParagraph />
        <PeopleDisplay />
      </Container>
      <Footer />
    </>
  );
}

export default About;
