import React, { useState } from "react";
import { Container, Col, Form, Button, Nav } from "react-bootstrap";
import emailjs from "emailjs-com";
const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_Uz0KFyDM",
        e.target,
        "user_31hCfU5FLOydTyY8iOnWx"
      )
      .then((result) => {
        alert("Thank you, Your messeage have been sent");
        document.forms["contactForm"].reset();
      });
  };

  return (
    <Container>
      <div className="contactCardContainer">
        <div className="followSide">
          <div className="followUs">
            <h2>Follow Us</h2>
            <h3>on social media</h3>
            <Col>
              <Nav className="socialCircle d-inline-flex p-2" md={3}>
                <Nav.Link href="#" className="iconLinkedin" title="Linkedin">
                  <i className="fa fa-linkedin"></i>
                </Nav.Link>
                <Nav.Link href="#" className="iconFacebook" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </Nav.Link>
                <Nav.Link href="#" className="iconTwitter" title="Facebook">
                  <i className="fa fa-twitter"></i>
                </Nav.Link>
              </Nav>
            </Col>
          </div>
        </div>
        <div className="formSide">
          <h3>Contact Us</h3>
          <Form name="contactForm" onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="user_name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <span className="redStar">*</span> Email
              </Form.Label>
              <Form.Control type="email" required name="user_email" />
              <Form.Text className="text-muted">
                <span className="redStar">*</span> Indicates Required Fields
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Write to us"
                required
                name="message"
              />
              <Form.Text className="text-muted">
                Your privacy is protected
              </Form.Text>
            </Form.Group>

            <Button
              className="float-right"
              variant="primary"
              type="submit"
              value="Send"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
