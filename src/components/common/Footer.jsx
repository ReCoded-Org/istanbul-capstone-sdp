import React, { useState } from "react";
import "./index.css";
import { Form, Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addNewsletter } from "../../actions/authActions";

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewsletter(email);
    setEmail("");
  };
  return (
    <div className="footer">
      <Container>
        <h3>SUBSCRIBE TO STAY UP TO DATE</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="align-items-center">
            <Col>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="formControl"
                placeholder="Your email address"
                type="email"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Row>
        </Form>
        <Row className="footerInfo">
          <Col md={6} sm={6}>
            <p>
              (+90) 533-382-094 <br />
              suljak@suljak.com <br />
              43 Foundry Avenue, Basaksehir,
              <br /> Istotc, Istanbul, Turkey. <br />
              © 2020 Suljak Suicide Prevention Organization <br />
            </p>
          </Col>
          <Col md={3} sm={6}>
            <h4>Follow Us</h4>
            <Nav className="socialCircle">
              <a
                href="https://5f3a88bbe029db000752d32c--istanbul-capstone-sdp.netlify.app/contact"
                target="_blank"
                className="iconLinkedin"
                title="Linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="iconFacebook"
                title="Facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/home"
                target="_blank"
                className="iconTwitter"
                title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </Nav>
          </Col>
          <Col className="footerNavs" md={3} sm={6}>
            <Nav className="flex-column">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/about">About</Link>
              <Link to="/assessment">Assessment</Link>
              <Link to="/donation">Donation</Link>
              <Link to="/blogs">Blog</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewsletter: (email) => dispatch(addNewsletter(email)),
  };
};

export default connect(null, mapDispatchToProps)(Footer);
