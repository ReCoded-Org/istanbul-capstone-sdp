import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SignedOutLinks = () => {
  return (
    <div className="link">
      <Link to="/log-in">Sign In</Link>
      {" || "}
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};

export default SignedOutLinks;
