import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

const EmailPasswordSignIn = (props) => {
  const { t } = useTranslation();
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
      <Form>
        <Form.Group as={Col} controlId="email">
          <Form.Label>{t("signInForm.email")}</Form.Label>
          <Form.Control
            type="text"
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="password">
          <Form.Label>{t("signInForm.password")}</Form.Label>
          <Form.Control
            type="password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <a className="forgetPassword" href="#">
          {t("signInForm.forgotPass")}
        </a>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          {t("signInForm.login")}
        </Button>
        <Container>
          {/* Show error message when fails to sign in */}
          {authError && errKey === "login" && (
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
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailPasswordSignIn);
