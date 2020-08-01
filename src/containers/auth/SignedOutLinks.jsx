import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SignedOutLinks = () => {
  return (
    <div className="link">
      <Link to="/login">Log In</Link>
      {" || "}
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default SignedOutLinks;
