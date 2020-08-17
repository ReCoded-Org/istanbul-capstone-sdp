import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { useTranslation } from "react-i18next";
import Questions from "./sections/Questions";

import assessmentHeader from "../../images/Contact-us-header.png";
import Footer from "../../components/common/Footer";

export default function PsychoAssess() {
  const { t } = useTranslation();

  return (
    <>
      <img src={assessmentHeader} width="100%" alt="" />
      <Container style={{ marginTop: "5rem" }}>
        <h1 className="assesmentTitle">{t("assessment.title")}</h1>
        <Questions />
      </Container>
      <Footer />
    </>
  );
}
