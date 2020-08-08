import React from "react";
import "../index.css";
import { Row, Col, Container } from "react-bootstrap";

export const BlogHeader = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <img
            className="articleHeader"
            src={"https://i.ibb.co/2nDfNzp/Struggling-image.png"}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};
