import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import "../index.css";

export default function BlogDisplay(props) {
  const { t } = useTranslation();
  return (
    <>
      <Col className="oneLineBlogpost ">
        <Row>
          <Col xs={12} md={6} className="blogPhotoContainer">
            <img
              className="blogPic"
              src={props.photo}
              alt="Blog Post Content"
            />
            <br />
          </Col>
          <Col xs={12} md={6} className="blogPhotoTextContent">
            <h4>{t("blogPosts." + props.translationKey + ".title")}</h4>
            <p>{t("blogPosts." + props.translationKey + ".excerpt")}</p>
          </Col>
        </Row>
      </Col>
    </>
  );
}
