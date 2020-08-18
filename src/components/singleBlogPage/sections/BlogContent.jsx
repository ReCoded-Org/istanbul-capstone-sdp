import React from "react";
import "../index.css";
import { Row, Col, Container } from "react-bootstrap";

export const BlogContent = (props) => {
  const { blogTest } = props;

  return (
    <div>
      <Container className="w-100">
        <Row>
          <Col xs={10} md={10} lg={10} xl={10} className="article">
            <h1>{blogTest.blogTitle}</h1>
            <p className="publishingDate">
              Last updated on {blogTest.publishingDate}
            </p>
            <article>
              {blogTest.blogContent1}
              <img
                className="articleWrappedImage"
                src={blogTest.wrappedImage}
                alt=""
              />
              <div className="clearFloat"></div>
            </article>

            <article>{blogTest.blogContent2}</article>
            <br />

            <article>
              <h3>{blogTest.subTitle}</h3>
              {blogTest.blogContent3}
            </article>
            <br />

            <article>{blogTest.blogContent4}</article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
