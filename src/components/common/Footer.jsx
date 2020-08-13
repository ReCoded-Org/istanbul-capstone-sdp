import React, { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { Form, Container, Row, Col, Button, Nav } from "react-bootstrap";

const Footer = () => {
  const { t } = useTranslation();

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
          <h3>{t("footer.0")}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="formControl"
                  placeholder={t("footer.1")}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">{t("footer.2")}</Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <Row>
          <Col md={6} sm={6}>
            <p>
              (+90) 533-382-094 <br />
              suljak@suljak.com <br />
              {t("footer.3")}
              <br /> {t("footer.4")}
              <br />
              {t("footer.5")}
              <br />
            </p>
          </Col>
          <Col md={3}>
            <h4>{t("footer.6")}</h4>
            <Nav className="socialCircle">
              <Nav.Link href="#" className="iconLinkedin" title="Linkedin">
                <i className="fa fa-linkedin"></i>
              </Nav.Link>
              <Nav.Link href="#" className="iconFacebook" title="Facebook">
                <i className="fa fa-facebook"></i>
              </Nav.Link>
              <Nav.Link href="#" className="iconTwitter" title="Twitter">
                <i className="fa fa-twitter"></i>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3} sm={6}>
            <Nav className="flex-column">
              <Nav.Link href="/">{t("footer.7")}</Nav.Link>
              <Nav.Link href="/blogs">{t("footer.8")}</Nav.Link>
              <Nav.Link href="/about">{t("footer.9")}</Nav.Link>
              <Nav.Link href="/contact">{t("footer.10")}</Nav.Link>
              <Nav.Link href="/login">{t("footer.11")}</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
