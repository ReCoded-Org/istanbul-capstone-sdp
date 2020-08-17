import React from "react";
import { Form, Button, Container, Col, Modal, Image } from "react-bootstrap";
import { useState } from "react";
import { addBlog } from "../../actions/blogActions";
import { connect } from "react-redux";
import imageUploadButton from "../../images/profilePhotoButton.png";
import blogHeaderImageTemp from "../../images/profileHeaderBackground.png";
import blogBodyImageTemp from "../../images/profileHeaderBackground.png";
import "./BlogEditor.css";

const BlogEditor = (props) => {
  const { blogError, blogErrKey, blogErrMessage, auth } = props;

  const initContent = {
    userId: auth.uid,
    title: "",
    abstract: "",
    firstParagraph: "",
    subtitle: "",
    secondParagraph: "",
    conclocion: "",
  };

  const [content, setContent] = useState(initContent);
  const [successModalShow, setSuccessModalShow] = React.useState(false);
  const [blogHeaderImage, setBlogHeaderImage] = useState(null);
  const [blogBodyImage, setBlogBodyImage] = useState(null);

  const handleHeaderImageInputChange = (e) => {
    if (e.target.files[0]) {
      setBlogHeaderImage(e.target.files[0]);
    }
  };

  const handleBodyImageInputChange = (e) => {
    if (e.target.files[0]) {
      setBlogBodyImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBlog(blogHeaderImage, blogBodyImage, content);
  };

  const SuccessModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adding a new blog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {blogError && blogErrKey === "addBlog" ? (
            <div className="errMsgContainer">
              <b>{blogError}</b>
              <div className="errMsg">{blogErrMessage}</div>
            </div>
          ) : (
            <p>A new blog has been added successfully</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              props.onHide();
              props.handleSubmit();
            }}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <Image
            src={blogHeaderImageTemp}
            className="w-100"
            height="200"
            alt=""
          />
          <div class="blogHeaderImage">
            <label for="blogHeaderImage">
              <img src={imageUploadButton} alt="Blog Header" />
            </label>
            <input
              id="blogHeaderImage"
              type="file"
              onChange={handleHeaderImageInputChange}
            />
          </div>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) =>
                setContent({ ...content, title: e.target.value })
              }
              value={content.title}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Abstract</Form.Label>
            <Form.Control
              onChange={(e) =>
                setContent({ ...content, abstract: e.target.value })
              }
              value={content.abstract}
              as="textarea"
              rows="5"
            />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>A paragraph besides an image</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setContent({ ...content, firstParagraph: e.target.value })
                }
                value={content.firstParagraph}
                as="textarea"
                rows="6"
              />
            </Col>
            <Col>
              <div className="d-flex justify-content-center border paragraphWithImage">
                <Image
                  src={blogHeaderImageTemp}
                  className="w-100"
                  height="150"
                  alt=""
                />
                <div class="blogHeaderImage">
                  <label for="blogHeaderImage">
                    <img src={imageUploadButton} alt="Blog Header" />
                  </label>
                  <input
                    id="blogHeaderImage"
                    type="file"
                    onChange={handleBodyImageInputChange}
                  />
                </div>
              </div>
            </Col>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-4">
            <Form.Label>Sub Title</Form.Label>
            <Form.Control
              onChange={(e) =>
                setContent({ ...content, subtitle: e.target.value })
              }
              value={content.subtitle}
              type="text"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Last paragraph</Form.Label>
            <Form.Control
              onChange={(e) =>
                setContent({ ...content, secondParagraph: e.target.value })
              }
              value={content.secondParagraph}
              as="textarea"
              rows="5"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Conclusion</Form.Label>
            <Form.Control
              onChange={(e) =>
                setContent({ ...content, conclocion: e.target.value })
              }
              value={content.conclocion}
              as="textarea"
              rows="5"
            />
          </Form.Group>
          <Button
            onClick={() => setSuccessModalShow(true)}
            type="submit"
            variant="primary"
          >
            Submit
          </Button>
        </Form>
        <SuccessModal
          show={successModalShow}
          onHide={() => setSuccessModalShow(false)}
          blogError={blogError}
          blogErrKey={blogErrKey}
          blogErrMessage={blogErrMessage}
          handleSubmit={props.handleSubmit}
        />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    blogError: state.blog.blogError,
    blogErrKey: state.blog.blogErrKey,
    blogErrMessage: state.blog.blogErrMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog: (blogHeaderImage, blogBodyImage, data) =>
      dispatch(addBlog(blogHeaderImage, blogBodyImage, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogEditor);
