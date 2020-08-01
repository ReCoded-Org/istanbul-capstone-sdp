import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";

const EmailPasswordSignUp = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const [passwordMatch, setPasswordMatch] = React.useState(true);
  const { auth, authError, errMessage, errKey } = props;
  // Redirect to home page after it's signed up and logged in
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  // Create a new account with "Email & Password" method
  const handleSubmit = (e) => {
    if (password === passwordRepeat) {
      setPasswordMatch(true);
      props.signUp({
        firstName,
        lastName,
        fullName: firstName + " " + lastName,
        email,
        password,
        imageURL: null,
      });
    } else {
      setPasswordMatch(false);
    }
    e.preventDefault();
  };
  return (
    <Container>
      <h3>Creating a new account</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="fisrtName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              onInput={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              placeholder="example@gmail.com"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onInput={(e) => {
                setPassword(e.target.value);
                setPasswordMatch(true);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="passwordRepeat">
            <Form.Label>Re-type password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-type password"
              onInput={(e) => {
                setPasswordRepeat(e.target.value);
                setPasswordMatch(true);
              }}
            />
          </Form.Group>
          {!passwordMatch && (
            <p>
              <b>Hint: </b>Those passwords don't match. Try again
            </p>
          )}
        </Form.Row>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Container>
          {authError && errKey ? (
            <>
              <br />
              <p>
                <b>{authError}</b>
              </p>
              <p>
                <b>Hint: </b>
                {errMessage}
              </p>
            </>
          ) : null}
        </Container>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    errMessage: state.auth.errMessage,
    errKey: state.auth.errKey,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newProfile) => dispatch(signUp(newProfile)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailPasswordSignUp);
