import React, { useState } from "react";
import "../index.css";
import { Row, Col, Container, Button } from "react-bootstrap";

export const Comments = (props) => {
  const { comments } = props.blogTest;
  const commentState = {
    comment: "",
    name: "",
    email: "",
    website: "",
  };

  const [form, setForm] = useState(commentState);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`your message have been submitted ${form}`);
    setForm(commentState);
  };

  const allComments = comments.map((item) => {
    return (
      <div className="visitor">
        <img
          className="visitorImage"
          src="https://i.ibb.co/k0NNyLV/User-profile-image.png"
          alt="Visitor profile"
        />
        <div className="displayedComment">
          <p className="visitorName">
            {" "}
            {item.person}{" "}
            <span className="visitorComment"> {item.comment} </span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <Container className="w-100">
      <Row>
        <Col xs={10} md={10} lg={10} className="commentSection">
          <p className="commentsTitle">Comments</p>

          <section className="">{allComments}</section>

          <form className="replyFields" onSubmit={handleSubmit}>
            <h5>Leave a Reply</h5>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            Comment* <br />
            <textarea
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              value={form.comment}
              placeholder="Write your comment"
              cols="80"
              rows="8"
              className="col-lg-12 col-md-12 col-sm-12 infoFields"
              required
            ></textarea>
            <br />
            Name* <br />
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              type="text"
              className="col-lg-12 col-md-12 col-sm-12 infoFields"
              required
            />
            <br />
            Email* <br />
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              type="email"
              className="col-lg-12 col-md-12 col-sm-12 infoFields"
              required
            />
            <br />
            Website
            <br />
            <input
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              value={form.website}
              type="text"
              className="col-lg-12 col-md-12 col-sm-12 infoFields"
            />
            <br />
            <Button className="commentButton" type="submit">
              Post Comment
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
