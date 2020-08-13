import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const BlogHeader = (props) => {
  const { blogTest } = props;

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <img className="articleHeader" src={blogTest.blogHeader} alt="" />
          <img className="authorImage" src={blogTest.authorImage} alt="" />
          <p className="authorTitle">{blogTest.authorName}</p>
        </Col>
      </Row>
    </Container>
  );
};
