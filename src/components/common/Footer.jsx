import React, { useState } from "react";
import "./index.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO (basil-kawak): connect this to newsletter.
    alert(`you've submitted your Email wich is: ${email}`);
  };
  return (
    <Container fluid className="footer">
      <Row>
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
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <section classname="ss">
            <p>
              (+90) 533-382-094 <br />
              suljak@suljak.com <br />
              43 Foundry Avenue, Basaksehir,
              <br /> Istotc, Istanbul, Turkey. <br />
              © 2020 Suljak Suicide Prevention Organization <br />
            </p>
          </section>

          <section classname="mm">
            <p>Follow Us</p>
            <div className="rr">
              <img src="https://i.ibb.co/fGPWJ2F/Facebook.png" alt="" />
            </div>
            <div className="rr">
              <img src="https://i.ibb.co/DC46Zrw/Twitter.png" alt="" />
            </div>
            <div className="rr">
              <img src="https://i.ibb.co/3f30h9S/Instgram.png" alt="" />
            </div>
          </section>

          <section classname="gg">
            <Link to="/" classname="yy">
              Home
            </Link>
            <Link to="/" classname="yy">
              Blog
            </Link>
            <Link to="/" classname="yy">
              Contact Us{" "}
            </Link>
            <Link to="/" classname="yy">
              About Us
            </Link>
            <Link to="/" classname="yy">
              Login
            </Link>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;

// <div className="justify-content-center">
//           <h3>SUBSCRIBE TO STAY UP TO DATE</h3>
//           <Form onSubmit={handleSubmit}>
//             <Form.Row className="align-items-center">
//               <Col>
//                 <Form.Control
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   className="formControl"
//                   placeholder="Your email address"
//                 />
//               </Col>
//               <Col xs="auto">
//                 <Button type="submit">Submit</Button>
//               </Col>
//
//           </Form>
//         </div>
//         <Row>
//           <Col md={6} sm={6}>
//             <p>
//               (+90) 533-382-094 <br />
//               suljak@suljak.com <br />
//               43 Foundry Avenue, Basaksehir,
//               <br /> Istotc, Istanbul, Turkey. <br />
//               © 2020 Suljak Suicide Prevention Organization <br />
//             </p>
//           </Col>
//           <Col md={3}>
//             <h4>Follow Us</h4>
//             <Nav className="socialCircle">
//               <Nav.Link href="#" className="iconLinkedin" title="Linkedin">
//                 <i className="fa fa-linkedin"></i>
//               </Nav.Link>
//               <Nav.Link href="#" className="iconFacebook" title="Facebook">
//                 <i className="fa fa-facebook"></i>
//               </Nav.Link>
//               <Nav.Link href="#" className="iconTwitter" title="Twitter">
//                 <i className="fa fa-twitter"></i>
//               </Nav.Link>
//             </Nav>
//           </Col>
//           <Col md={3} sm={6}>
//             <Nav className="flex-column">
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/blog">Blog</Nav.Link>
//               <Nav.Link href="/about">About</Nav.Link>
//               <Nav.Link href="/contact">Contact Us</Nav.Link>
//               <Nav.Link href="/login">Login</Nav.Link>
//             </Nav>
//           </Col>
//         </Row>
