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
  const [doesPasswordMatch, setDoesPasswordMatch] = React.useState(true);
  const { auth, authError, errMessage, errKey } = props;
  // Redirect to home page after it's signed up and logged in
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  // Create a new account with "Email & Password" method
  const handleSubmit = (e) => {
    if (password === passwordRepeat) {
      setDoesPasswordMatch(true);
      props.signUp({
        firstName,
        lastName,
        fullName: firstName + " " + lastName,
        email,
        password,
        imageURL: null,
      });
    } else {
      setDoesPasswordMatch(false);
    }
    e.preventDefault();
  };
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              onInput={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onInput={(e) => {
                setPassword(e.target.value);
                setDoesPasswordMatch(true);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="passwordRepeat">
            <Form.Label>Re-type password:</Form.Label>
            <Form.Control
              type="password"
              onInput={(e) => {
                setPasswordRepeat(e.target.value);
                setDoesPasswordMatch(true);
              }}
            />
          </Form.Group>
          {!doesPasswordMatch && (
            <div className="passwordMatch">Your passwords must match</div>
          )}
        </Form.Row>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Container>
          {/* Show error message when fails to sign up */}
          {authError && errKey === "signup" && (
            <div className="errMsgContainer">
              <b>{authError}</b>
              <div className="errMsg">{errMessage}</div>
            </div>
          )}
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
    auth: state.firebase.auth,
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
