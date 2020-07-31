import React from "react";
import facebookIcon from "../../images/facebookIcon.png";
import { connect } from "react-redux";
import { facebookAuth } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
import "./index.css";

const FacebookAuth = (props) => {
  const { authError, errMessage, auth } = props;
  // Redirect to home page after the auth is done and signed in
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <img
        alt="facebook-icon"
        className="auth-icon"
        src={facebookIcon}
        onClick={props.facebookAuth}
      />
      {authError ? (
        <>
          <br />
          <p>
            <b>{authError}</b>
          </p>
          <p>
            <b>Hint: </b>
            {errMessage}
          </p>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    errMessage: state.auth.errMessage,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    facebookAuth: () => dispatch(facebookAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacebookAuth);
