import React from "react";
import { connect } from "react-redux";
import "./AccountSettingsSections.css";
import {
  updatePasswordAndEmail,
  resetPassword,
} from "../../../../../actions/authActions";
import { Form, Container, Button, Col, Modal } from "react-bootstrap";

const UpdatePassword = (props) => {
  const { auth, authError, errMessage, errKey } = props;
  const operations = [
    ["Updating your password", "Your password has been updated successfully"],
    [
      "Recovering your password",
      "A reset password email has been sent successfully, you can check your mailbox to set a new password",
    ],
  ];

  const [newPassword, setNewPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const [confirmModalShow, setConfirmModalShow] = React.useState(false);
  const [successModalShow, setSuccessModalShow] = React.useState(false);
  const [successKeys, setSuccessKeys] = React.useState("");
  const [doesPasswordMatch, setDoesPasswordMatch] = React.useState(true);
  const [doesPasswordValid, setDoesPasswordValid] = React.useState(true);

  const handleUdpatePassword = (password) => {
    const data = {
      currentEmail: auth.email,
      currentPassword: password,
      newPassword,
      userID: auth.uid,
      key: "updatePassword",
    };
    if (newPassword === passwordRepeat && newPassword.length > 5) {
      setDoesPasswordMatch(true);
      setDoesPasswordValid(true);
      props.updatePasswordAndEmail(data);
    } else {
      if (newPassword !== passwordRepeat) {
        setDoesPasswordMatch(false);
      }
      if (newPassword.length < 6) {
        setDoesPasswordValid(false);
      }
    }
  };

  const ConfirmModal = (props) => {
    const [currentPassword, setCurrentPassword] = React.useState("");
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Updating your password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Enter your current password to confirm</h6>
          <Form.Control
            type="password"
            placeholder="Password"
            onInput={(e) => {
              setCurrentPassword(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onHide();
              handleUdpatePassword(currentPassword);
              setSuccessKeys({
                operation: operations[0][0],
                msg: operations[0][1],
              });
              setSuccessModalShow(true);
            }}
          >
            Update Password
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const SuccessModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {successKeys.operation}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{successKeys.msg}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="updatePassword">
      <h4 className="title">Change Password</h4>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onInput={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-type password"
              onInput={(e) => {
                setPasswordRepeat(e.target.value);
                setDoesPasswordMatch(true);
                setDoesPasswordValid(true);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {!doesPasswordMatch && (
            <div className="passwordMatch">Your passwords must match</div>
          )}
        </Form.Row>
        <Form.Row>
          {!doesPasswordValid && (
            <div className="passwordValid">
              Your password must be at least 6 characters
            </div>
          )}
        </Form.Row>
        <Container>
          {/* Show error message when fails to sign up */}
          {authError && errKey === "updatePassword" && (
            <div className="errMsgContainer">
              <b>{authError}</b>
              <div className="errMsg">{errMessage}</div>
            </div>
          )}
        </Container>
      </Form>
      <div className="resetPassword">
        <p>
          Forgot your password?{" "}
          <b
            onClick={() => {
              props.resetPassword(auth.email);
              setSuccessKeys({
                operation: operations[1][0],
                msg: operations[1][1],
              });
              setSuccessModalShow(true);
            }}
          >
            Click here
          </b>{" "}
          to send you a reset password email
        </p>
      </div>

      <Button variant="primary" onClick={() => setConfirmModalShow(true)}>
        Update Password
      </Button>

      <ConfirmModal
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      />

      <SuccessModal
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    errMessage: state.auth.errMessage,
    errKey: state.auth.errKey,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePasswordAndEmail: (data) => dispatch(updatePasswordAndEmail(data)),
    resetPassword: (email) => dispatch(resetPassword(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
