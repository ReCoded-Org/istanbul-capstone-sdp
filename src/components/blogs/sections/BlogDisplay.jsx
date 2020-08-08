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
            <h4>{t("blogposts." + props.translationKey + ".title")}</h4>
            <p>{t("blogposts." + props.translationKey + ".desc")}</p>
          </Col>
        </Row>
      </Col>
    </>
  );
}
