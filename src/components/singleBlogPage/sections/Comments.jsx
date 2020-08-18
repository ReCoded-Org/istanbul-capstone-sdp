import React, { useState } from "react";
import "../index.css";
import { Row, Col, Container, Button } from "react-bootstrap";

export const Comments = (props) => {
  const { blog, auth, profile } = props;

  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentData = {
      userId: auth.uid,
      date: new Date().toLocaleString(),
      dispayName: profile.fullName || "",
      comment,
    }
    props.addComment(blog.blogId, commentData);
    setComment("");
  };

  let allComments = [];
  if (blog.comments.length > 0) {
    allComments = blog.comments.map((item) => {

    const profilePhoto = profile.imageURL || "https://i.ibb.co/k0NNyLV/User-profile-image.png";

      return (
        <div>
          <img
            className="visitorImage"
            src={profilePhoto}
            alt="Visitor profile"
          />
          <div className="displayedComment">
            <p className="visitorName">
              <p>{item.dispayName}</p>
              <p className="visitorComment">{item.comment}</p>
            </p>
          </div>
        </div>
      );
    });

  }

  return (
    <Container className="w-100">
      <Row>
        <Col xs={10} md={10} lg={10} className="commentSection">
          <p className="commentsTitle">Comments</p>

          <section className="">{allComments}</section>

          <form className="replyFields" onSubmit={handleSubmit}>
            <h5>Leave a comment</h5>
            <h6>
              Only users can post a comment
            </h6>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Write your comment"
              cols="80"
              rows="2"
              className="col-lg-12 col-md-10 col-sm-10 infoFields"
            ></textarea>
            <Button className="w-25 commentButton" type="submit" disabled={!auth || profile.isBlocked}>
              Post
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

