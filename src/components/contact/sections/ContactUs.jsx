import React, { useState } from "react";
import { Container, Col, Form, Button, Nav } from "react-bootstrap";

const ContactUs = () => {
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
    alert(`you have submited youe message ${form}`);
    setForm(initContactFormState);
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
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  value={form.firstName}
                  type="text"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  value={form.lastName}
                  type="text"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <span className="redStar">*</span> Email
              </Form.Label>
              <Form.Control
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                type="email"
                required
              />
              <Form.Text className="text-muted">
                <span className="redStar">*</span> Indicates Required Fields
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                value={form.message}
                placeholder="Write to us"
                required
              />
              <Form.Text className="text-muted">
                Your privacy is protected
              </Form.Text>
            </Form.Group>

            <Button className="float-right" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
