import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const BlogHeader = (props) => {
  const { blogTest } = props;

  return (
    <Container className="w-100">
      <Row className="singleBlogTopImages">
        <Col xs={12} md={12} lg={12}>
          <img className="articleHeader" src={blogTest.blogHeader} alt="" />
          <img className="authorImage" src={blogTest.authorImage} alt="" />
          <p>{blogTest.authorName}</p>
        </Col>
      </Row>
    </Container>
  );
};
