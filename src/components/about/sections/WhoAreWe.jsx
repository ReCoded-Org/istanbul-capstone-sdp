import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";

export default function WhoAreWe() {
  const { t, i18n } = useTranslation();

  return (
    <Row>
      <h1 className="whoAreWe">{t("whoAreWe.header")}</h1>
    </Row>
  );
}
