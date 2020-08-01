import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

const EmailPasswordAuth = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // Sign in to an existing account with "Email & Password" method
  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn({ email, password });
  };
  // Redirect to home page after it's logged in
  const { auth, authError, errMessage, errKey } = props;
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <h3>Enter your email and password to log in</h3>
      <Form>
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
              }}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log In
        </Button>
        <Container>
          {/* Show error message when fails to sign in */}
          {authError && errKey === "login" ? (
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
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailPasswordAuth);
