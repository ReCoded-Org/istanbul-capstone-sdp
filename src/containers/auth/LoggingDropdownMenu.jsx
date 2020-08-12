import React from "react";
import {
  Container,
  Image,
  Button,
  Dropdown,
  Toggle,
  Menu,
  Item,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import "./index.css";
import { connect } from "react-redux";

const LoggingDropdownMenu = (props) => {
  const [variant, setVariant] = React.useState("primary");
  const { auth, profile } = props;

  const avatar = (
    <Image
      src="https://i.ibb.co/s5Xh2d2/Login-Signup-Icon.png"
      width="40"
      roundedCircle
    />
  );

  const loggingLinks = auth.uid ? (
    <SignedInLinks auth={auth} profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <Dropdown className="langDropdown">
      <Dropdown.Toggle id="dropdown-basic" className="langDropdown">
        {avatar}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>{loggingLinks}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(LoggingDropdownMenu);
