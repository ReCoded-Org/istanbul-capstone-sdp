import React, { useState } from "react";
import { Container, Col, Form, Button, Nav } from "react-bootstrap";

const ContactUs = () => {
  const initContactFormState = {
    name: "",
    surName: "",
    email: "",
    message: "",
  };
  const [form, setform] = useState(initContactFormState);
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO (basil-kawak) : connect this to contact us
    alert(`you have submited youe message ${form}`);
    setform(initContactFormState);
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
          <h3>CONTACT US</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <span className="redStar">*</span> Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => setform({ ...form, name: e.target.value })}
                  value={form.name}
                  type="text"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  <span className="redStar">*</span> Surname
                </Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setform({ ...form, surName: e.target.value })
                  }
                  value={form.surName}
                  type="text"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <span className="redStar">*</span> Email
              </Form.Label>
              <Form.Control
                onChange={(e) => setform({ ...form, email: e.target.value })}
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
                onChange={(e) => setform({ ...form, message: e.target.value })}
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
