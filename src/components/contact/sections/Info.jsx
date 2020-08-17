import React from "react";
import { Container, Col, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Col className="infoSection">
        <Nav.Link href="#">{t("contact.info.0")}</Nav.Link>
        <p>
          (+90) 533-382-094 <br />
          suljak@suljak.com <br />
          {t("contact.info.1")}
        </p>
      </Col>
      <Col className="infoSection">
        <Nav.Link href="#">{t("contact.info.2")}</Nav.Link>
        <p>
          {t("contact.info.3")} <br />
          {t("contact.info.4")}
          <br />
          {t("contact.info.5")} <br />
          {t("contact.info.6")}
        </p>
      </Col>
    </Container>
  );
};

export default Info;
