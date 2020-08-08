import React from "react";
import "../index.css";
import { Row, Col, Container, Button } from "react-bootstrap";

export const Comments = () => {

  // const [comment, setComment] =
  // useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  

  return (
    <Container className="w-100">
      <Row>
        <Col xs={10} md={10} lg={10} className="commentsSection">
          <p className="commentsTitle">Comments</p>

          <section className="visitorsComments">
            <img
              src="https://i.ibb.co/k0NNyLV/User-profile-image.png"
              alt="Visitor profile image"
            />
            <h6>Ali Ahmed</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>

          <form className="commentsFields">
            <h5>Leave a Reply</h5>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            Comment* <br />
            <textarea
              // onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment"
              cols="80"
              rows="8"
              className="col-lg-12 col-md-10 col-sm-10 commentsField"
            ></textarea>
            <br />
            Name* <br />
            <input
              type="text"
              id="name"
              name="name"
              className="col-lg-12 col-md-10 col-sm-10 commentsField"
            />
            <br />
            Email* <br />
            <input
              type="email"
              id="email"
              name="email"
              className="col-lg-12 col-md-10 col-sm-10 commentsField"
            />
            <br />
            Website
            <br />
            <input
              type="text"
              id="website"
              name="website"
              className="col-lg-12 col-md-10 col-sm-10 commentsField"
            />
            <br />
            <Button className="commentButton">Post Comment</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
