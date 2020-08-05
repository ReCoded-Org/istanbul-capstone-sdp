import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import { Container } from "react-bootstrap";
import AboutParagraph from "./sections/AboutPageParags";
import WhoAreWe from "./sections/WhoAreWe";
import PeopleDisplay from "./sections/PeopleDisplay";

function About() {
  const { t, i18n } = useTranslation();
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
