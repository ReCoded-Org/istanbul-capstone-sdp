import React from "react";
import "./index.css";
import SignIn from "./sections/SignIn";
import SignUp from "./sections/SignUp";


const SignInUp = () => {
    const [loggingSwitch, setLoggingSwitch] = React.useState("log-in");
    const handleLoggingSwitch = () => {
      if (loggingSwitch === "log-in") {
        setLoggingSwitch("sign-up");
      } else {
        setLoggingSwitch("log-in");
      }
    }
    return (
        <div className="signInUp">
          {
            loggingSwitch === "log-in"
            ?
            <SignIn handleLoggingSwitch={handleLoggingSwitch} />
            :
            <SignUp handleLoggingSwitch={handleLoggingSwitch} />
          }
        </div>
    );
}
export default SignInUp;