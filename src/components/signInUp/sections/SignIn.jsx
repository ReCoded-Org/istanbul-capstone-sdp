import React from "react";
import "./index.css";
import EmailPasswordSignIn from "../../../containers/auth/EmailPasswordSignIn";
import FacebookAuth from "../../../containers/auth/FacebookAuth";
import GoogleAuth from "../../../containers/auth/GoogleAuth";
import { Row, Col, Container } from "react-bootstrap";



const SignIn = (props) => {
    return (
        <Row className="justify-content-md-center signIn">
            <Col className="d-flex mt-5 mb-5 shadow-lg rounded p-0" lg="6" sm="12">

                <Col lg="7" sm="7" className="leftSection">

                    <h2>LOGIN</h2> 
                    <EmailPasswordSignIn />
                    <h5 onClick={props.handleLoggingSwitch}>or Login using </h5>
                    <Row className="m-2 " >
                        <FacebookAuth />
                        <GoogleAuth />

                    </Row>
                    
                    <h6>Don't have an account?   SIGN UP</h6>

                </Col>
                <Col lg="5" sm="5" className="rightSection">
                    <p>Lorem ipsum</p>
                    
                </Col>

            </Col>
        

        </Row>
    );
    

}


export default SignIn;