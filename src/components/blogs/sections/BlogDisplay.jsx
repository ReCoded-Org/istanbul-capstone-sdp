import React, { useState, useEffect, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import "../index.css";
// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function BlogDisplay(props) {
  const { t, i18n } = useTranslation();
  let photo;
  //manual picture setting
  switch (props.name) {
    case "gunsu":
      photo = require("././images/a.png");
      break;
    case "samah":
      photo = require("././images/a.png");
      break;
    case "basil":
      photo = require("././images/a.png");
      break;
    default:
        photo = require("././images/a.png");
      break;
  }

  return (
    <Fragment className="blogDisplayContainer">
      <Col xs={12} md={6} className="blogPhotoContainer">
        <img className="blogPic" src={photo} />
        <br />
      </Col>
      <Col xs={12} md={6} className="blogPhotoTextContent">
        <h4>{t(props.name + ".title")}dsafsgbfa</h4>
        <p>{t(props.name + ".desc")}asfddgsafhegnshsa</p>
      </Col>
    </Fragment>
  );
}
