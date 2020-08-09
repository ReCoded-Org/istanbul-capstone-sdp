import React from "react";
import "../index.css";
import { Row, Col, Container } from "react-bootstrap";

export const Recommended = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={10} lg={10} className="recommendedPost">
          <section>
            <img
              className="recommendedImage"
              src="https://i.ibb.co/170vYHW/You-might-also-like-2.jpg"
              alt="recommended post"
            />
            <div className="postInfo">
              <p>Amjad Ali</p>
              <p>&nbsp;.&nbsp;</p>
              <p>Mar 19, 2020</p>
            </div>
            <h4>How To Overcome Your Crises</h4>
          </section>
        </Col>

        <Col xs={10} md={10} lg={10} className="recommendedPost">
          <section>
            <img
              className="recommendedImage"
              src="https://i.ibb.co/nM3Zb3N/You-might-also-like-1.jpg"
              alt="recommended post"
            />
            <div className="postInfo">
              <p>Receb Yaseen</p>
              <p>&nbsp;.&nbsp;</p>
              <p>Jan20, 2020 </p>
            </div>
            <h4>How Far You Enlarge Your Fears</h4>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
