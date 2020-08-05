import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import { Row } from "react-bootstrap";

export default function Paragraph() {
  const { t, i18n } = useTranslation();

  return (
    <Row>
      <div className="aboutParagraphs">
        <p>
          <big>
            <b>{t("aboutPart.0")}</b>
          </big>{" "}
          {t("aboutPart.1")}
        </p>
        <p>{t("aboutPart.2")}</p>
        <p>{t("aboutPart.3")}</p>
      </div>
    </Row>
  );
}
