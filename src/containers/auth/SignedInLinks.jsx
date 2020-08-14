import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { signOut } from "../../actions/authActions";
import "./index.css";

const SignedInLinks = (props) => {
  const { t } = useTranslation();
  const { auth } = props;
  return (
    <div className="d-flex flex-column link signedInLinks">
      <Link to={"/" + auth.uid + "/profile"}>Profile</Link>
      <hr />
      <Link to="/" onClick={props.signOut}>
        {t("signedIn.1")}
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
