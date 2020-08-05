import React, { Fragment } from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AboutParagraph from "./sections/AboutPageParags";
import WhoAreWe from "./sections/WhoAreWe";
import PeopleDisplay from "./sections/PeopleDisplay";

function About() {
  return (
    <Fragment>
      <Container>
        <WhoAreWe />
        <AboutParagraph />
        <PeopleDisplay />
      </Container>
    </Fragment>
  );
}

export default About;
