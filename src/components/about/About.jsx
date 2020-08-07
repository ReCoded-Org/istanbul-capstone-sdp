import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AboutParagraph from "./sections/AboutPageParags";
import WhoAreWe from "./sections/WhoAreWe";
import PeopleDisplay from "./sections/PeopleDisplay";

function About() {
  return (
    <>
      <Container>
        <WhoAreWe />
        <AboutParagraph />
        <PeopleDisplay />
      </Container>
    </>
  );
}

export default About;
