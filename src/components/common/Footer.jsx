import React, { useState } from "react";
import "./index.css";
import { Form, Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO (basil-kawak): connect this to newsletter.
    alert(`you've submitted your Email wich is: ${email}`);
  };
  return (
    <div className="footer">
      <Container>
        <div className="justify-content-center">
          <h3>SUBSCRIBE TO STAY UP TO DATE</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="formControl"
                  placeholder="Your email address"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <Row>
          <Col md={6} sm={6}>
            <p>
              (+90) 533-382-094 <br />
              suljak@suljak.com <br />
              43 Foundry Avenue, Basaksehir,
              <br /> Istotc, Istanbul, Turkey. <br />
              © 2020 Suljak Suicide Prevention Organization <br />
            </p>
          </Col>
          <Col md={3}>
            <h4>Follow Us</h4>
            <Nav className="socialCircle">
              <Link href="#" className="iconLinkedin" title="Linkedin">
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link href="#" className="iconFacebook" title="Facebook">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link href="#" className="iconTwitter" title="Twitter">
                <i className="fa fa-twitter"></i>
              </Link>
            </Nav>
          </Col>
          <Col md={3} sm={6}>
            <Nav className="flex-column">
              <Link href="/">Home</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/about">About</Link>
              <Link href="/assessment">Assessment</Link>
              <Link href="/donation">Donation</Link>
              <Link href="/blogs">Blog</Link>
              <Link href="/login">Login</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
