import React, { useState } from "react";
import "./index.css";
import { Form, Container, Row, Col, Button, Nav } from "react-bootstrap";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  placeholder="Enter Your Email Address"
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
              <Nav.Link href="#" className="icoLinkedin" title="Linkedin">
                <i className="fa fa-linkedin"></i>
              </Nav.Link>
              <Nav.Link href="#" className="icoFacebook" title="Facebook">
                <i className="fa fa-facebook"></i>
              </Nav.Link>
              <Nav.Link href="#" className="icoTwiter" title="Facebook">
                <i className="fa fa-twitter"></i>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3} sm={6}>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
