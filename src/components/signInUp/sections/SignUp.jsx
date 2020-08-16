import React from "react";
import EmailPasswordSignUp from "../../../containers/auth/EmailPasswordSignUp";
import FacebookAuth from "../../../containers/auth/FacebookAuth";
import GoogleAuth from "../../../containers/auth/GoogleAuth";
import { Row, Col } from "react-bootstrap";

const SignUp = (props) => {
  return (
    <Row className="signinUpContainer justify-content-md-center">
      <Col className="d-flex mt-5 mb-5 shadow-lg rounded p-0 " lg="7" sm="12">
        <Col lg="5" sm="5" className="rightSection">
          <p>Need help?</p>
          <h1>
            Welcome <br /> to our <br /> website.
          </h1>
        </Col>
        <Col lg="7" sm="7" className="leftSection">
          <h2>Sign up</h2>
          <EmailPasswordSignUp />
          <Row className="m-2 ">
            <h5>Or SignUp using </h5>
            <FacebookAuth />
            <GoogleAuth />
          </Row>
          <h6>
            Already a member?{" "}
            <span onClick={props.handleLoggingSwitch}>Login</span>
          </h6>
        </Col>
      </Col>
    </Row>
  );
};

export default SignUp;
