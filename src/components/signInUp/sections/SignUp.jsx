import React from "react";
import "./index.css";
import EmailPasswordSignUp from "../../../containers/auth/EmailPasswordSignUp";
import FacebookAuth from "../../../containers/auth/FacebookAuth";
import GoogleAuth from "../../../containers/auth/GoogleAuth";


const SignUp = (props) => {
    return (
        <div className="signUp">
            <h2>This is the SignUp component</h2>
            <EmailPasswordSignUp />
            <FacebookAuth />
            <GoogleAuth />
            <h5 onClick={props.handleLoggingSwitch}>If you have an account, you can SignIn</h5>

        </div>
    );
    

}


export default SignUp;