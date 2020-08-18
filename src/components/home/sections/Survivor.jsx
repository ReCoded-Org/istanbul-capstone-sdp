import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Survivor = () => {
  const { t } = useTranslation();
  return (
    <Container className="w-75">
      <Row>
        <Col xs={9} sm={9} md={9} lg={9} className="survivorSection">
          <img
            className="survivorOne"
            src="https://i.ibb.co/yP30TyJ/Survivor-1.png"
            alt="Survivor 1"
          />
          <img
            className="survivorTwo"
            src="https://i.ibb.co/1rFyYVS/Survivor-2.png"
            alt="Survivor 2"
          />
          <img
            className="survivorThree"
            src="https://i.ibb.co/vV9LhBw/Survivor-3.png"
            alt="Survivor 3"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Survivor;
