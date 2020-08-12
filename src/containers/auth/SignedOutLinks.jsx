import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SignedOutLinks = () => {
  return (
    <div className="d-flex flex-column link signedOutLinks">
      <Link to="/signInUp">Log In</Link>
      <hr/>
      <Link to="/signInUp">Sign Up</Link>
    </div>
  );
};

export default SignedOutLinks;
