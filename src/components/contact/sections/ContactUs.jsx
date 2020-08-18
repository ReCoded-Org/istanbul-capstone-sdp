import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Col, Form, Button, Nav } from "react-bootstrap";

const ContactUs = () => {
  const { t } = useTranslation();

  const initContactFormState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initContactFormState);
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO (basil-kawak) : connect this to contact us
    alert(`${t("contact.alertMessage")} ${form}`);
    setForm(initContactFormState);
  };
  return (
    <Container>
      <div className="contactCardContainer">
        <div className="followSide">
          <div className="followUs">
            <h2>{t("contact.contactUs.message.0")}</h2>
            <h3>{t("contact.contactUs.message.1")}</h3>
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
          <h3>{t("contact.contactUs.form.title")}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>{t("contact.contactUs.form.nameField")}</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  value={form.firstName}
                  type="text"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  {t("contact.contactUs.form.surnameField")}
                </Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  value={form.lastName}
                  type="text"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <span className="redStar">*</span>
                {t("contact.contactUs.form.emailField")}
              </Form.Label>
              <Form.Control
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                type="email"
                required
              />
              <Form.Text className="text-muted">
                <span className="redStar">*</span>
                {t("contact.contactUs.form.requiredMessage")}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                value={form.message}
                placeholder={t("contact.contactUs.form.callForReachingOut")}
                required
              />
              <Form.Text className="text-muted">
                {t("contact.contactUs.form.privacyMessage")}
              </Form.Text>
            </Form.Group>

            <Button className="float-right" variant="primary" type="submit">
              {t("contact.contactUs.form.submitButton")}
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
