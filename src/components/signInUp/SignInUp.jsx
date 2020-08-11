import React from "react";
import "./index.css";
import SignIn from "./sections/SignIn";
import SignUp from "./sections/SignUp";
import { useState } from "react";
const SignInUp = () => {
  const [logging, setLogging] = useState("signing-in");
  const handleLoggingSwitch = () => {
    if (logging === "signing-in") {
      setLogging("signing-up");
    } else {
      setLogging("signing-in");
    }
  };
  return (
    <div>
      {logging === "signing-in" ? (
        <SignIn handleLoggingSwitch={handleLoggingSwitch} />
      ) : (
        <SignUp handleLoggingSwitch={handleLoggingSwitch} />
      )}
    </div>
  );
};
export default SignInUp;
