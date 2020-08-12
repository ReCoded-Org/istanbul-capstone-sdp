import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Stories = () => {
  const { t } = useTranslation();
  return (
    <div className="storiesSection">
      <Container>
        <Row className="storiesText">
          <Col xs={10} sm={10} md={6} lg={6} className="storiesTitle">
            <h1>
              STORIES
              <br />
              ABOUT HOPE
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries. <br />
              <span className="rediectLink">Read more >></span>
            </p>
          </Col>
          <Col xs={10} sm={10} md={6} lg={6} className="two">
            <img
              className="halfFullImage"
              src="https://i.ibb.co/xmsJbZt/Stories-Image.png"
              alt="Stories about hope"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Stories;
