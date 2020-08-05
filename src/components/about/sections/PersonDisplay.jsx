import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap";
import "../index.css";
// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function PersonDisplay(props) {
  const { t, i18n } = useTranslation();
  let photo;
  // manual picture setting
  switch (props.name) {
    case "nasser":
      photo = require("././images/staff0.png");
      break;
    case "jawdat":
      photo = require("././images/staff1.png");
      break;
    case "turgut":
      photo = require("././images/staff2.png");
      break;
    default:
      break;
  }

  return (
    <Col xs={12} md={6} lg={4} className="staffPhotoContainer">
      <img className="staffPic" src={photo} />
      <br />
      <span>{t(props.name + ".name")}</span>
      <br />
      <span>{t(props.name + ".title")}</span>
    </Col>
  );
}
