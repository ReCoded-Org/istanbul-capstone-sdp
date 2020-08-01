import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../actions/authActions";
import "./index.css";

const SignedInLinks = (props) => {
  const { auth } = props;
  return (
    <div className="link">
      <Link to={"/" + auth.uid + "/profile"}>Profile</Link>
      {" || "}
      <Link to="/" onClick={props.signOut}>
        Sign Out
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);