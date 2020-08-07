import React from "react";
import "./index.css";
import EmailPasswordSignIn from "../../../containers/auth/EmailPasswordSignIn";
import FacebookAuth from "../../../containers/auth/FacebookAuth";
import GoogleAuth from "../../../containers/auth/GoogleAuth";


const SignIn = (props) => {
    return (
        <div className="signIn">
            <div className="leftSection">
                
            </div>
            <div className="rightSection">
                <h2>This is the SignIn component</h2> 
                <EmailPasswordSignIn />
                <FacebookAuth />
                <GoogleAuth />
                <h5 onClick={props.handleLoggingSwitch}>If you don't have an account, you can SignUp</h5>
            </div>
        

        </div>
    );
    

}


export default SignIn;