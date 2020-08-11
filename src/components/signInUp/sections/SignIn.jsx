import React from "react";
import "./index.css";
import EmailPasswordSignIn from "../../../containers/auth/EmailPasswordSignIn";
import FacebookAuth from "../../../containers/auth/FacebookAuth";
import GoogleAuth from "../../../containers/auth/GoogleAuth";
import { Row, Col } from "react-bootstrap";
const SignIn = (props) => {
  return (
    <Row className="justify-content-md-center signinUpContainer">
      <Col className="d-flex mt-5 mb-5 shadow-lg rounded p-0 " lg="7" sm="12">
        <Col lg="7" sm="7" className="leftSection">
          <h2>login</h2>
          <EmailPasswordSignIn />
          <Row className="m-2 ">
            <h5>Or Login using </h5>
            <FacebookAuth />
            <GoogleAuth />
          </Row>
          <h6>
            Don't have an account?
            <span onClick={props.handleLoggingSwitch}>Sign up</span>
          </h6>
        </Col>
        <Col lg="5" sm="5" className="rightSection">
          <p>need help?</p>
          <h1>
            Welcome
            <br />
            Back.
          </h1>
        </Col>
      </Col>
    </Row>
  );
};
export default SignIn;
